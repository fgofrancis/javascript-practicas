/**
 * Dado dos numero, sacar un numero aleatorio entre ellos
 */

function numAleatorio(min, max){
   
    return Math.round(Math.random()* (max - min)) + min
    return Math.floor(Math.random()* (max - min)) + min //usar cualquiera de los dos
}
console.log(numAleatorio(3,8))