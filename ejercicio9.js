/**
 * Dado dos array devolver un array con solo los elementos comunes entre ambos
 * 
 * Given two arrays return an array with only the common elements between them.
 * 
 * My solution
 */
function interception(array1, array2){

    arrayCommon = [];
    array1.forEach( (elem, index)=>{

        if (array2.includes(elem)){
            arrayCommon.push(elem); 
        };

    })
    return arrayCommon; 
}
// console.log( interception([1,2,7,9], [5,4,2,7]));

/**
 * Teacher solution
 */
function ElementosComunes(array1, array2){

    const comun = array1.filter(elem =>{
        return array2.includes(elem)
      });

    return comun
}
console.log( ElementosComunes([1,2,17,9,'hola'], [5,4,2,'hola',7]));