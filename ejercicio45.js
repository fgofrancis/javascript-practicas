/**
 * Dado un array de alumnos (nombre, notas), mostrar cuanto alumnos estan
 * suspenso y cuantos aprobados 
 */

function alumnos(alumnos){

    let aprobadoCount = 0;
    let supendoCount = 0;

    // let array_work = Object.keys(alumnos)
    for (let elem of alumnos){
        if (elem[1] > 70){
            aprobadoCount++
        }else{
            supendoCount++
        }
    }
    return  {aprobados:aprobadoCount,supenso:supendoCount}
}
// console.log(alumnos([['Francis', 99],
            //         ['Ybis', 90],
            //         ['Juan', 40],
            //         ['Jose', 47],
            //         ['Maria', 59]])
            // )

/**
 * My solucion
 */
function alumnos01(alumnos){

    let aprobadoCount = 0;
    let supendoCount = 0;

    // let array_work = Object.keys(alumnos)
    for (let elem of alumnos){
        if(elem.nota >= 70){
            aprobadoCount++
        }else{
            supendoCount++
        }
    }
    return  {aprobados:aprobadoCount,supenso:supendoCount}
}
console.log(alumnos01([{nombre:'Francis', nota:99},
                    {nombre:'Ybis', nota:90},
                    {nombre:'Juan', nota:40},
                    {nombre:'Jose', nota:47},
                    {nombre:'Maria', nota:59}])
            );
            
