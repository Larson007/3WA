<?php


declare(strict_types=1);

$routes = [];
$routes2 = [];
$test2 = [];

$test = scandir(dirname(__DIR__) . '/app/controllers', 1);

foreach ($test as $t) {
    $t = lcfirst($t);
    $t = preg_split('/(?=[A-Z])/', $t);
    if ($t[0] !== '..' && $t[0] !== '.') {

        array_push($routes, $t);
    }
}

foreach ($routes as $r) {

    if ($r !== '..' && $r !== '.') {

        array_push($routes2, $r[0]);
        //dump($r[0]);
    }
}

foreach ($test as $r) {

    if ($r !== '..' && $r !== '.') {

        array_push($test2, $r);
        //dump($r);
    }
}

$goodroad = array_combine($routes2, $test2);
//dump($goodroad);


define('ALLOWED_ROUTES', $goodroad);


//constante de nos routes disponibles dans un tableau dont la clé correspondra a la route et la value aux Controllers
// const ALLOWED_ROUTES = [
// ];


// La route par défault
const DEFAULT_ROUTE = 'homepage';

// Le dossier controller stocker dans une constante
const BASE_CONTROLLER = "controllers/";

return $goodroad;
