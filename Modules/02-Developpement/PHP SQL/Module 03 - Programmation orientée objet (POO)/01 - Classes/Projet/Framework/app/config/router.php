<?php

require_once 'routes.php';

function router($path)
{

    $routeExist = array_key_exists($path, ALLOWED_ROUTES);

    if ($routeExist) {
        ob_start();
        require_once dirname(__DIR__) . '/' . BASE_CONTROLLER . $path . 'Controller.php';
        $content = ob_get_clean();
        
    }
    return $content;
}