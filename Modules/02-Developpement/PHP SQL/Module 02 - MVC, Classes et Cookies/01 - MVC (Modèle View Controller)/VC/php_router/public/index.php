<?php

// __DIR__ -> est une constant PHP qui donne le dossier actuel
//  dirname() -> est une constant PHP qui donne le dossier racine du projet
require_once dirname(__DIR__) . '/config/routes.php';

// "??" Operateur de fusion NULL -> Soit si valeur par default NULL alors ...
$path = $_GET['page'] ?? DEFAULT_PATH;

// condition Boolean -> si la routes existe alors "true" sinon "false"
$routeExist = array_key_exists($path, ALLOWED_ROUTES);


// Les valeurs changes en fonction de la routes sur laquel on ce trouve
if ($routeExist) {
    // => 'AccueilController@index'
    $valuePath = ALLOWED_ROUTES[$path];
    // => tableau ['AccueilController', 'index']
    $valuePath = explode("@", $valuePath);
    // => "AccueilController" (correspondra à la class du même nom)
    $controller = $valuePath[0];
    // => "index" (correspondra à la methode de a class AccueilController)
    $method = $valuePath[1];
    // On gerère de manière procedurale la route vers le controller en fonction de la page
    require_once dirname(__DIR__) . '/' . BASE_CONTROLLER . '/' . $controller . '.php';
    // => Déclare une nouvelle instance de la class "Controller" stocker dans $controller
    $class = new $controller();
    // Appel de la methode "index" de la class "Controller" via la variable $methode
    $class->$method();
    var_dump($class);

}



// "ob_start()" -> Fonction native PHP qui permet de stocker en memoire tampon 
ob_start();

require_once dirname(__DIR__) . '/views/' . $path . '.phtml';
//require_once "../Views/accueil.phtml";

// "ob_get_clean()" -> Permet de liberer la memoire tampon
$content = ob_get_clean();

require_once "../views/layout.phtml";
