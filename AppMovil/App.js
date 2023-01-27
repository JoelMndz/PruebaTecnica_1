import React from 'react'
import { Text,View,TouchableOpacity } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './src/screens/HomeScreen'
import ContactoFormScreen from './src/screens/ContactoFormScreen'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={({navigation})=>({
            title:'Contactos',
            headerStyle:{backgroundColor:'#F4F6F8'},
            headerRight:()=>{
              return <TouchableOpacity
                onPress={()=> navigation.navigate('ContactoFormScreen')}>
                <Text
                  style={{fontSize:18, marginRight:10}}>Agregar</Text>
              </TouchableOpacity>
            }
          })}/>
        <Stack.Screen 
          name="ContactoFormScreen"
          component={ContactoFormScreen}
          options={{
            title:'Agregar Contacto'
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App