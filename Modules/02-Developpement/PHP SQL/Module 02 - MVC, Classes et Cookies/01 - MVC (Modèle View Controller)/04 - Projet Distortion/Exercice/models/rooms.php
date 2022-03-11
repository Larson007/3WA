<?php

declare(strict_types=1);

require_once 'database.php';


function getCategoryRooms($catId): array
{
    $connect =  getPDO();
    $request = $connect->prepare(
        "SELECT * FROM rooms WHERE rooms.category_id = :catId"  
    );

    $request->execute(
        [
            ':catId' => $catId,
        ]
    );
    return $request->fetchAll();
}



function addRoom($catId, $roomName)
{
    $connect =  getPDO();
    $request = $connect->prepare(
        "INSERT INTO rooms (`category_id`,`name`) VALUES (:catId, :roomName)"
    );

    $request->execute(
        [
            ':catId' => $catId,
            ':roomName' => $roomName
        ]
    );
}

function findRoomById(int $id): object
{
    $connect = getPDO();
    $request = $connect->prepare(
        "SELECT * FROM rooms WHERE id = :id"
    );

    $request->execute(
        [
            ':id' => $id
        ]
    );
    return $request->fetch();
}