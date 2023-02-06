/**
 * Dada una cadena de texto contar cuantas vocales y cuantas consonates tiene
 */

function countLetter(cadena){
    
    let consonantes = 0, vocales = 0;
    let cadena_limpia = cadena.split('') //lleva cadena a array
                              .filter( elem=>/[áéíóú\w]/gi.test(elem) && isNaN(elem))
                              .join('') //lleva array a cadena

    for (let letra of cadena_limpia){
        
        if( /[áéíóúaeiou]/gi.test(letra)){
            vocales++
        }else{
            consonantes++
        }
    }
    return [vocales,consonantes]
    // return `La cadena ${cadena} tiene : ${vocales} vocales y ${consonantes} consonantes`
}
let letras = countLetter('Ybis  :;%&$ A 45,7')
console.log('Vocales: ', letras[0])
console.log('Consonantes: ', letras[1])