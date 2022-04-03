<?php
namespace Services;

class LogError
{
    public static function write($file, $message)
    {
        $logFile = fopen(dirname(__DIR__).DIRECTORY_SEPARATOR.$file, 'a');
        fputs($logFile, $message."\r\n");
        fclose($logFile);
    }

    public static function read($file)
    {
        fopen(dirname(__DIR__).DIRECTORY_SEPARATOR.$file, 'a+');
        while($str = fgets(dirname(__DIR__).DIRECTORY_SEPARATOR.$file))
        {
            $str .= $str.'<br>';
        }
        fclose(dirname(__DIR__).DIRECTORY_SEPARATOR.$file);
        return $str;
    }
}