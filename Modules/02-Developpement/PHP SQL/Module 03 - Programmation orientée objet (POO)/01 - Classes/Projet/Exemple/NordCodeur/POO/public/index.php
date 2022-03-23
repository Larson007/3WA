<?php
require '../vendor/autoload.php';

use Router\Router;

/* Defining the path to the views and scripts folders. */
define('VIEWS', dirname(__DIR__) . DIRECTORY_SEPARATOR . 'views'. DIRECTORY_SEPARATOR);
define('SCRIPTS', dirname($_SERVER['SCRIPT_NAME']). DIRECTORY_SEPARATOR);

/* This is the router. It is responsible for taking the URL and matching it to a controller and action. */
$router = new Router($_GET['url']);
$router->get('/', 'App\Controllers\BlogController@index');
$router->get('/posts/:id', 'App\Controllers\BlogController@show');

$router->run();