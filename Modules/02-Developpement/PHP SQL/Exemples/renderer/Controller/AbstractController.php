<?php

abstract class AbstractController
{
    public function render(string $path, array $param = [])
    {
        ob_start();
        require_once dirname(__DIR__).DIRECTORY_SEPARATOR.'view/'.$path.'.phtml';
        $content = ob_get_clean();
        require_once '../view/layout.phtml';
    }
}

