/**
 * Nous utilisons toujours && pour lister la totalité des opérateurs possibles,
 * mais nous utilisons cette fois || pour ensuite les associer au bon calcul.
 *
 * « Une multiplication, c'est * OU ⋅ OU × »
 *
 * Notez qu'à présent, la condition de la deuxième boucle se retrouve
 * « wrappée » sur quatre lignes afin de ne pas avoir une ligne trop longue.
 * Cela fonctionne très bien, mais du point de  * vue de la lisibilité ce
 * n'est pas idéal. Nous verrons des façons d'améliorer ce type d'algorithme
 * plus tard, notamment grâce aux « tableaux ».
 *
 * Il y a aussi certaines parties de code qui se répètent. Nous essaierons
 * bientôt d'éviter cela grâce aux « fonctions ».
 */

let x = window.prompt("Premier nombre :");
while (isNaN(x)) {
  x = window.prompt("Premier nombre :");
}

let op = window.prompt("Opérateur arithmétique :");
while (op !== "*" && op !== "⋅" && op !== "×"
      && op !== "/" && op !== "÷"
      && op !== "+"
      && op !== "-") {
  op = window.prompt("Opérateur arithmétique :");
}

let y = window.prompt("Second nombre :");
while (isNaN(y)) {
  y = window.prompt("Second nombre :");
}

const textFormula = x + " " + op + " " + y;
document.write("<strong>Calcul :</strong> " + textFormula);
document.write("<br/>");

document.write("<strong>Résultat :</strong> ");

if (op === "*" || op === "⋅" || op === "×") {
  document.write(Number(x) * Number(y));
} else if (op === "/" || op === "÷") {
  document.write(Number(x) / Number(y));
} else if (op === "+") {
  document.write(Number(x) + Number(y));
} else if (op === "-") {
  document.write(Number(x) - Number(y));
}
