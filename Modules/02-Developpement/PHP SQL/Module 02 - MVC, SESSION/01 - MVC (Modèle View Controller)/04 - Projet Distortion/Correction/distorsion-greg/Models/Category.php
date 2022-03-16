<?php 
declare(strict_types=1);
require_once 'DbConnection.php';

function addNewCategorie(string $name): ?string
{
    $co = getPdo();
    $request = $co->prepare('INSERT INTO categories (name) VALUES (:cat)');
    $request->execute([
            ':cat' => $name
        ]);
    return $co->lastInsertId();
}

function getAllCategories(): array
{
    $co = getPdo();
    $request = $co->prepare('SELECT * FROM categories');
    $request->execute();
    return $request->fetchAll();
}

function validateCategory(string $name): int
{
    $co = getPdo();
    $request = $co->prepare('SELECT id FROM categories WHERE name = :name ');
    $request->execute([
            ':name' => $name
        ]);
    return $request->rowCount() ;   
}