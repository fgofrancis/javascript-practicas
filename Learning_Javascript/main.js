
 var nombre = "Francis Figuereo";
 var altura = 152;

 var concatenacion = nombre+ " "+" "+ altura
//  document.write(concatenacion); /**imprime en la pantalla */
/*
var datos = document.getElementById('datos')
// datos.innerHTML = concatenacion;
datos.innerHTML = `
    <h1>Soy la caj de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
`;

if(altura > 190){
    datos.innerHTML += `
        <h1>Eres una persona ALTA, mide ${altura}<h1>
    `;
}else{
    datos.innerHTML += `
        <h1>Eres una persona BAJITA, mide ${altura}<h1>
    `;
}

for( var i = 2000; i<=2020; i++){
    datos.innerHTML += `<h3>Estamos en el año: ${i}</h3> `;
}

*/

function muestraMiNombre(nombre, altura){
    // var datos = document.getElementById('datos')
    var misDatos = `
        <h1>Soy la caj de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura} cm</h3>
    `;
    return misDatos;
}

function imprimir(){
    var datos = document.getElementById('datos');
    datos.innerHTML = muestraMiNombre('Francis Edwar', 180);
}
// muestraMiNombre('Francis Edwar', 180);
imprimir();

var nombres =['Francis', 'Ybis Segura', 'Justa'];

document.write('<h1>Listado de nombres </h1>');
/*
for( i= 0; i< nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}
*/
// nombres.forEach( function(nombre){
//     document.write(nombre + '<br/>')
// })
nombres.forEach( (nombre)=>{
    document.write(nombre + '<br/>')
});

var coche = {
    modelo:'Mercedes Benz Clase A',
    maxima:500,
    año: 2023,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.año)
    },
    propiedad:'Valor aleatorio'
};
document.write('<h1>' +coche.modelo +'</h1>')
coche.mostrarDatos();
console.log(coche);

var saludar = new Promise((resolve, reject)=>{

    setTimeout( ()=>{
        let saludo = 'Muy buenos dias a todos!!!';
        saludo = false;
        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo disponible')
        }
    }, 2000);
});

saludar.then(resultado =>{
    alert(resultado);
})
.catch(err=>{
    alert(err);
})

var promiseSaludos = new Promise( (resolve, reject)=>{

})

promiseSaludos
    .then( res =>{
        alert(res);
    })
    .catch( err =>{
        alert(err)
    })

var primiseT = new Promise( (res, reject)=>{

})
primiseT
    .catch()
    .catch()