# Module 01 - Différences PHP / JavaScript & Base de données

## 06 - Fonctions

### Fonctions...

De base, une fonction PHP peut être déclarée de la même façon qu'en javascript.

````php
function multiply($x, $y) {
    return $x * $y;
}
````

**MAIS.**

Ce code fonctionne, bien sûr.

**MAIS.**

Vous faites comme vous voulez, hein.

**MAIS.**

&nbsp;

### ... et type hinting

En PHP, les types sont très importants. Le PHP permet de forcer les arguments d'une fonction à être de tel ou tel type, et il peut même forcer la fonction à ne renvoyer que tel ou tel type.

````php
function addExclamationToMessage(string $message): string {
    return $message . ' !';
}
````

Une fonction très (très) utile qui ajoute un point d'exclamation à une chaîne de caractères. L'argument `$message` sera obligatoirement de type `string`, et la valeur de retour sera elle aussi obligatoirement de type `string`.

On traite un message, et on renvoie ce message modifié. En somme, on traite une `string`, et on renvoie une `string`. Là où en javascript il fallait faire confiance au développeur pour ne pas se tromper et renvoyer par exemple un nombre, le PHP permet de forcer le programme à ne pas accepter autre chose que le type explicitement requis.

Ce comportement s'appelle le type hinting. Par exemple, le code suivant causera immédiatement un bug :

````php
function addExclamationToMessage(string $message): string {
    return [$message, '!'];
}
````

PHP attend une `string` en retour, il ne va pas être content quand il verra qu'on tente de renvoyer un `array`. Il lèvera une erreur sans attendre. Cela permet de chasser un bug très en amont, en ne laissant même pas une valeur erronée quitter sa fonction. Si on laissait cette fonction `addExclamationToMessage` renvoyer un tableau, cela pourrait au bout du compte induire un bug très sournois et difficile à traquer bien plus loin dans l'exécution du programme.

En typant les valeurs d'entrée et de sortie des fonctions, on tue de très nombreux bugs potentiels dans l'œuf.

Si le type `hinting` n'est techniquement pas obligatoire, dans le sens où PHP ne l'impose pas, c'est bien pus qu'une simple bonne pratique : c'est devenu indispensable dans le monde professionnel.

Selon vos niveaux respectifs à ce stade de la formation, vos formateurs prendront peut-être la décision de ne pas vous faire typer les fonctions tout de suite afin de suivre votre rythme. Respectez cette décision, vos formateurs savent ce qu'ils font. Vous viendrez au type hinting bien assez vite. (:

&nbsp;

### Types nullables

Depuis sa version 7.2 (2017), PHP propose une syntaxe très pratique pour dire qu'une valeur peut être soit d'un certain type, soit `null`. Le type `null` représentant l'absence de valeur, il se marie bien avec les autres types pour dire par exemple « cette valeur est soit un nombre soit rien du tout ».

Pour spécifier un type nullable, on ajoute simplement un point d'interrogation devant le nom du type : `?string`, `?int`, etc. Exemple :

````php
function getNameFromUser(array $user): ?string {
    if (isset($user['name']) && is_string($user['name'])) {
        return $user['name'];
    }

    return null;
}
````

Si le tableau `$user` contient bien un index `name`, et que la valeur trouvée à cet index est bien une `string`, alors on la retourne. La fonction retourne alors une `string`.

Si, au contraire, le tableau `$user` ne contient pas d'index `name`, ou que cet index `name` existe mais présente autre chose qu'une `string`, alors la fonction retourne `null`.

Nous avons donc une fonction qui retourne soit une `string` soit `null`. Son retour est par conséquent typé à `?string`.

Notez que si cela fonctionne avec les valeurs de retour, c'est aussi valable pour les valeurs d'entrée.

&nbsp;

### Valeurs par défaut

Comme en javascript, on peut définir des valeurs par défaut pour les arguments.

function appendPunctuation(string $str, string $punctuation = '.'): string {
    return $str . $punctuation;
}

echo appendPunctuation('Salut');
En omettant ici le deuxième argument lors de l'appel de la fonction, on le laisse utiliser sa valeur par défaut `'.'`. Ce code affiche donc `Salut..`

&nbsp;

### declare(strict_types=1);

Et... non !

Il est trop tôt pour vous expliquer `declare(strict_types=1);`. Cette petite section n'est ici que pour mettre sournoisement cette notion dans votre tête, et forcer vos formateurs à vous l'expliquer un jour... héhé !
