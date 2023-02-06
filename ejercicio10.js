/**
 * Dado un número, mostrar una escalera con escalones de "[-]"
 * usando el número para los niveles de la escalera
 * 
 * Given a number, display an stair with steps of "[-]" 
 * using number for stair levels
 */
/**
 * 
 * @param {num de niveles} num 
 * @returns dibujo
 */
function stair(num){

    let dibujar = '';
    for(let j= 1; j<=num; j++){
        for(let i=1 ; i<=j; i++){
            dibujar += '[-]'; 
        }  
        dibujar += '\n';  
    }
    return dibujar;
}
console.log(stair(7));