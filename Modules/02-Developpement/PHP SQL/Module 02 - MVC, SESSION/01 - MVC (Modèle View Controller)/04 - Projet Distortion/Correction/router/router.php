<?php

declare(strict_types=1);

require_once '../configuration/routes.php';

function loadPage($path)
{
    if (array_key_exists($path, ALLOWED_ROUTES)) {
        ob_start();
        require_once '../' . ALLOWED_ROUTES[$path] . '.php';
        $content = ob_get_clean();
    } else {
        $content = goTo404();
    }
    return $content;
}

function goTo404(): string
{
    ob_start();
    header('HTTP/1.1 404 NOT FOUND');
    require_once '../views/error/404.phtml';
    exit();
    return $content = ob_get_clean();
}
