const express = require('express')
const Course = require('../models/coursesModel')
const router = express.Router()

  //1. Seleccionar todos los courses 
  router.get(('/'), 
  async (request , response) => {

    //traer courses en base de datos
    const course = await Course.find()

    
    return response.json({
        success: true,
        data: course
      })
  })
  
  
  router.get('/:id' , 
          async (request , response) => {
            const coursesId= request.params.id

            //consultar courses por ID

            const course = await Course.findById(coursesId)
              return response.json(
  
              {
                  success : true,
                  data: course
              }
              
              )
          })
  
          //3. Crear courses con post
  
          router.post(('/'), 
     async (request , response) => {

        //guardar courses que viene de body 

        const newCourse = await Course.create(request.body)
          return response.json({
              success: true,
              data: newCourse
          })
      })
  
  
      //4. Actualizar courses con ID metodo put 
  
      router.put('/:id' , 
         async (request , response) => {
              coursesId= request.params.id
              updCourse= await Course.findByIdAndUpdate(
                coursesId,
                request.body,
                {
                    new: true,
                    runValidators: true
                }
              )
              return response.json(
  
              {
                  success : true,
                  data: updCourse
              }
              
              )
          })
  
  
          //5. Eliminar courses con ID 
  
          router.delete('/:id' , 
         async (request , response) => {
              coursesId= request.params.id
              await Course.findByIdAndDelete(coursesId)
              return response.json(
  
              {
                  success : true,
                data: []
              }
              
              )
          })
  
    module.exports = router