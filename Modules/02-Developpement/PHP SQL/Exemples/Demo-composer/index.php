<?php
declare(strict_types=1);

use App\Controllers\TestController;

require 'vendor/autoload.php';


$test = new TestController();
$test->hello();
########################### Installation ##############################

//verifier si composer est installé => composer -V
// si composer n'est pas installé => https://getcomposer.org/doc/00-intro.md

######################## Initialisation #################################

//initialiser composer dans son projet => composer init
// répondre au question pour la configuration 

//Would you like to define your dependencies (require) interactively [yes]? => no (pour demarrer sans aucune dependance)
//Would you like to define your dev dependencies (require-dev) interactively [yes]? => no (pour demarrer sans aucune dépendance en mode dev)
//Add PSR-4 autoload mapping? Maps namespace "Res01\Composer" to the entered relative path. [src/, n to skip]: => Entrée (création du dossier src/)

##########################################################

// a ce stade:
//nous avons un dossier "vendor" qui recevra les dependances (actuellement juste vendor/composer et un fichier autoload.php)
//nous avons un fichier composer.json, la partie autoload va nous servir à configurer le mapping de notre autoload, la partie require regroupe les dépendances utilisé sur notre projet (vide actuellement)
######################### Autoload #################################

//configurons le mapping de notre dossier src: 
//original =>
        // "psr-4": {
        //     "Res01\\Composer\\": "src/"
        // }
//modifier =>
        // "psr-4": {
        //     "App\\": "src/"
        // }

//Grace a la version modifier nous disons a notre autoload "quand tu vois ecris App\ comprend qu'il s'agit du dossier src/"
// Avec cela nous évitons une quantitée incroyable de require et on préfère utiliser les namespaces, l'otoloader se charge du reste.
