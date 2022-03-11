<?php

declare(strict_types=1);

require_once 'database.php';

function getAllCategories(): array
{
    $connect =  getPDO();
    $request = $connect->prepare(
        "SELECT * FROM categories"
    );

    $request->execute();
    return $request->fetchAll();
}

// Requete pour afficher les 9 dernières catégorie ajouter
function showPageCategories(): array
{
    $connect =  getPDO();
    $request = $connect->prepare(
        "SELECT * FROM categories ORDER BY id ASC LIMIT 10"
    );

    $request->execute();
    return $request->fetchAll();
}

function addCategory($addCategory)
{
    $connect =  getPDO();
    $request = $connect->prepare(
        "INSERT INTO `categories` (`name`) VALUES (:addCategory);"
    );

    $request->execute(
        [
            ':addCategory' => $addCategory
        ]
    );
}

function showLastAddcatgory()
{
    $connect =  getPDO();
    $request = $connect->prepare(
        "SELECT * FROM categories ORDER BY id DESC LIMIT 1"
    );

    $request->execute();
    return $request->fetch();
}

function findCategoryById(int $id): object
{
    $connect = getPDO();
    $request = $connect->prepare(
        "SELECT * FROM categories WHERE id = :id"
    );

    $request->execute(
        [
            ':id' => $id
        ]
    );
    return $request->fetch();
}