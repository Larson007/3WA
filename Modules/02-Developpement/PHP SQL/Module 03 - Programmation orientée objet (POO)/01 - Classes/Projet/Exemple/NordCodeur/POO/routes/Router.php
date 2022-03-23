<?php

namespace Router;


/* It takes a URL and stores it in the url variable. It then loops through the routes array and checks
if the route matches the current URL. If it does, it executes the route */

class Router
{
    public $url;
    public $routes = [];

    /**
     * The constructor takes a URL and stores it in the  variable
     * 
     * @param url The URL of the API.
     */
    public function __construct($url)
    {
        /* This is setting the url variable to the value of the url parameter, and then removing the
        leading and trailing slashes. */
        $this->url = trim($url, '/');
    }

    /**
     * It adds a new route to the routes array.
     * 
     * @param string path The path to match.
     * @param string action The name of the method that will be called when the route is matched.
     */
    public function get(string $path, string $action)
    {
        /* This is adding a new route to the routes array. */
        $this->routes['GET'][] = new Route($path, $action);
    }

    /**
     * If the route matches the current URL, it executes the route
     * 
     * @return $route that matches the current URL.
     */
    public function run()
    {
        /* Looping through the routes array and checking if the route matches the current URL. If it does, it
executes the route. */
        foreach ($this->routes[$_SERVER['REQUEST_METHOD']] as $route) {
            /* Checking if the route matches the current URL. If it does, it executes the route. */
            if ($route->matches($this->url)) {
                return $route->execute();
            }
        }
        /* This is returning a 404 error. */
        return header('HTTP/1.0 404 Not Found');
    }
}
