<?php

declare(strict_types=1);

require_once  'database.php';

function getAllUsers(): array
{
    $connect = getPDO();
    $request = $connect->prepare(
        "SELECT * FROM users"
    );

    $request->execute();
    return $request->fetchAll();
}

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
