# My-Framework

## Sommaire

&nbsp;

- Composer (autoloader)
- PSR-4 (autoloader)

&nbsp;

## Composer

1. On verifie que composer est bien installé

````bash
composer -v
````

&nbsp;

2. On créer un fichier `composer.json` à la raçine du Projet

````md
.
├── app
│   ├── autoload.php
│   └── models
│       └── User.php
├── composer.json
└── index.php
````

&nbsp;

3. Dans le fichier `composer.json`, on ajoute la ligne suivante :

````json
    {
        "autoload": {
            // On passe autant de valeurs au tableau que l'on souhaite charger de dossier
            "classmap": ["app/models", "app/services"]
        }
    }
````

&nbsp;

4. On execute dans le terminal la commande suivante :

````bash
composer dump-autoload
````

### ATTENTION : On excécutera cette commande à chaque création de nouveau fichiers pour mettre a jour l'autoload

&nbsp;

5. Composer nous à générer un nouveau dossier `vendor` à la raçine du projet

````md
.
├── app
│   ├── autoload.php
│   └── models
│       └── User.php
├── composer.json
├── index.php
└── vendor
    ├── autoload.php
    └── composer
        ├── autoload_classmap.php
        ├── autoload_namespaces.php
        ├── autoload_psr4.php
        ├── autoload_real.php
        ├── autoload_static.php
        ├── ClassLoader.php
        └── LICENSE
````

Ici le fichier qui nous interesse est `vendor/autoload.php` !

&nbsp;

6. Dans le fichier `app/autoload.php`, on importe le fichier `vendor/autoload.php`

````php
<?php

require_once __DIR__ . '/../vendor/autoload.php';
````

&nbsp;

7. On require dans le fichier `index.php` le fichier `app/autoload.php` afin de pouvoire utiliser les `namespace` de nos fichiers

````php
<?php

use App\Config\Router;

require './app/autoload.php';


$content = new Router();
$content->start();
````

---

&nbsp;

## PSR-4

Initialisation du projet :

````bash
composer init
````

&nbsp;

La struture de l'exemple :

````md
.
├── autre
│   └── verif
│       └── Verificator.php
├── public
│   └── index.php
├── src
│   │── Controller
│   │    └── AbstractController.php
│   │    └── TestController.php
│   └── Model
│       └── User.php
├── composer.json
├── index.php
└── vendor
    ├── autoload.php
    └── composer
        ├── autoload_classmap.php
        ├── autoload_namespaces.php
        ├── autoload_psr4.php
        ├── autoload_real.php
        ├── autoload_static.php
        ├── ClassLoader.php
        └── LICENSE
````

&nbsp;

On modifie le chemin du `autoload` :

````json
{
    {
        "name": "mohamed/composer-demo",
        "autoload": {
            "psr-4": {
                "App\\": "src/",
                "Test\\": "autre/"
            }
        },
        "authors": [
            {
                "name": "Larson007",
                "email": "mohamed.benallal.pro@gmail.com"
            }
        ],
        "require": {}
    }
}
````

On peut indiquer le namespace de base notre choix, il suffit de lui indiquer le fichier source :

````json
"psr-4": {
    "App\\": "src/",
    "Test\\": "autre/"
}

````

### Attention : ici le dossier `autre/` devient `Test`, lors de la déclaration du namespace ecrire `Test\autre\` ... revient a écrire `autre\autre\ ...`

&nbsp;

On fait un `require` du fichier `autoload` dans `index.php`

````php
<?php

require '../vendor/autoload.php';
````

&nbsp;

On met a jour l'`autoload` via la commande suivante

````bash
composer dump-autoload
````

&nbsp;

On declare le `namespace` et `use` :

````php
declare namespace et use

namespace App\Autre;

use App\Controllers\AbstractController;

abstract class AbstractController {
    ...
}
````

&nbsp;

***On peut maintenant utiliser les `import class` de `vsCode`***
