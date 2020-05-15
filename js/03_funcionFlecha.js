"use strict";
(function () {
    //Funcion normal
    var miFuncion = function (a) {
        return a.toUpperCase();
    };
    //Funcion flecha
    var miFuncionF = function (a) { return a.toUpperCase(); };
    //Operaciones
    var sumarN = function (a, b) { return a + b; };
    var hulk = {
        nombre: 'hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " smash!!");
            }, 1000);
        }
    };
    hulk.smash();
})();
