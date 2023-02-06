'use strict'

//Prueba con Let y var

// Prueba con var
var numero = 40;
console.log(numero); //valor 40

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}
console.log(numero); //valor 50

//Prueba con Let
var texto = 'Curso Francis';
console.log(texto); // valor Curso Francis

if(true){
    let texto = 'Soy let';
    console.log(texto); //valor Soy let
}

console.log(texto);// valor Curso Francis
