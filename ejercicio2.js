'uses strict'
/**
 * Dado una cadena de texto, comprobar si es un políndramo o no.
 * los políndramos son palabra que se leen igual aun estando invertidas
 * for example: ana, otto, bob, allivessevilla 
 * 
 * Given an text string, check if it is a polydram or not.
 * The polydrams are words that read the some even when they are inverted.  
 */

function palydram(texto){

    let invertido = texto
                    .split('')  //convierte string a array
                    .reverse() //invierte un array 
                    .join(''); //convierte un array a string

    result = (invertido === texto)?true:false;
    return result
} 

console.log('Result: ', palydram('hola'));
