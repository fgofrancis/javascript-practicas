/**
 * Dado un array de numeros, devolver un array nuevo con los numero pares e impares
 */

function paresImpares(array){

    let arrPares =[];
    let arrImpares =[];

    for (let elem of array){
        if ((elem % 2)=== 0){
            arrPares.push(elem)
        }else{
            arrImpares.push(elem)
        }
    }
    // return [arrPares, arrImpares]
    return {
                pares:arrPares,
                Impares: arrImpares
            }
}
/**
 * Solucion Teacher
 */
function paresImpares01(array){

    return {
        pares: array.filter(elem => elem % 2 === 0),
        impares: array.filter(elem => elem % 2 !== 0)
    }
}
    console.log(paresImpares01([1,21,3,4,5,19,10]))