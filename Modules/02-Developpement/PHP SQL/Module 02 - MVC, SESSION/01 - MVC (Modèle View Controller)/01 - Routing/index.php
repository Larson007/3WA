<?php

$availableRoutes = [
    'home',
    'about'
];

$route = 'home';

if (isset($_GET['page']) && in_array($_GET['page'], $availableRoutes)) {
    $route = $_GET['page'];
}

require 'controllers/' . $route . '_controller.php';
