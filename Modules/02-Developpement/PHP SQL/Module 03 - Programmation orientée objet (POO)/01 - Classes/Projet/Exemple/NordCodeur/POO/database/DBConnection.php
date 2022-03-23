<?php

namespace Database;

use PDO;

class DBConnection
{

    private $dbname;
    private $host;
    private $username;
    private $password;
    private $pdo;

    public function __construct(string $dbname, string $host, string $username, string $password)
    {
        $this->dbname = $dbname;
        $this->host = $host;
        $this->username = $username;
        $this->password = $password;
    }

/**
 * It creates a PDO object if it is not already created.
 * 
 * @return PDO object.
 */
    public function getPDO(): PDO
    {
        // Avec Opérateur ternaire :  
        /* A way to create a PDO object only if it is not already created. */
        return $this->pdo ?? $this->pdo = new PDO("mysql:dbname={$this->dbname};host={$this->host}", $this->username, $this->password, [
            /* This is telling PDO to throw exceptions when an error occurs. */
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            /* This is telling PDO to return objects when fetching data. */
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
            /* This is telling PDO to use the UTF-8 character set. */
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET CHARACTER SET UTF8'
        ]);

        /*// Sans opérateur ternaire :
        if ($this->pdo === null) {
            $this->pdo = new PDO("mysql:dbname={$this->dbname};host={$this->host}", $this->username, $this->password, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET CHARACTER SET UTF8'
        ]);
        }

        return $this->pdo;
        */
    }
}
