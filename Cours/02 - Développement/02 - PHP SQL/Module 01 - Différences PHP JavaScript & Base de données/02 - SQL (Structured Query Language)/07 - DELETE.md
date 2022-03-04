# Module 01 - Différences PHP / JavaScript & Base de données

## 07. DELETE

### DELETE

La requête `DELETE` permet de supprimer une ou plusieurs entrées d'une table.

**directors**
|id|name|country|
|---|---|---|
|1|Michael Cimino|USA|
|2|Martin Scorcese|USA|
|3|Akira Kurosawa|Japon|
|4|Ingmar Bergman|Suède|
|5|Bruno Dumont|France|
|6|Julia Ducournau|France|
|7|Kenji Misumi|Japon|
|8|David Lynch|USA|
|9|Paul Verhoeven|Pays-Bas|

Mettons que nous voulions supprimer David Lynch de notre table `directors` :

````sql
DELETE FROM directors
WHERE directors.id = 8
````

Résultat :

**directors**
|id|name|country|
|---|---|---|
|1|Michael Cimino|USA|
|2|Martin Scorcese|USA|
|3|Akira Kurosawa|Japon|
|4|Ingmar Bergman|Suède|
|5|Bruno Dumont|France|
|6|Julia Ducournau|France|
|7|Kenji Misumi|Japon|
|9|Paul Verhoeven|Pays-Bas|

David Lynch a disparu.

Et si nous souhaitons retirer tous les réalisateurs japonais ?

````sql
DELETE FROM directors
WHERE country = "Japon"
````

**directors**
|id|name|country|
|---|---|---|
|1|Michael Cimino|USA|
|2|Martin Scorcese|USA|
|4|Ingmar Bergman|Suède|
|5|Bruno Dumont|France|
|6|Julia Ducournau|France|
|8|David Lynch|USA|
|9|Paul Verhoeven|Pays-Bas|

Akira Kurosawa et Kenji Misumi ont été supprimés.

Comme l'`UPDATE`, et à plus forte raison encore, la requête `DELETE` est très puissante et dangereuse. À moins de disposer de sauvegardes de la base de données, il n'existe pas de `Ctrl + Z`.

Chaque requête `DELETE` executée à la main sur une base de données en production doit vous faire transpirer par tous les pores de la peau. Ça rigole pas. Des erreurs dans un système peu solide, chez un client sans backups par exemple, peuvent avoir des conséquences graves.

&nbsp;

### Récapitulons

À ce stade, vous arrivez au bout des quatre grandes actions du `CRUD` :

- `Create`
- `Read`
- `Update`
- `Delete`

Nous avons vu que l'essentiel de la complexité logique se situait du côté des requêtes de lecture. Ces dernières peuvent parfois se révéler très alambiquées et difficiles à trouver en fonction des besoins, et nous n'avons même pas parlé d'optimisation. À côté, les requêtes de création, de modification et de suppression sont beaucoup plus simples. En sus, les requêtes de modification et surtout de suppression sont potentiellement très dangereuses : relisez bien ces requêtes avant de les exécuter, soyez sûrs de ce que vous faites.

Dans tous les cas, le SQL regorge de subtilités, d'approches différentes à un même problème, de syntaxes pouvant varier selon les préférences d'un développeur ou un autre. Ce support théorique n'a pas vocation à être absolument exhaustif, vous allez devoir faire vos recherches, poser vos questions, étudier et pratiquer.