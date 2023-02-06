/**
 * Dado un objeto, comprobar si existe una propiedad en concreto 
 */

function exitepropiedad(obj, propiedad){


    return typeof obj === 'object' && 
           typeof propiedad ==='string'&&
           obj.hasOwnProperty(propiedad) //verifica si una propiedad existe en un obj, ambos funcionan
        //    hasOwnProperty.call(obj, propiedad) //verifica si una propiedad existe en un obj
}

let usuario ={
    nombre:'Francis',
    apellido:'Figuereo'
}
console.log(exitepropiedad(usuario, 'apellido'))