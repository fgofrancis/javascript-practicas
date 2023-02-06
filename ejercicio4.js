/**
 * Dada una cadena de caracteres darle la vuelta e invertir el orden de esta,
 * sin utilizar métodos propios del lenguaje
 * 
 * Given a string of characters, flip it over and reverse the order of string,
 * without using the language´s own methods
 */

function invertirCadena(cadena){

    let cadenaInvertida = '';
    for (let c of cadena){
        cadenaInvertida = c + cadenaInvertida
    }
    return cadenaInvertida
}
// console.log('Cadena invertida', invertirCadena('123456'));

/**
 * Other forma, using the language´s own methds 
 */
function invertirCadena01(cadena){

    let cadenaInvertida = cadena.split('').reverse().join('');

    return cadenaInvertida
}

console.log('Cadena invertida', invertirCadena01('1234567'));