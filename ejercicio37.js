/**
 * Dado un texto devolver la letra que mas aparece en el mismo
 */
function letraMasRepetido(texto){

    let texto_repeat = {};
    let texto_limpio = texto.split('').filter(elem =>/[áéíóú\w]/gi.test(elem))
    texto_limpio.forEach( (letra, i)=>{

        if(texto_repeat[letra]){
            texto_repeat[letra]++
        }else{
            texto_repeat[letra] = 1

        }
    })

    console.log(texto_repeat);
    console.log(Object.keys(texto_repeat));

    return  Object.keys(texto_repeat)
        //   .map((elem)=>())
          .map( (elem)=>({name:elem, times:texto_repeat[elem]})) //Denny, ? el paréntesis
          .sort( (a,b)=> b.times - a.times)
          .slice(0,1) //toma un elemento del array a partir de la posicion 0
          .map( (el)=> el.name)
          .join('')
    
   
}
// console.log(`La letra que mas se repite en el texto  es ${letraMasRepetido('isabela ')}`)

/**
 * Dado un array o un texto devolver el elemento que mas aparece en el mismo
 */
function elementoMasRepetido(datos){
    let mapeo = {}, mas_frecuente ='', valor_mas_frecuente = 0;
        
    if (typeof datos ==='string'){
        datos = datos.split(' ')
    }

    for(let elem of datos){
        if(mapeo[elem]){
            mapeo[elem]++
        }else{
            mapeo[elem]= 1
        }
    }

    for( let elem in mapeo){

        if(mapeo[elem] > valor_mas_frecuente){
            valor_mas_frecuente = mapeo[elem];
            mas_frecuente = elem;
        }
    }
    return {
        mas_frecuente,
        valor_mas_frecuente
    } 
}

console.log(elementoMasRepetido([1,2,3,4,5,5,5,5,6,7]))
console.log(elementoMasRepetido('hola mi estimado amigo hola hola'))