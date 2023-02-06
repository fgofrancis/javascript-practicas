/**
 * Dado un array de string, devolver otro con los valores q esten formados
 * por mas de dos palabras
 */
/**
 * My soluction 
 */
function palabras(array){
    let result = [];
    let isEspacio = false;

     for( let elem of array){

       if( isEspacio = /[\s]/.test(elem)){
            result.push(elem);
       }
     }

    return result
}
// console.log(palabras(['Juan Ramon', 'Martha Perez','Francis', 'Maria', 'Ana Ybis','Mario Jose Iglesia']))

/**
 * Teacher soluction
 */
function palabras01(array){
    let result = [];

     for( let elem of array){

       if( elem.split(' ').length >= 2){
            result.push(elem);
       }
     }

    return result
}
console.log(palabras01(['Juan Ramon', 'Martha Perez','Francis', 'Maria', 'Ana Ybis','Mario Jose Iglesia']))