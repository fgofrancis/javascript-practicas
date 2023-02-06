/**
 * Dado un array devolver el mismo con sus elementos multiplicado al cuadrado
 */
function arrayCudrado(array){
   
    // const arrayCuadrado = [];
    const arrayCuadrado = array
                          .filter( elem => typeof elem === "number")
                          .map( (elem)=>{
                             return Math.pow(elem,2 )
                          })
    return arrayCuadrado
}
console.log(arrayCudrado([1,2,3,5,4,'dsfs']))
