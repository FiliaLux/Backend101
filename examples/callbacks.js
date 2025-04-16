'use strict';

function suma (a, b, callback) {
    const resultado = a + b;
    callback(resultado);
};

const resultado = suma(3, 6, function() {
    console.log(resultado);
});