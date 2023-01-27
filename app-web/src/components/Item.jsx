import {useContext, useState} from 'react'
import {ContactoContext} from '../context/ContactoContext'

function Item({contacto}) {
  const [cargando, setCargando] = useState(false)
  const {eliminarContacto} = useContext(ContactoContext)

  const eliminar = async()=>{
    setCargando(true)
    await eliminarContacto(contacto._id);
    setCargando(false)
  }
  return (
    <div className='bg-gray-800 text-white p-3 rounded-lg'>
      <p className='text-center font-bold text-lg'>{contacto.nombre}</p>
      <p className='text-center'>{contacto.telefono}</p>
      <button 
        className='mx-auto block mt-2 bg-red-600 p-1 rounded-md hover:bg-red-400'
        disabled={cargando}
        onClick={eliminar}>
          {cargando ? 'Eliminando...':'Eliminar'}
        </button>
    </div>
  )
}

export default Item