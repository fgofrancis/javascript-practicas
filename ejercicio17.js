/**
 * Dado un numero mostrar los numeros del 1 hasta el numero. pero para multiplo de 3
 * imprimir tresm y para multiplo de 6 imprimir seism y para multiplo de 3 y 6
 * imprimir tresmseism
 */

function multiplos(numero){
    let result = '';
    let resultNumero = 0;

    if( ((numero % 3) === 0) && ((numero % 6) === 0) ){
        result = `tresMseisM`
    }else if ( (numero % 3) === 0){
        result = `tresM`;
    }else if ( (numero % 6) === 0){
        result = `seisM`    
    }else{
       return resultNumero = numero
    }      
    return result 
}


function multiplosImprimir(numero){

    let result = '';
    for (let i=1; i<=numero; i++){
       result +=  `${multiplos(i)} \n`
    }
    return result
}
console.log(multiplosImprimir(11));
// console.log(multiplos(18));