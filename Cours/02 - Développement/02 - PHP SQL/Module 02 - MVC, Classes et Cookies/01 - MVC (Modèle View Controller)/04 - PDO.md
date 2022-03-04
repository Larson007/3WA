# Module 02 - MVC, Classes et Cookies

## 04 - PDO

### PDO

Comment exécuter des requêtes SQL depuis PHP ?

Il existe plusieurs méthodes. Nous n'en verrons qu'une seule au cours de cette formation : `PDO`.

`PDO` est un objet natif de PHP qui permet représenter une connexion à une base de données et d'effectuer de nombreuses actions liées à cette connexion. Et notamment exécuter des requêtes SQL.

Exemple de connexion :

````php
$db = new PDO(
    'mysql:host=db.3wa.io;port=3306;dbname=my_movies',
    'Magali',
    'azerty1234'
);
````

Cette instruction stocke une instance de la classe `PDO` dans la variable `$db`. L'instanciation demande trois paramètres : une chaîne d'un format particulier spécifiant certaines informations (protocole, hôte, port, nom de la base), puis le nom de l'utilisateur MySQL, puis le mot de passe de celui-ci. Ainsi, notre variable `$db` contient une représentation objet de la connexion à la base de données `my_movies` sur le serveur `db.3wa.io:3306`, sous l'utilisateur `Magali`.

De là, nous pouvons exécuter des requêtes.

````php
$db = new PDO(
    'mysql:host=db.3wa.io;port=3306;dbname=my_movies',
    'Magali',
    'azerty1234'
);


$query = $db->prepare('SELECT * FROM movies LIMIT 10');
$query->execute();
$movies = $query->fetchAll();
````

On prépare la requête. Puis on l'exécute. Puis on récupère son résultat dans la variable `movies`. Celle-ci contient un tableau contenant nos films.

&nbsp;

### Injection SQL

L'injection SQL est une faille de sécurité potentielle et très dangereuse qui se présente quand on commence à exécuter des requêtes SQL contenant des entrées utilisateur.

Nous n'entrerons pas dans le détail de l'injection SQL ici, ce serait inutile, vous trouverez énormément d'exemples en ligne. En revanche, nous devons insister sur la nécessité de s'en prémunir.

Admettons que l'utilisateur ait demandé l'URL `index.php?page=profile&id=12`.

La requête SQL qui en découle est la suivante :

````sql
SELECT * FROM users WHERE users.id = 12
````

Comment exécuter cette requête avec `PDO` en lui passant dynamiquement le paramètre `$_GET['id']` ?

````php
$query = $db->prepare('SELECT * FROM users WHERE users.id = :id');
$parameters = [
    'id' => $_GET['id']
];
$query->execute($parameters);
$result = $query->fetch();
````

On prépare la requête en lui spécifiant un certain nombre de paramètres dynamiques. Au moment d'exécuter la requête, on lui dit dans un second temps quelles valeurs mettre dans quels paramètres.

> ***ON NE CONCATÈNE JAMAIS LES ENTRÉES UTILISATEUR DIRECTEMENT DANS UNE REQUÊTE SQL. LA FORME `'SELECT * FROM users WHERE users.id = ' . $_GET['id']` EST ABSOLUMENT INTERDITE.***

Tatouez-vous cette règle sur l'avant-bras, peignez-la en rouge sur le mur de vos toilettes.

On prépare toujours la requête dans en premier temps avec des paramètres dynamiques, pour lui passer les valeurs dans un second temps. `PDO` se chargera lui-même d'assainir ces valeurs potentiellement dangereuses.

&nbsp;

### Modèle

Refaisons le lien avec notre modèle :

````php
$query = $db->prepare('SELECT * FROM users WHERE users.id = :id');
$parameters = [
    'id' => $_GET['id']
];
$query->execute($parameters);
$result = $query->fetch();

$user = new User();
$user->id = $result['id'];
$user->name = $result['name'];
$user->email = $result['email'];
````

Ainsi, plutôt qu'un tableau peu structuré et peu solide, nous manipulons un vrai objet de la classe `User`, avec tous les avantages qu'un objet nous apporte et que nous verrons bientôt.
