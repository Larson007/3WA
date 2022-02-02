/**
 * Créer ici le projet bonus de calculatrice.
 */

//* Methode Simple

let x = 0;
let y = 0;
let operator = window.prompt("Le symbole de votre opérateur de calcul");
let numOne = parseInt(x);
let numTwo = parseInt(y);


let formule = `Votre calcul : ${x} ${operator} ${y}`;

console.log(formule);

if (isNaN(x) && isNaN(x)) {
    x = window.prompt("Veuillez indiquer un chiffre");
    y = window.prompt("Veuillez indiquer un chiffre");
}
else {
    x = window.prompt("Votre 1er nombre");
    y = window.prompt("Votre 2er nombre");
}




if (operator === "+") {
    console.log(`Resultat = ${numOne+numTwo}`);
}
else if(operator === "-") {
    console.log(`Resultat = ${numOne-numTwo}`);
}
else if(operator === "*") {
    console.log(`Resultat = ${numOne*numTwo}`);
}
else {
    console.log(`Resultat = ${numOne/numTwo}`);
}



