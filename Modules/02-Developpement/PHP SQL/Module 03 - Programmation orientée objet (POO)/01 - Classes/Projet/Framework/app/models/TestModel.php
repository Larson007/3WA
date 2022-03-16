<?php

require_once 'Database.php';

$host = '127.0.0.1';
$db = '3wa_cours_distortion';
$login = 'root';
$pass = '';

$allCategories = new Connexion($host, $db, $login, $pass);
// requete select simple
$test = $allCategories->request("SELECT * FROM rooms");

