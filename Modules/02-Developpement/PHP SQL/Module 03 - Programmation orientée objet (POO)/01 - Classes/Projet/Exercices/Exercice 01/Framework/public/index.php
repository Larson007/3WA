<?php

// On définit une constante contenant le dossier racine
define('ROOT', dirname(__DIR__));

// On importe les namespaces nécessaires
use App\Config\Autoloader;
use App\Config\Router;

// On importe l'Autoloader
require_once dirname(__DIR__).'/App/Config/Autoloader.php';

Autoloader::register();

// On instancie Main
$app = new Router();

// On démarre l'application
$app->start();

// On charge le fichier Autoloader
require_once 'Config/Autoloader.php';

// On charge la méthode statique
Autoloader::register();