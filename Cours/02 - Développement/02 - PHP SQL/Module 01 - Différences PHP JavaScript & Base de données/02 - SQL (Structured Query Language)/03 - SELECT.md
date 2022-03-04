# Module 01 - Différences PHP / JavaScript & Base de données

## 03. SELECT

### SELECT

Une requête de lecture commence toujours par le mot-clé `SELECT`.

Reprenons notre liste de films :

**Movies**

|ID|Année|Titre|Réalisateur|
|---|---|---|---|
|1|1966|Persona|4|
|2|1997|La Vie de Jésus|5|
|3|2003|Sarabande|4|
|4|1978|The Deer Hunter|1|
|5|1976|Taxi Driver|2|
|6|1950|Rashōmon|3|

Admettons que dans cette table nommée `movies` nous voulions récupérer les titres de tous les films sans exception :

````sql
SELECT title FROM movies
````

Le mot-clé `SELECT`, suivi de la colonne – ou des colonnes – que nous voulons récupérer.

Puis le mot-clé `FROM`, suivi de la table à parcourir.

Traduction de la requête : « Sélectionne les titres des films ! »

La réponse de MySQL à cette requête ressemblera à ça :

|**title**|
|---|
|Persona|
|La Vie de Jésus|
|Sarabande|
|The Deer Hunter|
|Taxi Driver|
|Rashōmon|

Nous pouvons bien sûr demander plusieurs colonnes :

````sql
SELECT title FROM movies
````

On sépare les colonnes par des virgules `,`. Résultat :

|ID|title|
|---|---|
|1|Persona|
|2|La Vie de Jésus|
|3|Sarabande|
|4|The Deer Hunter|
|5|Taxi Driver|
|6|Rashōmon|

Et si nous voulons toutes les colonnes, il existe un raccourci syntaxique :

````sql
SELECT * FROM movies
````

Ici le caractère `*` signifie ***« tout »***. Résultat :

|ID|Année|Titre|Réalisateur|
|---|---|---|---|
|1|1966|Persona|4|
|2|1997|La Vie de Jésus|5|
|3|2003|Sarabande|4|
|4|1978|The Deer Hunter|1|
|5|1976|Taxi Driver|2|
|6|1950|Rashōmon|3|

Ceci est la base d'une requête `SELECT`. Compliquons les choses !

&nbsp;

### WHERE

Le mot-clé `WHERE` sert à préciser des conditions. Mettons que nous voulions tous les films réalisés par Ingmar Bergman, dont l'ID est 4.

````sql
SELECT title FROM movies WHERE director = 4
````

Le signe `=` désigne l'égalité.

Traduction : ***« Sélectionne les titres des films dont le réalisateur est 4. »***

Résultat :

|**title**|
|---|
|La Vie de Jésus|
|Sarabande|
|The Deer Hunter|
|Taxi Driver|

Le mot-clé `WHERE` étant une condition, il obéit à la même grammaire algorithmique qu'un `if`. Ainsi, les notions `et` et `ou` existent à travers les mots-clés `AND` et `OR`.

Si nous voulons sélectionner tous les films réalisés entre 1960 et 2000.

````sql
SELECT title FROM movies WHERE year >= 1960 AND year <= 2000
````

Résultat :

|**title**|
|---|
|Persona|
|La Vie de Jésus|
|The Deer Hunter|
|Taxi Driver|

Notez que cette requête peut être raccourcie grâce au mot-clé `BETWEEN` !

&nbsp;

### ORDER BY

Nous pouvons trier l'ordre des résultats grâce au mot-clé `ORDER BY`.

````sql
SELECT id, title FROM movies ORDER BY title
````

Résultat :

|ID|title|
|---|---|
|2|La Vie de Jésus|
|1|Persona|
|6|Rashōmon|
|3|Sarabande|
|5|Taxi Driver|
|4|The Deer Hunter|

Les films sont classés par ordre alphabétique de la colonne `title`.

````sql
SELECT id, title FROM movies ORDER BY year
````

|ID|title|
|---|---|
|3|Sarabande|
|2|La Vie de Jésus|
|4|The Deer Hunter|
|5|Taxi Driver|
|1|Persona|
|6|Rashōmon|

Le mot-clé `DESC` après la clause `ORDER BY` précise que nous voulons trier par ordre descendant. L'ordre ascendant, qui s'obtient via le mot-clé `ASC`, est le comportement par défaut.

&nbsp;

### LIMIT

Nous pouvons limiter le nombre de résultats. C'est par exemple utile pour une pagination, où pour chaque page nous pourrions limiter le nombre de résultat à quinze.

En l'occurrence, servons-nous ici du `LIMIT` pour ne récupérer que le film le plus récent de la table :

````sql
SELECT id, title FROM movies ORDER BY year DESC LIMIT 1
````

Résultat :

|ID|title|
|---|---|
|6|Rashōmon|

### Récapitulons

Ce que nous venons de voir est la base d'une requête SQL « plate ». Récupérer les données d'une table, sous la forme d'un tableau qui sera ensuite exploitable par PHP sous la forme de `tableaux associatifs` ou d'`objets`. Nous reviendrons plus tard au pont avec PHP.

Pourquoi parlons-nous de requête plate ? Parce que nous n'extrayons ici les données que d'une seule table à la fois, sans avoir besoin des relations. Comment par exemple associer, dans un même résultat, les films et leurs réalisateurs ? Le chapitre suivant concernera les `jointures` entre les `tables`.