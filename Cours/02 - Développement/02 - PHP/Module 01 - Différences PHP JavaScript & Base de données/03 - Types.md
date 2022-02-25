# Module 01 - Différences PHP / JavaScript & Base de données

## 03 - Types

### Types

On retrouve en PHP les types du javascript, à quelques différences près.

### Chaînes de caractères

Il existe deux manières de déclarer une chaîne de caractères :

````php
$txt1 = "Salut";
$txt2 = 'Salut';
````

Guillemets simples `''` ou doubles `""`. Quelle différence ? Il faut parler de concaténation pour comprendre.

````php
$place = 'la planète';
$msg = 'Salut ' . $place;
echo($msg);
````

Ce morceau de code affichera `Salut la planète`. Avec des chaînes à guillemets simples `''`, on concatène deux chaînes grâce au signe `.`, contrairement au javascript qui utilise le signe `+`. Mais des chaînes à guillemets doubles `""` permettent d'intégrer les variables directement à la chaîne :

````php
$place = 'la planète';
$msg = "Salut $place";
echo($msg);
````

Sympa ! On peut aussi l'écrire avec des accolades.

````php
$place = 'la planète';
$msg = "Salut {$place}";
echo($msg);
````

Les accolades sont ici peu utiles et servent uniquement à la lisibilité, mais elles sont nécessaires dans certains cas, comme un appel de méthode sur un objet par exemple :

````php
$user = new User();
$msg = "Salut {$user->getFirstName()}";
echo($msg);
````

Dans tous les cas, au bout du compte, une string reste une string et le type de la variable sera exactement le même qu'on l'ait déclarée avec `""` ou avec `''`

Si les guillemets doubles `""` sont si utiles, pourquoi ne pas les utiliser tout le temps ?

Parce que quand PHP voit des `""`, il analyse systématiquement la chaîne pour y trouver des variables, même s'il n'y en a pas. Utiliser des `""` sur une chaîne aussi simple que `Salut` conduit donc à une analyse de texte inutile et une légère surconsommation des ressources du processeur. En bref, les guillemets simples `''` sont plus performants et donc préférables quand on n'a pas besoin de concaténer des variables. Meilleures performances, moins d'électricité, moins de CO2.

### Nombres

Contrairement au javascript qui emploie un type unique `Number`, le PHP distingue le type `integer` (ou `int`) du type `float`, autrement dit les nombres entiers des nombres décimaux.

Quand vous comptez les personnes présentes dans une pièce, on vous entendra ainsi : ***« Un, deux, trois, quatre, [...] »***. À moins d'être en présence de zombies, une personne vaut toujours 1. Vous pouvez les additionner, les multiplier, etc., vous n'arriverez jamais à une fraction. Nombres entiers, ou `integer` en PHP.

Quand vous prenez les mesures d'une fenêtre pour acheter des rideaux, vous trouverez potentiellement des valeurs telles que `40,25` centimètres de hauteur et `80,55` centimètres de largeur. Si par hasard vous aviez besoin de calculer l'aire de cette fenêtre (on a le droit de s'ennuyer), vous procéderiez au calcul `40.25 × 80.55` pour obtenir le résultat de `3242,1375` centimètres, que vous pourriez même arrondir à `3242,14`, convertir en mètres, etc. Nombres décimaux, ou `float` en PHP.

En dehors de cette légère distinction au niveau du type, la syntaxe ne diffère pas du javascript :

````php
$x = 12;
$y = 45.263;
````

### Booléens

Les booléens `true` et `false` existent toujours. C'est le type `bool`, ou `boolean`.

````php
$isUserAnonymous = false;

if (!$isUserAnonymous) {
    echo('Salut Jacques !');
}
````

Vous les verrez parfois orthographiés en majuscules : `TRUE` et `FALSE`. C'est une ancienne habitude du C que le PHP autorise, mais on aura tendance à préférer les formes minuscules dans du code moderne.

### Null

Le type `null`, qui ne peut être que de la valeur `null`, est également présent.

````php
$user = null;

if ($user === null) {
    echo('Pas d\'utilisateur !');
}
````

Comme pour les booléens, une forme majuscule est possible : `NULL`. Et comme pour les booléens, c'est une forme un peu âgée qu'on évitera à moins de vraiment aimer la déco kitsch.

### Tableaux

Un tableau PHP :

````php
$numbers = [4, 6, 8];
````

Vous verrez parfois l'ancienne syntaxe :

$numbers = array(4, 6, 8);
Cette façon de déclarer un tableau fonctionne toujours et ne présente aucune différence en termes de performances. De nos jours on va toutefois avoir tendance à favoriser les crochets `[]`. Ils sont plus courts et sont utilisés dans beaucoup d'autres langages pour représenter les tableaux, y compris le javascript, et sont donc visuellement plus intuitifs. Dans tous les cas, comme toujours, privilégiez de suivre le style et les conseils de vos formateurs. (:

````php
$texts = ['Salut', 'Yo', 'Hey'];
echo($texts[0]);
````

Ce morceau de code affichera `Salut`. La variable `$texts` contient un tableau à index numériques. Comme ceux du javascript, les clés de chaque valeur sont donc numérotées dans l'ordre de 0 à l'infini.

Notez qu'en PHP, un tableau n'utilise pas forcément des index numériques.

````php
$user = [
    'firstName' => 'Magali',
    'age' => 22,
    'city' => 'Rennes'
];
````

Nous avons ici ce que l'on appellera un tableau associatif. Contrairement au tableau à index numériques, le tableau associatif n'utilise pas des clés numériques mais des strings arbitrairement fixées par le développeur.

Et comment accède-t-on à une valeur dans un tableau associatif ?

````php
$values = [
    'vegetable' => 'Échalote',
    'fruit' => 'Fraise'
];

$x = $values['vegetable'];

echo($x);
````

Ce code affichera `Échalote`.

Bien que les clés soient différentes, les tableaux à index numériques et les tableaux associatifs relèvent du même type pour le PHP : c'est toujours un `array`.

### Objets

Les objets (type `object`) existent évidemment en PHP. Bien qu'officiellement le PHP soit un langage multi-paradigmes, officieusement il s'est imposé à travers les années comme un langage orienté objet. Presque tout son écosystème est développé autour de la POO.

L'objet en PHP est un sujet trop complexe pour être abordé rapidement dans une sous-section. Nous y reviendrons vite en détails. (:

### Autres

Il existe quelques autres types en PHP, tels que `iterable` et `callable`. Vous n'avez pas forcément besoin de les connaître tout de suite, la curiosité et le code vous y mèneront bien assez vite.

### Conversions

Il existe plusieurs façons de pratiquer des conversions de types en PHP. Vous rencontrerez parfois, par exemple, la fonction `intval`. La syntaxe que nous allons vous montrer ici est cependant la plus intuitive et la plus cohérente, car c'est la même façon de faire pour tous les types :

````php
$a = '1';  // '1'
$b = (int) '1';  // 1
$c = (float) '1';  // 1.0
$d = (bool) '1';  // true
````

Très simple !

Jetez donc un œil à la [documentation](https://www.php.net/manual/en/language.types.type-juggling.php) pour avoir un apperçu des différents casts possibles. On pensera notamment à `(string)`, `(array)`, etc.

On retrouve cette syntaxe de conversion dans de nombreux langages comme le C, le java ou encore le C#. Elle est donc visuellement intuitive pour la plupart des développeurs.

