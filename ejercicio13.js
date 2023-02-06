/**
 * Dado un array dividirlo en tantos sub-arrays como sea necesario segun 
 * lo indique el numero
 * 
 * Given an array, divide in into as many sub-arrays as necessary according to the number indicated.
 * 
 */
// function divArray(array, num_elementos){

//     let arrays = [];
//     let count = 0;
//     let arraySub = [];
//     array.forEach( (arr, index)=>{
        
//         if((arraySub.length - 1) !== num_elementos){
//             arraySub.push(arr);
//           }else{
//             arrays.push()
//           }
       
    
//     })
//     return arrays
// }

// console.log('ver...:', divArray([1,2,3,4], 2));

function divArray01(arrayPrincipal, numElementos){

    let arrays = [];
    for(let elem of arrayPrincipal){

        let ultimo = arrays[arrays.length - 1];
        console.log('elem..: ', elem)
        // console.log('ultimoInicio..: ', ultimo)
        if(!ultimo || ultimo.length === numElementos){
            arrays.push([elem])
            console.log('arrays..: ', arrays)
            console.log('elem into..: ', elem)
        }else{
            // console.log('ultimo.length..: ', ultimo.length)
            ultimo.push(elem);
            // console.log('ultimo..: ', ultimo)
        }
    }
    return arrays
}
console.log(divArray01([1,2,3,4,5,6,7,8], 3));
/**
 * 
 * @param {array} list 
 * @param {un entero} divisor 
 * @returns un array de arrays
 * Me gustó esta solucion 
 */

// function divideArrays(list: any[], divisor: number): any[][] { si es typescript

function divideArrays(list, divisor)  {
 
    let newList = new Array();
    // let newList: any[][] = new Array(); si es typescript
 
    while(list.length >= divisor) {
        // El metodo splice toma elimina parte de un array y lo devuelve
        newList.push(list.splice(0, divisor));
    }
 
    if(list.length) newList.push(list);
 
    return newList; 
 
}
// console.log( divideArrays([1,2,3,4,5,6,7,8], 3 ) )