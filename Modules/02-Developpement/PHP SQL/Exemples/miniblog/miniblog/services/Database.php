<?php
declare(strict_types=1);
namespace Services;
require_once '../configuration/dbConnection.php';

use PDO;
use PDOException;

trait Database 
{
    private PDO $pdo;

    public function getPdo(): PDO
    {
        try{
            return new PDO(
                'mysql:host='.DB_HOST.';dbname='.DB_NAME.';charset=UTF8',
                ''.DB_USERNAME.'',
                ''.DB_PASSWORD.'',
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
                ]);  
        } catch( PDOException $e) {
            echo 'merci de nous signaler le disfonctionnement';
            die();
        }
    }
}