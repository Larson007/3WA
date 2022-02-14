# Module 01 - Introduction et bases de la programmation

## 06. Et ou

### Et et ou

Une expression booléenne peut être composée de plusieurs propositions. Vous pouvez avoir plusieurs raisons de refuser l'entrée à une personne dans votre boîte de nuit : elle est habillée n'importe comment, ou elle est déjà connue de l'établissement pour provoquer des bagarres, ou sa tête ne vous revient pas.

Vous pouvez également avoir plusieurs conditions d'accès à une université : avoir eu au moins 14 au bac, `et` être âgé d'au moins 18 ans, `et` vous avoir rempli un dossier d'inscription.

L'algorithmie permet également de fragmenter une condition avec des `et` et des `ou`.

### Et &&

Le symbole `&&` permet de dire « et » dans une expression booléenne.

````js
if (6 > 5 && 4 < 0) {
  console.log("Salut");
}
````

Traduction de ce code :

***Si 6 est supérieur à 5, et si 4 est inférieur à 0, alors affiche « Salut ».***

La première des deux assertions est vraie : 6 est bien supérieur à 5. Mais 4 n'étant pas inférieur à 0, c'est toute l'expression qui est alors considérée comme fausse.

### Ou ||

Le symbole `||` exprime « ou ».

Même exemple :

````js
if (6 > 5 && 4 < 0) {
  console.log("Salut");
}
````

Traduction :

***Si 6 est supérieur à 5, ou si 4 est inférieur à 0, alors affiche « Salut ».***

4 n'est toujours pas inférieur à 0, mais 6 est encore supérieur à 5. À partir du moment où une seule des assertions est vraie, c'est toute l'expression qui est considérée comme vraie.
