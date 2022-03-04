# Module 01 - Différences PHP / JavaScript & Base de données

## 04. JOIN

### JOIN

Reprenons notre base de données.

**directors**
|id|name|country|
|---|---|---|
|1|Michael Cimino|USA|
|2|Martin Scorcese|USA|
|3|Akira Kurosawa|Japon|
|4|Ingmar Bergman|Suède|
|5|Bruno Dumont|France|

**movies**
|id|year|title|director_id|
|---|---|---|---|
|1|1966|Persona|4|
|2|1997|La Vie de Jésus|5|
|3|2003|Sarabande|4|
|4|1978|The Deer Hunter|1|
|5|1976|Taxi Driver|2|
|6|1950|Rashōmon|3|

Admettons que nous voulions la liste de tous les films par leurs titres, respectivement associés aux noms de leurs réalisateurs.

````sql
SELECT movies.title, directors.name
FROM movies
JOIN directors ON directors.id = movies.director_id
````

Notez que nous commençons à rédiger les requêtes sur plusieurs lignes, afin d'en améliorer la lisibilité.

Résultat :

|title|name|
|---|---|
|Persona|Ingmar Bergman|
|La Vie de Jésus|Bruno Dumont|
|Sarabande|Ingmar Bergman|
|The Deer Hunter|Michael Cimino|
|Taxi Driver|Martin Scorcese|
|Rashōmon|Akira Kurosawa|

Bon. Détaillons cette requête.

Premièrement, `movies.title`, `directors.name` au lieu de `title`, `name`. Nous n'avons pas eu besoin de cette syntaxe jusqu'ici parce qu'une seule table était impliquée dans la requête, mais nous pouvons – et devons parfois – préciser la table en plus de la colonne. Pourquoi ? Notre requête comporte plusieurs tables, qui peuvent souvent avoir des colonnes portant les mêmes noms. En l'occurrence la colonne id, mais ça peut tomber sur beaucoup de noms d'attributs très courants : `title`, `name`, `date`, etc. Dans un souci de levée d'ambiguïté, MySQL nous impose donc dans ces cas de préciser les tables.

Et enfin, la star : `JOIN`. Ce mot-clé nous permet de créer une `jointure` au sein d'une requête, et donc d'exploiter le potentiel des relations. Rappelons-le, la table `directors` et la table `movies` sont liées par une relation `One-to-Many`.

Traduisons notre requête SQL en français :

````sql
SELECT movies.title, directors.name
FROM movies
JOIN directors ON directors.id = movies.director_id
````

Sélectionne le titre de chaque film et le nom de chaque réalisateur ;
Ce depuis table des films jointe à la table des films, où le film sera associé
à son réalisateur ;

Comme la jointure est faite avec la condition selon laquelle l'`id` du réalisateur doit être égal pour chaque ligne au `director_id` du film, le résultat produit un tableau où chaque entrée est un film associé à son réalisateur respectif.

On pourrait préciser cette requête par l'ajout d'une clause `WHERE`.

````sql
SELECT movies.title, directors.name
FROM movies
JOIN directors ON directors.id = movies.director_id
WHERE directors.id = 4
````

Nous ne voulons ici que les films d'Ingmar Bergman. Résultat :

|title|name|
|---|---|
|Persona|Ingmar Bergman|
|Sarabande|Ingmar Bergman|

Un peu de tri ?

````sql
SELECT movies.title, directors.name
FROM movies
JOIN directors ON directors.id = movies.director_id
WHERE directors.id = 4
ORDER BY movies.year DESC
````

Les films d'Ingmar Bergman, du plus récent au plus ancien. Résultat :

|title|name|
|---|---|
|Sarabande|Ingmar Bergman|
|Persona|Ingmar Bergman|

### Récapitulons

Notre dernière requête faisait cinq lignes. Ça monte vite. (:

Nous en resterons là pour ce cours théorique sur les requêtes de lecture et les jointures. Le SQL, c'est surtout une expérience qui s'acquiert avec le temps. Différents types de jointures, fonctions d'agrégation, clause `GROUP BY`, requêtes imbriquées, etc. Tout détailler ici ne ferait que dupliquer les nombreuses documentations qui existent sur le web. Tout un monde que vous allez découvrir par la pratique.

Le plus important est de bien en comprendre la logique. Ne laissez aucun angle mort à votre compréhension aux bases de la logique SQL, ne restez pas dans le flou. Fondez votre pratique sur un beau « OK j'ai pigé ». Pour atteindre ce « OK j'ai pigé », posez des questions à vos formateurs, parcourez les ressources en lignes telle que SQL.sh. Puis pratiquez, pratiquez, pratiquez. À partir de maintenant, tous vos projets comporteront des bases de données, par la force des choses vous allez donc écrire beaucoup de requêtes SQL. La plupart seront très simples, mais certaines hanteront vos nuits !