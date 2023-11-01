const colors = require('colors')
const mongoose = require('mongoose')

//funcion para conectar a la base de datos 
 async function connectDB(){
    const conn = await mongoose.connect(process.env.MONGO_URL)

    console.log(`Conexion exitosa a mongo:${conn.connection.host}`.bgGreen.blue)
 }

 module.exports = connectDB