/**
 * Dada una cadena de texto, poner en mayuscula la primara letra de cada palabra
 * y luego devolver la cadena
 */
function enMayuscula(texto){
    let result = '';
    // result = texto.split('')
    for(let i  in texto ){

        if((texto[i - 1] == ' ') || (parseInt(i) === 0)){
            result += texto[i].toUpperCase()
        }else{
            result += texto[i]
        }
    }
    return result
}

function enMayuscula01(texto){
    const str = 'Mozilla';
    let result = [];
    for(let palabra of texto.split(' ')){
        // result.push(palabra[0].toUpperCase()+ palabra.substring(1))
        console.log(palabra)
        console.log(palabra.substring(1))
        console.log('Mozilla', str.substring(4, 7));
        console.log('Mozilla 4', str.substring(4));
// Expected output: "oz"
    }
    return result.join(' ')
}
console.log(enMayuscula01('juan ramon cácerez pérez'));

