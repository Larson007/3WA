# Module 01 - Différences PHP / JavaScript & Base de données

## 05 - Boucles

Meanwhile in PHP

La bonne nouvelle avec les structures de contrôle telles que les conditions et les boucles, c'est que la logique est sensiblement la même d'un langage impératif à un autre. Seule la syntaxe est souvent amenée à changer. Qu'on dise « chocolatine » ou « pain au chocolat », le goût sera vraisemblablement le même.

Ce que vous avez appris en javascript au sujet des boucles est donc très valable en PHP, à quelques différences près. Faisons un petit tour d'horizon.

&nbsp;

### Boucle while

````php
$i = 1;

while ($i < 4) {
    echo $i;
    ++$i;
}
````

Rien de nouveau. La boucle `while` continue de tourner tant que sa condition est évaluée à `true`. Exactement le même fonctionnement que la boucle `while` du javascript.

&nbsp;

### Boucle for

````php
$values = ['A', 'B', 'C', 'D'];

for ($i = 0, $max = count($values); $i < $max; ++$i) {
    echo $values[$i];
}
````

Notre `tableau à index numériques` est parcouru de la même manière qu'on parcourt un `Array` en javascript. On déclare un itérateur, et on l'incrémente à chaque tour de boucle en s'en servant comme clé numérique, jusqu'à atteindre la taille totale du tableau.

#### *Conseil d'optimisation*

Notez la déclaration d'une variable `$max` au premier tour de boucle. L'appel de la fonction `count` est en effet coûteux en performances, aussi on ne le fait qu'une seule fois et on stocke le résultat dans une variable plutôt que demander au processeur de recalculer cette valeur à chaque tour de boucle.

&nbsp;

### Boucle foreach

La boucle `foreach` en PHP est plus ou moins l'équivalent de la boucle `for ... of` en javascript, pour dire les choses simplement, mais elle a tout de même beaucoup de particularités.

Elle permet notamment de parcourir un `tableau associatif`. En effet, si une boucle `for` avec un itérateur est suffisante pour un `tableau à index numériques`, par nature elle ne peut pas boucler à travers des index associatifs.

````php
$values = [
    'msg' => 'Salut',
    'name' => 'Jacques',
    'age' => 45,
    'city' => 'Rennes',
];

foreach ($values as $key => $value) {
    echo("Clé : $key.");
    echo('<br/>');
    echo("Valeur : $value.");    
}
````

Pas mal. À chaque itération, la boucle `foreach` donne accès à la valeur courante du tableau, mais aussi à sa clé. La syntaxe `$values as $key => $value` pourrait se traduire ainsi : « Parcours le tableau `$values`. À chaque itération, la clé courante s'appellera `$key`, et la valeur courante s'appellera `$value` ». `$values` est donc le tableau à parcourir, là où `$key` et `$value` sont ici des variables arbitrairement choisies par le développeur pour y assigner respectivement la clé et la valeur de l'itération en cours.

Notez que si nous n'avons pas besoin de la clé, nous pouvons l'omettre.

````php
$letters = ['a', 'b', 'c', 'd'];

foreach ($letters as $letter) {
    echo($letter);
}
````

Nous n'avons pas besoin de la clé, nous pouvons omettre son assignation pour n'écrire que `$letters as $letter`.

Hé ! Mais c'était pas un `tableau associatif`, ça.

Bien sûr. Rien ne nous empêche d'utiliser la boucle `foreach` pour parcourir un `tableau à index numériques`. On l'a dit, en PHP un tableau est un `array`, qu'il soit associatif ou non ne change pas son type. Pour être plus précis, il relève même du pseudo-type `iterable`, et toute valeur du type `iterable` peut être traversée par une boucle `foreach`. En PHP, les tableaux sont iterable, mais c'est aussi le cas des objets implémentant l'interface `\Traversable`. Nous en avons déjà trop dit, tout cela devient un peu velu.

Pour l'heure, retenez simplement que `foreach` permet de parcourir tous les tableaux, qu'ils soient **associatifs ou non**.

&nbsp;

### Boucle do ... while

Nous ne détaillerons pas ici la boucle [do-while](https://www.php.net/manual/en/control-structures.do.while.php). C'est une boucle `while` dont la particularité est d'exécuter systématiquement une première fois son bloc d'instructions avant même de tester sa condition. Le bloc d'instructions sera donc toujours au moins exécuté une fois, même si la condition est fausse dès le départ.

Elle est utile dans le monde du javascript, du java, etc. Bref, dans le monde du temps réel. En pratique, en PHP, vous l'utiliserez peut-être une fois tous les deux ans au cours de votre carrière, si vous êtes chanceux. ;p

&nbsp;

### Quand utiliser quoi ?

La boucle `while` s'utilse rarement pour parcourir un tableau. On l'emploie plutôt pour boucler autour d'une vraie condition booléenne. Souvenez-vous par exemple de l'exercice en javascript où l'on continuait à boucler tant que l'utilisateur n'avait pas entré la bonne valeur. La boucle `while`, c'est littéralement `tant que`. En vérité vous la verrez assez peu souvent dans le contexte du PHP : comme le `do-while` elle dépend philosophiquement d'un changement d'état parallèle à son exécution, ce qui arrive très anecdotiquement dans un langage purement synchrone comme le PHP, où il faudra généralement qu'elle provoque elle-même ce changement d'état.

Notez qu'en soi rien n'empêche d'utiliser `while` avec un itérateur, mais à ce moment autant utiliser un `for` dont la syntaxe inline est plus adaptée à ce besoin.

La boucle `for` s'utilise essentiellement avec un itérateur. On a vu que l'itérateur pouvait servir à parcourir un tableau, mais ce n'est pas son seul usage. Le nombre d'itérations peut être arbitrairement fixé par le développeur pour exécuter une certaine action un certain nombre de fois. Vous serez par exemple amenés à développer des fonctions dont le rôle pourrait être de créer 1000 faux comptes utilisateurs en base de données à des fins de tests.

La boucle `foreach` est exclusivement utilisée pour parcourir un `iterable`, ce qui inclut les tableaux. À ce titre elle est aussi plus lisible et moins sujette à bugs, même pour parcourir des `tableaux à index numériques`. Et elle est très performante : pour des raisons très techniques qu'on ne détaillera pas ici, en lecture seule, tant qu'on ne modifie pas le tableau, le `foreach` peut même être plus rapide qu'un `for`.

&nbsp;

### En résumé :

- `while` pour exécuter un bloc d'instructions tant qu'une condition factuelle est remplie, sans itérateur ;
- `for` pour exécuter un bloc d'instructions certain nombre de fois, ou pour parcourir un `tableau à index numérique` ;
- `foreach` pour parcourir tous les tableaux.

Dans tous les cas, encore et toujours : suivez les préférences et conseils de vos formateurs.
