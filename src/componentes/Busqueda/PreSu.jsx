"use client"
import React, { useContext, useState } from 'react'
import styles from "./presu.module.css"
import { BliztContext } from '@/Context/Context'
import Link from 'next/link'

const PreSu = () => {
  

  // const [fecha, setFecha] = useState("")
  // const [fecha2, setFecha2] = useState("")
  // const [hora, setHora] = useState("")
  // const [hora2, setHora2] = useState("")

  // const date1 = new Date(fecha +", "+ hora);
  // const date2 = new Date(fecha2 +", "+ hora2);
  // const diff = date2.getTime() - date1.getTime();
  // const days = diff / (1000 * 60 * 60 * 24);
  // console.log(days + " days"); 

  const context = useContext(BliztContext)
  

  return (
    <main className={styles.main_container}>

      <div className={styles.reserva_container}>
        <div className={styles.input_container}>

          <div className={styles.input}>
            <label >Fecha de entrega:</label>
            <input  required type="date" placeholder="Fecha de entrega" onChange={(e) =>{context.setFecha(e.target.value)}}/>
          </div>
          <div className={styles.input}>
            <label >Hora de entrega:</label>
            {/* <input type="time" placeholder="Hora de entrega" onChange={(e) =>{
              context.setHora(e.target.value)      
              }} /> */}

            <select className={styles.select} name="" id=""  onChange={(e) =>{context.setHora(e.target.value)
            console.log}}>
            <option value="">Seleccione una hora</option>
                    <option value="00:00">12:00 AM</option>
                    <option value="00:30">12:30 AM</option>
                    <option value="01:00">1:00 AM</option>
                    <option value="01:30">1:30 AM</option>
                    <option value="02:00">2:00 AM</option>
                    <option value="02:30">2:30 AM</option>
                    <option value="03:00">3:00 AM</option>
                    <option value="03:30">3:30 AM</option>
                    <option value="04:00">4:00 AM</option>
                    <option value="04:30">4:30 AM</option>
                    <option value="05:00">5:00 AM</option>
                    <option value="05:30">5:30 AM</option>
                    <option value="06:00">6:00 AM</option>
                    <option value="06:30">6:30 AM</option>
                    <option value="07:00">7:00 AM</option>
                    <option value="07:30">7:30 AM</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="08:30">8:30 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="09:30">9:30 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="15:30">3:30 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="16:30">4:30 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                    <option value="22:00">10:00 PM</option>
                    <option value="22:30">10:30 PM</option>
                    <option value="23:00">11:00 PM</option>
                    <option value="23:30">11:30 PM</option>
             </select>

          </div>
          <div className={styles.input}>
            <label >Fecha de devolución:</label>
            <input  required type="date" placeholder="Fecha de entrega" onChange={(e) =>{context.setFecha2(e.target.value)}}/>
          </div>
          <div className={styles.input}>
            <label >Hora de devolución:</label>
            {/* <input type="time" placeholder="Hora de entrega"  onChange={(e) =>{context.setHora2(e.target.value)
            }}/> */}
             <select className={styles.select} name="" id=""  onChange={(e) =>{context.setHora2(e.target.value)
            context.traer()
            }}>
                   <option value="">Seleccione una hora</option>
                    <option value="00:00">12:00 AM</option>
                    <option value="00:30">12:30 AM</option>
                    <option value="01:00">1:00 AM</option>
                    <option value="01:30">1:30 AM</option>
                    <option value="02:00">2:00 AM</option>
                    <option value="02:30">2:30 AM</option>
                    <option value="03:00">3:00 AM</option>
                    <option value="03:30">3:30 AM</option>
                    <option value="04:00">4:00 AM</option>
                    <option value="04:30">4:30 AM</option>
                    <option value="05:00">5:00 AM</option>
                    <option value="05:30">5:30 AM</option>
                    <option value="06:00">6:00 AM</option>
                    <option value="06:30">6:30 AM</option>
                    <option value="07:00">7:00 AM</option>
                    <option value="07:30">7:30 AM</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="08:30">8:30 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="09:30">9:30 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="15:30">3:30 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="16:30">4:30 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                    <option value="22:00">10:00 PM</option>
                    <option value="22:30">10:30 PM</option>
                    <option value="23:00">11:00 PM</option>
                    <option value="23:30">11:30 PM</option>
             </select>
          </div>
          
        </div>
        <div className={styles.button_container}>
          <Link href={"/presupuesto"}><button className={styles.button}>Buscar</button></Link>
        </div>
      </div>

    </main>
  )
}

export default PreSu