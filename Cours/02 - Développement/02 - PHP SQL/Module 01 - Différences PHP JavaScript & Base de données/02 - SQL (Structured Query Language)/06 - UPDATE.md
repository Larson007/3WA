# Module 01 - Différences PHP / JavaScript & Base de données

## 06. UPDATE

### UPDATE

Une erreur s'est glissée dans notre table des réalisateurs au chapitre précédent :

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
|9|Paul Verhoeven|USA|

Paul Verhoeven est un réalisateur néerlandais. Voyons ce qu'`UPDATE` peut faire pour nous.

````sql
UPDATE directors
SET country = "Pays-Bas"
WHERE directors.id = 9
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
|8|David Lynch|USA|
|9|Paul Verhoeven|Pays-Bas|

Traduisons la requête :

Dans la table `directors`, remplace la valeur de la colonne `country` par `Pays-Bas` pour la ou les entrées répondant à la condition d'avoir pour `id` la valeur `9` !

La clause `WHERE` permet ici de fixer une condition pour filtrer quelles entrées exactement on souhaite modifier. L'`ID` est bien sûr un attribut unique, et cette requête ne manipulera donc qu'une seule entrée ; mais l'`UPDATE` est une fonctionnalité puissante qui peut agir sur autant d'entrées qu'on le souhaite.

Considérons par exemple la requête suivante :

````sql
UPDATE directors
SET name = "Mickey Mouse", country = "Mars"
WHERE directors.country = "USA"
````

Si nous exécutons cette requête délirante, tous les réalisateurs des États-Unis seront renommés `Mickey Mouse` et vivront sur `Mars`. Pourquoi vous montrer un exemple idiot ? Pour vous faire comprendre que l'`UPDATE` est une requête puissante, irréversible, et donc potentiellement dangereuse si mal utilisée. Faites toujours très attention à l'exactitude chirurgicale de votre clause `WHERE`. De toute façon, en pratique dans le développement applicatif, les entrées à modifier sont la plupart du temps sélectionnées par l'`ID`. Il est assez rare de modifier plusieurs entrées à la fois. Mais ça peut arriver, donc méfiance, vous êtes prévenus, les données c'est la cour des grands, vous ne voulez pas faire une grosse bêtise dans la base de données d'un client. (:

&nbsp;

### Récapitulons

La requête `UPDATE` n'est pas beaucoup plus compliquée que la requête `INSERT`. On spécifie dans quelles colonnes on veut mettre quelles valeurs, en filtrant les entrées sur lesquelles agir via la clause `WHERE`. Simple !
