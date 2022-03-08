<?php

declare(strict_types=1);

function getPDO() : PDO
{
    $dsn = 'mysql:dbname=3wa_cours_mvc;host=127.0.0.1';
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
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
        ]
    );
    return $connect;
}
