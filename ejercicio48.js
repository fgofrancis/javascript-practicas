/**
 * Dado un string devolver cuales son las letras que aparecen una sola vez
 * y cual es la primera
 */
function solounavez(texto){

    let contadores = {}, 
        resultado =[],
        letras = texto.split('').filter(letra=> letra.trim().length >=1);

    for (let letra of letras){

        if(!contadores[letra]){
            contadores[letra] = 1
        }else{
            contadores[letra]++
        }
    }
    console.log('Contadores..: ', contadores)
    for (let letra in contadores ){
        if(contadores[letra]>= 2){
            delete contadores[letra]
        }else{
            resultado.push(letra)
            console.log(letra)
        }
    }
    return [resultado, resultado[0], contadores]
}
console.log(solounavez('frase frase hoy'))