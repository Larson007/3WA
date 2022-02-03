# 04. projet - calculaprompt

## Calculaprompt

Comment fonctionne une calculatrice ?

On appuie sur des boutons pour construire un calcul, puis on valide, puis la machine nous affiche le résultat du calcul.

On va devoir cliquer sur des boutons ? Non, pas encore. Notre première calculatrice ne sera pas aussi pratique et jolie. Elle sera un peu bancale et malade, mais on va l'aimer quand même, parce qu'elle fonctionnera.

Comment va fonctionner la calculaprompt ?

En demandant à l'utilisateur trois choses d'affilée :

Un premier nombre ;
Un opérateur arithmétique (+, /, +, -) ;
Un second nombre.
Puis, dans la console du navigateur, on affiche un rappel du calcul complet, par exemple 23 / 100.

Puis, toujours dans la console, on affiche le résultat du calcul.

Un exemple pour récapituler le fonctionnement :

* L'utilisateur arrive sur la page ;
* L'utilisateur entre 6 dans un premier `window.prompt` ;
* L'utilisateur entre * dans un deuxième `window.prompt` ;
* L'utilisateur entre 10 dans un troisième `window.prompt` ;
* La console affiche le calcul 6 * 10 ;
* La console affiche le résultat 60 ;

> /!\ Attention : vous n'avez pas besoin de la fonction `eval`. Vous ne l'utiliserez donc pas pour résoudre ce problème.

Vous pouvez d'ores et déjà vous lancer !

Si vous êtes de nature un peu frileuse, ou si vous bloquez déjà depuis un moment, voici quelques indices.

## Indices

Souvenez-vous que `window.prompt` renvoie toujours une chaîne de caractères. Vous pourriez avoir besoin de jeter un œil du côté de la fonction Number, qui transforme une String en `Number`. Par exemple, `"12"` devient `12`.
Souvenez-vous de la notion de `concaténation` de chaînes de caractères. Vous pourriez en avoir besoin pour afficher le calcul dans la console.

## Bonus 1 : gestion des erreurs

Rien n'empêche un utilisateur d'entrer n'importe quoi. Et il le fera. Oh oui ! Il le fera. L'utilisateur est votre pire ennemi, il vous veut du mal. Si vous lui demandez son âge, il répondra « Bonjour. » La programmation, c'est aussi essayer d'envisager tous les cas de figure et ne pas laisser votre application planter bêtement.

N'oubliez jamais cette règle d'or :

Never trust user input.

Vous allez notamment vouloir vérifier que l'utilisateur a bien entré un nombre quand vous lui avez demandé un nombre. Regardez donc du côté de la fonction `isNaN`.

Vous pourriez aussi avoir envie d'afficher des erreurs dans la console, de manière plus voyante que les `console.log` habituels : `console.error`.

## Bonus 2 : document.write

Et si on quittait un peu la console pour écrire directement sur la page ? Petit indice :` document.write`.