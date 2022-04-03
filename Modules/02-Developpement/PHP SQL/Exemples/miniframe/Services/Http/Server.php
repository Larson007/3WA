<?php
namespace Services\Http;
class Server
{
    public static $uri;
    public static $method;

    public static function uri()
    {
        return self::$uri = $_SERVER['REQUEST_URI'];
    }

    public static function method()
    {
        return self::$method = $_SERVER['REQUEST_METHOD'];
    }
}