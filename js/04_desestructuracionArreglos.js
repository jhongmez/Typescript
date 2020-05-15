"use strict";
/*
    * De esta forma creamos una función
*/
(function () {
    /*
        * Variable
    */
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Volar'
    };
    // Desestructuracion de objetos simple
    var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
    console.log(nombre, poder);
    //Desestructuracion objeto estructurada
    var extraer = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        console.log(nombre, poder);
    };
    extraer(avenger);
    //Desestructuracion arreglo
    var avengers = ['Thor', 'Ironman', 'Spiderman'];
    //Forma simple
    var primero = avengers[0], segundo = avengers[1], tercero = avengers[2];
    console.log(primero);
    console.log(segundo);
    console.log(tercero);
    //forma estructurada
    var extraerArr = function (_a) {
        var jhon = _a[0], alfonso = _a[1], gomez = _a[2];
        console.log(jhon);
        console.log(alfonso);
        console.log(gomez);
    };
    extraerArr(avengers);
})();
