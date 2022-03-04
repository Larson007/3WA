# Module 01 - Différences PHP / JavaScript & Base de données

## 02. MySQL et SQL

### Système de gestion de base de données

[Un système de gestion de base de données](https://fr.wikipedia.org/wiki/Syst%C3%A8me_de_gestion_de_base_de_donn%C3%A9es), ou `SGBD`, est tout simplement un logiciel dont le rôle est de gérer des bases de données. Il en existe de très nombreux, et nous allons nous concentrer les systèmes de gestion de bases de données relationnelles, `SGBDR`. Et parmi les nombreux `SGBDR` (eh oui, on n'en finit pas), nous allons nous concentrer sur [MySQL](https://en.wikipedia.org/wiki/MySQL).

### MySQL

Pourquoi MySQL ? Parce qu'il est le `SGBDR` le plus connu et le plus courant, c'est tout. Il y a de très fortes chances pour que les premières bases de données que vous manipulerez dans votre carrière soient des bases MySQL, voire éventuellement des systèmes lui ressemblant fortement (`MariaDB`, `PostgreSQL`, etc.)

MySQL stocke les données sous la forme de bases et de tables, comme nous l'avons vu précédemment. En somme, toute l'introduction de ce module peut déjà servir à comprendre MySQL dans ses grands principes : des bases de données, elles-mêmes constituées de tables, elles-mêmes constituées d'entrées, elles-mêmes constituées de colonnes.

### SQL

[SQL](https://fr.wikipedia.org/wiki/Structured_Query_Language), pour « Structured Query Language », est un langage qui nous permet de communiquer avec MySQL. Toutes les interactions avec MySQL passent pas le SQL, sous la forme de requêtes. Que vous vouliez ajouter des données, en modifier, ou simplement en lire, toutes vos demandes se font en SQL. Un peu comme un bibliothécaire à qui on ne s'adresserait qu'en latin.

Connaître ce langage fait partie du socle des compétences fondamentales d'un développeur web. On n'y échappe pas et, soyez prévenus, il vous donnera des migraines. (:

En effet, si la syntaxe du SQL est simpliste, c'est la logique qui peut être parfois difficile à acquérir. Mais personne n'a dit que développeur était un métier facile, à ce stade de la formation vous commencez à le comprendre, et avec de la pratique tout est surmontable.

### CRUD

Nous allons sauter directement à la pratique : manipuler une base de données. Vos formateurs vous aideront à en mettre en place via des outils tels que PHPMyAdmin ou Adminer. Viendront ensuite les requêtes regroupant les quatre grandes actions que l'on peut exécuter sur un jeu de données : création, lecture, modification, suppression. En anglais : `Create`, `Read`, `Update`, `Delete`. `CRUD`.

La bonne nouvelle est que trois de ces actions sont extrêmement simples. La création, la modification et la suppression sont, la plupart du temps, des requêtes routinières. Ce sont les requêtes de lecture qui mobiliseront vraiment vos neurones et demanderont de l'entraînement.

Les chapitres suivants seront dédiés à ces actions, en commençant par la lecture.