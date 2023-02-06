/**
 * Dada una palabra, buscar en una frase y devolver cuantas veces aparece la frase 
 * y la palabra deben ser parámetros de una función.
 * 
 * Given a word, search a phase and return how many times the phase occurs.
 * The word must be paramter of a function.
 */

/* My solution */
function coincidencias(phase, word){
    let words = phase.toLowerCase().replace(/[!¡#$%,.]/gi,'').split(' ');
    let count = 0;

    words.forEach( (p, index)=>{
       
        if (p === word){
            count += 1 
        }
    })
    return [words, word, count]
}
//  console.log('words : ', coincidencias('hola, Jose hiJo de Maria y Jose. MaRia, MarIa', 'jose'))

/**
 * Solucion Teacher
 */
function coincidencias01(frase, busqueda){

    let texto_limpio = frase.toLowerCase().replace(/[!¡,.#]/gi,'').split(' ');
    let resultado = 0;

    if (texto_limpio.includes(busqueda)){

        let palabras = texto_limpio;
        let mapa = {};

        for(let palabra of palabras){

            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1
            }
        }
       resultado = mapa[busqueda];

    }else{
        resultado = 0;
    }
    return resultado
};

console.log('Numero de coincidencia de la frace: ',
            coincidencias01('hola, Jose hiJo de Maria y Jose. MaRia, MarIa', 'jose')
)
