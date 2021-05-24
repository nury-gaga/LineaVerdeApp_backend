'use strict'

//CREACION DE ENTIDAD JOBS
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlumnoSchema = Schema({
    id: String,
    name: String,
    age: Number,
    genre: String,
    schedule: String,
    level: Number
});

module.exports = mongoose.model('Alumno', AlumnoSchema);
