/**
 * Dado un string, devolver todos los posibles substring
 */

function substringAll(palabra){

    let result = [];

    for (let letra in palabra){
        let comienzo = parseInt(letra);

        for(let i = 0; i<=palabra.length - comienzo; i++){
            let final = parseInt(i) + parseInt(comienzo);

            result.push(palabra.substring(comienzo, final))
        }
    }
    return result.filter( elem => elem.length >=1)
}
console.log(substringAll('hola'))