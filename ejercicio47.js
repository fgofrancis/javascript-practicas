/*
Dado un array de objetos, devolver cuales son las afecciones mas comunes
de los usuarios
Ejemplo: 
{ informatica: 7, cine: 3, beisbol: 2}
*/

const usuarios =[
    {nombre:'Victor', aficiones:['informatica', 'cine', 'video juego']},
    {nombre:'Juan', aficiones:[ 'cine', 'fubol','tenis']},
    {nombre:'Paco', aficiones:['informatica', 'cine', 'surf']},
    {nombre:'Pepe', aficiones:['informatica', 'cine', 'video juego','surf']}
]

function aficiones(arrayObj){
    let mapeo = {}

    for ( let obj of arrayObj){

        for (let aficion of obj.aficiones){
            
            if (!mapeo[aficion]){
                mapeo[aficion]= 1
            }else{
                mapeo[aficion]++
            }

        }
    }
    console.log(mapeo)
    return Object.keys(mapeo)
                 .map( juego=>({aficion:juego, times:mapeo[juego]}))
                 .sort( (a,b)=>(b.times - a.times))
}
console.log(aficiones(usuarios));
