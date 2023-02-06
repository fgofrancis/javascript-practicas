/**
 * Dada una urna de votos(array de votos) elegir los ganadores por orden de mayor a menor
 */

const urna = (['PRM', 'FUP','PLD', 'PLD', 'PLD', 'PRM', 'PRM', 'FUP', 'FUP', 'PLD', 'PLD', 'PLD', 'PGS'])

function elecciones(votos){

    let mapeo = {}
    for (let voto of votos){
        
        if(!mapeo[voto]){
            mapeo[voto]= 1
        }else{
            mapeo[voto]++

        }
    }
    console.log(mapeo)
    return Object.keys(mapeo) 
                 .map( (p) =>({paritido:p, times:mapeo[p]})) //Denny por q debe llevar parentesis el map?
                //  .map( p =>{paritido:p, times:mapeo[p]}) //Denny esto da error.
                 .sort((a,b)=> b.times - a.times)
}
console.log(elecciones(urna))


