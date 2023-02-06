/**
 * Dado un numero, mostrar a cuantos años, meses y días equivalen
 */
function YearMonthDays(dias){
    
    let years = Math.floor(dias / 365);
    let days_restante =  (dias % 365);

    let months = Math.floor(days_restante /30);
    days_restante = (days_restante % 30);

     return `${dias} días son: ${years} años, ${months} meses y ${days_restante} días`
}
console.log(YearMonthDays(368))