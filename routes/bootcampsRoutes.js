const express = require('express')
const Bootcamp = require('../models/bootcampsModel')
//definir ruteador de bootcamp 

const router = express.Router()


//1. Seleccionar todos los bootcamps 
router.get(('/'), 
    async (request , response) => {

        //traer los bootcamps en base de datos 

        const bootcamps = await Bootcamp.find()

        return response.json({
            success: true,
            data: bootcamps
        })
    })


    //seleccionar el bootcamp cuyo ID se pase por parametro 

router.get('/:id' , 
async (request , response) => {
    const bootcampId= request.params.id

    //consultar bootcam por ID

    const bootcamp = await Bootcamp.findById(bootcampId)
    return response.json(

    {
        success : true,
        data:bootcamp
    }
    
    )
})


  //3. Crear bootcamp con post

  router.post(('/'), 
  async (request , response) => {

    //guardar el bootcamp que viene en el body 
    const newBootcamp = await Bootcamp.create(request.body)

      return response.json({
          success: true,
          data: newBootcamp
      })
  })


  //4. Actualizar bootcamp con ID metodo put, patch 

  router.put('/:id' , 
  async (request , response) => {
    bootcampId= request.params.id
      updBootcamp= await Bootcamp.findByIdAndUpdate(
        bootcampId, 
        request.body,
        {
            new: true,
            runValidators: true
        }
      )
      return response.json(

      {
          success : true,
          data : updBootcamp
      }
      
      )
  })


  //5. Eliminar bootcamp con ID 

  router.delete('/:id' , 
    async (request , response) => {
      bootcampId= request.params.id
      await Bootcamp.findByIdAndDelete(bootcampId)
      return response.json(

      {
          success : true,
          data: []
      }
      
      )
  })


module.exports = router