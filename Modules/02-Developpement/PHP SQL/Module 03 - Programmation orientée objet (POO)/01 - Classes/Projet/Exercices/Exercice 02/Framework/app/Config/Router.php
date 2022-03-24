<?php

namespace config;


require_once 'routes.php';

class Router
{

    public $content;
    public $path;

    function start($path) : string
    {
    
        $routeExist = array_key_exists($path, ALLOWED_ROUTES);
    
        if ($routeExist) {
            ob_start();
            require_once dirname(__DIR__) . '/' . BASE_CONTROLLER . $path . '.php';
            $this->content = ob_get_clean();
            var_dump(dirname(__DIR__) . '/' . BASE_CONTROLLER . $this->path . '.php');
        }
        return $this->content;
    }
}
