# Module 03 - Programmation orientée objet (POO)

## 06. Traits

### Introduction

Les `traits` sont une mécanique de `polymorphisme` qui est présente dans quelques langages, comme par exemple le `java`, le `rust`, et bien sûr le `PHP`.

Ils permettent de rendre les `classes modulables`.

````php
trait Communications
{
    public function sayMessage(string $message): void
    {
        echo $message;
    }
}

class User
{
    use Communications;

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
$user->sayMessage('Salut');  // Salut
````

Dès la première ligne de la classe, en spécifiant que `User` utilise le trait `Communications`, on rend alors toutes les `méthodes` de Communications `accessibles` à `User`.

&nbsp;

### Quelle différence avec l'héritage ?

Une classe ne se substitue pas à ses `traits` du point de vue du `typage`. Dans notre exemple, `User` n'est pas de `type` `Communications`.

`Communications` n'est qu'une simple `collection` de `méthodes`.

Ensuite, les `traits` répondent à un angle mort de l'`héritage`. En PHP, une sous-classe ne peut hériter que d'une seule classe. De là, que faire si on a besoin de fonctionnalités communes à plusieurs sous-classes d'un même héritage, mais pas sur toutes les sous-classes de ce même héritage ?

Partons du principe que les `requêtes SQL` liées à nos `modèles` sont gérées par des `ModelManager` associés. Pour un `Article`, un `ArticleManager`. De là, imaginons l'exemple suivant : certains `managers` permettent des `requêtes SQL` de recherche dans le texte. Cette fonctionnalité peut être utile par exemple pour des `modèles` comme les `articles` ou les `utilisateurs`, mais moins pertinente pour des `catégories` ou des `adresses`. Ainsi, puisque tous les `modèles` ne vont pas avoir besoin de recherche full-text, nous n'allons pas placer notre `méthode fullTextSearch` dans notre classe `abstraite ModelManager`. Il nous reste la solution de la placer dans chaque sous-classe de `ModelManager`, mais cette option contrevient au principe `DRY`.

C'est là qu'interviennent les `traits`.

````php
trait Searchable
{
    public function fullTextSearch(string $table, array $fields, string $term): array | bool
    {
        // Some example way to get the PDO
        $pdo = $this->getPdo();

        // This is an example. In real life, of course, you would have to
        // be very careful about SQL injection here.
        $sql = "SELECT * FROM $table";
        for ($i = 0, $c = count($fields); $i < $c; ++$i) {
            if ($i > 0) {
                $sql .= ' OR';
            }

            $sql .= " WHERE $fields[$i] LIKE :term"
        }

        $query = $pdo->prepare($sql);
        $query->execute([
            ':term' => "%$term%"        
        ]);

        return $query->fetchAll();
    }
}

abstract class ModelManager
{
    // ...
}

class ArticleManager extends ModelManager
{
    use Searchable;

    // ...
}

class UserManager extends ModelManager
{
    use Searchable;

    // ...
}

class CategoryManager extends ModelManager
{
    // ...
}
````

Ainsi, certains de nos `ModelManager` bénéficient de la fonctionnalité générique de recherche `full-text`, mais nous épargnons cette `méthode` aux classes qui n'en ont pas pas besoin.

&nbsp;

### Est-ce que j'en ai besoin ?

En pratique, les `traits` ne sont pas tant utilisés que cela dans l'écosystème PHP et le monde professionnel. L'exemple que nous vous avons présenté n'est pas des plus simples, et pour cause : l'emploi des `traits` se légitime dans des situations très particulières. Il faut prendre garde à ne pas en abuser, en privilégiant notamment l'`héritage` quand celui-ci est plus pertinent.

Comme pour les `interfaces`, comprendre quand utiliser les `traits` et quand ne pas les utiliser viendra avec le temps et la pratique.

&nbsp;

### Résumé

**À retenir :**

- Les `traits` permettent `d'ajouter des fonctionnalités à des classes`, c'est une forme de `polymorphisme` plus souple que l'`héritage` mais moins puissante et moins solide ;

- Le principe de `substitution` ne s'applique pas aux `traits`.