# Module 01 - Différences PHP / JavaScript & Base de données

## 02. Variables

### Variables

Comme en javascript, on peut déclarer des variables pour stocker des valeurs en mémoire vive. Il n'y a qu'une seule façon de faire :

````php
$x = 4;
$pi = 3.14;
$msg = "Salut";
````

À la différence du javascript, le PHP ne nécessite pas de mot-clé comme `let` ou `const`, mais le signe `$` devant le nom d'une variable.

À savoir que les variables en PHP sont **mutables**. PHP ne nous permet malheureusement pas de déclarer des variables **immutables** comme les `const` en javascript.

````php
$msg = "Salut";
$msg = "Yo";
echo($msg);
````

On peut réassigner à volonté la valeur d'une variable, donc ce code affichera `Yo`.

***Notez qu'il existe bien des constantes en PHP. Nous y reviendrons quand nous aborderons la programmation orientée objet.***

&nbsp;

### Quelques mots sur les références

Vous pourrez parfois être amenés à voir la forme suivante :

````php
$msg1 = "Salut";
$msg2 = &$msg1;
````

Notez l'usage de l'esperluette `&`. Il s'agit de ce que l'on appelle une référence. Ici, la variable `$msg2` ne devient pas une copie `$msg1` comme vous pourriez vous y attendre : elle crée un **alias** qui pointe vers la même valeur `"Salut"`. Nous ne nous retrouvons donc pas avec deux variables contenant chacune une copie de `"Salut"`, mais bien une valeur unique `"Salut"` pouvant être appelée par deux noms différents.

````php
function increment(&$x) {
    ++$x;
}

$number = 1;
increment($number);
echo($number);
````

Ceci est un passage par référence. En ajoutant `&` devant un argument lors de la définition d'une fonction, vous faites en sorte que cet argument soit passé en tant que référence et non en tant que copie à l'appel de la fonction. En somme, si vous modifiez la valeur de cet argument à l'intérieur de la fonction, elle sera également modifiée à l'extérieur. Ici, le code affichera `2`.

Nous vous montrons les références parce qu'elles existent. Vous les verrez parfois dans le code d'autres développeurs. Sachez toutefois que nous ne les utiliserons plus dans ce cours. En effet, il convient d'avoir une excellente compréhension du fonctionnement profond de PHP pour pouvoir utiliser intelligemment les références. PHP est déjà plus malin que l'on peut l'imaginer dans sa gestion de la mémoire, notamment grâce à la notion de `copy-on-write`. Un développeur inexpérimenté utilisant les références avec les meilleures intentions du monde amènera beaucoup plus de problèmes que de solutions. Les références sont le plus souvent sources de bugs et de complexité inutile du code. Sachez que, dans les cas d'usage que vous rencontrerez au début de votre carrière, les références seront toujours une mauvaise idée, révélatrices d'un mauvais design.