/**
 * Dada dos cadenas de texto, crear un algoritmo que compruebe si son anagrama
 * 
 * Dos palabras son anagrama si contiene las mismas cantidad de letras
 */
/**
* My solucion
 */
function anagrama(texto1, texto2){

    let result = `Estas palabras ${texto1} y ${texto2} `;
    // let arrTexto1 = texto1.split('');
    let limpiar_texto1 = texto1.replace(/[^\w]/gi,'') // /[^\w]/gi elimina todo lo q no es una letra
                          .toLowerCase() 
                          .split('') // Convierte un string a un array de string
                          .sort()
                          .join();

    let limpiar_texto2 = texto2.replace(/[^\w]/gi,'') // /[^\w]/gi elimina todo lo q no es una letra
                          .toLowerCase() 
                          .split('') // Convierte un string a un array de string
                          .sort()
                          .join();

    result += (limpiar_texto1 === limpiar_texto2)? 'Son Anagrama': 'No son Anagrama'   
    return result
}

function clearTexto(texto){
    return texto
        .replace(/[^\w]/gi,'')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

function anagramas01(texto1, texto2){
    return clearTexto(texto1) === clearTexto(texto2)
}

console.log(anagramas01('Riesgo', 'Sergios'))
