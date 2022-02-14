# Module 01 - Introduction et bases de la programmation

## 02. Comparaisons

### Opérateurs de comparaison

Vous savez tous jouer à « Vrai ou faux ».

````md
« 3 + 4 vaut 9.
– Faux ! »
« La Commune de Paris a eu lieu en 1871.
– Vrai ! »
« Toutes les roses sont rouges.
– Faux ! »
````

Votre ordinateur sait y jouer aussi. Il sait poser des questions et y répondre.

````js
const x = 3 + 4;
console.log(x === 9);
````

Si vous exécutez ce code, vous verrez `false` s'afficher dans la console. Traduisons :

````md
Soit la variable x égale à la somme de 3 et 4.
Affiche si la variable x vaut 9 ou non.
````

Il affiche donc bien « non » par la valeur `false`. À l'inverse, l'expression `x === 7` aurait bien été évaluée à `true`.

Le symbole `===` est un opérateur de comparaison. Il en existe quelques-uns, mais ils sont faciles à retenir car leur logique est très intuitive. Dans tous les cas, vous allez à partir de maintenant vous en servir quotidiennement. Pas d'inquiétude donc, ça va rentrer. (:

Le principe d'un opérateur de comparaison est donc de comparer deux valeurs – une à sa gauche, une à sa droite – et de transformer toute cette expression en une valeur booléenne. L'expression « 2 est supérieur à 3 » devient la valeur « Faux ».

### Égalité ===

C'est celui que nous venons de voir : `===`.

Le symbole === compare en réalité deux choses : la valeur et le type. En effet, l'expression `4 === "4"` sera évaluée à `false`, car le nombre `4` n'est pas égal au caractère `"4"`.

````js
const 
x = "Salut" === "Salut !"
````

Ici `x` vaut `false` aussi. Notez le point d'exclamation. Ces Strings ne sont pas identiques.

````js
const x = 12 === 6 + 6
````

Le nombre `12` est-il égal à la formule `6 + 6` ? Oui ! Ici `x` vaut `true`.

Comme dit, `===` compare à la fois à la valeur et le type, c'est une comparaison d'égalité stricte. Sachez que vous verrez aussi régulièrement l'emploi du symbole `==`, avec seulement deux signes. Ceci est un opérateur de comparaison non strict, comparant la valeur mais pas le type.

Par exemple, `4 == "4"` vaut true car le javascript va ici pratiquer une conversion de type implicite. Sachez donc que ce symbole existe, et sachez le reconnaître quand vous le verrez dans du code. Mais sachez aussi que son usage est rarement – voire jamais – une bonne idée. Le `==` est moins prévisible et moins performant, entre autres raisons.

Nous vous recommandons de vous limiter à `===`.

### Différence !==

Le symbole `!==`, c'est l'exact inverse de `===`. Il renvoie true si les deux côtés de l'expression sont différents, et `false` s'ils sont égaux.

````js
const x = 4
const y = 4;
console.log(x !== y);
````

La console va ici afficher `false`, puisque `x` et `y` ne sont pas différents.

Comme pour le `===` et son équivalent non strict `==`, le `!==` possède lui aussi une version non stricte `!=`.

De la même façon, l'opérateur != tente de pratiquer une conversion intelligente pour comparer deux valeurs.

### Supérieur >

Le symbole `>`, vous l'avez déjà vu en mathématiques, il dit « supérieur à ».

````js
const x = 2 * 10;
const y = 60;
console.log(x > y);
````

Ce code affiche `false`, puisque `x (20)` n'est pas supérieur à `y (60)`.

### Inférieur <

Le symbole `<` est l'inverse du symbole `>`. Il dit « inférieur à ».

````js
const x = 4;
const y = 12;
console.log(x < y);
````

`4` est bien inférieur à `12`, la console affiche donc `true`.

### Supérieur ou égal >=

Le symbole `>=` dit « supérieur ou égal à ».

````js
const x = 5 + 5;
const y = 5 * 2;
console.log(x >= y);
````

Ici `x` et y valent `10`, ils sont donc égaux et répondent positivement à la comparaison « supérieur ou égal à ». La console affiche `true`.

### Inférieur ou égal <=

Le symbole `<=` dit « inférieur ou égal à ».

````js
const x = 5 * 3;
const y = 3 * 3;
console.log(x <= y);
````

Ici `x` vaut `15`, et `y` vaut `9`. 15 n'étant pas inférieur ou égal à `9`, la console affiche `false`.
