# Module 01 - Différences PHP / JavaScript & Base de données

## 10 - require

### Diviser les fichiers

Si nous reprenons notre projet « Robot Factory », nous voyons un unique fichier `index.php` dans lequel on trouve du HTML, du PHP d'affichage, du PHP de logique... Si vous êtes arrivés au bonus 5, on a même une classe, dans ce fichier.

En bref, notre fichier `index.php` mélange beaucoup de choses. Surtout, il mélange logique de coulisses et affichage HTML. On n'a pour l'instant qu'une page unique, et notre robot n'a pas encore beaucoup de fonctionnalités. Que se passera-t-il quand ce projet gagnera en complexité ?

Un seul fichier, ça ne va pas. En javascript on divisait notre code en de nombreux fichiers, et le PHP ne fait pas exception à cette règle.

&nbsp;

### require

Imaginons un fichier `date.php` :

````php
<p>Nous sommes le <?= date('d m Y') ?></p>
````

Et ce fichier `index.php` :

````html
<!DOCTYPE html>
<html lang="fr-FR">
  <head>
    <meta charset="UTF-8">
    <title>Hey</title>
  </head>
  <body>
    <h1>Salut !</h1>
  
    <?php require './date.php'; ?>
  </body>
</html>
````

Testez ce code, vous verrez qu'il fera ce à quoi vous pourriez vous attendre : le fichier `index.php` va inclure le contenu du fichier `date.php` précisément à l'endroit où on l'appelle via la fonction `require`. En disant les choses simplement, c'est comme un genre de copier-coller automatique que PHP fera au moment de son exécution. Le résultat sera exactement le même que si vous aviez dès le départ écrit ce code :

````html
<!DOCTYPE html>
<html lang="fr-FR">
  <head>
    <meta charset="UTF-8">
    <title>Hey</title>
  </head>
  <body>
    <h1>Salut !</h1>
  
    <p>Nous sommes le <?= date('d m Y') ?></p>
  </body>
</html>
````

C'est ce que fait `require`.

Notez que comme pour echo, la fonction `require` peut s'appeler sans parenthèses. Ainsi `require './file.php'` fonctionne aussi bien que ``require('./file.php')``.

&nbsp;

### Alternatives

La fonction `require` n'est pas la seule fonction PHP dont le rôle et d'inclure le contenu d'un fichier dans un autre fichier. Il y en a quatre au total :

- `require`
- `include`
- `require_once`
- `include_once`
La différence entre `require` et `include` se situe dans leur gestion des erreurs. En effet, si un bug apparaît dans un morceau de PHP intégré via `include`, un simple avertissement apparaîtra et le code poursuivra son exécution dans la mesure du possible. À l'inverse, le moindre souci dans un script intégré via `require` causera une erreur fatale et stoppera totalement l'exécution du programme.

La bonne pratique dans la plupart des cas est de préférer `require` à `include`. On ne souhaite pas poursuivre l'exécution du code en cas de bug, en PHP la philosophie et « ça marche ou ça marche pas », pas « ça marche à moitié ». Vous comprendrez bien vite pourquoi.

De leur côté, `require_once` et `include_once` fonctionnent comme leurs homonymes respectifs, à la différence qu'ils s'assurent que le fichier inclus n'a pas déjà été inclus une précédente fois. Là où require fonctionne comme un bête copier-coller et ne se pose aucune question, `require_once` n'inclut le fichier que s'il n'a pas déjà été inclus.

La fonction `require_once` a donc parfois son utilité, mais il faut savoir qu'elle est aussi moins performante que `require`. Dans la plupart des cas, il faut donc essayer de privilégier `require`, et éviter les inclusions multiples en amont grâce à un bon design et une bonne architecture.

&nbsp;

### index.php

Le fichier `index.php` est toujours le seul et unique point d'entrée de notre site web. On n'accède jamais directement aux autres fichiers. C'est pourquoi nos URL peuvent ressembler à `http://localhost/some_project/index.php`, ou même `http://localhost/some_project` car la plupart des serveurs web sont configurés pour chercher automatiquement un fichier `index.php` ou `index.html`.

Tout autre fichier que `index.php` sera uniquement appelé à travers `require`. Il ne sera jamais servi directement.

Dans ce cas, comment un site web peut-il avoir plusieurs pages ?

Grâce à un système de routing. Toujours à travers `index.php`, PHP sera capable de déterminer quels fichiers `require` en fonction de l'adresse demandée. Nous y viendrons bientôt.

Retenez, dans tous les cas, qu'on ne sert jamais directement un autre fichier que `index.php`. Des adresses du type `http://www.some-site.net/forum.php` existent sur le web, mais c'est une pratique ancienne et aujourd'hui mauvaise.
