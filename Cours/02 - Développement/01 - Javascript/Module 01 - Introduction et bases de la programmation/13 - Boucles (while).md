# Module 01 - Introduction et bases de la programmation

## 05. Boucles (while)

### Qu'est-ce qu'une boucle ?

Bon.

Nous donnons des instructions à la machine.

Nous pouvons dire à la machine « Affiche ce message si et seulement si l'utilisateur a plus de dix-huit ans. » C'est une condition, autrement dit un bloc d'instructions qui ne s'exécuteront que si une certaine exigence est remplie.

Arrivons-en maintenant aux boucles.

Nous pouvons dire à la machine de répéter un bloc d'instructions.

***« Dis bonjour dix fois d'affilée. »***

***« Demande à l'utilisateur son âge, encore et encore, tant qu'il n'a pas fourni un nombre valide. »***

Le pauvre Jacques reçoit l'instruction suivante de son épouse : « Lave cette assiette ! » C'est une instruction simple, il lave une assiette. Mais si elle lui demande « Lave ces assiettes ! », au pluriel, il va laver une assiette, puis une assiette, puis une assiette, puis une assiette.

Faire la vaisselle pourrait s'exprimer ainsi : « Voici une pile d'assiettes. Tant que la pile d'assiettes sales n'est pas vide, lave l'assiette suivante. Quand tu as terminé la vaiselle, tu peux reprendre le cours de ta vie. »

L'action de laver une assiette est répétée un certain nombre de fois. C'est une boucle.

### Et concrètement ? Boucle while

Une méthode parmi d'autres de créer une boucle est d'utiliser le mot-clé `while`.

````js
let age = window.prompt("Quel est votre âge ?");

while (isNaN(age)) {
  age = window.prompt("Merci de répondre un nombre. Quel est votre âge ?");
}

console.log("Vous avez " + age + " ans.");
````

Traduisons :

Demande son âge à l'utilisateur.

Si l'utilisateur n'a pas répondu un nombre, et tant qu'il n'aura pas répondu
un nombre, continue indéfiniment de lui demander son âge.

Une fois qu'il aura bien répondu un nombre, tu peux reprendre le cours des
instructions et utiliser ce nombre.
La phrase anglophone ***« While my expression is true. »*** se traduit en français ***« Tant que mon expression est vraie. »*** Le mot-clé `while`, c'est-à-dire ***« tant que »***, dit donc au code « Tant que l'expression entre parenthèses est vraie, exécute ce bloc d'instructions. » En vérité, cela fonctionne donc un peu comme une condition, à la différence que le bloc d'instructions sera répété un certain nombre de fois.

Il est donc important, en y réfléchissant un peu, que la condition du `while` change à un moment donné pour devenir fausse. Ici l'utilisateur a bien fini par entrer un nombre, `isNaN` a donc fini par retourner `false`.

Mais que se passe-t-il si la condition ne devient jamais `false` ?

````js
const age = 21;

while (age > 18) {
  console.log("Tomate");
}

console.log("Pomme de terre");
````

Outch ! Pas bon, ça ! La variable age est fixée à 21. Puis on dit « Tant que 21 est supérieur à 18, exécute cette instruction. » Mais 21 sera absolument toujours supérieur à 18 ! Cette boucle ne s'arrêtera jamais. On appelle cette situation une `boucle infinie`. C'est un bug très courant qui fera planter votre navigateur, puisque celui-ci va faire mouliner le processeur à toute vitesse dans le vide. On essaie d'éviter ! Ça vous arrivera de moins en moins souvent avec l'expérience, heureusement.

Et que se passe-t-il au contraire si la condition n'est jamais vraie ?

````js
const age = 21

while (age < 18) {
  console.log("Tomate");
}

console.log("Pomme de terre");
````

Beaucoup moins grave, pas de bolognaise ce coup-ci. On dit « Exécute cette instruction tant que age est inférieur à 18. » Mais dès le départ, age n'est pas inférieur à 18. On n'entre donc même pas une seule fois dans la boucle. Le bloc d'instructions ne sera jamais exécuté.

### D'autres boucles que while ?

Oui. Nous avons les boucles `do while` et les boucles `for` qui sont aussi très utilisées. En vérité, `while`, `do while` et `for` sont les trois types de boucles principaux en programmation impérative. Ces boucles existent dans la grande majorité des langages impératifs, et constituent la base historique de l'algorithmie au même titre que les conditions `if`.

Nous verrons bientôt `for`, `do while` et même d'autres boucles propres au javascript : `for in`, `for of`. Mais voyons pour l'heure ce que nous pouvons déjà faire avec `while`.

