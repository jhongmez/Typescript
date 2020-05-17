"use strict";
(() => {
    //Creacion de la clase
    // class Avenger {
    //     nombre: String;
    //     equipo: string;
    //     nombreReal: string;
    //     puedePelear: boolean;
    //     peleasGanadas: number;
    //     constructor(nombre: string, equipo: string, nombreReal: string, ) {
    //         this.nombre = nombre;
    //         this.equipo = equipo;
    //         this.nombreReal = nombreReal;
    //     }
    // }
    class Avenger {
        // nombre: String;
        // equipo: string;
        // nombreReal: string;
        // puedePelear: boolean;
        // peleasGanadas: number;
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    //Decimos que es de tipo Avenger
    const hombreArana = new Avenger('Hombre Araña', 'Ironman');
    console.log(hombreArana);
})();
