"use client"
import styles from './checkout.module.css'
import React, { useContext, useEffect } from 'react'
import { BliztContext } from '@/Context/Context'
const page = () => {
    /* eslint-disable */
    const context = useContext(BliztContext)

    useEffect(() => {
        context.realizarPago()
      }, [])
    return (
        <section className={styles.pago_section}>
            <div className={styles.contenedor_formularios_pago}>
                <form action="" className={styles.formulario_pago}>
                    <div className={styles.title}>
                        <h2>Datos de reserva</h2>
                    </div>
                    <div className={styles.input_container}>
                        <div className={styles.item_container}>
                            <label htmlFor="">Nombre</label>
                            <input type="text" onChange={(e)=>{context.setNombre(e.target.value)}}/>
                        </div>
                        <div className={styles.item_container}>
                            <label htmlFor="">Apellido</label>
                            <input type="text" onChange={(e)=>{context.setApellido(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.input_container}>
                        <div className={styles.item_container}>
                            <label htmlFor="">Numero de documento</label>
                            <input type="text" onChange={(e)=>{context.setDocumento(e.target.value)}}/>
                        </div>
                        <div className={styles.item_container}>
                            <label htmlFor="">Licencia de conducir</label>
                            <input type="text" onChange={(e)=>{context.setLicencia(e.target.value)}}/>
                        </div>
                    </div>

                    <div className={styles.input_container}>
                        <div className={styles.item_container}>
                            <label htmlFor="">Dirección</label>
                            <input type="text" onChange={(e)=>{context.setDireccion(e.target.value)}}/>
                        </div>
                        <div className={styles.item_container}>
                            <label htmlFor="">CUIL</label>
                            <input type="text" onChange={(e)=>{context.setCuil(e.target.value)}}/>
                        </div>
                    </div>

                    <div className={styles.input_container}>
                        <div className={styles.item_container}>
                            <label htmlFor="">Pais</label>
                            <input type="text" onChange={(e)=>{context.setPais(e.target.value)}}/>
                        </div>
                        <div className={styles.item_container}>
                            <label htmlFor="">Provincia</label>
                            <input type="text" onChange={(e)=>{context.setProvincia(e.target.value)}}/>
                        </div>
                    </div>

                    <div className={styles.input_container}>
                        <div className={styles.item_container}>
                            <label htmlFor="">Ciudad</label>
                            <input type="text" onChange={(e)=>{context.setCiudad(e.target.value)}}/>
                        </div>
                        <div className={styles.item_container}>
                            <label htmlFor="">Email</label>
                            <input type="text" onChange={(e)=>{context.setMail(e.target.value)}}/>
                        </div>
                    </div>

                    <div className={styles.input_container}>
                        <div className={styles.item_container}>
                            <label htmlFor="">Tipo de factura</label>
                            <select onChange={(e)=>{context.setTipoFactura(e.target.value)}} name="" id="">
                                <option value="">Seleccione el tipo de factura</option>
                                <option value="">Consumidor Final</option>
                                <option value="">Responsable inscripto</option>
                            </select>
                        </div>
                        <div className={styles.item_container}>
                            <label htmlFor="">Telefono</label>
                            <input type="text" onChange={(e)=>{context.setTelefono(e.target.value)}}/>
                        </div>
                    </div>

                    
                    
                  
                </form>
                {/* <form action="" className={styles.formulario_pago}>
                    <div className={styles.title}>
                        <h2>Entrega y devolucion</h2>
                    </div>
                    <div className={styles.input_container}>
                        <div className={styles.item_container}>
                            <label htmlFor="">Lugar de entrega</label>
                            <select onChange={(e) => {context.setLugarEntrega(e.target.value)}}>
                                <option value="">Seleccione un lugar</option>
                                <option value="Aeropuerto" >Aeropuesto</option>
                                <option value="Oficinas">Nuestras oficinas en Bajada de Parana 313</option>
                            </select>
                            
                        </div>
                        <div className={styles.item_container}>
                            <label htmlFor="">Lugar de devolucion</label>
                            <select onChange={(e) => {context.setLugarDevolucion(e.target.value)}}>
                                <option value="">Seleccione un lugar</option>
                                <option value="Aeropuerto">Aeropuesto</option>
                                <option value="Oficinas">Nuestras oficinas en Bajada de Parana 313</option>
                            </select>
                        </div>
                    </div>
                </form> */}
                

                        {/* <div className={styles.input_container}>
                            <div className={styles.item_container_check}>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Pagar en linea el 10% de la reserva</label>

                            </div>
                            <div className={styles.item_container_check}>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Pagar en linea el 100% del valor</label>
                            </div>

                        </div> */}
                        
                    <button className={styles.boton_reserva} onClick={()=>{context.guardarReserva()}}><a  className={styles.boton_reserva} href={context.url} >Reservar</a></button>
            </div>
            <div>
            </div>
            <div className={styles.informacion_pago}>
                <div className={styles.title}>
                    <h2>Datos de la reserva</h2>
                </div>
                <div className={styles.datos}>
                    <p>Fecha: {context.fecha}</p>
                    <p>Hora: {context.hora}</p>
                    <p>Lugar de entrega: {context.lugarEntrega}</p>
                    <hr />
                </div>
                <div className={styles.datos}>
                    <p>Fecha: {context.fecha2}</p>
                    <p>Hora: {context.hora2}</p>
                    <p>Lugar de devolucion: {context.lugarDevolucion}</p>
                    <hr />
                </div>
                <div className={styles.datos}>
                     <p>Precio total: {context.precioAutos}</p>
                    <p>Precio total a pagar de la reserva: {context.precioAutos * 0.10}</p>
                </div>
                <div className={styles.imagen_auto}>
                    <img src="/Fiat Cronos.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default page