<?php
use Services\Session;

// demarre la session si ce n'est pas deja fait (services/session)
Session::init();

//si l'utilisateur n'est pas connecté il est renvoyé a l'accueil
if(!Session::isConnect()) {
    header('Location: index.php?url=login');
}

//mise en variable pour affichage html
$firstName = htmlspecialchars(Session::get('firstName'));



require_once '../views/accueil.phtml';