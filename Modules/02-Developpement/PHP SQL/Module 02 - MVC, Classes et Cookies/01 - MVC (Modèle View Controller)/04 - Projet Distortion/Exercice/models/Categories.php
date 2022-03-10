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