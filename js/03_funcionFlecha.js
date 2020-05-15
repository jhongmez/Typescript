"use strict";
(function () {
    //Funcion normal
    let miFuncion = function (a) {
        return a.toUpperCase();
    };
    //Funcion flecha
    const miFuncionF = (a) => a.toUpperCase();
    //Operaciones
    const sumarN = (a, b) => a + b;
    const hulk = {
        nombre: 'hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!`);
            }, 1000);
        }
    };
    hulk.smash();
})();
