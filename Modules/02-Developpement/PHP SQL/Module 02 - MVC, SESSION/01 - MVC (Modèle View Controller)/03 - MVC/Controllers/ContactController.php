<?php

// Import de la requet SQL faisant appel a la table "users"

require_once dirname(__DIR__) . '/models/Users.php';

// On execute la fonction findById définit dans "models/Users.php" que l'on stock dans une variable $user

$user = findUserById($_GET['id']);

//var_dump($user);

// $user rendu dispo dans la vue user.phtml
require_once dirname(__DIR__) . '/views/contact.phtml';