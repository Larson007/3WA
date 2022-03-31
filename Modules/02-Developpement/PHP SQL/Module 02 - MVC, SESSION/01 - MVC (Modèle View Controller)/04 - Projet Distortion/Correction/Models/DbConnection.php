<?php
declare(strict_types=1);
require_once '../configuration/database.php';

function getPdo(): PDO
{
    return new PDO(
    'mysql:host='.DB_HOST.';dbname='.DB_NAME.';charset=UTF8',
    ''.DB_USERNAME.'',
    ''.DB_PASSWORD.'',
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
    ]);
}