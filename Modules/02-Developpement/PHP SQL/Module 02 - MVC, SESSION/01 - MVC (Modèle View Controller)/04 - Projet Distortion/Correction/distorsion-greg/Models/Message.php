<?php
declare(strict_types=1);

require_once 'DbConnection.php';

function insertNewMessage(string $msg, int $room): ?string
{
    $connect = getPdo();
    $request = $connect->prepare('INSERT INTO messages (room_id, content) VALUES (:room, :content)');
    $request->execute([
            ':room' => $room,
            ':content' => $msg,
        ]);
    return $connect->lastInsertId();
}

function displayMessages(int $room): array
{
    $connect = getPdo();
    $request = $connect->prepare('SELECT * FROM messages WHERE room_id = :room AND pinned = 0 ORDER BY created_at');
    $request->execute([
            ':room' => $room,
        ]);
    return $request->fetchAll();
}

function pinned(int $id): void // aucune valeur de retour
{
    $connect = getPdo();
    $request = $connect->prepare('UPDATE messages SET pinned = 1 WHERE id = :id ');
    $request->execute([
            ':id' => $id,
        ]);
}

function getPinned(int $room): array
{
    $connect = getPdo();
    $request = $connect->prepare('SELECT * FROM messages WHERE room_id = :room AND pinned = 1 ORDER BY created_at');
    $request->execute([
            ':room' => $room,
        ]);
    return $request->fetchAll();
}