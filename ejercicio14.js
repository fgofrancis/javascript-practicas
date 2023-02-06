/**
 * Dado un string y un numero, repetir el string tantas veces como el numero lo indique
 * 
 * Given a string and a number, repeat the string as many times as the number indicates
 * 
 */
/**
 * funcion clasica
 */
function repeatString(texto, numero_repeticiones){

    let result = '';
    let count = 1;
    while (count <= numero_repeticiones){
        result += `${count} - ${texto} \n`;
        count++
    }
    return result
}
// console.log(repeatString('Francis', 5));

/**
 * Funcion prototipo
 */
String.prototype.repiteme = function (numero_repeticiones){

    let result = '';
    let count = 1;
    while (count <= numero_repeticiones){
        result += ` ${count} - ${this} \n`;
        count++
    }
    return result
}
console.log('Francis Figuereo web'.repiteme(5))