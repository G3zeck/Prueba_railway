"use client"

import { createContext, useState } from "react";
import Axios from 'axios'

export const BliztContext = createContext();
const Context = ({children}) => {

    const [fecha, setFecha] = useState("")
    const [fecha2, setFecha2] = useState("")
    const [hora, setHora] = useState("")
    const [hora2, setHora2] = useState("")
    const [dias, setDias] = useState("")
    const [availableCars, setAvailableCars] = useState([]);
    const [precioSeguro, setPrecioSeguro] = useState("2500");
    
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [documento, setDocumento] = useState("")
    const [mail, setMail] = useState("")
    const [pais, setPais] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [telefono, setTelefono] = useState("")
    const [licencia, setLicencia] = useState("")
    const [lugarEntrega, setLugarEntrega] = useState("")
    const [lugarDevolucion, setLugarDevolucion] = useState("")
    const [direccion, setDireccion] = useState("")
    const [modeloAuto, setModeloAuto] = useState("")
    const [cuil, setCuil] = useState("")
    const [tipoFactura, setTipoFactura] = useState("")
    const [provincia, setProvincia] = useState("")
    const [model, setModel] = useState("")

    const [datosReserva, setDatosReserva] = useState([])

    const [precioEntrega, setPrecioEntrega] = useState("0")
    const [precioDevolucion, setPrecioDevolucion] = useState("0")

    const [url, setUrl] = useState(null)
    

    const date1 = new Date(fecha +", "+ hora);
    const date2 = new Date(fecha2 +", "+ hora2);
    const diff = date2.getTime() - date1.getTime();
    const days = diff / (1000 * 60 * 60 * 24);
    console.log(days + " days"); 
    const [precioAutos, setPreciosAutos] = useState(0)
    
    const traer = () => {
      Axios.get(`${process.env.NEXT_PUBLIC_BACK_END}`  + '/cars',{
        params:{
          fecha,
          fecha2,
        }
      }).then((response) => {
        console.log(response.data);
        setAvailableCars(response.data);
      })
    }
    // const traerPrecio = () => {
    //   Axios.get('http://localhost:1234/price').then((response) => {
    //     console.log(response.data);
    //     setAvailableCars(response.data);
    //     setPreciosAutos(response.data.price)
    //   })
    // }

      const guardarReserva = () => {
        Axios.post (process.env.NEXT_PUBLIC_BACK_END  + '/reserva',{
          nombre:nombre,
          apellido:apellido,
          direccion:direccion,
          mail:mail,
          licencia:licencia,
          fecha:fecha,
          fecha2:fecha2,
          lugarEntrega:lugarEntrega,
          lugarDevolucion:lugarDevolucion,
          documento:documento,
          telefono:telefono,
          pais:pais,
          ciudad:ciudad,
          provincia:provincia,
          cuil:cuil,
          tipoFactura:tipoFactura,
          modeloAuto: modeloAuto,
          model:model
          
          
        }).then(() =>{
          console.log('Reserva hecha con exito')
        })
      }

      // const mostrarDatosReserva = () => {
      //   Axios.get('http://localhost:1234/mostrarTabla').then((response) => {
          
      //     setDatosReserva(response.data)
      //     console.log(datosReserva)
      //   })
   
      // }

      const realizarPago = () =>{
        Axios.post(`${process.env.NEXT_PUBLIC_BACK_END }` +'/create-order',{
          valorPago:precioAutos,
        }).then((response) => {
          const link = response.data
          setUrl(link)
        })
      }

      const calcularPrecioAuto = () =>{
        setPreciosAutos(((days * 18990 ) ) + (days * precioSeguro) + parseInt(precioEntrega) + parseInt(precioDevolucion))
        return precioAutos
      }
      
      const handleChangeEntrega = (event) => {
    
        const valorSeleccionado = event.target.value

        if(valorSeleccionado === "9000"){
          setPrecioEntrega(event.target.value)
          setLugarEntrega("Aeropuerto")
        }else if(valorSeleccionado === "20000"){
          setPrecioEntrega(event.target.value)
          setLugarEntrega("Villa la angostura")
        }else if(valorSeleccionado === "40000"){
          setPrecioEntrega(event.target.value)
          setLugarEntrega("San Martin de los Andes")
        }
      }

      const handleChangeDevolucion = (event) => {
    
        const valorSeleccionado = event.target.value

        if(valorSeleccionado === "9000"){
          setPrecioDevolucion(event.target.value)
          setLugarDevolucion("Aeropuerto")
        }else if(valorSeleccionado === "0"){
          setPrecioDevolucion(event.target.value)
          setLugarDevolucion("Nuestras oficinas")
        }
      }
      
    
  return (
    <BliztContext.Provider value={{
        setFecha,
        setFecha2,
        setHora,
        setHora2,
        days,
        fecha,
        fecha2,
        hora,
        hora2,
        availableCars,
        traer,
        setLugarEntrega,
        lugarEntrega,
        lugarDevolucion,
        setLugarDevolucion,
        nombre,
        setNombre,
        apellido,
        setApellido,
        documento,
        setDocumento,
        mail,
        setMail,
        pais,
        setPais,
        ciudad,
        setCiudad,
        telefono,
        setTelefono,
        licencia,
        setLicencia,
        direccion,
        setDireccion,
        guardarReserva,
        // mostrarDatosReserva,
        datosReserva,
        realizarPago,
        url,
        // traerPrecio,
        setPreciosAutos,
        precioAutos,
        calcularPrecioAuto,
        setPrecioSeguro,
        setPrecioDevolucion,
        setPrecioEntrega,
        handleChangeEntrega,
        handleChangeDevolucion,
        setModeloAuto,
        setCuil,
        setTipoFactura,
        setProvincia,
        setModel
       
       
    }}>
        {children}
    </BliztContext.Provider>
  )
}

export default Context