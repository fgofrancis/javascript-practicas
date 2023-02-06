/**
 * Dado un array de numeros devolve el valor mas alto y el mas bajo
 */
function valorAltaBajo(arrayNumero){

    let arrayOrder =  arrayNumero.sort((a,b)=> a - b)
    return {
        menorValor:arrayOrder[0],
        mayorValor:arrayOrder[arrayOrder.length - 1]
    }

}
console.log(valorAltaBajo([13,11,38,7,6]))