<?php

use App\Config\Router;

require '../vendor/autoload.php';
require '../app/config/routes.php';




$route = new Router();
$path = $_GET['url'] ?? DEFAULT_ROUTE;
$content = $route->start($path);



require '../app/views/template/layout.phtml';