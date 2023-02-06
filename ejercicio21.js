/**
 * Dada una cadena de texto y un numero, recortar el string mostrando los x
 * primeros caracteres según el numero.
 */

function cortarTexto(texto, numero){

    return textoCortado = texto
                            .split('')
                            .splice(0,numero)
                            .join('')
}

/**
 * Teacher soluction
 */
function cortarTexto01(texto, hasta){

    let result = '';
    return result += ( typeof(texto) === 'string' && typeof(hasta) === 'number' )
             ? result = texto.substring(0,hasta)
             : result = 'Debe introducir bien los datos!!!!'
    
}
console.log('Texto recortado :', cortarTexto01('Benjamin Franklink', 4))
