import { View, Text, StyleSheet,TouchableOpacity, Linking } from 'react-native'
import {useState} from 'react'

const Item = ({contacto, eliminarContacto}) => {
  const [cargando, setCargando] = useState(false)

  const _eliminarContacto = async()=>{
    setCargando(true)
    await eliminarContacto(contacto._id)
    setCargando(false)
  }

  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.itemNombre}>{contacto.nombre}</Text>
        <Text style={styles.itemTelefono}>Móvil: {contacto.telefono}</Text>
      </View>
      <View>
        <TouchableOpacity 
          disabled={cargando}
          onPress={_eliminarContacto}
          style={styles.botonEliminar}>
          <Text
            style={styles.textoBoton}>
              Elimnar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> Linking.openURL(`tel:${contacto.telefono}`)}
          style={styles.botonLlamar}>
          <Text
            style={styles.textoBoton}>Llamar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item:{
    backgroundColor:'#1F2442',
    padding:20,
    marginVertical:10,
    borderRadius:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  itemNombre:{
    color:'#fff',
    fontSize: 20
  },
  itemTelefono:{
    color:'#fff',
    fontSize: 18,
    fontWeight:'300'
  },
  botonEliminar:{
    backgroundColor:'#EA324E',
    padding:5,
    borderRadius: 10
  },
  botonLlamar:{
    backgroundColor:'#49CC2F',
    padding:5,
    marginTop:4,
    borderRadius: 10
  },
  textoBoton:{
    color:'#fff',
    textAlign:'center',
    fontSize:20
  }
})

export default Item