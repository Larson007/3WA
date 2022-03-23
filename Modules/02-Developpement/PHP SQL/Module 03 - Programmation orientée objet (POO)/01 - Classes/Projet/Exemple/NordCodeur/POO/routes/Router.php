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
     * For each route in the routes array, if the route matches the current URL, execute the route
     * 
     * @return Nothing.
     */
    public function run()
    {
        foreach ($this->routes[$_SERVER['REQUEST_METHOD']] as $route) {
            if ($route->matches($this->url)) {
                $route->execute();
            }
        }
        return header('HTTP/1.0 404 Not Found');
    }
}
