# Module 03 - Programmation orientée objet (POO)

## 05. Interfaces

### Introduction

Souvenez-vous : dans notre introduction à la `POO`, nous avons évoqué la distinction entre `l'interface` et `l'implémentation`.

`L'interface` est le contrat `abstrait` passé entre deux modules, et `l'implémentation` est l'application pratique de ce contrat.

Un feu rouge vous impose de vous arrêter, c'est le contrat que vous passez en acceptant de respecter le Code de la Route. Si vous êtes en voiture, il faudra presser la pédale de frein qui activera des plaquettes qui ralentiront vos roues par frottement. En vélo, le mécanisme se situera au niveau des mains et activera des patins. Frein de voiture et frein de vélo, deux implémentations différentes pour remplir le même contrat et parvenir au même résultat final : l'arrêt.

Dans la vie quotidienne, rien d'autre que le contrat social ne vous empêche techniquement d'enfreindre les règles. Il n'existe aucune barrière physique vous empêchant de rouler à gauche sur une départementale ou de tuer votre voisin à la hache quand il oublie de vous dire bonjour.

En PHP il existe une mécanique permettant de forcer une classe à respecter un contrat.

&nbsp;

### Interfaces

Les `interfaces` sont une mécanique existant dans quelques langages orientés objet : PHP mais aussi `java` et `C#`, entre autres.

````php
interface ModelInterface
{
    public function getId(): int;

    public function setId(int $id): void;
}

class User implements ModelInterface
{
    private int $id;

    public function getId(): int
    {
        return $this->id;
    }
}
````

Le mot-clé `interface` suivi du nom de l'interface en `PascalCase`. Le nom finit conventionnellement par `Interface`, nous permettant de plus facilement les reconnaître dans le code.

Puis on définit la signature d'une ou plusieurs `méthodes publiques`. La signature d'une méthode ou d'une fonction, c'est, pour dire les choses simplement, sa première ligne : son nom, ses paramètres et types d'entrée, et son type de sortie.

Que dit ce code ? Que toute classe signant le contrat `ModelInterface` doit impérativement `implémenter` les méthodes `getId` et `setId`, en respectant précisément leurs signatures respectives. Si l'interface `ModelInterface` impose un `public function setId(int $id): void;` et qu'on spécifie que la classe `User` est une implémentation de cette interface, alors cette classe `User` doit implémenter une `méthode setId` prenant un paramètre entier en entrée et ne renvoyant aucune valeur en sortie.

L'interface dit « Je veux que tout modèle ait obligatoirement ces méthodes. Je vous dis pas comment, je me fiche du détail, je veux juste qu'on puisse **lire** et **modifier** un **ID** numérique sur n'importe quel **modèle**. »

Le code de notre exemple n'est donc pas fonctionnel, il manque la` méthode setId`. Nous devons l'implémenter :

````php
interface ModelInterface
{
    public function getId(): int;

    public function setId(int $id): void;
}

class User implements ModelInterface
{
    private int $id;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }
}
````

&nbsp;

### Substitution

Comme pour l'`héritage`, le principe de `substitution` s'applique à l'`implémentation` d'une `interface`. Si une classe `ArticleController` implémente l'interface `ControllerInterface`, alors PHP considèrera qu'une instance de `ArticleController` est aussi bien de type `ArticleController` que de type `ControllerInterface` :

````php
interface ControllerInterface
{
}

class ArticleController implements ControllerInterface
{
}

$controller = new ArticleController();
echo $controller instanceof ArticleController;  // true
echo $controller instanceof ControllerInterface;  // true
````

&nbsp;

### À quoi ça sert ?

Les `interfaces` apportent de la solidité au `polymorphisme` dans une application. En imposant à certaines classes d'implémenter certaines `méthodes`, on rend dans beaucoup de cas notre code beaucoup plus fiable et prévisible.

Beaucoup de cas ? Oui, principalement quand on aborde la généricité de notre code et qu'on développe des modules génériques et réutilisables.

Considérons cet exemple :

````php
interface ModelInterface
{
    public function validate(): bool;
}

class User implements UserInterface
{
    private int $id;

    private string $email;

    private string $password;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): void
    {
        $this->password = $password;
    }

    public function validate(): bool
    {
        if (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
            return false;
        }

        if (strlen($this->password) < 8) {
            return false;
        }

        return true;
    }
}
````

En imposant à tout nouveau modèle d'implémenter une méthode `validate`, nous nous simplifions la vie à la réception des formulaires. Quel que soit le modèle en question, on sait qu'on peut lui faire confiance pour que cette méthode existe. De là, nous pouvons facilement automatiser la validation des formulaires, par exemple.

Est-ce que j'en ai besoin ?
Nous savons que les interfaces sont une notion avancée de la POO et qu'elles doivent vous sembler floues pour le moment. La seule théorie ne pourra jamais totalement vous faire comprendre quand les utiliser.

C'est par l'expérience que vous finirez par vous débloquer sur ce sujet : en voyant des développeurs expérimentés en créer et s'en servir, en les voyant dans le code de frameworks comme `Symfony`, en les utilisant vous-mêmes avant de chercher à en créer, etc.

Bref, pas de panique si à l'issue de ce chapitre vous ne comprenez toujours pas grand-chose aux interfaces : c'est normal. C'est une notion complexe qui demande de l'expérience. Ça viendra. (:

&nbsp;

### Résumé

**À retenir :**

- Une interface définit un contrat que doit respecter toute classe qui l'implémente ;

- Comme en héritage, les classes implémentant une interface se substituent à cette interface ;

- Les interfaces sont une notion conceptuellement difficile d'accès pour des développeurs débutants, pas de panique, vous les comprendrez mieux avec le temps.
