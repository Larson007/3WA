<?php



require '../vendor/autoload.php';

use Test\verif\Verificator;
use App\Controllers\TestController;

$test = new TestController();
$test->hello();

$verif = new Verificator();
$verif->isTrue();