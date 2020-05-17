(() => {
    // Cremos la interfaz y aqui definimos las variables con su tipo de dato
    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string;
    }


    const enviarMision = ( xmen:Xmen ) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    }

    const regresarAlCuartel = ( xmen:Xmen ) => {
        console.log(`Regresando a ${xmen.nombre} a la misión`);
    }

    const Poder = ( xmen:Xmen ) => {
        console.log(`El poder de ${xmen.nombre} es ${xmen.poder}`);
    }

    // Uso de los datos
    const wolverine:Xmen = {
        nombre: 'Jhon',
        edad: 24
    }

    // Invocando las funciones
    enviarMision( wolverine );
    regresarAlCuartel( wolverine );
    Poder( wolverine );

})();