# Module 01 - Introduction et bases de la programmation

## Objets javascript

Nous n'allons pas apprendre la programmation orientée objet, pas tout de suite. Pas de classes, de polymorphisme, de composition, d'héritage, de méthodes, etc.

Mais nous allons commencer à créer et manipuler des objets javascript, dans leur forme la plus simple. Et sous cet angle, vous allez voir qu'ils ne sont pas très différents des tableaux.

Souvenez-vous de ce tableau :

````js
const garden = [
  [
    ["Cornue des Andes", "Cœur de bœuf"],
    ["Charlotte", "Mona Lisa"]
  ],
  [
    ["Verte de Milan", "Patidou"],
    ["Petit Gris de Rennes", "Noir des Carmes"]
  ]
];
````

Nous avions divisé notre jardin en familles, que nous avions divisées en espèces, que nous avions divisées en variétés. Le problème, c'est qu'il nous manque à chaque fois l'information suivante : quel tableau correspond à quelle famille ou à quelle espèce ?

Notre tableau est une armoire contenant des tiroirs, mais notre problème ici est que les tiroirs n'ont pas d'étiquettes qui exprimeraient clairement ce qu'ils contiennent. Ils ont des numéros, on l'a vu : 0, 1, 2, 3. Ce sont des clés numériques. Mais plutôt que des clés numériques automatiquement attribuées par javascript, nous pourrions avoir besoin de clés humainement intelligibles.

C'est ici qu'interviennent les objets :

````js
const garden = {
  solanaceae: {
    solanumLycopersicum: ["Cornue des Andes", "Cœur de bœuf"],
    solanumTuberosum: ["Charlotte", "Mona Lisa"]
  },
  cucurbitaceae: {
    cucurbitaPepo: ["Verte de Milan", "Patidou"],
    cucumisMelo: ["Petit Gris de Rennes", "Noir des Carmes"]
  }
};
````

Les choses sont un peu plus claires. Et si vous n'êtes pas très versés dans la botanique, voici un exemple sans doute plus parlant :

````js
const userArray = [
  "Magali",
  22,
  ["Ski", "Jeux-vidéos", "Peinture sur soie"]
]

const userObject = {
  firstName: "Magali",
  age: 22,
  hobbies: ["Ski", "Jeux-vidéos", "Peinture sur soie"]
};
````

`userArray` et `userObject` représentent tous les deux la même utilisatrice, avec les mêmes données. Mais il est évident que userObject est plus adapté à notre besoin, car nous savons alors exactement à quoi correspond chaque entrée.

On déclare un objet avec les accolades {}, puis on lui définit ce qu'on appelle des « propriétés ». Un objet peut représenter n'importe quelle chose concrète ou n'importe quel concept abstrait. Une voiture peut être représentée par un objet ayant une propriété « couleur », une propriété « marque », etc. Une pièce de théâtre peut être représentée par un objet ayant une propriété « protagonistes », une propriété « dramaturge », etc.

On utilise un tableau quand on va stocker une liste de valeurs regroupées sous une même logique sémantique. Une liste de choses à faire, une liste de prix, etc. Les hobbies de Magali sont un tableau. Un tableau simplement est une liste, et de nombreux langages utilisent d'ailleurs le mot-clé list plutôt que array.

On utilise un objet quand on va stocker la représentation d'une chose ou d'un concept avec des propriétés précises. Plutôt qu'une liste linéaire, on a cette fois de réelles étiquettes sémantiques devant chaque valeur.

Comment accède-t-on à une propriété ? Vous le faites déjà quand vous voulez la propriété length d'un tableau.

````js
const user = {firstName: "Jacques", age: 43};

console.log(user.firstName);
````

Ce code affichera `"Jacques"` dans la console. On accède à la propriété d'un objet javascript grâce à un . suivi du nom de la propriété. user.firstName peut se traduire par « donne-moi la propriété `firstName` de l'objet `user` ».

Vous entendrez parfois parler de tableaux associatifs pour désigner un objet javascript. C'est un concept qui vient du PHP, et un abus de langage dans le contexte du javascript.

Sachez donc que si quelqu'un vous parle de tableaux associatifs dans le contexte du javascript, cette personne parle en fait d'objets javascript.
