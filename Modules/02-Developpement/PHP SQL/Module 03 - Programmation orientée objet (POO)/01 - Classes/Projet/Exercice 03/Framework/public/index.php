<?php

use Config\Router;



require '../vendor/autoload.php';
require '../config/routes.php';


$path = $_GET['url'] ?? DEFAULT_ROUTE;
$content = Router::start($path);

dump(ALLOWED_ROUTES);

require '../views/template/layout.phtml';