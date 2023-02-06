/**
 * Dado un array de objectos de peliculas (titulo, director, vista)
 * mostar todas las peliculas indicando cual has visto y cual no.
 */

const movies = [
    {titulo:'El padrino', director:'Frank Capra', vista:true},
    {titulo:'Fuerza Delta', director:'Alpacino', vista:false},
    {titulo:'Fuego contra Fuego', director:'Robert de Niro', vista:true},
    {titulo:'Anciedad', director:'Ybis Segura', vista:false},
    {titulo:'EL Rey León', director:'Marcos Daniel', vista:true},
    {titulo:'Corazón Salvaje', director:'Nicol', vista:false}
];

function showMovies(movies){

    let result = '';
    movies.forEach( (p,index)=>{
        // console.log(p.titulo);
        numero = `${index + 1} - `;
        result += numero;
        result += (p.vista)? `Ya ha visto:  ${p.titulo} \n`:`Te falta por ver:  ${p.titulo}\n`;
    })
    return result
}
console.log(showMovies(movies));
