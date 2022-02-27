# Module 01 - Différences PHP / JavaScript & Base de données

## 07 - Classes

### Les objets en PHP

Cette section de cours ne va pas traiter en détails la Programmation Orientée Objets en PHP. C'est un sujet très complet qui vous prendra des jours, des semaines, des mois, des années à appréhender. Vous serez introduits au paradigme de la POO bien assez vite au cours de cette formation.

Ceci dit, sans aller jusqu'à la POO à proprement parler, vous avez déjà vu et utilisé des classes en javascript.

Il est en effet possible d'utiliser ponctuellement des objets dans un code qui ne relève pas strictement de la POO. Là où la POO répond à des problématiques complexes et apporte une architecture très propre à des projets d'une certaine échelle, un simple cocktail de code procédural et d'objets peut parfois suffire à résoudre des problèmes simples.

On va alors, par exemple, réserver l'utilisation d'objets au transport de données et de `state`, là où le reste du code sera fondé sur l'emploi de simples fonctions. À titre théorique, donc, même si vous ne créerez pas encore beaucoup d'objets lors de ces premiers jours de PHP, nous allons vous en montrer rapidement la syntaxe basique.

&nbsp;

### Classes

````php
class User
{
    private string $firstName;
    private string $lastName;
    private int $age;

    public function __construct(string $firstName, string $lastName, int $age)
    {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->age = $age;
    }

    public function getFirstName(): string
    {
        return $this->firstName;
    }

    public function getLastName(): string
    {
        return $this->lastName;
    }

    public function getAge(): int
    {
        return $this->age;
    }

    public function getFullName(): string
    {
        return $this->firstName . ' ' . $this->lastName;
    }

    public function sayMessage(string $message): void
    {
        echo $message;
    }
}
````

Et pour créer une instance de cette classe `User` :

````php
$user = new User('Magali', 'Dupont', 22);

$userFirstName = $user->getFullName();  // 'Magali Dupont'
````

En fait, cela ressemble aux classes que vous avez déjà vues en javascript. À deux ou trois poils de vache près ! Voyons ces quelques différences :

- Souvenez-vous du `type hinting` sur les fonctions : cela s'applique également aux `méthodes` d'une classe.

- Depuis `PHP 7.4 (2019)`, les `propriétés` d'une classes peuvent aussi être typées. Comme le `type hinting`, ce n'est pas techniquement obligatoire mais fortement recommandé.

- On précise toujours la visibilité d'une `méthode` ou d'une `propriété` : `public`, `protected` ou `private`. **Visibilité ?** Ne vous inquiétez pas, vous reverrez cela en détails lors du cours sur la POO.

- L'accès aux `propriétés` et `méthodes` ne se fait pas grâce à un point `.` mais avec une flèche `->`.

- La syntaxe du `constructeur` est différente mais la logique est la même.

&nbsp;

### C'est tout ?

Pour l'instant, oui. Comme nous l'avons dit plus haut, la POO est un sujet énorme, il est encore trop tôt pour le grand plongeon en apnée. Des gros mots tels que ***« polymorphisme »*** ou ***« encapsulation »*** vous seront bien assez vite jetés au visage tels des seaux d'acide, ne vous en faites pas !

Savoir déclarer une classe simple, et créer des instances de cette classe, est déjà une belle base. (:
