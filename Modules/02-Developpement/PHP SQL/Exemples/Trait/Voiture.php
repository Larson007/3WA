<?php
declare(strict_types=1);
require_once 'TraitSiege.php';

class Voiture
{
    use TraitSiege;
    
    public function getSiegeType()
    {
        return $this->chauffant();
    }
}

