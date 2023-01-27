import {useState, useContext} from 'react'
import {ContactoContext} from '../context/ContactoContext'
import Error from './Error'

function Formulario() {
  const [contacto, setContacto] = useState({nombre:'',telefono:''})
  const [cargando, setCargando] = useState(false)
  const {agregarContacto} = useContext(ContactoContext)
  
  const procesar = async(evento)=>{
    evento.preventDefault()
    setCargando(true);
    await agregarContacto(contacto);
    setContacto({nombre:'',telefono:''})
    setCargando(false);
  }

  return (
    <div className='max-w-xs mx-auto rounded-md bg-gray-800 text-white'>
      <form onSubmit={procesar} className='p-5'>
        <h2 className='text-center text-lg font-bold mb-2'>Agregar Contacto</h2>
        <Error/>
        <div>
          <input 
            className='w-full rounded-md p-1 text-black mb-2'
            type="text" 
            placeholder='Nombre' 
            required
            autoFocus
            onChange={(e)=>{
              contacto.nombre = e.target.value;
              setContacto({...contacto})
            }}
            value = {contacto.nombre}/>
        </div>
        <div>
          <input 
            className='w-full rounded-md p-1 text-black mb-2'
            type="tel"
            placeholder='Celular' 
            required
            onChange={(e)=>{
              contacto.telefono = e.target.value;
              setContacto({...contacto})
            }}
            value = {contacto.telefono}/>
        </div>
        <button 
          className='block bg-blue-600 mt-2 w-full rounded-md py-1 hover:bg-blue-400 text-lg'
          type="submit"
          disabled={cargando}>
          {cargando ? 'Guardando...':'Guardar'}
        </button>
      </form>
    </div>
  )
}

export default Formulario