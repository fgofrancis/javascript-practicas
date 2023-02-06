/**
 * Dado un numero encontrar todos sus numero divisores
 * 
 */
/*
* My solucion
 */
function divisores(numero){

    let result = `Los numero divisible del ${numero} son: \n`;
    for (let i=1; i<=numero; i++){

        if((numero % i)=== 0){
            result += `${i} \n`;
        }
    }
    return result
}
// console.log(divisores(5));

/**
 * Teacher solution
 */
function divisor(numero,devisor){

    if(numero % devisor === 0){
        return devisor
    }
    return 0;
}
//  console.log(divisor(9, 13))

function mostrarDivisores(numero){
    let result = '';
    for(let i=1; i<=numero; i++){

        let isDivisor = divisor(numero,i)
        if(isDivisor) result += `${isDivisor}\n`;         
    }
    return result
    
}
console.log(mostrarDivisores(4))