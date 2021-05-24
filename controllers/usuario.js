var Usuario = require('../models/usuario');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwttoken');
function prueba(req, res) {
    res.status(200).send({ mensaje: 'Mundo Hola' });
}

function addUsuario(req, res) {
    var params = req.body;
    var usuario = new Usuario();
    usuario.name = params.name;
    usuario.email = params.email;
    bcrypt.hash(params.password, null, null, (error, hash) => {
        usuario.password = hash;
        usuario.genre = params.genre;
        usuario.save((error, response) => {
            if (error) {
                console.log(error);
                return res.status(400).send({ mensaje: 'error' });
            }

            if (response) {
                return res.status(200).send({ mensaje: 'todo cool' });
            }
        })
    })
}

function login(req, res) {
    var params = req.body;
    console.log(params);
    Usuario.find({ email: params.email }).exec().then(respuesta => {
        console.log(respuesta);
        var user = respuesta[0];
        if (respuesta) {
            bcrypt.compare(params.password, user.password, (error, resultado) => {
                if (resultado) {
                    if (params.gettoken) {
                        return res.status(200).send({ token: jwt.createToken(user) })
                    } else {
                        user.password = undefined;
                        return res.status(200).send({ user: user });
                    }
                }else{
                    return res.status(404).send({mensaje: 'error'})
                }
            });
        }else{
            return res.status(404).send({mensaje: 'error2'})
        }
    }).catch(error => {
        console.log(error);
    });
}
module.exports = {
    prueba,
    addUsuario,
    login
}