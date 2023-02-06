/**
 * Dado un array de enteros y un numero, detectar si esta lista de numero es 
 * una permutacion del 1 al numero aportado 
 * En este caso una permutacion es un secuencia de números en orden sin que falte
 * uno entre ellos. 
 */
function esPermutacion(lista_numero,orden){

    for (let i=0; i < orden; i++){
      console.log(lista_numero.indexOf(i+1))
      if( lista_numero.indexOf(i+1) < 0){
        console.log('no es permuta')
        return false;
        }
    }
    return true

}


console.log(esPermutacion([1,2,13,4,5],5))
