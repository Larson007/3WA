<?php
namespace Services;

class PartialLoader
{
    public static function render(string $folder, string $partialName)
    {
        ob_start();
        require_once dirname(__DIR__).DIRECTORY_SEPARATOR.'src'.DIRECTORY_SEPARATOR.'views'.DIRECTORY_SEPARATOR.'partial'.DIRECTORY_SEPARATOR. $folder . DIRECTORY_SEPARATOR . $partialName.'.phtml';
        return ob_get_clean();
    }
}