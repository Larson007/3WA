<?php

declare(strict_types=1);

namespace Services;

class FormValidator
{
    private $error;

    public function __construct()
    {
        $this->error = [];
    }

    public function validMail(string $mailValue): void
    {
        if (!filter_var($mailValue, FILTER_VALIDATE_EMAIL)) {
            array_push($this->error, $mailValue);
        }
    }

    public function validLength(string $value, int $max, int $min = 1): void
    {
        if (strlen($value) < $min || strlen($value) > $max) {
            array_push($this->error, $value);
        }
    }

    public function passConfirm(string $original, string $confirm): void
    {
        if ($original !== $confirm) {
            array_push($this->error, $confirm);
        }
    }

    public function getError(): bool
    {
        $isValid = true;
        if (!empty($this->error)) {
            $isValid = false;
        }
        return $isValid;
    }
}
