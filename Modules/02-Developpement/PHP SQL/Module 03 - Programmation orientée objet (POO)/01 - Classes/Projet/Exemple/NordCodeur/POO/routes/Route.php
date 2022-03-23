<?php

namespace Router;

use Database\DBConnection;


/* The Route class is responsible for matching a URL to a route and then executing the controller and
method that was requested */

class Route
{

    public $path;
    public $action;
    public $matches;

    /**
     * The constructor takes a path and an action and stores them in the object
     * 
     * @param path The path to the route. This is the path that will be matched against the requested URL.
     * @param action The name of the action to be called.
     */
    public function __construct($path, $action)
    {
        $this->path = trim($path, '/');
        $this->action = $action;
    }


    /**
     * If the URL matches the route, the matches array will be populated with the captured values
     * 
     * @param string url The URL to match against.
     * 
     * @return Bool.
     */
    public function matches(string $url)
    {
        /* This is replacing the `:` with `([^/]+)` which is a regular expression that will match any
        character except a forward slash. */
        $path = preg_replace('#:([\w]+)#', '([^/]+)', $this->path);
        /* This is creating a regular expression that will match the path. */
        $pathToMatch = "#^$path$#";

        /* This is checking if the URL matches the route. If it does, then the matches array will be populated
        with the captured values. */
        if (preg_match($pathToMatch, $url, $matches)) {
            $this->matches = $matches;
            return true;
        } else {
            return false;
        }
    }


    /**
     * This function is responsible for executing the controller and method that was requested. 
     * @return The result of the action.
     */
    public function execute()
    {
        /* This is creating an array of the controller and method names. */
        $params = explode('@', $this->action);
        /* This is creating an instance of the controller class. The first parameter is the name of the
        controller class. The second parameter is an instance of the DBConnection class. */
        $controller = new $params[0](new DBConnection('formations_php_framework', '127.0.0.1', 'root', ''));
        /* This is assigning the second element of the array to the variable ``. */
        $method = $params[1];
        /* This is a ternary operator. It is saying if the matches array has a value, then execute the
        method with the value. Otherwise, execute the method without any parameters. */
        return isset($this->matches[1]) ? $controller->$method($this->matches[1]) : $controller->$method();
    }
}
