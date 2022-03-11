
<?php

require_once dirname(__DIR__) . '/router/router.php';
require_once dirname(__DIR__) . '/models/Categories.php';

// Rooter
$path = $_GET['url'] ?? DEFAULT_PATH;
$content = router($path);

// Requetes
$allCategories = getAllCategories();

require_once dirname(__DIR__) . '/views/layout.phtml';

//TODO Gestion des erreurs, Verifier les liens, Faire le point sur message Pinned, Refaire la bar de navigation 
