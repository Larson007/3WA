<?php

declare(strict_types=1);

require_once 'database.php';


function navRooms(): array
{
    $connect =  getPDO();
    $request = $connect->prepare(
        "SELECT categories.name as c_name, rooms.name as r_name FROM rooms
        INNER JOIN categories
        ON categories.id = rooms.category_id
        ORDER BY rooms.category_id"
    );

    $request->execute();
    return $request->fetchAll();
}


// function navRooms(): array
// {
//     $connect =  getPDO();
//     $request = $connect->prepare(
//         "SELECT categories.name as c_name, rooms.name as r_name FROM rooms
//         INNER JOIN categories
//         ON categories.id = rooms.category_id
//         ORDER BY rooms.category_id"
//     );

//     $request->execute();
//     return $request->fetchAll();
// }