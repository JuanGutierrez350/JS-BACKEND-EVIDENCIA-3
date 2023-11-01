const express = require('express')
const bootcampsRoutes = require('./routes/bootcampsRoutes')
const coursesRoutes = require('./routes/coursesRoutes')
/*const reviewsRoutes = require('./routes/reviewsRoutes')*/
const dotenv = require('dotenv')
const colors= require('colors')
const connectDB = require('./config/db')

dotenv.config({
    path: './config/.env'

})
      
//crear el objeto de la aplicacion 

const app = express()

//Dependencia de formateo de body de json 
app.use(express.json())

//ejecutar conexion a db 
connectDB()



//url de prueba
app.get('/prueba' , (request , response )=>{
    //EJEMPLO DE RESPONSE
    response.send("Hola")

} )

//uri de bootcamps

app.use('/bootcamps', bootcampsRoutes)
app.use('/courses', coursesRoutes)
/*app.use('/reviews', reviewsRoutes)*/


//establecer conf
        //users

        app.get(('/users'), 
        (request , response) => {
            return response.json({
                success: true,
                msg: "seleccionando todos los users"
            })
        })

        
        app.get('/users/:id' , 
        (request , response) => {
            usersId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Seleccionando users cuyo ID es ${usersId}`
            }
            
            )
        })

        //3. Crear users con post

app.post(('/users'), 
    (request , response) => {
        return response.json({
            success: true,
            msg: "Crear users"
        })
    })


    //4. Actualizar users con ID metodo put 

    app.put('/users/:id' , 
        (request , response) => {
            usersId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Actualizando users cuyo ID es ${usersId}`
            }
            
            )
        })


        //5. Eliminar users con ID 

        app.delete('/users/:id' , 
        (request , response) => {
            usersId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Eliminando users cuyo ID es ${usersId}`
            }
            
            )
        })



//deifnir puerto del servidor 

const puerto = process.env.PUERTO

//definir servidor 
app.listen( puerto , 
            console.log(`Servidor ejecutando en ${ puerto }`.bgRed.bold))