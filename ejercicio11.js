/**
 * Dado un texto y una busqueda, censurar todas las coincidencias de la busqueda
 * en el texto con [-CENSURADO-].
 * 
 * si el texto y la busqueda estan vacios mostrar "no puede leer el texto y la
 * busqueda" en el caso de q ambos parámetros no llegen
 */
/** a pesar de los parametros ser string le puedo enviar false y lo trata como boolean */
function censurar(texto = false, busqueda = false){

    let resultado = '';
    if(!texto && !busqueda){
        resultado = "no puede leer el texto y la busqueda"
    };

    if(texto && busqueda){
        // let resultado = texto.replace(busqueda, '--[CENSURADO]--');
         resultado = texto.replace(new RegExp(busqueda,'gi'), '[-CENSURADO-]');
    }

     return resultado
}
console.log(censurar('manana voy a el mercado y pasado voy tambien', 'voy'));
