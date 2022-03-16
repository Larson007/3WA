# Module 03 - Programmation orientée objet (POO)

## 03. Encapsulation

### Introduction

Vous entrez dans une pizzeria. Vous étudiez la carte, puis vous annoncez :

« Una Margherita, por favore. »

On vous invite à vous asseoir et attendre. Que faites-vous ?

Vous vous asseyez et vous attendez.

Vous poussez poliment l'artisan du coude, pour aller étaler la pâte à sa place, la garnir, l'enfourner, et vous la servir sur le plus beau plateau de la cuisine.
A priori, si la civilisation ne s'est pas totalement effondrée depuis la rédaction de ce cours, il nous semble rationnel de considérer que vous allez plutôt pencher pour la solution 1.

Qu'est-ce qui vous empêche d'opter pour la solution 2 ?

Vous êtes dans la position d'un client, socialement la préparation de la pizza n'est pas votre rôle dans cette situation ;
Et pour cette raison, la pizzeria est divisée en deux parties : une zone publique devant le comptoir, et une zone privée derrière le comptoir.
Vous avez faim. En entrant dans une pizzeria dans le but de manger une pizza, vous acceptez de déléguer le rôle de préparer à manger à quelqu'un d'autre. Votre contrôle dans cette situation se limite à choisir quelle pizza vous voulez sur la carte, mais vous n'avez aucun droit de regard sur la façon dont l'artisan va ensuite la préparer.

Vous dites « Préparez-moi une pizza ! », en spécifiant le paramètre « Margherita ». Quelques minutes plus tard, l'artisan vous délivre une Margherita.

Notre société fonctionne comme cela : un agencement de personnes spécialisées, remplissant des rôles différents.

Ces personnes nous offrent toujours une interface **publique** : on peut dire « Je veux réparer cette bosse. » à un carrossier, ou « Je veux refaire la cuisine » à un carreleur. Ce qu'on peut demander à un prestataire, avec nos propres mots, c'est son **interface**, la partie de sa personne qui consiste à interagir avec des personnes d'un autre rôle que le sien. C'est sa partie **publique**.

Quelle colle le carreleur va ensuite utiliser, quel maillet, avec quelle façon de taper... Ça. Le. Regarde. Il bosse, on lui fout la paix. On attend le résultat. Cette partie-là est **privée**, sa façon de travailler bien à lui c'est l'implémentation.

Dans ce besoin de déléguer les rôles, il y a ce besoin de séparer l'**interface** de l'**implémentation**. C'est une règle indispensable au bon fonctionnement de notre société. Sans cela, n'importe quel client peut entrer dans votre bureau pendant que vous travaillez, vous pousser de votre chaise et commencer à développer des applications à votre place, utiliser votre machine à café, se servir dans votre frigo.

Et comme en `POO` nous pensons souvent un projet informatique comme nous pensons le monde, nous rencontrons aussi ce besoin de séparer l'`interface` de l'`implémentation`.

Et cette séparation, en `POO`, ça s'appelle l'`encapsulation`).

&nbsp;

### L'encapsulation

Chaque `classe` a un `rôle`. Le `Router route`, le `Controller contrôle`, le `Model modélise`, l'`Authentifier authentifie`, le `Formatter formate`.

Mais ça ne s'arrête pas là. On ne se contente pas de le dire et advienne que pourra : **on l'impose**.

Par la mécanique de `visibilité` que nous propose PHP, nous imposons ce `compartimentage` de l'application. Chaque morceau de code est enfermé dans une capsule dont l'accès est réglementé : c'est l'`encapsulation`.

Considérons la classe suivante :

````php
class Greeter
{
    public function sayMessage(string $message): void
    {
        echo $message;
    }
}

$greeter = new Greeter();
$greeter->sayMessage('Salut');
````

PHP affichera le message `Salut`.

Considérons le code suivant :

````php
class Greeter
{
    private function sayMessage(string $message): void
    {
        echo $message;
    }
}

$greeter = new Greeter();
$greeter->sayMessage('Salut');
````

PHP affichera l'erreur suivante :

````php
[...] Call to private method Greeter::sayMessage() [...]
````

Qu'est-ce qui a changé ?

Le mot-clé `public` a été remplacé par le mot-clé `private`. Il est désormais interdit et impossible d'appeler la `méthode sayMessage` depuis l'extérieur de la `classe Greeter`.

Ce mot-clé définit ce que l'on appelle la `visibilité`. Il en existe **trois différentes**.

- `public` : la propriété ou méthode peut être appelée de n'importe où dans le code ;

- `private` : la propriété ou méthode ne peut être appelée que de l'intérieur de la classe ;

- `protected` : cette visibilité est particulière, nous en reparlerons quand nous aborderons l'héritage, oubliez-la pour l'instant.

#### Exemple

Considérons cette classe :

````php
class DatabaseConnector
{
    private \PDO $connection;

    public function __construct()
    {
        $this->initConnection();
    }

    public function getConnection(): \PDO
    {
        return $this->connection;
    }

    private function initConnection(): void
    {
        $this->connection = new \PDO(
            'mysql:host=db.3wa.io;port=3306;dbname=my_movies',
            'Magali',
            'azerty1234'
        );
    }
}

$connector = new DatabaseConnector();
$pdo = $connector->getConnection();
````

Cette classe `DatabaseConnector` a pour rôler de se connecter à la base de données à travers l'objet `PDO`.

