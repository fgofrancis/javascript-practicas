/**
 * Dado un angulo comprobar que tipo de angulo es
 */
function angulo(grado){

    let result = 'xx';

    if (grado < 90){
        result = `${grado} es un ángulo Agudo`;

    }else if(grado === 90){
        result = `${grado} es un ángulo Recto`;

    }else if((grado > 90) && (grado < 180 )){
        result = `${grado} es un ángulo Obtuso`;

    }else if(grado === 180){
        result = `${grado} es un ángulo Llano`;

    }else if((grado > 180)&& (grado < 360) ){
        result = `${grado} es un ángulo Cóncavo`;
    }else{
        result = `Este valor ${grado} no es un ángulo válido`;
    }
    return  result
}
console.log(angulo(90));