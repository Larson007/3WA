<?php

namespace Services;

use Services\MyException\InputException;

class InputFormManager
{
    public function validMail(string $mailValue): void
    {
        if(!filter_var($mailValue, FILTER_VALIDATE_EMAIL)){
            throw new InputException('Email non valide');
        }
    }

    public function validLength(string $value, string $inputName, int $max, int $min = 1): void
    {
        if(strlen($value) < $min || strlen($value) > $max ){
            throw new InputException('la champ "'.htmlspecialchars($inputName).'", doit avoir entre '.$min.' et '.$max.' caractères !' );
        }
    }

    public function passConfirm(string $original, string $confirm): void
    {
        if($original !== $confirm){
            throw new InputException('Le mot de passe choisi et la confirmation doivent être identique');
        }
    }
}