import {useContext} from 'react'
import {ContactoContext} from '../context/ContactoContext'
import Item from './Item'

function Listado() {
  const {contactos} = useContext(ContactoContext)
  
  if(contactos.length == 0){
    return (
      <div>
        No hay datos 😥
      </div>
    )
  }
  return (
    <div  className='grid grid-cols-4 gap-2 my-3'>
      {contactos.map(x =>{
        return (
          <Item key={x._id} contacto={x}/>
        )
      })}
      
    </div>
  )
}

export default Listado