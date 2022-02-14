# Module 01 - Introduction et bases de la programmation

## 01. Tableaux

### Valeurs scalaires et collections

Jusqu'ici nous avons joué avec deux principaux types de valeurs : Number et String. Des nombres et des chaînes de caractères.

````js
let x = 20;
let y = "Jacques";
````

Dans la variable `x`, nous stockons la valeur `20`. Dans la variable y, nous stockons la valeur `"Jacques"`. À chaque fois une valeur unique pour une adresse mémoire unique. C'est ce qu'on appelle en informatique une « valeur scalaire ». En javascript, les nombres et les chaînes de caractères sont des types scalaires.

Mais stocker une valeur unique dans une variable, c'est comme les antibiotiques : c'est pas automatique. Les langages de programmation nous offrent la possibilité de stocker plusieurs valeurs dans une seule et même variable. On peut alors parler de « collection », ou plus rarement de « valeur composite ».

### Tableaux

La principale forme de collection dans le monde de la programmation est ce que nous appelons le « tableau », qu'on appelle aussi souvent sous son nom anglophone « array ». Certains langages comme le python l'appellent plutôt « liste », mais le principe est toujours le même : un tableau est la représentation centralisée d'un ensemble de valeurs.

*/!\ En javascript, notez que l'on parle d'***Array*** plutôt que d'***array***, avec une majuscule. De la même manière, nous parlons depuis le début de ***Number*** et de ***String***. Cette distinction a son importance. En javascript, les types sont en réalité des objets, et les types scalaires ne sont donc pas vraiment des types scalaires... mais chut ! Je ne vous ai rien dit ! Vous ne savez pas encore ce qu'est un objet. (:*

Ne vous prenez pas la tête avec cela pour l'instant. Cette petite parenthèse n'est là que pour le goût de la précision.

Si un tiroir est une adresse mémoire contenant une valeur unique, imaginez le tableau comme une armoire. Vous pouvez toujours accéder à chaque tiroir individuellement, mais vous pouvez aussi manipuler tout le meuble en une fois si besoin.

````js
const users = ["Magali", "Jacques", "Josiane"];
````

Voilà un tableau. La variable `users` ne contient pas une mais trois valeurs. Voyez un tableau comme une adresse mémoire stockant des sous-adresses.

Au passage, les tableaux pouvant parfois être longs, n'hésitez pas à les wrapper sur plusieurs lignes ; le javascript n'a aucun problème moral avec ceci :

````js
const users = [
  "Magali",
  "Jacques",
  "Josiane"
];
````

Le tableau est délimité par des crochets `[]`, et les valeurs à l'intérieur du tableau sont séparées par des virgules ,.

Notez qu'un tableau peut ne contenir qu'une seule valeur si le cœur lui en dit :

````js
const ages = [18];
````

Ou même aucune :

````js
const apples = [];
````

Un tableau peut même contenir des tableaux :

````js
const garden = [
  [
    ["Cornue des Andes", "Cœur de bœuf"],
    ["Charlotte", "Mona Lisa"]
  ],
  [
    ["Verte de Milan", "Patidou"],
    ["Petit Gris de Rennes", "Noir des Carmes"]
  ],
];
````

Aucun problème avec un tableau contenant des sous-tableaux, lesquels peuvent eux-mêmes contenir des sous-tableaux, et ainsi de suite. On parle de tableaux à plusieurs dimensions.

Le tableau à deux dimensions est d'ailleurs très répandu, c'est le principe d'une matrice. Quand vous jouez à la Bataille Navale, vous utilisez un tableau à deux dimensions. Quand on parle de latitude et de longitude, on réduit une planète entière à un tableau à deux dimensions.

Et notre exemple précédent, `garden`, est un tableau à trois dimensions. Nous divisons ainsi le jardin en familles (solanacées et cucurbitacées), que nous divisions en espèces, que nous divisons en variétés. Trois dimensions.

Pratiques, les tableaux.

### Comment accéder aux valeurs ?

C'est beau une armoire, mais encore faut-il pouvoir accéder individuellement à chaque tiroir.

````js
const users = ["Josiane", "Jacques"];
const willWashDishes = users[1];
````

C'est simple. Nous avons stocké deux utilisateurs dans la variable `users` au moyen d'un tableau. À ce moment, ligne 1, le javascript a attribué une « clé numérique » à chaque entrée du tableau. Les clés sont attribuées dans l'ordre numérique. Pour accéder à une entrée précise du tableau, on appelle la variable, suivie des crochets dans lesquelles on spécifie la clé de la valeur désirée : `users[1]`.

Alors ? Qui est `users[1]` dans notre exemple ? Qui va faire la vaisselle ?

Josiane ?

Erreur ! `"Josiane"` n'est pas l'entrée numéro 1 mais l'entrée numéro 0. (:

**Oui, l'informatique c'est tordu. La très (très très) grande majorité des langages compte à partir de `0` pour les clés numériques des tableaux.**

````js
const fruits = ["Pomme", "Poire", "Banane"];
console.log(fruits[0]);
````

Ce morceau de code va afficher `"Pomme"`.

const numbers = [2, 5, 22];
console.log(numbers[2]);
Ce morceau de code va afficher `22`.

Et pour les tableaux imbriqués ? Rien de compliqué, c'est logique :

````js
const numbers = [
  [1, 3, 5, 7],
  [2, 4, 6, 8]
];

console.log(numbers[0][3]);
````

Ce morceau de code affiche `7`. Puisque `numbers[0]` renvoie la première valeur du tableau `numbers`, et que cette valeur est toujours un tableau, alors on peut très bien chaîner l'accès grâce aux crochets : `numbers[1]` renvoie le second tableau, alors `numbers[1][0]` renvoie le nombre `2`.

On pourrait aussi stocker nos sous-tableaux dans des variables :

````js
const numbers = [
  [1, 3, 5, 7],
  [2, 4, 6, 8]
];

const oddNumbers = numbers[0];
const evenNumbers = numbers[1];

console.log(oddNumbers[2]);
````

Puisque la variable `oddNumbers` stocke désormais une copie du tableau trouvé à l'adresse `numbers[0]`, ce code affiche `5`.

### Ajouter des éléments à un tableau

Comme ceci :

````js
const users = ["Magali", "Jacques"];
users.push("Josiane");
console.log(users[2]);
````

Nous verrons plus en détail le principe des fonctions et des méthodes. Mais pour l'heure, retenez que grâce à la méthode `push` à laquelle on a passé l'argument `"Josiane"`, on a pu ajouter un élément au tableau de départ. Celui-ci ressemble désormais à ça : `["Magali", "Jacques", "Josiane"]`. L'élément est ajouté à la fin du tableau.

Attends, attends ! On n'avait pas dit que le mot-clé `const` empêchait de modifier une variable précédemment déclarée ?

Oui, on a dit ça. Mais on a aussi dit dans une petite parenthèse de ce type qu'un Array en javascript était en vérité un objet. Et les objets, question immutabilité, c'est une autre histoire. Vous n'y êtes pas encore. Retenez pour l'instant que vous pouvez modifier le contenu d'un tableau javascript même s'il a été déclaré avec `const`. Ce que vous ne pouvez pas faire, par contre, c'est écraser la variable par une autre valeur que ce tableau. En somme, les tiroirs peuvent varier, mais l'armoire reste constante.

### Les tableaux c'est super !

Mais si. Ils peuvent vous sembler un peu abstraits et inutiles pour l'instant. Tout cela peut vous sembler très théorique et pompeux. Pourquoi ne pas stocker directement nos valeurs dans des variables ?

Nous allons très vite voir des cas pratiques, notamment grâce au principe d'itération.
