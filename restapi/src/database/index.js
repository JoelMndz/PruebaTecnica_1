const mongoose = require('mongoose');

const {MONGO_URI} = require('../config');

const conexionDB = ()=>{
    try {
        mongoose.set("strictQuery", false);

        mongoose.connect(MONGO_URI,()=> console.log('db conectada!'))
    } catch (error) {
        console.log(error);
        throw new Error('Error de coneccion')
    }
}

module.exports = {conexionDB};