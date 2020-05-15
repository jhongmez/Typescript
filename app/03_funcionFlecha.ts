(function() {
    
    //Funcion normal
    let miFuncion = function( a:string ) {
        return a.toUpperCase();
    }

    //Funcion flecha
    const miFuncionF = ( a:string ) => a.toUpperCase();
    
    //Operaciones
    const sumarN = (a:number, b:number) => a + b;

    const hulk = {
        nombre: 'hulk',
        smash() {
            setTimeout( () => {
                console.log(`${this.nombre} smash!!`);
            }, 1000);
        }
    }

    hulk.smash();

})();