# Module 01 - Différences PHP / JavaScript & Base de données

## 08 - Conventions

&nbsp;

### Les conventions c'est bien

Nous disions qu'en javascript les développeurs ont souvent leurs préférences personnelles sur beaucoup de sujets. Point-virgule ou pas point-virgule, `let` ou `const`, etc.

Nous disions aussi que le PHP était un monde beaucoup plus normé. On y trouve en effet une convention mondialement acceptée et appliquée qui est le `PSR-12` (anciennement `PSR-2`).

Nous vous invitons à jeter un œil à la spécification [PSR-12](https://www.php-fig.org/psr/psr-12/). Il s'agit d'un ensemble de règles de style à essayer de respecter au maximum dans un code professionnel. Indentation à 4 espaces, espace entre le if et la parenthèse, variables et fonctions en camelCase, etc. Autant de règles provenant du [PSR-12](https://www.php-fig.org/psr/psr-12/) et appliquées par la très large majorité des développeurs PHP à travers le monde.

&nbsp;

### Mais pourquoi respecter des règles ?

Le fait de respecter des conventions syntaxiques uniformes permet de rendre nos codes plus intuitifs. Quand vous lisez le code d'un développeur qui respecte les mêmes conventions que vous, vous comprenez très vite sa logique, c'est un style que vous avez l'habitude de voir. Vous pouvez ainsi facilement travailler avec des développeuses et développeurs de tous les pays et de toutes les entreprises sans aucun problème, et c'est d'ailleurs aussi pour cette raison que l'on code toujours en anglais.

Un code qui ne respecte aucune convention peut même être rédhibitoire pour un potentiel futur employeur qui regarderait votre travail. Si quelques libertés stylistiques seront toujours défendables, et vous en prendrez évidemment parfois, un code totalement freestyle n'aura pour effet que de refléter un certain amateurisme aux yeux d'un professionnel.

&nbsp;

### Moi je moi je

Et moi si je veux avoir mon propre style ?

Vous aurez votre propre style. Le `PSR-12` ne couvre pas absolument tous les cas de figure imaginables. Ce sont des conventions basiques, aussi simples que « fourchette à gauche et couteau à droite ».

Vous ne saluez pas les gens de la main gauche parce que vous suivez les conventions de votre monde. Savoir si vous mettez l'accolade à la ligne ou non en déclarant une fonction est secondaire. Ce n'est pas important, ce n'est pas représentatif de votre personnalité. Sur des questions aussi triviales vous respecterez autant que possible le `PSR-12`. Votre style personnel ne se situera dans de sombres histoires d'accolades et de parenthèses, mais dans votre approche des problèmes, dans votre logique, dans votre algorithmie. Vos collègues et vous-mêmes reconnaîtrez votre code à son architecture globale, à l'élégance de vos solutions, à votre façon de résoudre les problématiques que vous rencontrerez. Pas à vos retours à la ligne ou votre indentation.

Vous n'appliquerez probablement pas 100 % du `PSR-12`. De toute façon vous ne le connaîtrez pas par cœur, et personne ne vous demandera cela. On utilise même parfois des outils pour automatiquement formater notre code au `PSR-12`. Mais ayez l'humilité de vous dire que cette convention a été écrite par des personnes très compétentes qui avaient derrière chaque décision de très bons arguments.

&nbsp;

### Priorité au bon sens

Tout ceci étant dit, sachez tout de même qu'il faut savoir faire preuve de bon sens et de flexibilité. Il vous arrivera peut-être de travailler dans des équipes qui ne respectent pas le PSR-12, et ont au contraire des conventions internes qui leur sont propres. À ce moment, bien entendu, vous respecterez en priorité les consignes de vos collègues et le style des projets dans lesquels vous travaillerez.

Notez que, encore une fois, cela vaut aussi pour vos formateurs. Ils sont pour ainsi dire vos chefs de projet, vos dieux tout-puissants, et quoi qu'il arrive vous accorderez la priorité à leurs conseils et préférences ; même s'ils contredisent entièrement cette section du cours. (: