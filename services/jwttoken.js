'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'estoEsSecreto';

exports.createToken = function(user){
    var payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        exp: moment().add(1, "days").unix()
    };

    //Se encripta el payload
    return jwt.encode(payload, secret);
};
