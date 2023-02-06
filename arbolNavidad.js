let treeHeight = 5; // Altura del árbol
let treeWidth = 5; // Ancho del árbol
let pattern = '*'; // Patrón de luces
 
for (let i = 0; i < treeHeight; i++) {
    let branch = '';
    for (let j = 0; j < treeWidth; j++) {
        if(j!==3){

            branch += ' ';
        }else{

            branch += pattern;
        }
    }
    console.log(branch);
}