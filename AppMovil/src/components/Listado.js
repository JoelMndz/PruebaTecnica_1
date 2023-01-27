import {FlatList, RefreshControl, Text} from 'react-native'
import {useState,useEffect,useCallback} from 'react'
import {obtenerContactos,eliminarContacto} from '../api'
import Item from './Item'

function Listado() {
  const [contactos, setContactos] = useState([])
  const [refrescando, setRefrescando] = useState(false)
  
  const _obtenerContactos = async()=>{
    setRefrescando(true)
    const datos = await obtenerContactos()
    setContactos(datos)
    setRefrescando(false)
  }
  
  const _eliminarContacto = async(id)=>{
    await eliminarContacto(id)
    setContactos(contactos.filter(x => x._id !== id))
  }

  useEffect(()=>{
    _obtenerContactos()
  },[])

  const renderizarItem = ({item})=>{
    return <Item contacto={item} eliminarContacto={_eliminarContacto}/>
  }

  const refrescarLista = useCallback(async ()=>{
    setRefrescando(true);
    await _obtenerContactos()
    setRefrescando(false);
  })

  return (
    <FlatList 
      style={{width:'100%'}}
      data={contactos}
      renderItem={renderizarItem}
      refreshControl={
        <RefreshControl
          refreshing={refrescando}
          onRefresh={refrescarLista}/>
      }/>
  )
}

export default Listado