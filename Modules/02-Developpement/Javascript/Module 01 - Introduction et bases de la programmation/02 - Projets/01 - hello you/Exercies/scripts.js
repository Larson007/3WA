/**
 * Créer ici le projet bonus de calculatrice.
 */

//* Methode Simple
const userName = window.prompt("Quel est votre Prénom ?");
const userDate = window.prompt("Quel est ta date de naissance ?");
const currentYear = new Date().getFullYear();
const userAge = currentYear - userDate;


console.log(`Salut ${userName}, tu as ${userAge} ans !`);

document.write(`<h1>Salut ${userName}, tu as ${userAge} ans !</h1>`);
