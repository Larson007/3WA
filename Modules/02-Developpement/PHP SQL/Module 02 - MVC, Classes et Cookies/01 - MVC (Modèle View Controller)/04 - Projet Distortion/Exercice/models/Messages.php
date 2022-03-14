<?php

declare(strict_types=1);

require_once 'database.php';


function showMessages($roomId): array
{
    $connect =  getPDO();
    $request = $connect->prepare(
        "SELECT * FROM messages WHERE room_id = :roomId"
    );

    $request->execute(
        [
            ':roomId' => $roomId
        ]
    );
    return $request->fetchAll();
}

function addMessage($roomId, $msg)
{
    date_default_timezone_set('Europe/Paris');
    $connect =  getPDO();
    $request = $connect->prepare(
        "INSERT INTO messages (`room_id`,`content`, `created_at`) VALUES (:roomId, :msg, CURRENT_TIMESTAMP)"
    );

    $request->execute(
        [
            ':roomId' => $roomId,
            ':msg' => $msg,
        ]
    );
}

function removePinnedMessage($messageId)
{
    $connect =  getPDO();
    $request = $connect->prepare(
        "UPDATE messages
        SET pinned = 0
        WHERE id = :messageId"
    );
    $request->execute(
        [
            ':messageId' => $messageId
        ]
    );
}

function addPinnedMessage($messageId)
{
    $connect =  getPDO();
    $request = $connect->prepare(
        "UPDATE messages
        SET pinned = 1
        WHERE id = :messageId"  // Preciser la room et precicer l'id du messages
    );
    $request->execute(
        [
            ':messageId' => $messageId
        ]
    );
}

function showPinnedMessage($roomId)
{
    $connect =  getPDO();
    $request = $connect->prepare(
        "SELECT * FROM messages WHERE room_id = :roomId AND pinned = 1"
    );

    $request->execute(
        [
            ':roomId' => $roomId
        ]
    );
    return $request->fetchAll();
}

