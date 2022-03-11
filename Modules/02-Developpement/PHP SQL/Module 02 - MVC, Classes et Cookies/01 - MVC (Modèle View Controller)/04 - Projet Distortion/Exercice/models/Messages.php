<?php

declare(strict_types=1);

require_once 'database.php';


function getAllMessages(): array
{
    $connect =  getPDO();
    $request = $connect->prepare(
        "SELECT * FROM messages"
    );

    $request->execute();
    return $request->fetchAll();
}

function addMessage($roomId, $msg)
{
    date_default_timezone_set('Europe/Paris');
    $connect =  getPDO();
    $request = $connect->prepare(
        "INSERT INTO messages (`room_id`,`content`, `created_at`) VALUES (:roomId, :msg, CURRENT_TIMESTAMP  )"
    );

    $request->execute(
        [
            ':roomId' => $roomId,
            ':msg' => $msg,
        ]
    );
}
