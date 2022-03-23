<?php

namespace Router;


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
        $path = preg_replace('#:([\w]+)#', '([^/]+)', $this->path);
        $pathToMatch = "#^$path$#";

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
        $params = explode('@', $this->action);
        $controller = new $params[0]();
        $method = $params[1];
        return isset($this->matches[1]) ? $controller->$method($this->matches[1]) : $controller->$method();
    }
}
