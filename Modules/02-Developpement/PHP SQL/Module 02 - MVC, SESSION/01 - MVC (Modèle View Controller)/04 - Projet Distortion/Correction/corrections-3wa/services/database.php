<?php

declare(strict_types=1);

const DB_HOST = '127.0.0.1;charset=utf8mb4';  // Would probably be `localhost` or `127.0.0.1` in your case (:
const DB_NAME = '3wa_cours_distortion';
const DB_USERNAME = 'root';
const DB_PASSWORD = '';

function getConnection(): \PDO
{
    return new \PDO(
        'mysql:host='. DB_HOST .';dbname=' . DB_NAME,
        DB_USERNAME,
        DB_PASSWORD
    );
}
