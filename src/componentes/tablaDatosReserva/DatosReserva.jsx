"use client"
import { BliztContext } from '@/Context/Context'
import { useContext, useEffect } from 'react'
import {styles} from './datosReserva.module.css'
const DatosReserva = () => {
    const context = useContext(BliztContext)
    useEffect(() => {
        context.realizarPago()
      }, [])
  return (
    
    <div>
    <button onClick={()=>{console.log(context.toString(url))
    console.log(context.datosReserva)}}>Mostrar datos</button>

    <a href={context.url}>ir al pago</a>
       {/* {
        
        context.datosReserva.map( (index) =>{
            return(
                <div key={index.id}>
                  <p>{index.nombre}</p>
                  <p>{index.apellido}</p>
                  <p>{index.documento}</p>
                  <p>{index.model_id}</p>
                  <p>{index.mail}</p>
                  <p>{index.licencia}</p>
                  <p>{index.telefono}</p>
                  <p>{index.pais}</p>
                  <p>{index.ciudad}</p>
                  <p>{index.lugar_entrega}</p>
                  <p>{index.lugar_devolucion}</p>
                  <p>{index.direccion}</p>
                </div>
            )
        })
       } */}
        
    </div>
  )
}

export default DatosReserva