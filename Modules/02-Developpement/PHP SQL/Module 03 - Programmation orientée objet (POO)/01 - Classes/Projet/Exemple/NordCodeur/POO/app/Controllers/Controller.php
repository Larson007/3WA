<?php
namespace App\Controllers;

use Database\DBConnection;

/* It loads a view file and passes the parameters to it */
class Controller {

    protected $db;

/**
 * The constructor function for the PHP class
 * 
 * @param DBConnection db The database connection object.
 */
    public function __construct(DBConnection $db)
    {
        $this->db = $db;
    }

/**
 * It loads a view file and passes the parameters to it.
 * 
 * @param string path The path to the view file.
 * @param array params An array of parameters that will be extracted and put into the local scope.
 */
    public function view(string $path, array $params = null)
    {
        /* Starting the output buffer. */
        ob_start();
        /* Replacing the dot (.) with the directory separator (/) in the path variable. */
        $path = str_replace('.', DIRECTORY_SEPARATOR, $path);
        require VIEWS . $path . '.php';
        /* if $params != null */
        if ($params) {
            /* Extracting the parameters from the array and putting them into the local scope. */
            $params = extract($params);
        }
        /* Cleaning the output buffer and returning the $content. */
        $content = ob_get_clean();
        /* Loading the layout file. */
        require VIEWS . 'layout.php';
    }
}