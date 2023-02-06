/**
 * Dado un numero, mostrar un triangulo de asteriscos * con ese 
 * numero de filas
 */
function triangulo01(numero){

    let mitad =Math.floor(numero/2);
    let result = '';
    for(i=1; i<=numero; i++){
        for(j=1; j<=((numero * 2) -1); j++ ){ 
            if( j === numero){
                result += `* `
            }else{

                result += `1 ` 
            }

        }
        result +='\n' 
        console.log(result) 
    }
    return `Final..: ${result}`
}
// console.log(triangulo01(4));

function triangulo01(numero){
    let mitad = Math.floor(numero -1)
    let result = '';
    //Numeros de filas
    for (let fila = 0; fila<numero; fila++){
        let nivel = ' ';
        for(let columna = 0; columna < (2 * numero -1); columna++){
           
            console.log(mitad - fila, mitad + fila)
            if( mitad - fila <= columna && mitad + fila >= columna ){ 
                nivel +='*'
            }else{
                nivel +=' '
            }
        }
        result += `${nivel} \n`;
    }
    return result
}
console.log(triangulo01(14))
