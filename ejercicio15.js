/**
 * Dado una cadena de texto, devolver el caracter mas usado
 * 
 * Given a string, return the most used character
 */
function mostUsed( texto){

    // let texto_limpio = texto.replace(/\s+/g,'').toLowerCase(); //eliminan espacios
    let texto_limpio = texto.split(' ').join(''); //eliminan espacios
    console.log('Limpia ', texto_limpio);

    let map = {};
    let maxima_repeticiones = 0;
    let letra_mas_repetida  = 0;
    
    for(let c of texto_limpio){

        if(!map[c]){
            map[c] = 1
        }else{
            map[c]++
        }
    }

    /* Other away */
    console.log(map)
    // Object.keys(map) convierte un Objecto en un array
    console.log( Object.keys(map)
                            .map(l =>({letra:l, times:map[l]  })) 
                            .sort((a,b)=> b.times - a.times )
               )

    for(let caracter in map){
        
        if(map[caracter] > maxima_repeticiones){
            maxima_repeticiones = map[caracter];
            letra_mas_repetida = caracter
        };

    }
    return `El caracter mas repetido en la palabra ${texto} es la: ${letra_mas_repetida.toUpperCase()} con ${maxima_repeticiones} repeticiones`

}
console.log( mostUsed('Ybis Segura alia ju solis'));