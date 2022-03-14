
<?php

require_once dirname(__DIR__) . '/router/router.php';
require_once dirname(__DIR__) . '/models/Categories.php';
require_once dirname(__DIR__) . '/models/Rooms.php';
require_once dirname(__DIR__) . '/models/HomePage.php';

// Rooter
$path = $_GET['url'] ?? DEFAULT_PATH;
$content = router($path);

// Requetes
$allCategories = getAllCategories();

$Links = navLinks();

var_dump($Links);

foreach($Links as $link) {

    //var_dump($link);
}

require_once dirname(__DIR__) . '/views/layout.phtml';

//TODO Gestion des erreurs, Verifier les liens, Faire le point sur message Pinned, Refaire la bar de navigation 
