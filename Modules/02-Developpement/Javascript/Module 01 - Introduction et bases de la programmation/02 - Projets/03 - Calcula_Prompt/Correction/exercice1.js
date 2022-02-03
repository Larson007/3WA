/**
 * Voilà une solution possible pour notre Calculaprompt, en utilisant tout
 * ce que l'on a appris jusqu'à présent.
 */

const x = window.prompt("Premier nombre :");
const operator = window.prompt("Opérateur arithmétique :");
const y = window.prompt("Second nombre :")

const textFormula = x + " " + operator + " " + y;
console.log(textFormula);

if (operator === "*") {
  console.log(Number(x) * Number(y));
} else if (operator === "/") {
  console.log(Number(x) / Number(y));
} else if (operator === "+") {
  console.log(Number(x) + Number(y));
} else if (operator === "-") {
  console.log(Number(x) - Number(y));
}
