const mongoose = require('mongoose')

const CoursesCampSchema = mongoose.Schema({

    title:{
        type: String, 
        required: [true, "el title es requerido"],
        unique: true, 
        maxlength: [30, "title de courses no mayor a 30 caracteres"],
        minlength: [10, "title de courses minimo a 10 caracteres"]
    },
    description: {
        type: String, 
        maxlength: [10, "description de courses no mayor a 10 caracteres"]

    },
    weeks: {
        type: Number, 
        required: [true, "semanas es requerido"],
        maxlength: [9, "El numero maxima de semanas para un curso es 9"]
    },

    enroll_cost: {
        type: Number, 
        required: [true, "cost es requerido"],
        maxlength: [100, "cost de courses no mayor a 100 caracteres"]
    },

    minimumSkill: {
        type: [String], 
        required: [true, "skills son requeridos"],
        enum: [ "beginner", "Intermediate", "advanced" ]

    },
})

module. exports = mongoose.model('Courses' , CoursesCampSchema)