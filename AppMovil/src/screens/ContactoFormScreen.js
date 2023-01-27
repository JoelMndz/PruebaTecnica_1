import {useState} from 'react'
import {TouchableOpacity,Text,TextInput,StyleSheet} from 'react-native'
import {agregarContacto} from '../api'

import Layout from '../components/Layout'

function ContactoFormScreen({navigation}) {
  const [contacto, setcontacto] = useState({nombre:'',telefono:''})
  const [cargando, setCargando] = useState(false)

  const deshabilitarBoton = ()=>{
    return contacto.nombre.length == 0 || contacto.telefono.length == 0 || cargando
  }

  const _agregarContacto= async()=>{
    setCargando(true);
    await agregarContacto(contacto)
    setCargando(false);
    navigation.navigate('HomeScreen')
  }
  const actualizarCampos = (propiedad, valor)=> setcontacto({...contacto, [propiedad]:valor})

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder='Nombre'
        onChangeText={(texto)=> actualizarCampos('nombre',texto)}/>
      <TextInput
        style={styles.input}
        keyboardType='phone-pad'
        onChangeText={(texto)=> actualizarCampos('telefono',texto)}
        placeholder='Celular'/>

      <TouchableOpacity
        onPress={_agregarContacto}
        style={{
          ...styles.boton,
          backgroundColor: deshabilitarBoton() ? '#5C8EF1':'#2266EC'
          }}
          disabled={deshabilitarBoton()}>
        <Text style={styles.textoBoton}>Guardar</Text>
      </TouchableOpacity>
    </Layout>
  )
}

const styles = StyleSheet.create({
  input:{
    width:'90%',
    backgroundColor: '#EEEFF1',
    padding:10,
    borderRadius:20,
    fontSize:18,
    marginBottom:20
  },
  boton:{
    marginTop: 10,
    padding:10,
    backgroundColor: '#2266EC',
    width: '90%',
    borderRadius: 10
  },
  textoBoton:{
    color:'#fff',
    textAlign:'center',
    fontSize:20
  }
})

export default ContactoFormScreen