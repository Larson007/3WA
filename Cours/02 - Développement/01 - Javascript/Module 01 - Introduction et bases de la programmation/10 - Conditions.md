# Module 01 - Introduction et bases de la programmation

## 01. Conditions

### Qu'est-ce qu'une structure de contrôle ?

D'après Wikipédia :

En programmation informatique, une structure de contrôle est une instruction particulière d'un langage de programmation impératif pouvant dévier le flot de contrôle du programme la contenant lorsqu'elle est exécutée. [...]

— [Structure de contrôle](https://fr.wikipedia.org/wiki/Structure_de_contr%C3%B4le), Wikipédia

L'art des définitions.

Nous l'avons dit : en programmation impérative, nous donnons une série d'instructions à la machine, et la machine exécute ces instructions dans l'ordre. Cela semble peu flexible. Une structure de contrôle est une instruction un peu spéciale qui permet de distodre cet espace-temps figé, d'en contrôler plus finement le flot.

Il existe plusieurs structures de contrôle en programmation. Les deux principales sont les boucles et les conditions. Les boucles servent à dire « Voici une série d'instructions, exécute-les un certain nombre de fois d'affilée. » Nous y reviendrons plus tard. Ce qui nous intéresse aujourd'hui, c'est la condition.

### Qu'est-ce qu'une condition ?

Nous pouvons dire à un programme la chose suivante : « Voici une ou plusieurs instructions. Exécutez-les si et seulement si une certaine condition est remplie. »

Vous vous souvenez des booléens ? C'est à cela qu'ils servent. C'est avec une expression booléenne, c'est-à-dire une expression ne pouvant évaluer qu'à `true` ou `false`, que nous pouvons conditionner l'exécution ou non d'une série d'instructions.

````js
const isUserAnonymous = true;

if (isUserAnonymous === true) {
  console.log("Salut !");
} else {
  console.log("Salut Magali !");
}

console.log("Ça va ?");
````

Grâce à l'opérateur de comparaison `===`, nous avons vérifié la valeur de la variable `isUserAnonymous`. Ne vous inquiétez pas, nous arrivons tout de suite aux opérateurs de comparaison. Ce qui est à retenir ici, c'est que nous avons pu conditionner une instruction. Concrètement, nous avons dit :

````md
L'utilisateur est anonyme.
Si l'utilisateur est anonyme, dis « Salut ! ». Sinon, dis « Salut Magali ! ».
Dis « Ça va ? ».
````

Pas mal ! Ça commence à ressembler à un algorithme de haute voltige.

Nous allons revoir tout cela en détail, mais il semble important désormais de voir les opérateurs de comparaison, sans quoi vous ne pourrez pas jouer avec les conditions.