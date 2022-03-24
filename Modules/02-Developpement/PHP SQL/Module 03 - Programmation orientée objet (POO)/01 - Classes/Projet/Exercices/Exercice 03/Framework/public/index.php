<?php

use Config\Router;



require '../vendor/autoload.php';
require '../services/config/routes.php';

$path = $_GET['page'] ?? DEFAULT_ROUTE;

try {
    $content = Router::start($path);
} catch (Exception $e) {
    echo 'Exception reçue : ',  $e->getMessage(), "\n";
}


dump(ALLOWED_ROUTES);

require dirname(__DIR__) . '/app/views/template/layout.phtml';
