/**
 * Cuanto es el porciento x de un número x
 * 
 * What is the percent x of a number x
 */

function calcPercent(percentNum, numero){

    let operation = (percentNum / 100) * numero;
    let result = `El ${percentNum}% de ${numero} es ${operation}`;

    return result
}

console.log('Porcentaje: ', calcPercent(13, 87));