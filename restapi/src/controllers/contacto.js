const {ContactoService} = require('../services')

class ContactoCotroller{
  static async obtenerTodo(req, res){
    try {
      const datos = await ContactoService.obtenerTodo()
      res.json(datos)
    } catch (error) {
      res.status(400).json({
        mensaje: error.message ?? 'Ocurrio un error en el servidor!'
      })
    }
  }

  static async crear(req, res){
    try {
      const {body} = req;
      const contacto = await ContactoService.crear(body)
      res.json(contacto)
    } catch (error) {
      res.status(400).json({
        mensaje: error.message ?? 'Ocurrio un error en el servidor!'
      })
    }
  }

  static async eliminar(req, res){
    try {
      const {id} = req.params;
      const contacto = await ContactoService.eliminar(id)
      res.json(contacto)
    } catch (error) {
      res.status(400).json({
        mensaje: error.message ?? 'Ocurrio un error en el servidor!'
      })
    }
  }
}

module.exports = ContactoCotroller