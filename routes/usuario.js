'user strict'

const express = require('express');
const api = express.Router();
var UsuarioControlador = require('../controllers/usuario');

api.post('/pruebau', UsuarioControlador.prueba);
api.post('/addusuario', UsuarioControlador.addUsuario);
api.post('/login', UsuarioControlador.login);
module.exports = api;