/**
 * Dado un número mostrar todos los numeros desde ese al 0 de 8 en 8
 * en una lista con guiones, donde cada numero debe inicial con No.
 */
/* My solution */
function listaIntercalada(numero){

    if(!(numero > 8)){
        result = console.log('Numero debe ser mayor a 8')
    };
    
    if((numero > 8)){
        const listNumeros = [];
        while(numero >= 0){
    
            listNumeros.push('No.'+ numero);
            numero = numero - 8;
        }
        result = listNumeros;
        
    };
    return result;

}
// console.log(listaIntercalada(100));

function listaNumerica(numero){
    let listadoNumerico = `-- Lista del  ${numero} al 0 -- \n`;

    // console.log(encabezad);
    while(numero >= 0){
        listadoNumerico += '- No.' + numero + '\n';
        numero = numero - 8;
        // console.log(list);
    }
    listadoNumerico += '--- Fin  ---';
    return listadoNumerico;

}

console.log(listaNumerica(100));
