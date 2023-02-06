/**
 * Dado dos número, devolver cuantos números impares hay entre ellos
 * 
 * Given two numbers return how many odd numbers are beetwen them  
 */
function findNumberOdd(num1, num2){

    if (num1 >= num2){
        return `El primer número: ${num1} debe ser Mayor al Segundo: ${num2} `
    };

    let resul = 0;
    let count = 0;
    for( let i = num1; i<=num2; i++){
        resul = (i % 2);
        if((resul !== 0) ){
            count ++; 
        };
    };
    return `Entre el ${num1} y el ${num2} hay: ${count} números impares`
};

console.log(findNumberOdd(102,104));