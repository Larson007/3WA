<?php
declare(strict_types=1);
namespace Services\Validator;

class TextValidator
{
    /**
     * isSame - controle words value on same format
     *
     * @param string $val1
     * @param string $val2
     * @return boolean
     */
    public static function isSame(string $val1, string $val2): bool
    {
        return strtolower(trim($val1)) === strtolower(trim($val2));
    }

    /**
     * isValidLength - Controle words length with parameters 
     *
     * @param string $string
     * @param integer $max
     * @param integer $min
     * @return boolean
     */
    public static function isValidLength(string $string, int $max, int $min = 0): bool
    {
        return strlen($string) >= $min && strlen($string) <= $max;
    }
}