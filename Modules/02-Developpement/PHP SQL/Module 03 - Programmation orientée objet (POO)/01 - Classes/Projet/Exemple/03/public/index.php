
<?php
require_once dirname(__DIR__) . '/config/routes.php';
require_once '../autoload.php';

use config\Router;

// Rooter
$path = $_GET['url'] ?? DEFAULT_ROUTE;

$content = new Router();
$content->router($path);


require_once dirname(__DIR__) . '/views/layout.phtml';

