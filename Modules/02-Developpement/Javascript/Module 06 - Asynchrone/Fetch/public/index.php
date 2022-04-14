<?php
require_once dirname(__DIR__).DIRECTORY_SEPARATOR.'vendor'.DIRECTORY_SEPARATOR.'autoload.php';
use App\Controllers\HomeController;

$accueil = new HomeController();
$accueil->index();

