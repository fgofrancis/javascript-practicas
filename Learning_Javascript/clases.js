class Coche {
    constructor(modelo,velocidad,antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad
    }

    aumentarVelocidad(){
        this.velocidad += 1; 
    }

    reducirVelocidad(){
        this.velocidad -= 1;
    }
}

class Autobus extends Coche{
    constructor(modelo,velocidad,antiguedad){
        super(modelo,velocidad,antiguedad),
        this.altura = 5;
    }
    mostrarAltura(){
        return 'La altura es : ' + this.altura
    }
}

var autobus1 = new Autobus('DAHIASUT',300, 2021);
console.log(autobus1);
console.log(autobus1.mostrarAltura());


var coche1 = new Coche('BMW',500, 2021);
var coche2 = new Coche('Audi',100, 2024);
var coche3 = new Coche('Mercedez',500, 2011);
var coche4 = new Coche('Honda',400, 2025);

document.write('<h1> Velocidad: '+ coche1.velocidad + '</h1>');
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
document.write('<h1> Velocidad: '+ coche1.velocidad + '</h1>');

