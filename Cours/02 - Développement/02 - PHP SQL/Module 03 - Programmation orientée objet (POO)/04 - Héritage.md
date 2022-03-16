# Module 03 - Programmation orientée objet (POO)

## 04. Héritage

### Introduction

Un brochet peut nager, c'est l'une des `propriétés` de cet animal.

````php
class Pike  // Anglais pour « Brochet »
{
    public function swim(): void
    {
        echo 'Fsssschhh !';
    }
}

$pike = new Pike();
$pike->swim();  // Fsssschhh !
````

Le fait de pouvoir nager est-il une caractéristique spécifique au brochet ? Ce dernier appartient en réalité à la `super-classe` des poissons osseux, ou osteichthyes, que nous abrègerons ici par la simple désignation de poissons.

Les poissons nagent. Le brochet est un poisson. Donc le brochet nage.

Constatons-le :

````php
class Zander  // Anglais pour « Sandre »
{
    public function swim(): void
    {
        echo 'Fsssschhh !';
    }
}

$zander = new Zander();
$zander->swim();  // Fsssschhh !
````

Le sandre nage également.

Nous nous retrouvons avec deux classes partageant une `méthode identitique`. Cela devrait vous soulever un sourcil. Souvenez-vous du principe `DRY` ***(Don't Repeat Yourself)***.

&nbsp;

### Héritage

Nous l'avons dit : nager n'est pas une action propre au brochet, ni au sandre, mais au poisson. En programmation, on dit que le brochet `hérite` du poisson. Le brochet `hérite` de tous les `attributs` et `actions` d'un poisson, comme posséder des branchies ou nager, en plus de ses attributs et actions propres, comme sa silhouette fusiforme ou ses capacités de chasse en embuscade.

Comment traduire cet héritage en PHP ?

````php
class Fish
{
    public function swim(): void
    {
        echo 'Fsssschhh !';
    }
}

class Pike extends Fish
{
    public function ambush(): void
    {
        echo 'Bouh !'
    }
}

$pike = new Pike();
$pike->swim();  // Fsssschhh !
$pike->ambush();  // Bouh !
````

En tant que brochet, le brochet peut tendre des embuscades. En tant que poisson, le brochet peut nager. Voilà ce qu'exprime ce code. Et comme vous le voyez dans les dernières lignes, l'instance `$pike` de la `classe Pike` est en effet capable d'appeler aussi bien la **méthode swim** que la **méthode ambush**.

Qu'avons-nous fait ?

À la première ligne de la classe Pike, juste après class Pike, nous avons ajouté le mot-clé `extends` suivi du nom de la classe Fish. Nous pourrions traduire cette ligne par ***« La classe Pike qui étend la classe Fish »***. Ce verbe **« étend »** signifie tout simplement **« hérite de »**, ou **« est »**.

- « Le brochet est un poisson. »

- « Brochet étend Poisson. »

- « Brochet hérite de Poisson. »

Autant de façons d'exprimer l'`héritage`. En disant que la classe Pike étend la classe Fish, sous-entendu que le Pike est un Fish, on dit à PHP que le brochet doit disposer des `attributs` et `actions` d'un poisson puisqu'il est un poisson.

Cela nous amène à une notion très importante de la `POO` que vous devez retenir et bien comprendre : le `polymorphisme`). Une même idée `abstraite`, une même classe, peut prendre plusieurs formes concrètes.

&nbsp;

### Abstraction

Ajoutons un détail à notre exemple précédent :

````php
abstract class Fish
{
    public function swim(): void
    {
        echo 'Fsssschhh !';
    }
}

class Pike extends Fish
{
    public function ambush(): void
    {
        echo 'Bouh !'
    }
}

$pike = new Pike();
$pike->swim();  // Fsssschhh !
$pike->ambush();  // Bouh !
````

La seule modification est à la toute première ligne. L'ajout du mot-clé `abstract` définit la classe Fish comme abstraite.

Nous vous invitions dans un chapitre précédent à penser à une voiture. Retentez l'expérience : pensez à un poisson.

Qu'avez-vous en tête ? Un poisson rouge ? Une perche ? Un gardon ? Une truite ? Le fait est que vous ne pouvez pas penser à la notion abstraite de « poisson », si vous essayez de visualiser un poisson vous verrez toujours une espèce concrète. Votre cerveau ne peut pas créer une instance de Poisson, il crée plutôt une instance de Truite.

En `POO` la logique est la même. Certaines classes ne sont vouées qu'à être des définitions abstraites, pensées pour être étendues mais pas pour être directement instanciées. Ici, la classe Fish ne pourra jamais être `instanciée`, on peut seulement en `hériter`. Toute tentative de `new Fish()` lèvera une `erreur`.

Il existe, à l'inverse du mot-clé `abstract`, **une notion de final**. Cependant, dans la mesure où un développeur débutant a toutes les chances de mal l'utiliser, nous préférons ne pas détailler ce concept ici. Sachez seulement que ça existe.

&nbsp;

### Substitution

Une sous-classe peut se `substituer` à la `classe` qu'elle `étend`. Cela signifie que non seulement le brochet `hérite` des `propriétés` et `méthodes` du poisson, mais qu'il peut se faire concrètement passer pour un poisson, il est un poisson. Et ça, PHP le comprend bien.

````php
class Model
{
}

class Article extends Model
{
}

$article = new Article();
echo $article instanceof Article;  // true
echo $article instanceof Model;  // true
````

