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


        constructor( public nombre: string, 
                        public equipo: string,
                        public nombreReal?: string,
                        public puedePelear: boolean = true,
                        public peleasGanadas: number = 0 ) {
            
            
        }

    }
    
    //Decimos que es de tipo Avenger
    const hombreArana = new Avenger('Hombre Araña', 'Ironman');

    console.log(hombreArana);

})();