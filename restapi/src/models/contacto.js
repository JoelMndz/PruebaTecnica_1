const {Schema, model} = require('mongoose');

const contactoSchema = new Schema({
  nombre:{
    type: String
  },
  telefono:{
    type: String
  }
})

module.exports = model('contactos',contactoSchema)