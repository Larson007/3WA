<?php

// mode strict de php qui demande de préciser me type de donnée attendu et rendu de nos fonctions PHP
declare(strict_types=1);

// Fonction native PDO qui va ce connecté à notre BDD
function getPDO() : PDO
{
    // On precise dans la variable $dsn le charset
    $dsn = 'mysql:dbname=3wa_cours_mvc;host=127.0.0.1;charset=utf8mb4';
    $user = 'root';
    $password = '';

    // Connexion à la Class PDO
    $connect = new PDO(
        $dsn,
        $user,
        $password,
        [
            // GESTION DES ERREURS !
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            // Permet de fetch les données sous forme d'objet (ex: user->first_name)
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
        ]
    );

    // On fait un return de la fonction getPDO() stocker dans la variable $connect 
    return $connect;
}
