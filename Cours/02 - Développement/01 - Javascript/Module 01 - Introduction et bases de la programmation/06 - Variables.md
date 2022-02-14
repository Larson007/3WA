# Module 01 - Introduction et bases de la programmation

## 06. Variables

### Qu'est-ce qu'une variable ?

On a parlé de la mémoire vive sur un ordinateur. La RAM. Elle sert à stocker temporairement des données jetables dédiées au fonctionnement courant d'un ordinateur, de ses programmes, de ses scripts.

Reprenons l'exemple du « Salut ».

````js
console.log("Salut");
````

Ici je passe directement la valeur `"Salut"` à la fonction `console.log`. Ne vous inquiétez pas, nous détaillerons ce qu'est une fonction plus tard, concentrons-nous pour l'heure sur la valeur `"Salut"`.

Je passe donc directement ma valeur à la fonction, mais je pourrais aussi la « stocker » temporairement dans la RAM pour l'utiliser autant que je le souhaite et quand je le souhaite. Exemple :

````js
let msg = "Salut";
console.log(msg);
````

Le résultat est exactement le même que précédemment. Cette fois je stocke préalablement la valeur "Salut" dans une variable que je nomme arbitrairement msg, et je passe cette valeur à la fonction `console.log`.

### let

Détaillons la syntaxe.

````js
let x = 4;
````

On pourrait traduire cette instruction par l'assertions suivante :

Soit la variable x égale au nombre 4.
Pour dire les choses simplement, la valeur `4` est assignée en RAM à l'adresse `x`. Une fois l'assignation faite, à chaque fois que j'invoque la variablex, j'induis en réalité la valeur 4.

Le mot-clé `let`, suivi du nom de la variable, suivi du signe =, suivi de la valeur à assigner. C'est l'assignation d'une variable.

Et une variable, ça varie ?

Ouaip.

````js
let x = 5;
x = 9;
console.log(x);
````

Ces lignes de code afficheront `9`. Les instructions s'exécutent dans l'ordre, on peut lire :

````js
Soit la variable x égale au nombre 5.
La variable x est désormais égale au nombre 9.
Affiche dans la console la valeur de x.
````

On peut donc réassigner une variable déclarée avec `let`.

On peut aussi déclarer la variable vide d'abord, puis lui assigner une valeur dans un second temps :

````js
let x;
x = 9;
console.log(x);
````

### const

Il existe une deuxième façon de déclarer une variable : `const`.

````js
const x = 5;
console.log(x);
````

`const` fonctionne exactement comme `let`, à une différence fondamentale près : contrairement à let, on ne peut pas réassigner la valeur d'une variable déclarée avec `const`. On parle alors de valeur immutable, ou de valeur constante, d'où le mot-clé `const`.

Exemple :

````js
const x = 5;
x = 9;
````

Ces lignes de code provoqueront votre premier bug : la console affichera en rouge `Assignment to constant variable`.

### var

Le mot-clé `var` est l'ancienne façon d'assigner une variable. Bien que cette syntaxe fonctionne encore, pour des raisons que nous comprendrons plus tard il ne faut plus l'utiliser.

Nous devons vous montrer `var` parce que vous tomberez régulièrement sur cette syntaxe historique lors de vos recherches sur Internet, mais sachez qu'il n'y a plus aucune bonne raison de s'en servir aujourd'hui. C'est devenu une très mauvaise pratique.

````js
var x = 5;
x = 9;
console.log(x);
````

Une variable déclarée avec le mot-clé `var` peut être réassignée, au même titre que le mot-clé `let`. La différence entre les deux se situe du côté de leur « portée », notion que nous aborderons plus tard, quand nous aurons vu les structures de contrôle et les scopes.

Sachez donc reconnaître cette syntaxe quand vous la verrez dans du code ancien (ou douteux !), et savoir qu'elle sert simplement à déclarer une variable ; mais ne l'utilisez pas vous-mêmes, vos futurs collègues vous remercieront.

### Quand utiliser let, quand utiliser const ?

Certains vous diront d'utiliser `const` 99% du temps parce qu'il rend les algorithmes plus faciles à lire et plus prévisibles. Certains langages comme l'elixir ou le haskell ne permettent même pas de modifier une variable déclarée. C'est comme si dans ces langages le let n'existait pas, si vous dites que x est égal à 4 alors x sera toujours égal à 4 dans ce contexte. Utiliser `let` le moins souvent possible en javascript et privilégier des valeurs immutables est un principe emprunté à la programmation fonctionnelle et appliqué par de nombreux développeurs en programmation impérative.

D'autres développeurs préfèrent au contraire utiliser par défaut les variables let, qu'ils voient comme plus flexibles et intuitives. Ils réservent alors `const` à de vraies constantes au sens propre du terme, à savoir des adresses mémoire dont la valeur n'est pas calculée à l'exécution mais fixée à l'avance, comme par exemple `const PI = 3.14;`.

Il n'y a pas de vérité absolue. Pour l'heure vous suivrez les préférences de vos formateurs, et quand vous aurez un peu plus de bouteille vous saurez forger vos propres goûts et couleurs sur ces sujets. Les développeurs ne sont pas toujours d'accord entre eux sur telle ou telle pratique, nous avons la chance d'être une communauté civilisée et d'en avoir fait une richesse plutôt qu'une source de conflits.

### Quand utiliser var ?

***Jamais. (:***

### Quelques mots sur les noms des variables

Bien que les noms des variables soient arbitrairement fixés par les développeurs, il convient malgré tout de respecter quelques règles.

- Évitez les noms incompréhensibles ou les sigles obscurs : `a`, `dsqji`, `someValue`, `whoCares`, `ASD` ;
- Préférez des noms qui décrivent clairement la valeur contenue dans la variable : `age`, `firstName`, `isHidden` ;
- Évitez les abréviations dans tous les sens : south vaut mieux que `sth`, `title` vaut mieux que `ttl` ;
- Vous pouvez tout de même utiliser quelques abréviations vraiment évidentes et largement admises dans le monde de la programmation (vous finirez par les connaître) : `msg` pour message, `res` pour response ;
- Il vaut parfois mieux une variable un peu longue et claire qu'une variable trop courte et incompréhensible, mais sachez toutefois rester raisonnables et éviter des horreurs du genre `ageOfTheRedCatHiddenBehindTheWall` ;
- Comme vous l'avez vu dans les précédentes règles, les noms des variables composés de plusieurs mots obéissent à la notation `camelCase` : les mots sont collés, et chaque initiale est en majuscule sauf la première.

***/!\ Note sur la langue :***

On code toujours, toujours en anglais. Vos variables, vos fonctions, vos commentaires, tout est en anglais. C'est comme ça. Quand votre petite entreprise s'agrandira et que vous commencerez à travailler avec des équipes ukrainiennes, vos lointains collègues vous remercieront.

Du français dans le code ne fait ni sérieux ni professionnel. Même un projet personnel pourrait être un jour présenté à un potentiel futur employeur. Vraiment, codez en anglais.

Finissons cette section sur une citation :

*« There are only two hard things in Computer Science: cache invalidation and naming things. »*

**— Phil Karlton**
