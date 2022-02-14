# Module 01 - Introduction et bases de la programmation

## 04. Fonctions

### Qu'est-ce qu'une fonction ?

Si je vous demande de résoudre `2 + 2`, vous me répondez – je l'espère – 4. Qu'est-ce que vous venez de faire ? Vous avez pris un premier nombre, dans votre tête vous lui avez ajouté un second nombre, et enfin vous m'avez donné votre réponse.

C'est une fonction. Une fonction très simple, qui procède à une unique opération arithmétique, mais une fonction quand même. Dès vos premières années votre cerveau a appris à additionner des nombres. Il a fallu vous expliquer le principe un jour, mais depuis il sait le faire sans y penser. Et quand on lui demande d'additionner `6` à `9`, il répondra `15` sans problème.

Votre cerveau a mémorisé un protocole précis, et est capable de le reproduire à volonté quand on le lui demande.

En javascript, une fonction servant à additionner deux nombres pourrait ressembler à cela :

````js
function add(x, y) {
  const sum = x + y;

  return sum;
}

const result = add(4, 7);
console.log(result);
````

Ligne 7, on appelle la fonction `add` précédemment déclarée avec les paramètres `4` et `7`, et on stocke le « retour » de cet appel dans une variable. Ligne 8 on affiche le résultat : `11`.

Détaillons tout cela.

Le mot-clé `function` dit au javascript que ce qui suit est la déclaration d'une fonction.

Ensuite vient `add` après un espace. C'est un nom que le développeur a arbitrairement choisi pour essayer d'exprimer le plus clairement possible le rôle de cette fonction. C'est en général un verbe représentant l'action exécutée par la fonction. Si vous deviez donner un nom de fonction à votre action quotidienne de prendre le bus, vous pourriez choisir `goToBus`. Comme pour les variables, on respecte la notation « camelCase », et on s'efforce d'être à la fois clair et concis. Dans notre exemple, nous avons choisi `add` et non pas `doSomething` ou `addTwoNumbersThenReturnTheFoundSumAsAnotherNumber`. Et plutôt que `add`, `calculateSum` aurait pu être un nom pertinent aussi, pourquoi pas !

Ensuite nous avons des parenthèses `(x, y)`. Les parenthèses, après le nom de la fonction, sont là pour déterminer ce que nous appelons les « paramètres », ou encore « arguments ». Les paramètres sont des données d'entrée nécessaires à l'exécution de la fonction. En effet, si on écrit une fonction dont le rôle est d'additionner un nombre à un autre nombre, le développeur doit pouvoir passer ces deux nombres à ladite fonction quand il appelle celle-ci (ligne 7). Le nombre d'arguments peut être aussi élevé que nécessaire, et les arguments sont séparés par une virgule. Il peut aussi n'y avoir qu'un argument : `displayMessage(msg)`. Voire aucun argument : `sayHello()`.

