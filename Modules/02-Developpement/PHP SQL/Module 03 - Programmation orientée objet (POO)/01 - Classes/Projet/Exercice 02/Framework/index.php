<?php

use config\Router;

require './app/autoload.php';
require './app/config/routes.php';

$path = $_GET['url'] ?? DEFAULT_ROUTE;
$content = new Router();
$content->start($path);
var_dump($content);

require './app/views/template/layout.phtml';