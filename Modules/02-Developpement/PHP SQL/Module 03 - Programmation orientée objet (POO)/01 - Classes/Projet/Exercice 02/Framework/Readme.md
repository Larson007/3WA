# My-Framework

## Sommaire

- Composer (autoloader)

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
