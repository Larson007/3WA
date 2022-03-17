<?php

require_once 'Connexion.php';

$host = '127.0.0.1';
$db = '3wa_cours_distortion';
$login = 'root';
$pass = '';

$allCategories = new Connexion($host, $db, $login, $pass);
// requete select simple
$test = $allCategories->request("SELECT * FROM categories");


// abstract class AbstractModel extends Connexion
// {

//     public $table;
//     public function __construct($table)
//     {
//         $this->table = $table;
//     }

//     public function getAll() : array
//     {

//     }
// }
