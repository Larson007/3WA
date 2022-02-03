/**
 * Bonus 1 de Calculaprompt : gestion des erreurs
 */

const x = window.prompt("Premier nombre :");
const operator = window.prompt("Opérateur arithmétique :");
const y = window.prompt("Second nombre :")

const textFormula = x + " " + operator + " " + y;
console.log(textFormula);

const numberX = Number(x);
const numberY = Number(y);

if (isNaN(numberX) || isNaN(numberY)) {
  console.error("Merci d'entrer des nombres valides.");
} else {
  if (operator === "*") {
    console.log(numberX * numberY);
  } else if (operator === "/") {
    console.log(numberX / numberY);
  } else if (operator === "+") {
    console.log(numberX + numberY);
  } else if (operator === "-") {
    console.log(numberX - numberY);
  } else {
    console.error("Opérateur \"" + operator + "\" inconnu.")
  }
}
