
<?php

require_once dirname(__DIR__) . '/router/router.php';
require_once dirname(__DIR__) . '/models/Categories.php';
require_once dirname(__DIR__) . '/models/Rooms.php';
require_once dirname(__DIR__) . '/models/HomePage.php';

// Rooter
$path = $_GET['url'] ?? DEFAULT_PATH;
$content = router($path);

// Requetes

$navCategories = getAllCategories();
$navRooms = navRooms();


require_once dirname(__DIR__) . '/views/layout.phtml';

