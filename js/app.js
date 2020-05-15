"use strict";
(function () {
    function saludar(nombre) {
        console.table('Hola ' + nombre); // Hola Logan
    }
    const wolverine = {
        nombre: 'Antonio'
    };
    saludar(wolverine.nombre);
})();
