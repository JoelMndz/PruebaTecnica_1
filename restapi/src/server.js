const express = require('express');
const morgan =  require('morgan')
const cors = require('cors')

const {PORT} = require('./config')
const {ContactoRouter} = require('./routes')
const {conexionDB} = require('./database')

class Server{
  
  constructor(){
    this.app = express()  
    conexionDB()
    this.configuracion();
    this.middlewares();
    this.rutas();
  }

  configuracion(){
    this.app.set('port', PORT || 3000)
  }

  middlewares(){
    this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use(express.json())
  }
  
  rutas(){
    this.app.get('/',(req,res)=>{
      res.json({
        nombre:'REST API - Contactos telefónicos'
      })
    })

    this.app.use('/api/contacto', ContactoRouter)
  }

  listen(){
    this.app.listen(this.app.get('port'), ()=>{
      console.log(`Servidor corriendo en el puerto ${this.app.get('port')}`);
    })
  }
}

module.exports = Server