<?php
declare(strict_types=1);

abstract class Vehicule
{
    protected string $brand;
    protected string $model;
    protected int $age;
    protected string $color;
    
    public function __construct(string $marque, string $modele)
    {
        $this->brand = $marque;
        $this->model = $modele;
    }
    
    public function getBrand(): string
    {
        return $this->brand;
    }
    
    public function getModel(): string
    {
        return $this->model;
    }
    
    protected function setAge(int $age): void
    {
        $this->age = $age;
    }
    
    protected function setColor(string $color): void
    {
        $this->color = $color;
    }
    
    public function getAge(): int
    {
        return $this->age;
    }
    
    public function getColor(): string
    {
        return $this->color;
    }
}