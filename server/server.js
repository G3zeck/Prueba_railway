const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

require('dotenv').config()

const {MercadoPagoConfig, Preference } = require('mercadopago')

//  const MYSQLHOST = require('../src/db.js');
//  const MYSQLPASSWORD = require('../src/db.js');
//  const MYSQLPORT = require('../src/db.js');
//  const MYSQLUSER = require('../src/db.js');
//  const MYSQL_DATABASE = require('../src/db.js');

 const accountSid = 'AC22f450d671da16549af8d965a403380f';
const authToken = '6249685c181db2de16c6872c77f2c41f';
const client = require('twilio')(accountSid, authToken);


app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONT_END,

    })
);

const db = mysql.createConnection({
    host: `${process.env.MYSQLHOST}`,
    user: `${process.env.MYSQLUSER}`,
    password:`${process.env.MYSQLPASSWORD}`,
    database:`${process.env.MYSQL_DATABASE}`,
    port:`${process.env.MYSQLPORT}`
    
});

db.connect(function (err){
    if(err) {throw err;
    }else{
        console.log('connection accepted')
    }
})
app.get('/cars',  (req, res) => {

    const { fecha, fecha2 } = req.query;

    db.query(`SELECT cars.id, cars.name
    FROM cars
    WHERE NOT EXISTS (
        SELECT *
        FROM availability
        WHERE cars.id = availability.car_id
        AND (availability.start_date <= ? AND availability.end_date >= ?)
    )`, [fecha2, fecha] ,(err,result) =>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            
        }
    }
    )
  
})
app.get('/price', (req, res) =>{
    db.query("SELECT * FROM cars", (err,result) =>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send(result)
            
        }
    })
})

app.get('/mostrarTabla', (req, res) =>{
    db.query(`SELECT * FROM reserva`,
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                
                res.send(result)
            }
        }
    );
})



app.post("/reserva", (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const documento = req.body.documento;
    const mail = req.body.mail;
    const licencia = req.body.licencia;
    const telefono = req.body.telefono;
    const pais = req.body.pais;
    const ciudad = req.body.ciudad;
    const lugarEntrega = req.body.lugarEntrega;
    const lugarDevolucion = req.body.lugarDevolucion;
    const direccion = req.body.direccion
    const cuil = req.body.cuil
    const provincia = req.body.provincia
    const tipoFactura = req.body.tipoFactura
    const car_id = req.body.modeloAuto;
    const model = req.body.model
    const fecha = req.body.fecha;
    const fecha2 = req.body.fecha2;

    db.query(
        `INSERT INTO reserva (nombre, apellido,cuil,provincia,tipoFactura, documento, model_id, mail, licencia, telefono, pais, ciudad, lugar_entrega, lugar_devolucion, direccion) VALUES ('${nombre}','${apellido}','${cuil}','${provincia}','${tipoFactura}','${documento}','${model}','${mail}','${licencia}','${telefono}','${pais}','${ciudad}','${lugarEntrega}','${lugarDevolucion}','${direccion}')`,
        [nombre, apellido,cuil,provincia,tipoFactura, documento, model, mail, licencia, telefono, ciudad, pais, lugarEntrega, lugarDevolucion],
        (err, result) => {
            if (err) {
                db.rollback(() => {
                    console.log(err);
                    res.status(500).send("Error al cargar la reserva");
                });
            } else {
                db.query(
                    `INSERT INTO availability (car_id, start_date, end_date) VALUES ('${car_id}','${fecha}','${fecha2}')`,
                    [car_id, fecha, fecha2],
                    (err, result) => {
                        if (err) {
                            db.rollback(() => {
                                console.log(err);
                                res.status(500).send("Error al actualizar la disponibilidad");
                            });
                        } else {
                            // Envío de mensaje de Twilio (WhatsApp)
                            
                            client.messages
                                .create({
                                    from: 'whatsapp:+14155238886', // Número de Twilio registrado para WhatsApp
                                    to: 'whatsapp:+5492994603247',   // Número de WhatsApp del equipo de ventas
                                    body: `Se ha realizado una reserva a nombre de ${nombre} con entrega en ${lugarEntrega} y devolucion en ${lugarDevolucion}.Los datos de la reserva son los siguentes:
                                     Nombre: ${nombre} 
                                     Apellido: ${apellido} 
                                     Documento: ${documento} 
                                     Mail: ${mail}
                                     Licencia: ${licencia}
                                     Telefono: ${telefono}
                                     Pais: ${pais}
                                     Ciudad: ${ciudad}
                                     Lugar de entrega: ${lugarEntrega}
                                     Lugar de devolucion: ${lugarDevolucion}
                                     Direccion: ${direccion},
                                     Desde el dia: ${fecha},
                                     hasta el dia: ${fecha2},
                                     y el auto es un: ${model}`

                                })
                                .then(() => {
                                    db.commit((err) => {
                                        if (err) {
                                            db.rollback(() => {
                                                console.log(err);
                                                res.status(500).send("Error al confirmar la transacción");
                                            });
                                        } else {
                                            res.send("Reserva cargada con éxito, disponibilidad actualizada y mensaje enviado");
                                        }
                                    });
                                })
                                .catch((error) => {
                                    db.rollback(() => {
                                        console.log(error);
                                        res.status(500).send("Error al enviar el mensaje de Twilio");
                                    });
                                });
                        }
                    }
                );
            }
        }
    );
});

app.post("/create-order", async (req, res) => {
    try {
        const valorPago = req.body.valorPago;
        const nombreAuto = "Cronos"; // Corregí el nombre de la variable
        const accessToken = 'TEST-8358466522475521-011709-f8eea92e02ae21802d75d650b635758e-1641044125';

        const client = new MercadoPagoConfig({ accessToken });
        const preference = new Preference(client);

        const result = await preference.create({
            body: {
                items: [
                    {
                        id: 1,
                        title: 'Mi producto',
                        quantity: 1,
                        unit_price: valorPago * 0.10
                    }
                ],
                back_urls: {
                    success: process.env.FRONT_END +'/success',
                    failure: process.env.FRONT_END +'/failure',
                    pending: process.env.FRONT_END +'/pending'
                },
                auto_return: 'approved',
                
               
                

            }
        });

        res.send(result.init_point);
    } catch (error) {
        console.error("Error al crear la preferencia de pago:", error);
        res.status(500).send("Error al procesar la solicitud"); // Manejo de error genérico
    }
});




app.listen(1234, () =>{
    console.log('server is running')
})