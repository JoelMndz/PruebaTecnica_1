const API = 'https://api-contactos.herokuapp.com/api/contacto'

export const obtenerContactos = async()=>{
  try {
    const respuesta = await fetch(API)
    return await respuesta.json()
  } catch (error) {
    console.log(error);
  }
}

export const agregarContacto = async(contacto)=>{
  const respuesta = await fetch(API,{
    method:'POST',
    body: JSON.stringify(contacto),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export const eliminarContacto = async(id) =>{
  const respuesta = await fetch(`${API}/${id}`,{
    method:'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}