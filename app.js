const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
var AlumnoRutas = require('../Backend/routes/alumno');
var UsuarioRutas = require('../Backend/routes/usuario');


//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cors
app.use(cors());
app.use('/api', AlumnoRutas);
app.use('/api', UsuarioRutas);

//Exportar
module.exports = app;