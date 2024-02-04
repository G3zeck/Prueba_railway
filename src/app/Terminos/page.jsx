import React from 'react'
import styles from './terminos.module.css'

const page = () => {
    return (
        <section className={styles.terminos_section}>
            <div className={styles.terminos_container}>
                <h3>Formas de pago:</h3>
                <p>En Blitz, aceptamos pagos en efectivo o con tarjeta a través de posnet. Para reservar un vehículo, se requerirá el pago de una seña del 10% del total a través de transferencia bancaria.</p>
                <h3>Zonas de retiro y devolucion de vehiculos:</h3>
                <p>El servicio de retiro y devolución está disponible tanto en el aeropuerto como en nuestras oficinas ubicadas en Bajada de Paraná 313, en el centro de la ciudad o en el hotel del cliente. El retiro o la devolución en el aeropuerto conlleva un costo de 6.000ARS cada uno, respectivamente. En el caso de solicitar tanto la entrega como la devolución en el aeropuerto, se aplicará un cargo de 12.000ARS en total.
                    La entrega o devolución en el centro de la ciudad no tiene costo adicional. Sin embargo, si la entrega o devolución se realizan fuera del radio urbano, se aplicará un cargo equivalente al costo de un taxi hasta esa zona.</p>
                <h3>Conductores:</h3>
                <p>El conductor principal debe tener al menos 21 años de edad y poseer una licencia de conducir válida. Ofrecemos la posibilidad de agregar conductores adicionales por un costo de 2500ARS por día3</p>
                <h3>Kilometraje</h3>
                <p>Se habilitarán 200 km por día. Si se supera el kilometraje establecido, se aplicarán tarifas adicionales de la siguiente manera: <br /> <br />

                -Si la cantidad de kilómetros excede entre 1 km y 100 km, se cobrará como medio día adicional. <br />
                -En caso de que el excedente de kilómetros esté entre 101 km y 200 km, se cobrará como un día adicional.</p>
                <h3>Combustible y lavado</h3>
                <p>El vehículo se entregará con el tanque de combustible lleno y en condiciones de limpieza tanto interna como externa. Es requerido que el vehículo sea devuelto en las mismas condiciones en las que fue entregado, incluyendo el tanque lleno y la limpieza interior y exterior.</p>
                <h3>Bloqueos y pre-autorizaciones</h3>
                <p>Se requerirá una tarjeta de crédito como garantía en caso de que surja algún inconveniente y el cliente se niegue a abonar los cargos correspondientes. Se realizará un bloqueo de 200.000ARS en el momento de la entrega del vehículo, el cual será revertido una vez que el automóvil sea devuelto en condiciones óptimas. <br />

La devolución del bloqueo puede demorar entre 24 y 72 horas. En algunas ocasiones, esta devolución puede tardar hasta diez días, lo cual está sujeto al tiempo que el banco del cliente tome para procesar esta transacción.
                </p>
            </div>
        </section>
    )
}

export default page