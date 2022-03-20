<?php

namespace config;

require_once 'routes.php';


/* The router class is responsible for routing the user to the correct controller */
class Router {

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
}