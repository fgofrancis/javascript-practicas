
/**
 * Dado un numero devolver su tabla de multiplicacion completa
 * Given a number return its complete multiplication table
 */
function multTable(numero){
    let resultado = `# Tabla del ${numero} # \n`;
    for( i = 1; i <=12; i++){
        let multiplicar = i*numero;
        resultado += ` ${i} x ${numero} = ${multiplicar} \n`;
    }
    return resultado
}

console.log(multTable(11));
