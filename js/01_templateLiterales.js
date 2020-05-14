"use strict";
(function () {
    var nombre = 'Jhon', apellido = 'Gómez', edad = 24;
    //Este es nuestro template literal
    var imprimir = "Bienvenido, mi nombre es " + nombre + ", y mi apellido " + apellido + " y tengo " + edad + " a\u00F1os";
    console.log(imprimir);
})();
