
<?php

// Import du router qui gère nos routes dans l'url
require_once dirname(__DIR__) . '/router/router.php';

// la variable $path est le paramettre attendu dans la fonction router($path) detailé dans router.php
// Si vide alors passer la constante par défault (DEFAULT_PATH =  "homepage")
$path = $_GET['url'] ?? DEFAULT_PATH;

// On stock la fonctin router(url) dans la variable $content
$content = router($path);

//var_dump($_SERVER);
//var_dump($_SESSION);

// On rend dispo la variable $content dans le layout.phtml
require_once dirname(__DIR__) . '/views/layout.phtml';