Note de culture générale : le nombre d'arguments d'une fonction est appelé [« arité »](https://fr.wikipedia.org/wiki/Arit%C3%A9).

Puis, comme pour les structures de contrôle que sont les conditions et les boucles, on encadre un bloc d'instructions entre des accolades {}. C'est le code de la fonction à proprement parler. Ce code sera exécuté à chaque fois que la fonction sera appelée. Si la fonction déclare des arguments, ils sont accessibles au sein de ce bloc d'instructions en tant que variables, dont les valeurs sont celles que l'on aura passées en appelant la fonction. Après avoir déclaré ma fonction `add(x, y)`, je l'appellerai sous la forme `add(4, 5)`. Le code de la fonction déclarée précédemment s'exécutera en assignant `4` à la variable `x` et `5` à la variable `y`.

Et à la fin de notre bloc d'instruction, le mot-clé `return` sert à « renvoyer » une valeur. En somme, quand on appelle une fonction, elle renvoie la valeur qui suit `return`. Le mot-clé `return` stoppe complètement la fonction, et tout ce qui se trouverait après ne sera pas exécuté. Notez toutefois que `return` n'est pas obligatoire. Une fonction peut parfaitement se contenter d'exécuter une action sans avoir besoin de renvoyer une valeur. Par exemple :

````js
function displayMessage(msg) {
  console.log(msg);
}

displayMessage("Salut");
displayMessage("la");
displayMessage("Planète");
````

Je déclare une fonction dont le rôle est d'afficher dans la console la valeur de l'argument msg. Pas de retour de valeur nécessaire. Puis j'appelle trois fois de suite cette fonction avec des valeurs différentes. La fonction est donc exécutée trois fois.

Mais dans ce cas, pourquoi ne pas avoir écrit directement ceci ?

````js
console.log("Salut");
console.log("la");
console.log("Planète");
````

En effet, on aurait pu le faire ainsi. Mais gardons en tête que ce code est un simple exemple « cas d'école ». Le code d'une fonction est généralement plus complexe, et nous permet d'éviter les répétitions...

### DRY

La programmation, c'est beaucoup de conventions et de principes. On vise un code propre et élégant. Si on vous demande de fabriquer une porte mais que vous mettez la serrure tout en haut ou les gonds tout en bas, votre porte sera à peu près fonctionnelle mais très peu pratique. Les gens perdront beaucoup de temps à comprendre comment elle s'ouvre, voire se blesseront ou abîmeront le sol. Le code, c'est pareil : il y a beaucoup de façons de parvenir à un résultat, mais on essaie de s'approcher de la plus intuitive, simple et élégante.

Cette philosophie, en programmation, passe entre autres par le principe [DRY](https://en.wikipedia.org/wiki/Don't_repeat_yourself). Don't Repeat Yourself. Autrement dit : « Ne vous répétez pas. »

Considérons le code suivant, visant à retirer les 21 % de TVA des prix des ventes effectuées hier et aujourd'hui :

````js
const soldYesterday = [20, 40.55, 3.12, 99.95];
const soldToday = [15, 45.55, 13.55, 130.99];

for (let i = 0; i < soldYesterday.length; ++i) {
  soldYesterday[i] = soldYesterday[i] - soldYesterday[i] * 21 / 100;
}

for (let i = 0; i < soldToday.length; ++i) {
  soldToday[i] = soldToday[i] - soldToday[i] * 21 / 100;
}
````

Outch ! On répète quasiment le même code. Que se passe-t-il si on doit non plus traiter deux jours mais une semaine ouvrée entière ? On devra répéter cette boucle cinq fois, avec des noms de variables de plus en plus confus. Et quand la TVA passera à 22 % ? Elle est cachée à cinq endroits différents dans des calculs qui se répètent, la changer partout amenera le risque d'en oublier une occurrence et donc de produire un bug sournois.

Corrigeons le tir :

````js
function removeVatFromPrices(prices, vatRate) {
  for (let i = 0; i < prices.length; ++i) {
    prices[i] = prices[i] - prices[i] * vatRate / 100;  
  }
}

const soldYesterday = [20, 40.55, 3.12, 99.95];
const soldToday = [15, 45.55, 13.55, 130.99];

const vatRate = 21;

removeVatFromPrices(soldYesterday, vatRate);
removeVatFromPrices(soldToday, vatRate);
````

Nous déclarons une fonction qui prend en premier argument un tableau de prix, et en second argument un taux de TVA exprimé en pourcentage.

Concrètement, le processeur va exécuter deux fois un calcul de remise de TVA. Mais visuellement, dans notre code, il n'est déterminé qu'à un seul endroit. Même le taux de TVA de 21 est stocké deans une unique variable `vatRate` qui est ensuite utilisée plusieurs fois, ce qui n'est pas directement lié à la notion de fonction mais contribue tout de même au principe DRY.

Dès qu'un morceau d'algorithme se trouve utilisé à plusieurs endroits de votre code, et ça arrive tout le temps, il devient nécessaire de créer des fonctions afin de simplifier les choses. Votre code devient plus facile à lire et à comprendre, que ce soit pour vos collègues ou même pour vous quand vous y reviendrez des semaines voire des mois plus tard.

Tout morceau de code appelé au moins deux fois gagne à se trouver enclavé dans une fonction réutilisable. Et parfois, même si notre morceau de code n'est appelé qu'une fois, une fonction peut quand même aider à rendre votre programme plus clair et mieux organisé.

### Valeurs par défaut

Il est possible de spécifier des valeurs par défaut à un ou plusieurs arguments d'une fonction. Exemple :

````js
function displayMessage(n, msg = "Salut") {
  for (let i = 0; i < n; ++i) {
    console.log(msg)  
  }
}

displayMessage(2, "Hey");
displayMessage(3);
````

Nous avons ici une fonction dont le rôle est d'afficher un certain message un certain nombre de fois. Pour que cette fonction... fonctionne... elle a absolument besoin de l'argument n, qui spécifie le nombre d'itérations. Concernant l'argument `msg`, cependant, une valeur par défaut `"Salut"` est définie. Cela signifie que si, à l'appel de la fonction, on ne passe pas de valeur en lieu et place de l'argument `msg`, alors la valeur par défaut `"Salut"` sera utilisée.

Ce code affiche donc deux fois `"Hey"`, puis trois fois `"Salut"`.

### Scope

Le scope des fonctions suit les mêmes principes que celui des conditions et des boucles. Les variables qui y sont déclarées avec `let` et `const` n'en sortent pas. Il en va de même pour les arguments des fonctions, qui ne sont autres que des variables `let` implicitement déclarées.

### Récursivité

Une fonction peut s'appeler elle-même. Sachez que c'est une chose qui existe, même si l'utilité d'un tel procédé vous échappe pour l'instant.

Prenons la fameuse suite de Fibonacci :

````js
function fibonacci(x) {
  if (x <= 1) {
    return 1;
  }
  
  return fibonacci(x - 1) + fibonacci(x - 2);
}
````

Si vous ne connaissez pas la suite de Fibonacci, ce n'est pas très grave. Ce qu'il faut retenir ici, c'est que notre fonction `fibonacci` s'appelle elle-même au sein de son propre code. C'est ce qu'on appelle une fonction récursive.

Et comme pour une boucle, si une fonction récursive n'est pas pensée pour pouvoir arrêter de boucler, elle continuera à s'appeler infiniment et fera planter le navigateur.

Vous utiliserez assez peu la récursivité à vos débuts. C'est une gymnastique mentale qui demande une certaine expérience en algorithmie, et dont l'usage demeure assez anecdotique en programmation impérative. C'est une pratique plus propre à la programmation dite fonctionnelle, dans des langages tels que le haskell où la récursivité prend même la place des boucles.
