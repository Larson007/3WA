<?php

require_once 'Connexion.php';

$host = '127.0.0.0';
$db = '3wa_cours_distortion';
$login = 'root';
$pass = '';

$allCategories = new Connexion($host, $db, $login, $pass);
// requete select simple
$test = $allCategories->request("SELECT * FROM rooms");


class Categories extends Connexion
{
    public function __construct()
    {
        
    }

    public function getCategory()
    {

    }
}
