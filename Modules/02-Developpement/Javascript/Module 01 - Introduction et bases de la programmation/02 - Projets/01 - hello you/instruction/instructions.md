# 09. projet - hello you


## Hello You

Nous allons construire ensemble un programme capable de vous saluer avec votre prénom.

Pour cela, nous allons d'aboir devoir apprendre à interagir avec l'utilisateur.

## window.prompt

Jusqu'à maintenant, nous ne connaissons qu'une seule fonction : `console.log`. Apprenons-en une deuxième :

````js
const userAge = window.prompt("Quel âge avez-vous ?");
console.log(userAge);
````

Si vous exécutez cette instruction, votre navigateur va ouvrir une petite fenêtre avec un champ de texte en vous posant cette question « Quel âge avez-vous ? » Vous allez entrer par exemple « 22 » dans le champ, valider, et la console affichera alors "22".

`window.prompt` a pour fonction de demander quelque chose à l'utilisateur, et de renvoyer la réponse ainsi reccueillie sous forme de String. Ici nous stockons directement cette valeur de retour dans la variable userAge pour ensuite l'afficher.

`window.prompt` renvoie toujours, toujours une String. Même si l'utilisateur entre le nombre 12, `window.prompt` renverra en fait la chaîne `"12"`.

Cette information aura son importance en temps voulu. Vous n'en aurez pas besoin pour cet exercice.

## C'est à vous !

Nous voulons un programme qui demande à l'utilisateur son prénom, disons par exemple « Jacques », pour ensuite afficher dynamiquement dans la console "Salut Jacques !".

Petit indice : vous allez avoir besoin de concaténer des Strings.

## Bonus 1

Notre programme va désormais demander à l'utiliseur son prénom, son nom de famille et son année de naissance. Nous afficherons ensuite dans la console la phrase suivante : 

````js
"Salut Jacques Dumont, cette année tu 42 ans !"
````

Afin de calculer l'âge de l'utilisateur, vous allez avoir besoin d'effectuer un calcul à partir de l'année. Pour ce bonus, vous êtes autorisés à la spécifier en dur dans le code, sans forcément chercher à la dynamiser. Par exemple, en 2021, vous pourrez simplement déclarer une variable `const currentYear = 2021;`.

## Bonus 2

Cette fois on dynamise l'année. Notre programme doit continuer à fonctionner pendant des années si besoin, et continuer à donner le bon âge, peu importe qu'on le lance en 2022, 2030, 2040, etc. On ne spécifie donc plus l'année en dur : le programme doit être capable de connaître la date courante sans notre aide.

## Bonus 3

Notre programme est imparfait. Jusqu'ici notre calcul de l'âge demeure relativement grossier. En effet, si l'utilisateur est né en août et que le programme est exécuté en mars, il sera vieilli d'un an. Pour calculer un âge précis, nous devons demander et tenir compte du jour et du mois de naissance.

En plus de l'année, demandez à l'utilisateur son jour et son mois de naissance. Améliorez votre calcul.

Ce bonus est un peu plus ardu, pour les élèves énervés. Bonne chance. (:
