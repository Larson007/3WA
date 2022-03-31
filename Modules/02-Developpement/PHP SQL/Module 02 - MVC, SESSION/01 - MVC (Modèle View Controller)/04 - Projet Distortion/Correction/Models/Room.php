<?php 
declare(strict_types=1);

require_once 'DbConnection.php';

function addNewRoom(int $catId, string $name): ?string
{
    $co = getPdo();
    $request = $co->prepare('INSERT INTO rooms (category_id, name ) VALUES (:catid, :room)');
    $request->execute([
            ':catid' => $catId,
            ':room' => $name,
        ]);
    return $co->lastInsertID();
}

function getAllRooms(): array
{
    $co = getPdo();
    $request = $co->prepare('SELECT * FROM rooms');
    $request->execute();
    return $request->fetchAll();
}

function getRoom(int $id)
{
    $co = getPdo();
    $request = $co->prepare('SELECT name FROM rooms WHERE id = :id');
    $request->execute([
            ':id' => $id
        ]);
    return $request->fetch();
}

function validate(string $name, int $id): int
{
    $co = getPdo();
    $request = $co->prepare('SELECT id FROM rooms WHERE name = :name AND category_id = :catid');
    $request->execute([
            ':name' => $name,
            ':catid' => $id,
        ]);
    return $request->rowCount() ;
}