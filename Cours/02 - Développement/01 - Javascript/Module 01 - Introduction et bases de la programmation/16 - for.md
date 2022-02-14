# Module 01 - Introduction et bases de la programmation

## 02. for

### Boucle for

Souvenez-vous de la boucle `while`.

````js
let msg = window.prompt("Dites « Bonjour » :");

while (msg !== "Bonjour") {
  msg = window.prompt("Dites « Bonjour » :");
}

document.write(msg);
````

Tant que l'utilisateur n'a pas dit bonjour, continue à lui demander indéfiniment de dire bonjour. Cette boucle très simple fonctionne autour d'une expression booléenne, et continue de boucler tant que celle-ci est vraie.

Il existe une autre boucle : `for`.

Exemple :

````js
for (let i = 0; i < 5; ++i) {
  document.write(i.toString());
}
````

Holala ! Qu'est-ce que c'est que ce vaudou ? Une boucle `for`. Et vous allez l'aimer !

Mais avant de pouvoir la comprendre, attardons-nous sur deux notions : le scope, et l'incrémentation.

### Portée des variables, ou scope

Nous parlions au début de cette formation du mot-clé `var`. Nous disions qu'il s'agissait de la façon historique de déclarer une variable, mais qu'il ne fallait pas l'utiliser pour des raisons que nous verrions plus tard. Ce plus tard est arrivé.

Quand construisez une structure de contrôle, vous enclavez une ou plusieurs instructions dans un « bloc ». Exemple :

````js
if (true) {
  let msg = "Salut";
}

console.log(msg);
````

Ce code ne fonctionnera pas. Pourquoi ? Parce que j'ai déclaré une variable `msg` dans un `if`. Ce `if` crée un contexte particulier à l'intérieur de ses accolades, et les variables `let` et `const` déclarées dans ce contexte ne sont pas accessibles en dehors.

````js
let msg = "Salut";

if (true) {
  console.log(msg);
}
````

Et ça, ça fonctionne ? Oui ! Mais pourquoi ?

Parce que cette fois, la variable `msg` est déclarée en amont dans le scope parent. Il y a une hiérarchie entre les scopes. Vous pouvez créer des scopes dans des scopes dans des scopes, et la portée des variables y descend en cascade, mais elle ne remonte jamais.

Et `var`, dans tout ça ? var n'obéit pas à cette règle désormais sacrée. Les variables déclarées avec `var` sont capables de remonter la cascade des scopes, comme des truites. Et c'est pas bien ? C'est pratique, non ? Non, pas vraiment. Le principe de cascade est un schéma récurrent en programmation, vous l'utilisez même en CSS. Plus vous prendrez d'expérience, plus vous comprendrez pourquoi il est bon d'éviter `var`.

Retenons donc qu'une variable `let`, ou une variable `const`, est accessible à ses scopes descendants, mais ne remonte pas la hiérarchie.

### Incrémentation

Il est parfois utile d'ajouter 1 à un nombre. Comment feriez-vous ?

````js
let x = 5;
x = x + 1;
console.log(x);
````

Ce code affichera `6`. C'est une façon de faire. Il en existe une plus courte :

let x = 5;
x += 1;
console.log(x);
Même résultat. Encore plus court :

````js
let x = 5;
++x;
console.log(x);
````

On appelle cela l'incrémentation. Les signes `++`, puis le nom de la variable, modifient celle-ci pour lui ajouter `1`. Il va sans dire que cette variable doit donc contenir un nombre.

Notez que `++x` et `x++` fonctionnent aussi bien l'un et l'autre pour notre usage. Il s'agit respectivement de pré-incrémentation et de post-incrémentation. La pré-incrémentation incrémente d'abord puis retourne la valeur, et à l'inverse la post-incrémentation retourne la valeur puis incrémente. En pratique :

````js
let x = 5;
console.log(x++);
console.log(x);

let y = 5;
console.log(++y);
console.log(y);
````

Les trois premières lignes afficheront `5` puis `6`, et les trois dernières afficheront 6 puis 6.

Les moteurs javascript sont généralement assez intelligents, et optimisent suffisamment la compilation pour que `x++` et `++x` n'aient aucune différence en termes de performances. Ce n'est toutefois pas le cas dans tous les langages. En effet, la pré-incrémentation est souvent légèrement plus performante, aussi nous l'utiliserons par défaut dans ces supports de cours pour des raisons de bonnes habitudes. Dans tous les cas, votre référence sacrée en matière de préférences restera toujours vos formateurs.

