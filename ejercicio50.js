/**
 * Dado un numero devolver cuantos bucles tiene
 * un numero tiene un bucle cuando tiene un circulo cerrado cuando lo dibujas
 * ejemplo:
 * 6 tiene un bucle, 8 tiene dos bucle, 1 no tiene bucle
 */
function bucle(numero){

    let result = 0
    let bucle1 = [0,6,9];
    let bucle2 = [8];
    let num = numero.toString().split('');

    for (let elem of num){
       if( bucle1.includes(parseInt(elem))){
            result++
       }else if(bucle2.includes(parseInt(elem))){
        result += 2
       }
    }

    return result
}
console.log(bucle(7862900))