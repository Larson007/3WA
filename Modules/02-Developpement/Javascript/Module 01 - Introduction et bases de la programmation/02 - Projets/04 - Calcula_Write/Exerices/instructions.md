# 7. projet - calculawrite

## Calculawrite

La console n'est ni très jolie, ni très pratique. Nous ne demanderons jamais à un utilisateur de l'ouvrir. Nous l'utiliserons donc un peu moins dans nos projets.

Employons plutôt document.write;

````js
document.write("<h1>Salut !</h1>");
document.write("<p>Ça va ?</p>");
````

Cette fonction écrira directement sur la page web.

Reprenons le projet de Calculaprompt : un prompt demandant un nombre, un prompt demandant un opérateur arithmétique, puis un prompt demandant autre nombre. On affiche le calcul complet, puis le résultat. Mais cette fois, utilisons les boucles pour forcer l'utilisateur à entrer de bonnes valeurs.

Si l'utilisateur entre par exemple `Yo` quand on lui demande un nombre, ou `2389` quand on lui demande un des quatre opérateurs arithmétiques, continuons à lui reposer indéfiniment la question tant qu'il n'a pas respecté les règles.

Bonus 1 : plusieurs opérateurs possibles
En mathématiques, il existe parfois plusieurs signes pour une même opération. Par exemple, pour la division, le javascript nous impose /, mais nous pourrions autoriser le symbole ÷ à l'utilisateur. De même, pour la multiplication, nous pourrions gérer `⋅` et `×` en plus de `*`.