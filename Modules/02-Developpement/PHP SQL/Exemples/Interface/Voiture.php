<?php
declare(strict_types=1);
require_once 'VehiculeInterface.php';
require_once 'AbstractVehicule.php';
// il est possible d'étendre d'une class et d'implémenter une interface
// précision : notre exemple etend d'une classe abstraite mais on peut étendre de n'importe quel classe
class Voiture extends AbstractVehicule implements VehiculeInterface
{
    public function roule()
    {
        return 'pédale accélérateur enfoncée !';
    }
    
    public function arret()
    {
        return 'pédale frein enfoncée !';
    }
    
    public function klaxon()
    {
        return 'biip biiiip !';
    }
}

