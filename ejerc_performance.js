
/**
 * Determinar cual metedo tiene mejor performance (forEach vs map )
 */
const {performance} = require('perf_hooks')
const myAwesomeArray = [11, 2, 3, 4, 5]

const startForEach = performance.now()
myAwesomeArray.forEach(x => (x + x) * 10000000000)
const endForEach = performance.now()
console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`)
console.log(`forEach..:  ${myAwesomeArray}`)


const startMap = performance.now()
// const arrayMap = myAwesomeArray.map(x => (x + x) * 10000000000)
const arrayMap = myAwesomeArray.map(x => {
    return (x + x) * 10000000000})
const endMap = performance.now()
console.log(`Speed [map]: ${endMap - startMap} miliseconds`)
console.log(`map..:  ${myAwesomeArray}`)
console.log(`arrayMap..:  ${arrayMap}`)
console.log(`myAwesomeArray..:  ${myAwesomeArray}`)
let suma = myAwesomeArray.reduce((acc,elem)=>{
                       console.log ( 'elem1', elem, acc)
                       return  acc + elem 
})
console.log(`suma..:  ${suma}`)
