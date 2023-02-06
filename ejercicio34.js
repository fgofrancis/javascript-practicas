/**
 * Dado dos numero devolver la operaciones basica
 * entre ellos( sumar, restar, multiplicar y dividir)
 */

class calculadora01{
    constructor(a, b){
        this.a = a;
        this.b =b
    }

    suma(){
      return this.a + this.b
    };

    resta(){
      return this.a - this.b
    };

    multiplicar(){
        return this.a * this.b
    };

    dividir(){
      return this.a / this.b
    };

}
const l_calc = new calculadora01(8,2);
console.log(l_calc.suma())
console.log(l_calc.resta())
console.log(l_calc.multiplicar())
console.log(l_calc.dividir())

function calculadora(a, b){
   
    let resultado = `
la suma  de ${a} y ${b} es : ${a + b} 
la resta de ${a} y ${b} es : ${a - b} 
la multiplicación de ${a} y ${b} es : ${a * b}  
la división de ${a} y ${b} es : ${a / b}  
    `;
   return resultado
}
// console.log(calculadora(5,5))