Ah ! Au fait ! S'il existe l'incrémentation, il existe naturellement aussi la décrémentation :

````js
let x = 5;
--x;
console.log(x);
````

Ce code affiche `4`.

### Retour au for

Nous sommes désormais armés pour comprendre une boucle `for` classique. Reprenons notre premier exemple :

````js
for (let i = 0; i < 5; ++i) {
  document.write(i.toString());
}
````

Les parenthèses de la boucle for sont divisées en trois sections séparées par des points-virgules `;`. Oui, c'est un peu bizarre. Chut. (:

La première section sert à déclarer une ou plusieurs variables. Ici nous déclarons une variable `let i = 0`. Si nous avions voulu en déclarer plusieurs, nous les aurions séparées par des virgules `,` : `let i = 0, j = 1`.

Notez que cette façon de déclarer plusieurs variables en même temps fonctionne même dans le reste de votre code, pas seulement dans les boucles `for`. Mais cela pourrait rendre votre code moins lisible. En dehors des boucles `for`, préférons déclarer une variable par ligne.

La deuxième section sert à déclarer la condition de notre boucle. Et cette deuxième section fonctionne exactement comme la condition de la boucle while. Toute boucle a besoin d'une condition pour savoir si elle doit continuer à se répéter ou non. Tant que l'expression booléenne de cette deuxième section est vraie, la boucle for se répète.

La troisième section sert à effectuer une action à chaque nouveau tour de boucle. Insistons sur « nouveau » : cette action ne s'exécute pas au premier passage.

Que va donc produire notre exemple ?

Afficher `0`, puis `1`, puis `2`, puis `3`, puis `4`, puis... plus rien. Pas `5` ? Non, pas `5`. Nous disons à la boucle « Continue de tourner tant que `i` est inférieure à `5`. Dès que cette variable devient supérieure ou égale à 5, la boucle s'arrête et le code reprend son cours.

C'est un peu alambiqué, non ? À quoi ça peut bien servir, une boucle `for` ? Sa puissance se révèle quand on la combine aux tableaux.

### Parcourir un tableau

Vous avez déjà joué à un jeu de cartes comme Magic the Gathering ou Hearthstone ? Deux cartes dont on ne soupçonnerait pas l'utilité peuvent se révéler incroyablement cools quand on les emploie ensemble.

Voyons à quoi peut ressembler la combo `for + array` :

````js
const heroes = ["Buffy", "Xander", "Willow"];
const numberOfHeroes = heroes.length;

for (let i = 0; i < numberOfHeroes; ++i) {
  console.log(heroes[i]);
}
````

Nous faisons ici ce que l'on appelle « parcourir un tableau ».

Ligne 1, on déclare un tableau contenant trois éléments.

Ligne 2, si vous ne connaissiez pas encore, c'est très simple : la propriété `length` d'un tableau renvoie le nombre d'éléments dudit tableau. `heroes.length` renvoie ici `3`.

Puis intervient notre boucle `for` qui va afficher tour à tour chaque élément du tableau. Traduisons ce morceau de code en français :

Considérons le groupe de héros Buffy, Xander et Willow.
Combien sont-ils ? Ils sont trois.

````md
Soit la variable « i » égale au nombre 0.
Tant que i est inférieure au nombre de héros (3), affiche le héros numéro
i, en incrémentant bien sûr i à chaque fois.
````

La boucle va exécuter son bloc d'instructions une première fois. Cette première fois, `i` vaut `0`, on affiche donc `heroes[0]`, c'est-à-dire `"Buffy"`. Puis on fait un deuxième tour ; cette fois on exécute `++i`, `i` vaut donc `1` et `heroes[1]` va afficher `"Xander"`. Puis un troisième tour de boucle, `++i` amène `i` à la valeur `2`, `heroes[2]` affiche `"Willow"`. Puis encore une fois `++i`, `i` vaut cette fois `3`, et... stop ! Coupez ! La variable i n'est plus inférieure au nombre de héros `(3)`, la condition d'exécution de la boucle n'est donc plus remplie et on reprend le flux normal du code.

En déclarant une variable numérique égale à `0`, que l'on va ensuite incrémenter mécaniquement, on peut parcourir un à un les éléments d'un tableau au moyen d'une boucle. On utilise `length` pour limiter le nombre d'itérations au nombre total d'éléments du tableau.
