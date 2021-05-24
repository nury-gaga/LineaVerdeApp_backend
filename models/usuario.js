'use strict'

//CREACION DE ENTIDAD JOBS
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    id: String,
    name: String,
    email: String,
    password: String,
    genre: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
