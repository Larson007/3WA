<?php

// mode strict de php qui demande de préciser me type de donnée attendu et rendu de nos fonctions PHP

declare(strict_types=1);

// On recupère le fichier database.php qui contient la variable $connect qui contient la fonction getPDO()
require_once  'database.php';

// fonction getAllusers() qui execute une requete SQL afin de recuperer dans un tableau notre table COMPLET "users"
function getAllUsers(): array
{
    $connect = getPDO();
    $request = $connect->prepare(
        "SELECT * FROM users LIMIT 24"
    );

    $request->execute();
    return $request->fetchAll();
}

// fonction qui permet de recuperer un seul user via son ID
function findUserById(int $id): object
{
    $connect = getPDO();
    $request = $connect->prepare(
        "SELECT * FROM users WHERE id = :id"
    );

    $request->execute(
        [
            ':id' => $id
        ]
    );
    return $request->fetch();
}

// fonctin de recherche de user en fonction de la ville
function findUserByCity($city) : array
{
    $connect = getPDO();
    $request =  $connect->prepare(
        "SELECT * FROM users WHERE city = :city"
    );
    $request->execute(
        [
            ':city' => $city
        ]
        );
        return $request->fetchall();
}