Dans cette exemple, on demande à PHP si `$article` est de type Article. Il répond tout naturellement que **oui**. Puis on lui demande si `$article` est de type Model : **toujours oui**.

C'est un découlement logique du principe de `polymorphisme` : un modèle peut apparaître sous plusieurs formes : un article, un utilisateur, une catégorie, peu importe. Quelle que soit sa forme, un modèle reste un modèle.

&nbsp;

### Visibilité

Encore cette `encapsulation` ?

Oui, la `visibilité` a son importance en `héritage`. Une **sous-classe hérite des propriétés et méthodes des classes qu'elle étend...** à condition que lesdites `propriétés` et `méthodes` ne soient pas `privées`.

````php
abstract class Post
{
    private int $id;
}

class Article()
{
    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }
}

$article = new Article();
$article->setId(12);
````

Ce code n'est pas fonctionnel, il lèvera une erreur. La `visibilité privée` est très `stricte` et ne fait pas d'`exception` dans le contexte d'`héritage`. **La classe `Article` ne peut pas accéder à la propriété `id`**.

Une solution serait de la passer en `visibilité publique`. Mais à ce moment, on perdrait les bénéfices de l'`encapsulation` puisque n'importe quel morceau de code y aurait accès.

Comment contourner ce problème ? Comment rendre cette propriété accessible de l'intérieur de la classe et des classes qui en héritent, sans pour autant la rendre accessible de l'extérieur ?

Il existe une troisième visibilité : `la visibilité protégée`.

````php
abstract class Post
{
    protected int $id;
}

class Article()
{
    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }
}

$article = new Article();
$article->setId(12);
````

La propriété `id` a été passée en `protected`. Ce code fonctionne.

Cet exemple demeure très étrange du point de vue du design. Ce n'est pas une très bonne façon de faire. En fait, il est difficile de trouver un exemple simple à l'utilisation de `protected`, car son emploi n'est pas si courant et se justifie dans des exemples plus complexes que celui-ci. Nous ne voulons pas vous embrouiller.

Ce que vous pouvez retenir, c'est qu'il faut utiliser en priorité une combinaison de `private` et de `public`. La visibilité `protected` existe, elle remplit un certain rôle, mais n'en abusez pas si `private` peut suffire. La pratique et l'expérience vous apprendront à manier l'`encapsulation` avec sagesse.

&nbsp;

### Profondeur

Il n'y a techniquement pas de limite à la `profondeur` d'une chaîne d'`héritage`.

````php
class Food
{
}

class Fruit extends Food
{
}

class Banana extends Fruit
{
}
````

La banane étend le fruit, qui étend la nourriture. C'est un `héritage` à trois niveaux, et ça fonctionne très bien.

Si on le souhaite, on peut même définir un `héritage` à dix niveaux, cent niveaux. C'est techniquement, théoriquement possible.

**Mais... ne le faites pas. (:**

N'abusez pas de la profondeur en `héritage`. Deux niveaux sont largement suffisants dans la grande majorité des cas. Trois niveaux parfois, allez. Si vous commencez à avoir besoin de quatre, cinq ou plus de niveaux, cela révèle très probablement un design mal pensé : remettez votre architecture en question.

&nbsp;

### Redéfinition

Souvent confondue avec la `surcharge`, qui est une mécanique qui n'existe pas en PHP mais qu'on retrouve par exemple en `java` ou en `python`, la `redéfinition` est une notion de `POO` liée à l'`héritage`.

Le principe est très simple.

````php
abstract class Fish
{
    public function swim(): void
    {
        echo 'Fsssschhh !';
    }
}

class Pike
{
    public function swim(): void
    {
        echo 'Zap !';
    }
}

$pike = new Pike();
$pike->swim();  // Zap !
````

Les poissons nagent. En tant que poisson, le brochet nage.

MAIS. Admettons que le brochet ait une manière de nager qui lui est très propre : très nerveuse, rapide et en ligne droite sur de courtes distances. La plupart des poissons partagent une manière de nager assez similaire, mais le brochet a son petit truc à lui.

Dans ce cas, nous avons la possibilité de `redéfinir` la `méthode` swim. Nous `écrasons` ici la `méthode` swim normalement `héritée` de Fish pour en définir une nouvelle version plus adaptée aux comportements spécifiques de la sous-classe Pike.

C'est très simple. Pas si souvent utilisé, mais ça existe !

&nbsp;

### Résumé

**À retenir :**

- L'`héritage` est une façon de dire qu'une `classe` A est une `extension` d'une `classe` B, `héritant` par conséquent des `propriétés` et `méthodes` qui lui sont `accessibles` ;

- Puisque les classes `Article` et `User` héritent d'une unique classe `Model`, on dit alors que – au nom du principe de `polymorphisme` – `Article` et `User` se substituent à `Model` : PHP considère que `Article` est du type `Article` mais aussi du type `Model` ;

- La visibilité `protected` est un genre de `private étendu` qui rend une `propriété` ou `méthode` `accessible` de `l'intérieur d'une classe` ainsi que de `l'intérieur de ses sous-classes` ;

- Le mot-clé `abstract` empêche une classe d'être directement `instanciée`, la vouant à ne pouvoir être qu'`étendue` par une autre `classe` ;

- Il n'y a pas de limite de profondeur à une chaîne d'héritage, même s'il est très rare d'avoir une bonne raison de dépasser deux ou trois niveaux ;

- Une `méthode` définie dans une `classe parent` peut être `redéfinie` par ses `sous-classes`.
