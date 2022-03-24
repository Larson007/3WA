<?php
declare(strict_types=1);
namespace Services;

class Session
{
    public static function init()
    {
        if(session_status() === PHP_SESSION_NONE ) {
            session_start();
        }
    }
    
    public static function add($key, $value)
    {
        $_SESSION[$key] = $value;
    } 
    
    public static function get($key)
    {
        return $_SESSION[$key];
    } 
    
    public static function isAdmin()
    {
        if(self::get('role') > 0) {
            return true;
        } else {
            return false;
        }
    }
    
    public static function isConnect()
    {
        if(isset($_SESSION['email'])){
            return true;
        } else {
            return false;
        }
    }
    
    public static function destroy()
    {
        session_unset();
        session_destroy();
    }
}