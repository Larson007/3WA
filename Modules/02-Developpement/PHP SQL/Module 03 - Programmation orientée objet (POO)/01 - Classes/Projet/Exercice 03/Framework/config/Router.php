<?php

namespace Config;

require_once 'routes.php';

/* It checks if the route exists and if it does, it loads the controller and returns the content */
class Router
{
    public $path;

/**
 * 
 * @param string path The path to the controller you want to load.
 * 
 * @return $content : The content of the controller file.
 */
    public static function start(string $path) : string
    {
    
        $routeExist = array_key_exists($path, ALLOWED_ROUTES);
        if ($routeExist) {
            ob_start();
            require_once  '../app/' . BASE_CONTROLLER . ucfirst($path) . 'Controller.php';
            $content = ob_get_clean();
        }
        return $content;
    }
}
