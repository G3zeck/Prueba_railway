import React from 'react'
import styles from "./trabajo.module.css"
const Trabajo = () => {
  return (
    <section className={styles.como_trabajamos}>
        <h1>¿Como trabajamos?</h1>
        <div className={styles.item_container}>
            <div className={styles.item}>
                <span>1</span>
                <p>Reserva tu auto mediante nuestra web o whatsapp</p>
            </div>
            <div className={styles.item}>
                <span>2</span>
                <p>Recibi tu auto en el aeropuerto, centro u hotel</p>
            </div>
            <div className={styles.item}>
                <span>3</span>
                <p>Completamos el contrato donde recibis el vehiculo</p>
            </div>
            <div className={styles.item}>
                <span>4</span>
                <p>Disfrutas de Bariloche</p>
            </div>
            <div className={styles.item}>
                <span>5</span>
                <p>Entregas el auto en aeropuerto, centro u hotel</p>
            </div>
            <div className={styles.item}>
                <span>6</span>
                <p>Recibi tu auto en el aeropuerto, centro u hotel</p>
            </div>
            
        </div>
    </section>
  )
}

export default Trabajo