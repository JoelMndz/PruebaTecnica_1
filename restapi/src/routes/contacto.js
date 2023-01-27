const {Router} = require('express');

const {ContactoController} = require('../controllers')

const router = Router()

router.get('/', ContactoController.obtenerTodo)

router.post('/', ContactoController.crear)

router.delete('/:id', ContactoController.eliminar)

module.exports = router