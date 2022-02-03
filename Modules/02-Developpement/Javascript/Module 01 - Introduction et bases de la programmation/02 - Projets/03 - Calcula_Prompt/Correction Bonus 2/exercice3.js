/**
 * Bonus 2 de Calculaprompt : document.write
 *
 * Notez la conversion des nombres vers des chaînes grâce à `toString`.
 */

const x = window.prompt("Premier nombre :");
const operator = window.prompt("Opérateur arithmétique :");
const y = window.prompt("Second nombre :")

const textFormula = x + " " + operator + " " + y;
document.write(textFormula);
document.write("<br/>");

const numberX = Number(x);
const numberY = Number(y);

if (isNaN(numberX) || isNaN(numberY)) {
  document.write("Erreur : merci d'entrer des nombres valides.");
} else {
  let result;
  if (operator === "*") {
    result = numberX * numberY;
    document.write(result.toString());
  } else if (operator === "/") {
    result = numberX / numberY;
    document.write(result.toString());
  } else if (operator === "+") {
    result = numberX + numberY
    document.write(result.toString());
  } else if (operator === "-") {
    result = numberX - numberY;
    document.write(result.toString());
  } else {
    document.write("Erreur : opérateur \"" + operator + "\" inconnu.")
  }
}
