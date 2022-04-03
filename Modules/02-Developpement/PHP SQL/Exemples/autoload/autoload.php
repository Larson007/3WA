<?php
// require_once 'Controllers/Users.php'

spl_autoload_register(function($class){
    var_dump('avant traitement dans l\'autoload: '.$class);
    
    //remplace le backslash par un slash
    $class = str_replace('\\','/', $class);
    var_dump('apres traitement dans l\'autoload: '.$class.'.php');
    require_once $class.'.php';
});