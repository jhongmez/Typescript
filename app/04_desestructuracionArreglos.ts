/*
    * De esta forma creamos una función
*/
(() => {
    
    /*
        * Variable
    */
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Volar'
    }

    // Desestructuracion de objetos simple
    const { nombre, clave, poder } = avenger;
    console.log( nombre, poder );
    

    //Desestructuracion objeto estructurada
    const extraer = ( {nombre, poder}: any ) => {
        console.log( nombre, poder );
    }
    extraer(avenger);
    

    //Desestructuracion arreglo
    const avengers: string[] = ['Thor','Ironman','Spiderman'];
    
    //Forma simple
    const [primero, segundo, tercero] = avengers;

    console.log(primero);
    console.log(segundo);
    console.log(tercero);
    
    //forma estructurada
    const extraerArr = ( [jhon, alfonso, gomez]: string[] ) {
        console.log( jhon );
        console.log( alfonso );
        console.log( gomez );
    }
    extraerArr(avengers);

})();