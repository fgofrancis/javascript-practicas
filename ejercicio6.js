/**
 * Dibuar un cuadro hueco con asterisco
 * 
 * Draw a hollow box with an asterisk
  * 
 *
 * Exemple
****
*  *
*  *
*  *
****
* My solution
*/

function lado(puntos){

    let lado ='';
    for (let i=1; i<=puntos; i++){
        lado += '*';
    }
    return lado
}

function ladoInter(puntos){
    let ladoInter = '';
    for(let i=1; i<= puntos; i++){

        if((i== 1 )|| (i == puntos)){
            ladoInter += '*';
        }else{
            ladoInter += ' ';
        }
    }
    return ladoInter
}

function drawBox(puntos){

    let dibujo = `${lado(puntos)} \n`;
    for (let i=1; i<=(puntos - 2); i++){
        dibujo += `${ladoInter(puntos)} \n`
    };

    dibujo += `${lado(puntos)} \n`;
    return dibujo
}
//  console.log(drawBox(4));

/**
 * Teacher solution
 */

function lado01(puntos){
    let lado = '*'
    for(let i=1; i<puntos; i++){
        lado +='*';
    }
    return lado
}

function cuadrado(puntos){

   let dibujo =  `${lado01(puntos)}\n`;
   let contenido = '';

   for (let i=1; i<=(puntos - 2); i++){
       
        contenido = '*';
        for(let j=1; j<=(puntos - 2); j++){
            contenido += ' ';
        };
        
        contenido += '*';
        dibujo += `${contenido} \n`;
   };
   dibujo += `${lado01(puntos)}`;

   return dibujo
}
console.log( cuadrado(8));