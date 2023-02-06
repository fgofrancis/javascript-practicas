/**
 * Dado dos numero indicar cual es menor y cual es mayor
 */
function numeroMayor(num1, num2){
    let result = ''; 
    // if(typeof(num1)!=="number" || typeof(num2)!=="number" ){
    //     return 'Debe entrar valores númericos!!!!'
    // };

    if (num1 === num2){
        result = `Ambos numero ${num1} y ${num1} son iguales!!!`

    }else if(num1 > num2){
        result = `El mayor es el ${num1}\n`
        result += `El menor es el ${num2}`
    }else if(num2 > num1){
        result = `El mayor es el ${num2}\n`
        result += `El menor es el ${num1}`
    }else{
        result = `Introduce números correctos!!!`

    }
    return result
}

console.log(numeroMayor(5,'jh'))