<?php

class Verificator
{
    public static function lengthValid(string $string, int $max, int $min = 0): bool
    {
        if (strlen($string) >= $min && strlen($string) <= $max){
            return true;
        } else {
            // declenche une Exception personnalisé
            throw new PersonalLengthException();
        }

    }
}