<?php

declare(strict_types=1);

require_once 'Database.php';

function findAll(): array
{
    $connect =  getPDO();
    $request = $connect->prepare(
        "SELECT * FROM images"
    );

    $request->execute();
    return $request->fetchAll();
}