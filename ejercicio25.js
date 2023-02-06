/**
 * Dado un string, ponerlo completo en mayuscula o minuscula dependiendo
 * si hay mas mayuscula o minuscula en este
 */
function mayOminsegun(texto){
   let result = ''; 
   let countMaguscula = 0;
   let countMinuscula = 0;
    for(let letra of texto){
        if( /[A-Z]/.test(letra)){
            countMaguscula++;
            console.log('mayuscula', letra)
        }
        if( /[a-z]/.test(letra)){
            console.log('minuscula', letra)
            countMinuscula++
        }
    }
    result = (countMaguscula > countMinuscula)
        ? texto.toUpperCase()
        : texto.toLowerCase()
   return result

}
console.log(mayOminsegun('vaMOs a CoMeR'));

