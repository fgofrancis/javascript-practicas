/**
 * Dada una cadena de texto, devolver cuantas vocales tiene
 * 
 * Given a text string, return how many vowels it has 
 */
/** My solution */
function contarVowels(texto){

    let cantidaVowels = 0;
    let vowels = ['a','e','i','o','u','á','é','í','ó','ú'];
    let texto_limpio = texto.replace(/\s+/g,'').toLowerCase();//elimina espacios en blanco
    // let texto_limpio = texto.split(' ').join('').toLowerCase(); //elimina espacios en blanco
    for( let letra of texto_limpio){

        if(vowels.includes(letra)){
            cantidaVowels++
        }
    }

    
    return cantidaVowels
}
// console.log(contarVowels('Francis Figuereo Asunción'))

/** Teacher Solution */
function contarVowels01(texto){
    let coincidencias = texto.match(/[aeiou]/gi);
    
    return coincidencias ? coincidencias.length:0;
}
console.log(contarVowels01('Frkx '))