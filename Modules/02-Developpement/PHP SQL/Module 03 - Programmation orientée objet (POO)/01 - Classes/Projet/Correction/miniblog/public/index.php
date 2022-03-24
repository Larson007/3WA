<?php
require_once '../vendor/autoload.php';
use App\Models\User;
use Services\{Session, Router};

//demarre la session si ce n'est pas déja le cas 
Session::init();

$router = new Router();

//ajout de route au router
$router->addRoute('accueil','AccueilController');
$router->addRoute('login','LoginController');

//lance le router
$router->launch();

//si on clique sur le bouton (formulaire) deconnexion on detruit la session et on redirige sur la page de connexion
if(isset($_POST['deco'])){
    Session::destroy();
    header('Location: index.php?url=login');
}
