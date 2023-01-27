import { createContext, useState, useEffect } from 'react'

export const ContactoContext = createContext()

export function ContactoContextProvider(props) {
  const [contactos, setContactos] = useState([])
  const [error, setError] = useState(null)
  const API = 'https://api-contactos.herokuapp.com/api/contacto'

  const obtenerContactos = async()=>{
    try {
      const respuesta = await fetch(API)
      const datos = await respuesta.json()
      setContactos(datos)      
    } catch (error) {
      console.log(error);
    }
  }

  const agregarContacto = async(contacto)=>{
    setError(null)
    const respuesta = await fetch(API,{
      method:'POST',
      body: JSON.stringify(contacto),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if(respuesta.status == 200){
      const nuevoContacto = await respuesta.json()
      setContactos([...contactos,nuevoContacto])
    }else{
      const {mensaje} = await respuesta.json()
      setError(mensaje)
    }
  }

  const eliminarContacto = async(id) =>{
    setError(null)
    const respuesta = await fetch(`${API}/${id}`,{
      method:'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if(respuesta.status == 200){
      setContactos(contactos.filter(x => x._id !== id))
    }
  }

  useEffect(() => {
    obtenerContactos()
  },[])
  
  
  return (
    <ContactoContext.Provider
      value={{
        contactos,
        agregarContacto,
        eliminarContacto,
        error
      }}
      >
      {props.children}
    </ContactoContext.Provider>
  )
}

export default ContactoContextProvider