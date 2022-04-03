<?php
use Services\Routing\Router;

require_once '../vendor/autoload.php';

$router = new Router();

$router->addRoute('hello','HelloController');
$router->addRoute('toto','TotoController');
$router->addRoute('bye','ByeController');
$router->addRoute('polo','PoloController');

$router->launch();