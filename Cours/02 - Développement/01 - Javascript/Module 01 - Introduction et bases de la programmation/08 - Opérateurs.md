# Module 01 - Introduction et bases de la programmation

## 08. Opérateurs

### Qu'est-ce qu'un opérateur arithmétique ?

Si l'on en croit Wikipédia :

En mathématiques et dans les langages de programmation, un opérateur est un symbole (ou une chaîne de caractères) spécifiant une opération. Les arguments de l'opérateur sont des emplacements pour les termes sur lesquels il agit, en général à gauche et à droite (notation infixe), à l'intérieur de parenthèses (notation fonctionnelle), au-dessus ou en dessus (notamment pour des opérateurs diacritiques), parfois en indice ou en exposant.

Pfiou ! Ça en fait des mots. Les opérateurs arithmétiques, vous les utilisez quotidiennement. Si je vous demande de mettre une addition sur papier, cela pourrait ressembler à `4 + 6`. Dans cette expression, l'opérateur arithmétique est le +. Vous connaissez normalement déjà les quatre opérations arithmétiques de base : addition, soustraction, multiplication, division.

Le javascript, comme tout langage de programmation d'ailleurs, permet donc d'exécuter des calculs mathématiques avec des nombres.

Comment ça marche ?

````js
let x = 4 + 4;
console.log(x);
````

Que verra-t-on dans la console ? `8`.

### Addition

Comme nous venons de le voir, le symbole de l'addition est le +.

````js
let n = 6 + 12;
````

Ici `n` vaut donc `18`.

Notez que l'on peut aussi utiliser des variables. Une variable renvoyant toujours la valeur qu'elle contient, c'est comme si l'on utilisait directement cette valeur :

````js
let x = 4;
let y = 12;
let result = x + y;
````

La variable `result` vaut bien `16`.

### Soustraction

Symbole -.

````js
let x = 18 - 4;
````

Ici `x` vaut `14`.

### Multiplication

Symbole *.

````js
let x = 2 * 5;
````

Ici `x` vaut `10`.

Contrairement à l'algèbre humaine, le javascript ne permet pas d'écrire une multiplication par juxtaposition, c'est-à-dire d'omettre le symbole.

Pour multiplier `x` par `y`, on doit écrire `x * y`. La notation `xy` ne fonctionnera pas.

### Division

Symbole /.

````js
let x = 11 / 2;
````

Ici `x` vaut `5.5`.

Comme dans la vraie vie, on ne divise jamais par zéro. Vous le savez tous : résoudre le calcul `5 / 0` pourrait causer la formation brutale d'un trou noir supermassif et la destruction immédiate de la Terre.

Si le javascript voit une division par zéro, il vous renverra `Infinity`.

### Parenthèses

Comme toute calculatrice qui se respecte, le javascript permet bien sûr d'utiliser des parenthèses afin de spécifier les priorités.

````js
let x = 6 + 2 * 2;
let y = (6 + 2) * 2;
````

Ici `x` vaut `10` tandis que `y` vaut `16`.

Les priorités opératoires sont les mêmes que celles que vous avez apprises à l'école. Calcul de gauche à droite, avec priorité aux parenthèses, puis priorité aux multiplications et divisions, puis additions et soustractions.

### Quelques mots supplémentaires sur les types

Vous commencez peut-être à comprendre l'importance des types. Par exemple :

````js
let x = 11 / "Salut";
````

Cette ligne de code où on tente de diviser un nombre par une chaîne de caractères n'a absolument aucun sens.

Cela peut vous sembler évident pour l'instant, mais attendez-vous à quelques petites migraines avec les types à mesure que vos algorithmes monteront en complexité. (: