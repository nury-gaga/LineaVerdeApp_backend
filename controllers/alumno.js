const { response } = require('../app');
const alumno = require('../models/alumno');
var Alumno = require('../models/alumno');

function prueba(req, res) {
    res.status(200).send({ mensaje: 'Hola Mundo' });
}
function addAlu(req, res) {
    var params = req.body;
    var alumno = new Alumno();
    alumno.name = params.name;
    alumno.age = params.age;
    alumno.genre = params.genre;
    alumno.schedule = params.schedule;
    alumno.level = params.level;
    alumno.save((error, response) => {
        if (error) {
            return req.status(400).send({ mensaje: 'error' });
        }

        if (response) {
            return res.status(200).send({ mensaje: 'todo cool' });
        }
    })
}

function listaAlu(req, res) {
    var params = req.body;
    Alumno.find({ level: params.level }).exec().then(respuesta => {
        if (respuesta) {
            return res.status(200).send({ alumno: respuesta });
        } else {
            return res.status(404).send({ mensaje: 'error' });
        }
    }).catch(error => {
        console.log(error);
    });
}

function getAlu(req, res) {
    var params = req.params;
    Alumno.find({ _id: params.id }).exec().then(respuesta => {
        if (respuesta) {
            return res.status(200).send({ alumno: respuesta });
        } else {
            return res.status(404).send({ mensaje: 'error' });
        }
    }).catch(error => {
        console.log(error);
    });
}

function deleteAlu(req, res) {
    var id = req.params.id;
    Alumno.deleteOne({ _id: id }).exec().then(respuesta => {
        if (respuesta) {
            return res.status(200).send({ mensaje: 'todo cool' });
        } else {
            return res.status(401).send({ mensaje: 'error al eliminar' });
        }

    }).catch(error => {
        console.log(error);
    });

}

function editAlu(req, res) {
    var params = req.body;
    var alumno = {
    name: params.name,
    age: params.age,
    genre: params.genre,
    schedule: params.schedule,
    level: params.level
    };
    var idAlu =  params.id;
    Alumno.findByIdAndUpdate(idAlu , alumno, {new:true}, (error, respuesta)=>{
        if(error){
          console.log(error)
          return res.status(401).send({ mensaje: 'Error' });
        }
          return res.status(200).send({mensaje: 'Todo cool'});
    })
}


module.exports = {
    prueba,
    addAlu,
    listaAlu,
    getAlu,
    deleteAlu,
    editAlu
}