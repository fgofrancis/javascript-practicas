/**
 * Dado un array crear otro con el primer y el último elemento del array original
 */
/**
my solucion
 */
function arrayFirstAndLast(array){

    let arrayNew = [];
    array.forEach( (elem, i)=>{
        if( (i === 0 ) || (i === array.length - 1) ){
            arrayNew.push(array[i])
        }
    });
    return arrayNew
}
/**
 * 
 * @param {teacher solution} array 
 * @returns 
 */
function arrayFirstAndLast01(array){
    let arrayNew = [];
    arrayNew.push( array[0], array.length - 1);//puedo enviar mas de un params en el push

    return arrayNew 
}
console.log('New Array: ', arrayFirstAndLast01([21,2,3,4,5,6,9]))