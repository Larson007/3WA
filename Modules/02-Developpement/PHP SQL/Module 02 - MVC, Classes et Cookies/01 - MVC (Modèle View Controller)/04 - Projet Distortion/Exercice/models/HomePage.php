<?php

declare(strict_types=1);

require_once 'database.php';


function navRooms(): array
{
    $connect =  getPDO();
    $request = $connect->prepare(
        "SELECT * from rooms
        "
    );

    $request->execute();
    return $request->fetchAll();
}

