const {ContactoModel} = require('../models');

class ContactoService{

  static async obtenerTodo(){
    return await ContactoModel.find();
  }

  static async crear(entidad){
    if(!entidad.nombre){
      throw new Error('El nombre es obligatorio!')
    }
    if(!entidad.telefono){
      throw new Error('El telefono es obligatorio!')
    }
    const contacto = await ContactoModel.findOne({telefono:entidad.telefono})
    
    if(contacto){
      throw new Error('El telefono ya está registrado!')
    }
    return ContactoModel.create(entidad);
  }

  static async eliminar(id){
    const contacto = await ContactoModel.findByIdAndDelete(id);
    if(!contacto){
      throw new Error('El id no corresponde a un contacto!')
    }
    return contacto;
  }
}

module.exports = ContactoService