Le `__construct` se charge à l'instanciation d'appeler la méthode privée `initConnection`, qui instancie l'objet `PDO` et le stocke dans une propriété.

Ensuite, de l'extérieur, nous n'avons accès qu'à la `méthode publique getConnection`. La méthode `initConnection` ne peut plus être appelée, et la propriété connection ne peut plus être modifiée.

Et en effet, une fois la connexion à la base de données effectuée et l'objet `PDO` instancié, pourquoi aurait-on besoin de modifier quoi que ce soit ? Instancier ce `PDO` et le rendre lisible de l'extérieur est la mission de la classe `DatabaseConnector`, mais sa façon interne d'y parvenir ne regarde qu'elle.

&nbsp;

### Pourquoi encapsuler ?

Les intérêts de l'`encapsulation` sont multiples.

**Séparer** l'interface de l'implémentation, nous l'avons vu, est un besoin assez naturel quand on y pense. Dans l'exemple précédent, permettre la modification de la propriété connection depuis l'extérieur n'amènerait rien de bénéfique, seulement des problèmes potentiels.

Mais ce n'est pas le seul intérêt. L'autre grande utilité de l'encapsulation est notre capacité à pouvoir faire évoluer un morceau de code sans casser le reste de notre application.

Imaginez que vous maintenez une librairie utilisée par des millions de projets dans le monde. Pensez à la goutte de sueur que vous avez sur le front à chaque modification que vous faites dans le code. Distinguer ce qui est accessible de l'extérieur de ce qui ne l'est pas, c'est aussi l'assurance que parmi les millions de projets qui utilisent votre librairie, absolument aucun, pas un, zéro, n'appelle une seule de vos méthodes et propriétés privées. Cela signifie que du moment que vos méthodes publiques remplissent toujours leurs contrats respectifs, que leurs paramètres d'entrée et valeurs de retour ne changent pas, vous avez toute latitude pour modifier ce que vous voulez dans votre code. Vous pouvez changer le nom d'une méthode privée, supprimer une propriété privée, réorganiser votre projet. Tout ce que l'on attend de vous c'est, dans la mesure du possible et en tout cas pas sans prévenir, de ne pas modifier les noms et comportements de l'interface publique. Mais en ce qui concerne l'implémentation, vous faites ce que vous voulez.

&nbsp;

### Accesseurs et mutateurs

Dans le cas des `propriétés`, partons du principe qu'on ne leur donnera **jamais une visibilité publique**. Seules les `méthodes` pourront être `publiques`, pas les `propriétés`. C'est dit, notez-le. Mais comment y accéder de l'extérieur, donc ? Nous l'avons aperçu dans l'exemple précédent. Considérons ce cas plus simple :

````php
class User
{
    private int $id;

    public function __construct(int $id)
    {
        $this->id = $id;
    }

    public function getId(): int
    {
        return $this->id;
    }
}

$user = new User(12);
echo $user->getId();  // 12
````

On définit une `propriété privée $id`. **On l'hydrate à l'instanciation**. Puis, si on veut la lire de l'extérieur de la classe, on y accède par la `méthode getId`.

Cette `méthode getId` est ce que l'on appelle un `accesseur`, et dans ce cas précis un `getter`. Son nommage est normé : le verbe `get`, suivi du nom de la `propriété`, toujours en `camelCase` comme pour tout en PHP à l'exception des classes, des interfaces, des traits et des constantes (`PascalCase pour les classes, interfaces et traits`, et `SNAKE_CASE capital pour les constantes`) : `getFirstName`, `getRole`, etc. Il existe aussi les `issers` et `hassers` pour les propriétés `booléennes` : `isAnonymous`, `hasRoleAdmin`, etc.

Quel intérêt ? Dans ce cas, nous venons de passer la propriété `id` en lecture seule. C'est une façon d'encore plus spécialiser la `visibilité` d'une `propriété`, en séparant sa `lecture` de son `écriture`.

Et si on veut pouvoir la modifier quand même ?

````php
class User
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

$user = new User();
$user->setId(14);
echo $user->getId()  // 14
````

Cette `méthode setId` permet l'`écriture` dans la `propriété id` depuis l'`extérieur` : `setLastName`, `setAge`, etc. C'est un `mutateur`, et dans ce cas précis un `setter`. Vous rencontrerez aussi plus tard des `adders` dans le cas des collections comme les `tableaux` : `addArticle`, `addComment`, etc. Et les `adders` seront associés à des `removers` : `removeArticle`, `removeComment`.

Les `accesseurs` et les `mutateurs` ont pour unique rôle d'`accéder` et de `muter`. Ils ne doivent pas servir à autre chose, comme par exemple valider le format d'une valeur. Un `setter modifie une propriété`, un `getter la retourne`, c'est tout. Pas de vérification de `strlen` et autres extravagances, ces choses-là se font ailleurs.

&nbsp;

### Résumé

**À retenir :**

- L'`encapsulation` est la philosophie qui consiste à enfermer les morceaux de notre code dans des capsules dont l'accès est réglementé ;

- On parvient à cette `encapsulation` en PHP grâce à la mécanique de `visibilité` : le mot-clé `public`, `private` ou `protected` devant une `méthode` ou une `propriété` en définit ses règles d'accès ;

- Pour des raisons de bonnes pratiques, les `propriétés` ne sont jamais définies comme `public` : on y accède alors grâce aux `accesseurs` et `mutateurs`.
