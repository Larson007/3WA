<?php
declare(strict_types=1);

require_once 'Vehicule.php';

class Moto extends Vehicule
{
    
    public function wheeling(): string
    {
        return 'je roule sur une roue !';
    }
    
}