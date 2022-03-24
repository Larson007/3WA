<?php

namespace Library;

/* This class is used to create a list of all the controllers in the app/controllers folder */
class PathFinder
{

    public $arraycontrollers;
    public $arraykeys;
    public $arrayvalues;

    public static function addPath()
    {

        $arrayNew = [];
        $arrayKey = [];
        $arrayValues = [];


        $arrayControllers = scandir(dirname(__DIR__) . '/../app/controllers', 1);

        foreach ($arrayControllers as $t) {
            $t = lcfirst($t);
            $t = preg_split('/(?=[A-Z])/', $t);
            if ($t[0] !== '..' && $t[0] !== '.') {

                array_push($arrayNew, $t);
            }
        }

        foreach ($arrayNew as $r) {

            if ($r !== '..' && $r !== '.') {

                array_push($arrayKey, $r[0]);
                //dump($r[0]);
            }
        }

        foreach ($arrayControllers as $r) {

            if ($r !== '..' && $r !== '.') {

                array_push($arrayValues, $r);
                //dump($r);
            }
        }

        $goodroad = array_combine($arrayKey, $arrayValues);

        return $goodroad;
    }
}
