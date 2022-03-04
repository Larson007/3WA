# Module 01 - Différences PHP / JavaScript & Base de données

## 05. INSERT

### INSERT

Nous l'avons dit au début : les requêtes de lecture sont les plus velues.

Les requêtes d'écriture sont beaucoup plus simples et linéaires.

Considérons la table suivante :

**directors**
|id|name|country|
|---|---|---|
|1|Michael Cimino|USA|
|2|Martin Scorcese|USA|
|3|Akira Kurosawa|Japon|
|4|Ingmar Bergman|Suède|
|5|Bruno Dumont|France|

Ajoutons une entrée à cette table.

````sql
INSERT INTO directors (name, country)
VALUES ("Julia Ducournau", "France")
````

Notre table se compose désormais d'une nouvelle entrée :

**directors**
|id|name|country|
|---|---|---|
|1|Michael Cimino|USA|
|2|Martin Scorcese|USA|
|3|Akira Kurosawa|Japon|
|4|Ingmar Bergman|Suède|
|5|Bruno Dumont|France|
|6|Julia Ducournau|France|

Traduisons cette requête SQL en français :

Dans la table `directors`, ajoute une entrée dont les colonnes `name` et `country` prendront respectivement pour valeurs `Julia Ducournau` et `France` !

Notez au passage que nous n'avons pas besoin de préciser de valeur pour la colonne `id`. Cette colonne bénéficiera de ce que l'on appelle l'auto-incrément : MySQL calcule la valeur sans avoir besoin de notre intervention. Les clés primaires (ou IDs) sont souvent des clés numériques en auto-incrément, et bien que ce ne soit pas toujours le cas (UUIDv4 par exemple), c'est ce que vous verrez principalement au cours de cette formation. Vos formateurs vous montreront par la pratique comment ces réglages fonctionnent.

Il est également possible d'ajouter plusieurs entrées à la fois en une seule requête.

````sql
INSERT INTO directors (name, country)
VALUES
  ("Kenji Misumi", "Japon"),
  ("David Lynch", "USA"),
  ("Paul Verhoeven", "USA")
````

Nous avons ajouté trois entrées d'un coup.

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

&nbsp;

### Récapitulons

Voilà, l'insertion n'est pas beaucoup plus subtile que cela.

Non, vraiment, c'est tout !

Attendez... on me souffle que Paul Verhoeven n'est pas américain. Oups ! Rendez-vous au chapitre suivant pour corriger cette erreur.