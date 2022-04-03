<?php
declare(strict_types=1);

require_once 'Vehicule.php';

class Voiture extends Vehicule
{
    private string $type;
    
    public function __construct(string $brand, string $model, string $type)
    {
        parent::__construct($brand, $model);
        $this->type = $type;
    }
    
    public function openDoor(): string
    {
        return 'potière ouverte !';
    }
    
    public function setCarAge(int $age): void
    {
        $this->setAge($age);
    }
    
    
    public function setCarColor(string $color): void
    {
        $this->setColor($color);
    }
}