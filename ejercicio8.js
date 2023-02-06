/**
 * Dado un número entero, invertirlo y presentar el nuevo número
 * 
 * Given an integer, invertir it and present the new number
 */
function invertirNumber(num){

    let inverNumber = parseInt(num.toString()
                                  .split('')
                                  .reverse()
                                  .join('')
                              ) * Math.sign(num);
    
    // if(num < 0 ){
    //     inverNumber = inverNumber * -1;
    // };

    return inverNumber;
}

console.log(` El inverso es ${invertirNumber(13)}`);
