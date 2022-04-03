<?php
declare(strict_types=1);
namespace Services\Exception;
require_once '../autoload.php';

use Exception;

class RouteNotFoundException extends Exception
{
    public function __construct()
    {
        $this->message = 'Erreur page inexistante';
        $this->code = 404;
    }
}