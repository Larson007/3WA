<?php
declare(strict_types=1);
require '../Configuration/routes.php';

function router($route)
{
    if(array_key_exists($route, ALLOWED_ROUTES)) {
        ob_start();
        require_once '../'.ALLOWED_ROUTES[$route].'.php';
        $content = ob_get_clean();
    }
    return $content;
}