/**
 * Voilà une solution possible pour notre Calculawrite.
 *
 * Nous utilisons la boucle while afin de demander infiniment des entrées
 * à l'utilisateur tant qu'il ne joue pas le jeu.
 *
 * Nous utilisateur le signe &&, c'est-à-dire « et », pour nous assurer
 * que l'utilisateur a bien entré l'un des quatre opérateurs arithmétiques.
 */

let x = window.prompt("Premier nombre :");
while (isNaN(x)) {
  x = window.prompt("Premier nombre :");
}

let op = window.prompt("Opérateur arithmétique :");
while (op !== "*" && op !== "/" && op !== "+" && op !== "-") {
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

if (op === "*") {
  document.write(Number(x) * Number(y));
} else if (op === "/") {
  document.write(Number(x) / Number(y));
} else if (op === "+") {
  document.write(Number(x) + Number(y));
} else if (op === "-") {
  document.write(Number(x) - Number(y));
}
