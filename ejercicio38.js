/**
 * Dado un número, mostrar listado de los cuadrados de todos los numero naturales
 * hasta llegar al mismo.
 */
/**
 * My Soluction 
 */
function listaCuadrados(num){

    let result = '';
    for( let i=1; i<=num; i++){
        let mult = i*i;
        let separador = (i=== num)?'':','
        result += `${mult}${separador}`; 
    }
    return result;
}

console.log(listaCuadrados(6))


/**
 * Teacher solucion
 */
function cuadrado(numero){
    return numero * numero;
}

function mostrar(numero){
    let result = '';
    for(let i = 1; i<=numero; i++){
        result += `${cuadrado(i)}, `

    }
    return result
}
console.log(mostrar(8))