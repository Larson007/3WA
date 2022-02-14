# Module 01 - Introduction et bases de la programmation

## 03. Plus de types

### Ces sales types

L'inspecteur arrive sur les lieux du crime et demande « What do we have? »

On en est où, question types ?

- Number
- String
- Boolean
- Array

Trois types scalaires, et une collection.

Pourquoi en rester là ?

### null

`null` est un type particulier. Vous savez que le type booléen ne peut avoir que deux valeurs possibles, `false` et `true`. Le type `null`, lui, est encore plus simple, il ne peut contenir que la valeur `null`, qui représente en fait virtuellement l'absence de valeur.

Quand vous parlez de « couleur noire », sous un certain angle cela peut être considéré comme un abus de langage, puisque le noir est justement l'absence de couleur. Mais on a quand même besoin de pouvoir parler de couleur noire au quotidien. Si on me demande la couleur de mes chaussures, je ne peux pas juste rester silencieux ou dire qu'elles n'en ont pas, je dois pouvoir répondre quelque chose de concret à mon interlocuteur. Soyons pragmatiques : mes chaussures sont noires.

`null`, c'est pareil. `null`, c'est une valeur pour dire « pas de valeur ».

````js
const userAge = window.prompt("Quel est votre âge ?");

let msg;
if (Number(userAge) >= 18) {
  msg = "Tu es majeur ! Bienvenue."
} else {
  msg = null;
}

if (msg !== null) {
  document.write(msg);
}
````

Vous utiliserez régulièrement `null` pour représenter une valeur vide. C'est nécessaire à la logique algorithmique.

Tiens, ligne 3, que vaut la variable `msg` ?

### undefined

````js
let msg;
console.log(msg);
````

Ce code affiche `undefined`. La variable existe, et elle est d'un type très propre au javascript. Comme `null`, le type `undefined` ne peut s'exprimer que sous une seule valeur : `undefined`. « Indéfini », en français.

### Quelques conversions

Nous avons déjà parlé de conversion de types. Il s'agit de prendre une valeur d'un type donné, et d'essayer de la convertir vers un autre type.

Pourquoi essayer ? Parce que toutes les valeurs ne sont pas compatibles. Vous pouvez convertir une branche d'arbre en bâton de marche, vous ne pouvez pas convertir une hache de bûcheron en hélicoptère.

Nous connaissons déjà quelques conversions, ou casts.

````js
const x = "5";
const y = Number(x);
````

La chaîne `"5"` peut facilement être convertie en nombre `5`. Et à l'inverse :

````js
const x = 5;
const y = String(x);
````

Le nombre 5 peut être converti en la chaîne `"5"`. Mais nous avons vu que toutes les valeurs ne sont pas compatibles :

````js
const x = "Salut";
const y = Number(x);
````

Ici `y` vaut `NaN`, pour Not a Number. Demander à la machine de transformer « Salut » en un nombre n'a aucun sens, elle ne comprend pas ce qu'on lui ordonne et répond que la valeur qu'on lui a fournie n'est pas un nombre.

Plutôt qu'utiliser `Number`, nous pouvons forcer un nombre à être soit entier soit décimal en utilisant les fonctions `parseInt` et `parseFloat`, que vous verrez aussi très souvent :

````js
const x = "5.5";
const y = parseInt(x);
````

Ici `y` vaut `5.5`. Alors que le code suivant...

````js
const x = "5";
const y = parseFloat(x);
````

... transforme au contraire un nombre entier en nombre « flottant » (i.e. à virgule) : `y` vaut `5.0`.
