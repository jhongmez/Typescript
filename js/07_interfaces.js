"use strict";
(() => {
    const enviarMision = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    };
    const regresarAlCuartel = (xmen) => {
        console.log(`Regresando a ${xmen.nombre} a la misión`);
    };
    const Poder = (xmen) => {
        console.log(`El poder de ${xmen.nombre} es ${xmen.poder}`);
    };
    // Uso de los datos
    const wolverine = {
        nombre: 'Jhon',
        edad: 24
    };
    // Invocando las funciones
    enviarMision(wolverine);
    regresarAlCuartel(wolverine);
    Poder(wolverine);
})();
