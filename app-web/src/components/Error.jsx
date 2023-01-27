import {useContext} from 'react'
import {ContactoContext} from '../context/ContactoContext'

function Error() {
  const {error} = useContext(ContactoContext)

  if(!error){
    return;
  }
  return (
    <div className='bg-yellow-500 my-2 rounded-md p-1 text-center'>
      <span className='font-bold'>Error: </span>
       {error}
    </div>
  )
}

export default Error