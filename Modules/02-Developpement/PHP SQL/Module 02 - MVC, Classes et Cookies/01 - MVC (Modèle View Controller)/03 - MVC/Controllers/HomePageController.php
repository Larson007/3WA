<?php

// Import de la requet SQL faisant appel a la table "users"
require_once dirname(__DIR__) . '/models/Users.php';

// On execute la fonction getAllusers définit dans "models/Users.php" que l'on stock dans une variable $allUsers
$allUsers = getAllusers();
//var_dump($allUsers);

// $allUsers rendu dispo dans la vue homepage.phtml
require_once dirname(__DIR__) . '/views/homepage.phtml';

