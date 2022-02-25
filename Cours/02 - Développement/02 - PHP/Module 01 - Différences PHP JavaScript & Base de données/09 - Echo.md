# Module 01 - Différences PHP / JavaScript & Base de données

## 09 - echo

### echo

Après avoir parcouru quelques différences syntaxiquesentre le javascript et le PHP, après avoir eu quelques mots autour du `PSR-12`, nous allons bientôt pouvoir commencer la pratique.

Avant les exercices, il va falloir au préalable comprendre comment fonctionne un fichier PHP.

À l'origine, le PHP est créé pour dynamiser le HTML. Au lieu de présenter des pages web statiques, le PHP permet de calculer à la volée certains morceaux de HTML. Prenons l'exemple suivant :

````html
<!DOCTYPE html>
<html lang="fr-FR">
  <head>
    <meta charset="UTF-8">
    <title>Hey</title>
  </head>
  <body>
    <h1>Nous sommes le 30 07 2020</h1>
  </body>
</html>
````

Cette page affiche en titre principal la date. Mais à moins que les lois de la physique aient beaucoup changé depuis la première rédaction de ce cours, il y a de fortes probabilités pour que l'on ne soit plus le 30 07 2020.

````php
<?php

function getCurrentDate(): string {
    return date('d m Y');
}

?>
````

````html
<!DOCTYPE html>
<html lang="fr-FR">
  <head>
    <meta charset="UTF-8">
    <title>Hey</title>
  </head>
  <body>
    <h1>Nous sommes le <?php echo getCurrentDate(); ?></h1>
  </body>
</html>
````

Voilà, nous avons commencé à parsemer notre HTML de bouts de PHP.

En premier lieu nous déclarons notre fonction `getCurrentDate()`, qui ne fait pas grand-chose d'autre qu'utiliser la fonction PHP `date`.

Puis, dans notre fameux titre principal, nous utilisons cette fois la fonction echo pour afficher le retour de l'appel de `getCurrentDate`.

La fonction `echo` est donc primordiale en PHP, son rôle est d'afficher une chaîne de caractères dans du HTML. Même dans un programme qui contiendrait des dizaines de milliers de lignes de code, `echo` des résultats dans le HTML est le but final du PHP.

Afficher une chaîne de caractères dans du HTML, c'est tout ? C'est toute la base du web. Qu'est-ce qu'une page HTML sinon un grand fichier de texte ? Il s'agit dans tous les cas de construire du texte. Le PHP nous permet de dynamiser ce texte, de ne pas nous contenter d'un HTML statiquement fixé.

`echo` est l'une des rares fonctions où les parenthèses ne sont pas obligatoires. `echo('Salut')` fonctionne aussi bien que `echo 'Salut'`. Et on a d'ailleurs tendance à privilégier cette seconde syntaxe.

### `<?php ?>` et syntaxe courte

Intégré à du HTML, le PHP est enclavé entre sa balise ouvrante `<?php` et sa balise fermante `?>`.

Il existe une exception à cela. Reprenons notre exemple :

````php
<?php

function getCurrentDate(): string {
    return date('d m Y');
}

?>
````

````html
<!DOCTYPE html>
<html lang="fr-FR">
  <head>
    <meta charset="UTF-8">
    <title>Hey</title>
  </head>
  <body>
    <h1>Nous sommes le <?= getCurrentDate() ?></h1>
  </body>
</html>
````

La syntaxe `<?php echo $value; ?>` peut être remplacée par `<?= $value ?>`. Sachant qu'un document HTML peut comporter beaucoup de `echo`, une syntaxe courte et lisible devient alors très pratique. Nous vous recommandons de l'utiliser.

Notez que dans le cas d'un fichier comportant exclusivement du PHP et aucun HTML, il n'est pas obligatoire – ni recommandé – de fermer la balise `<?php`. Mais ce n'est applicable que dans le cas où l'on sépare le PHP du HTML, nous reverrons cela dans les détails très vite.

Retenez pour l'instant que dans du HTML, les bouts de PHP sont toujours enclavés entre `<?php` et `?>`, sauf dans le cas de la syntaxe courte du `echo : <?=` et `?>`

&nbsp;

### Résumé

Vous devriez commencer à comprendre le principe du PHP. Il est exécuté par le serveur web ***(Apache, Nginx, etc.)*** pour générer dynamiquement des morceaux de contenu à l'intérieur du HTML.

Au moment d'une requête, on demande au serveur de nous renvoyer une page HTML. Si le serveur voit du PHP dans cette page HTML, alors il l'exécute avant de renvoyer le résultat final.

Le PHP n'est pas le seul langage capable de cette prouesse. En fait, tous les langages de programmation sont techniquement capables de générer du texte dans du HTML. Mais le PHP est le seul dont c'est historiquement le rôle principal depuis sa création ; tout son écosystème et toute sa culture sont donc essentiellement tournés vers cette fonction de génération de HTML. La plupart de vos programmes PHP, qu'ils soient constitués de dix ou cent mille lignes de code, mèneront au bout du compte à `echo` des choses au monde.
