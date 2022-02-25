# Module 01 - Différences PHP / JavaScript & Base de données

## 04 - Conditions

### Comparaisons et conditions

Les conditions en PHP sont identiques au javascript, et on y retrouve les mêmes opérateurs de comparaison dans les expressions booléennes : `<`, `<=`, `>`, `>=`, `!=`, `!==`, `==`, `===`.

````php
$msg = 'Salut';
if ($msg === 'Salut') {
    echo($msg);
}
````

La recommandation concernant la comparaison d'égalité reste la même qu'en javascript : vous n'aurez jamais réellement besoin de `==` et `!=`, ces opérateurs sont sources de bugs ; préférez toujours `===` et `!==`.

Le PHP a aussi deux opérateurs supplémentaires :

- La différence `<>`. Ce signe est très peu utilisé et a le même comportement que `!=`. À éviter, donc.

- Le *spaceship operator* `<=>`, qui sert aussi à comparer des nombres. Contrairement aux autres opérateurs, `<=>` ne renvoie pas un booléen mais un nombre qui peut être `-1, 0 ou 1 : -1` si le nombre de gauche est inférieur, `1` si le nombre de gauche est supérieur, `0` si les deux nombres sont égaux. En cela, ce n'est pas vraiment une expression booléenne, on ne l'utilise pas dans les conditions. Son usage est assez anecdotique, on l'emploie par exemple dans la fonction `usort` pour trier un tableau, n'allez donc pas le mettre partout... mais... c'est un vaisseau spatial. Et les vaisseaux spatiaux, c'est cool !

### Switch

Un switch en PHP :

````php
$x = 0;
switch ($x) {
    case 0:
        echo('Salut');
        break;
    case 1:
        echo('Yo');
        break;
    default:
        echo('Hey');
}
````

Ce code affichera `Salut`.