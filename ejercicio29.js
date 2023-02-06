/**
 * Dado un numero, indicar si es un numero capicua
 * los numeros capicua se leen igual de izq a derecha o de derecha a izq.
 * example:
 * 2002 // true
 * 2014 // false
 */
function numCapicua(numero){

    let numInvertido = ''
    numInvertido = parseInt(numero
                         .toString()
                         .split('')
                         .reverse()
                         .join(''))

    return (numero === numInvertido )
     
}
console.log(numCapicua(2052))