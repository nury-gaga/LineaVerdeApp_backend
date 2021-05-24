'user strict'

const express = require('express');
const api = express.Router();
var AlumnoControlador = require('../controllers/alumno');
var MiddleControlador = require('../middlewares/auth');

api.post('/prueba', AlumnoControlador.prueba);
api.post('/addalu', MiddleControlador.ensureAuth, AlumnoControlador.addAlu);
api.post('/listaalu', AlumnoControlador.listaAlu);
api.delete('/deletealu/:id', MiddleControlador.ensureAuth, AlumnoControlador.deleteAlu);
api.post('/editalu', MiddleControlador.ensureAuth, AlumnoControlador.editAlu);
api.get('/getalu/:id', AlumnoControlador.getAlu);


module.exports = api;