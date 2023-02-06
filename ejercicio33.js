/**
 * Haz un reloj q en tiempo real vaya mostrando la hora cada segundo.
 * 
 * Solo puedes usar el objecto date para conseguir la hora por primera vez,
 * pero no para actualizar la hora.
 */

class relojR {

    constructor(){
        this.fecha = new Date(); 
        this.horas = this.fecha.getHours();
        this.minutos = this.fecha.getMinutes();
        this.segundos = this.fecha.getSeconds();   
    }

    actualizar(segundos){
        this.segundos += segundos;

        // Actualizar los segundos
        if( this.segundos >= 60){
            this.minutos++;
            this.segundos = 0;
        }

        // Actualizar los minutos
        if ( this.minutos >=60){
            this.horas++;
            this.minutos = 0;
        }

        // Actualizar las horas
        if (this.horas >= 24){
            this.horas = 0;
        }
    }

    mostrar(){
        this.actualizar(1);
        console.log(`${this.horas}:${this.minutos}:${this.segundos}`)
    }

    encender(){
        setInterval( ()=>{
            this.mostrar()
        }, 1000)
    }

}

let mi_reloj = new relojR();
mi_reloj.encender();


function relojRapido(){

    setInterval( ()=>{
        const fecha = new Date();
        const horas = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();

        console.log(`${horas}:${minutos}:${segundos}`)
    }, 1000)
}
// relojRapido()