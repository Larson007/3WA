<?php
declare(strict_types=1);
namespace Services\Session;
class Session
{
    public static function init(): void
    {
        if(session_status() === PHP_SESSION_NONE)
        {
            session_start();
        }
    }

    public static function end(): void
    {
        session_unset();
        session_destroy();
    }
}