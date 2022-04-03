<?php
declare(strict_types=1);

class User
{
    private string $firstName;
    private string $lastName;
    private ?int $age;
    private string $city;
    
    public function __construct(string $prenom, string $nom, ?int $age = null)
    {
        $this->firstName = $prenom;
        $this->lastName = $nom;
        $this->age = $age;
        
    }
    
    public function setCity(string $ville): void
    {
        $this->city = $ville;
    }
    
    public function setAge(int $age): void
    {
        $this->age = $age;
    }
    
    public function setFirstName(string $prenom): void
    {
        $this->firstName = $prenom;
    }
    
    public function setLastName(string $nom): void
    {
        $this->lastName = $nom;
    }
    
    public function getLastName(): string
    {
        return $this->lastName;
    }
    
    public function getFirstname(): string
    {
        return $this->firstName;
    }
    
    public function getCity(): string
    {
        return $this->city;
    }
    
    public function getAge(): int
    {
        return $this->age;
    }
    
    public function presentation(): string
    {
        return 'Bonjour je m\'appelle '. $this->firstName. ' '. $this->lastName .' et j\'ai '. $this->age .' ans';
    }
}