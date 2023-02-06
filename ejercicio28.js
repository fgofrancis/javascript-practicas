/**
 * Dado un numero calcular su factorial
 * 
 */

function factorial(numero){

    let fact = 1
    for ( let i=2; i<= numero; i++){
        fact = fact * i 
    }
    return `El factorial del ${numero} es: ${fact} `
}
console.log(factorial(5))