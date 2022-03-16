<?php

// Import de la requet SQL faisant appel a la table "users"
require_once dirname(__DIR__) . '/models/Users.php';

// On execute la fonction getAllusers définit dans "models/Users.php" que l'on stock dans une variable $allUsers
$allUsers = getAllusers();

// placeholder pour champrs formualire vide ou inconnu
$searchEmpty = NULL;

// Condition du formulaire de recherche
// On verifie que le formulaire est soumis avec des données
if(isset($_POST['search']) && !empty($_POST['search'])) {
    // Si condition remplie on execute la fonction findUserByCity
    $allUsers = findUserByCity($_POST['search']);
    if (count($allUsers)< 1) {
        // Si la condtion n'est pas remplie on continu à afficher tt les utilisateurs
        $allUsers = getAllusers();
        // Et on affiche le message suivant dans le placeholder
        $searchEmpty = "Aucune correspondance";
    }
}

//$userSearch = findUserByCity($_POST['city']);

// $allUsers rendu dispo dans la vue users.phtml
require_once dirname(__DIR__) . '/views/users.phtml';