/**
 * Dado un numero mostrar la serie fibonacci.
 * la serie fibonacci es una orden de numero donde cada numero es la suma de los dos
 * anteriores
 */
function fibonacci(numero){

    let serie = [0, 1];
    for (let i = 2; i<=numero; i++){
       serie.push(serie[i - 1] + serie[i - 2])  
    }
    
    return [serie, serie[numero]]
}
console.log('Serie Completa: ', fibonacci(15)[0]);
console.log('Resultado fibonacci: ', fibonacci(15)[1])