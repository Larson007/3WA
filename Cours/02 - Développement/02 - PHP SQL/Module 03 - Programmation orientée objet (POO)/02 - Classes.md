# Module 03 - Programmation orientée objet (POO)

## 02. LES CLASSES

### Introduction

Nous avons vu les grands principes de la `programmation orientée objet` dans le chapitre précédent, sa définition `globale` et `abstraite`. Entrons désormais dans le détail technique.

Comment les objets fonctionnent-ils et s'agencent-ils, concrètement, en PHP ?

&nbsp;

### Classes

Chaque `objet` est en réalité une `instance d'une classe`.

Voyez la `classe` comme la définition ***abstraite d'un certain type d'objet***, et l'`instance` comme ***une occurrence concrète de cette définition***.

Si nous vous disons *« Fermez les yeux et pensez à une voiture. »* Que voyez-vous ? Juste *« une voiture »* ? Non, vous ne pensez pas de façon abstraite au concept de voiture. Vous voyez concrètement à une voiture précise : le Scenic gris de papa, la Kia jaune fluo de votre pote Magali en fac' de socio'. Vous voyez une occurrence concrète du concept de voiture, une `implémentation`, parce qu'il vous est pour ainsi dire impossible de visualiser un concept `abstrait`.

C'est la distinction entre une `classe` et une `instance`. « Voiture », c'est une classe. La Yaris noire toute rayée en bas de chez vous, c'est une instance de la classe *« Voiture »*, avec ses données propres.

&nbsp;

### Propriétés

Revenons-en à un contexte plus applicatif. Nous avons déjà vu une `classe`, très rapidement, dans notre cours sur le modèles dans le cadre du `schéma MVC` :

````php
class Movie
{
    public int $year;

    public string $title;
}
````

La classe `Movie` ne représente pas un film spécifique. Elle représente la définition abstraite de ce qu'est un film. Pour manipuler un film en particulier, nous devons créer une instance de cette classe :

````php
$mov = new Movie();
$mov->year = 1998;
$mov->title = 'Ringu';
````

À travers le mot-clé `new` suivi du nom de la classe et de parenthèses, nous créons une nouvelle instance de la classe `Movie`. Ensuite nous spécifions des valeurs précises dans ses propriétés jusqu'ici vierges : on dit qu'on `hydrate l'objet`.

Notre variable `$mov` contient désormais une instance de la classe `Movie` modélisant un film très précis.

Il nous est désormais très simple d'afficher, par exemple, le titre de ce film :

````php
echo $mov->title;  // 'Ringu'
````

&nbsp;

### Méthodes

Un objet ne se compose pas forcément exclusivement de `propriétés`. Il peut aussi effectuer des actions. Prenons le cas d'un `Router` très simple :

````php
class Router
{
    public function handleRequest(): void
    {
        $route = $_GET['page'] ?? 'homepage';

        switch ($route) {
            case 'homepage':
                $controller = new HomepageController();
                $controller->displayHomepage();
                break;
            case 'contact':
                $controller = new ContactController();
                $controller->displayContactForm();
                break;
            default:
                $controller = new HomepageController();
                $controller->displayHomepage();
                break;
        }
    }
}
````

Le détail du fonctionnement du `routing` n'est pas très important pour le moment, ce n'est qu'une approche parmi d'autres : en fonction du paramètre `$_GET['page']`, on décide quel `Controller` et quelle action de ce `Controller` exécuter.

Ce qu'il faut retenir ici, c'est la syntaxe d'une `méthode` :

````php
public function handleRequest(): void
````

Ça ressemble fortement à une `fonction`, n'est-ce pas ?

C'est une fonction. `« Méthode »` est le nom que l'on donne à une fonction liée à une classe.

Mais ces histoires de `public` que l'on voit depuis le début ? C'est la `visibilité`. Nous y venons au chapitre suivant sur la notion d'`encapsulation`.

&nbsp;

### __construct()

Nous allons aborder rapidement la `méthode __construct`. Il s'agit de ce que PHP appelle une `méthode magique`. Nous n'entrerons pas dans le détail de toutes les méthodes magiques, la documentation de PHP est là pour cela. Nous vous montrons pour l'instant la plus utilisée :

````php
class User
{
    public string name;

    public function __construct()
    {
        echo 'Salut';
    } 
}

$user = new User();
````

Ce code affiche le message `Salut`. Pourquoi ? Parce que la `méthode __construct` est une méthode qui s'exécute **automatiquement** au moment de l'**instanciation** de la classe. Quand vous tapez `new User()`, PHP exécute la `méthode __construct` de la classe `User` s'il en existe une.

Nous pouvons aussi passer des `paramètres` à cette `méthode`.

````php
class User
{
    public string name;

    public function __construct(string $message)
    {
        echo $message;
    } 
}

$user = new User('Salut');
````

Nous pouvons définir des `paramètres` à la `méthode __construct`. Ces `arguments` sont ensuite passés entre les parenthèses qui suivent le nom de la classe à l'instanciation.

Le `__construct`, entre autres usages, est très souvent employé pour `hydrater` une classe dès sa création.

````php
class User
{
    public string $name;
    public int $age;

    public function __construct(string $name, int $age)
    {
        $this->name = $name;
        $this->age = $age;
    }
}

$user = new User('Magali', 22);
echo $user->age;  // 22
````

Vous découvrez ici la variable `$this`. C'est très simple : elle est automatiquement déclarée par PHP et est accessible dans l'ensemble des méthodes d'une classe. Que contient-elle ? L'instance courante. La variable `$this` se réfère toujours à l'instance actuellement manipulée.

Et on utilise ici ce `$this` pour modifier dynamiquement les propriétés de l'instance. On passe deux valeurs au `__construct`, et on les assigne dans la foulée aux propriétés auxquelles on veut les assigner.

`Hydrater` un objet dans la foulée de son instanciation est l'utilisation la plus commune du `__construct`, mais vous verrez avec le temps que ce n'est pas la seule.

&nbsp;

### Résumé

**À retenir :**

- Une `classe` est la définition `abstraite` de futurs objets ;

- Un `objet`, ou `instance`, est un exemplaire `concret` d'une classe ;

- Les `objets` peuvent avoir des `caractéristiques` sous la forme de `variables` liées à une classe : des `propriétés` ;

- Les `objets` peuvent effectuer des `actions` sous la forme de `fonctions` liées à une classe : des `méthodes` ;

- La `méthode magique __construct`, si on la définit, est `automatiquement exécutée` à la création d'une instance ;

- On peut se `référer` à une `instance` depuis l'intérieur de ses méthodes grâce à la variable `$this`.
