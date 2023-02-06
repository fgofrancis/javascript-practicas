/**
 * Dado un array de numeros, devolver el array sin elementos duplicados
 */
/** 
 *   My solucion
 */
function arraySinDuplicado(array = []){

    let arrayresult = [];
    array = array.join('')
                 .replace(/[a-z]/gi,'')
                 .split('')
                 .sort()
    
    array.forEach( (p,i)=>{
        if((array[i] - array[i + 1]) !== 0){
            arrayresult.push(array[i])
        }
    })
    return arrayresult
}

function arraySinDuplicado01(array){

    array = array.filter( elemento =>{
        return typeof elemento === 'number';
    });

    let array_sin_duplicado = new Set(array) //Crea un objecto sin duplicado

    return Array.from(array_sin_duplicado) //convierte el obj en un array

}

function arraySinDuplicado02(array){
/** haremos lo mismo pero ahora sumaremos todos los elems del array retornado */
    let array_sumaElementos = 0;
    array = array.filter( elemento =>{
        return typeof elemento === 'number';
    });

    let array_sin_duplicado = new Set(array) //Crea un objecto sin duplicado

     array_sumaElementos = Array.from(array_sin_duplicado)
                               .reduce((accum, current)=> accum + current)
    return [Array.from(array_sin_duplicado), array_sumaElementos]
  

}
console.log(arraySinDuplicado02([1,2,2,3,4,4,6,7,8,8,'xeaASD']))