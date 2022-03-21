<?php

namespace App\Config;


require_once 'routes.php';

/* The Router class is responsible for routing the user to the correct controller. */
class Router
{

    public $content;
    public $path;

    function start($path)
    {
    
        $routeExist = array_key_exists($path, ALLOWED_ROUTES);
        if ($routeExist) {
            ob_start();
            require_once dirname(__DIR__) . '/' . BASE_CONTROLLER . ucfirst($path) . 'Controller.php';
            $this->content = ob_get_clean();
        }
        return $this->content;
    }
}
