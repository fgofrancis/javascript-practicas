/**
 * Dado un array de numero sacar la media de ellos
 */

function media(array){

   let accum =  array.reduce((valor_acumulado, valor_actual)=>{
                    return valor_acumulado + valor_actual
                },0);

   return accum / (array.length)

}
console.log(media([1,2,3,4,5,6]))