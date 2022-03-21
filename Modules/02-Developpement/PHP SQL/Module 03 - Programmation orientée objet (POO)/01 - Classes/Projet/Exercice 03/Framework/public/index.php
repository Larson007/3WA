<?php

use Config\Router;



require '../vendor/autoload.php';
require '../services/config/routes.php';


$path = $_GET['page'] ?? DEFAULT_ROUTE;
$content = Router::start($path);

dump(ALLOWED_ROUTES);

require dirname(__DIR__). '/app/views/template/layout.phtml';