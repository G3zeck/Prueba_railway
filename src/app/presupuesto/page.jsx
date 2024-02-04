"use client"
import { BliztContext } from '@/Context/Context'
import React, { useContext } from 'react'
import styles from "./check.module.css"
import Link from 'next/link'

const page = () => {
  const context = useContext(BliztContext)
  
  return (

    <div className={styles.card_container}>
      <ul className={styles.list_container}>
        {context.availableCars.map((car) => (
          // <li key={car.id}> {car.name}</li>

          <div key={car.id} className={styles.card_item}>
            
            <img src={`./${car.name}.jpg`} alt="" />
            <div className={styles.info_container}>
              
              <h2>{car.name}</h2>
              <p>Total de dias: {context.days}</p>
              <hr />              
              <p>Precio X día: <strong>18.990ARS</strong></p>
              <hr />
              <label >Selecciona un tipo de seguro:</label>
                  <select id="seguro" name="seguro" onChange={(e) =>{
                     context.setPrecioSeguro(e.target.value) }} required>
                      <option value="">Elija un seguro</option>
                      <option value="2500">Seguro Base - $2,500</option>
                      <option value="5000">Seguro Medio - $5,000</option>
                      <option value="10000">Seguro Top - $10,000</option>
                  </select>
              <hr />
              <label >Selecciona el lugar de entrega:</label>
                  <select  onChange={(e) =>{
                     context.handleChangeEntrega(e) }} required>
                      <option value="">Elija un lugar de entrega</option>
                      <option value="9000">Aeopuerto - $9,000</option>
                      <option value="20000">Villa la Angostura - $20,000</option>
                      <option value="40000">Aeopuerto - $40,000</option>
                      <option value="0">Centro Bariloche- $0</option>
                  </select>
              <hr />
              
              <label >Selecciona el lugar de devolucion:</label>
              <select  onChange={(e) =>{
                     context.handleChangeDevolucion(e) }} required>
                      <option value="">Elija un lugar de entrega</option>
                      <option value="9000">Aeopuerto - $9,000</option>
                      <option value="0">Centro de Bariloche- $0</option>
                  </select>
              <hr />
                        
              <p>Precio total: <strong>{context.calcularPrecioAuto()}ARS</strong> </p>
              <hr />
              <button onClick={() =>{context.setModeloAuto(car.id)
                                         context.setModel(car.name)}} >
                <Link href={"/presupuesto/checkout"}>Ir a pagar</Link>
                </button>
            </div>
          </div>
        ))

        }
      </ul>
    </div>
  )
}

export default page