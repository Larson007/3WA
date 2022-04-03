<?php
declare(strict_types=1);
require 'Voiture.php';

$car = new Voiture();

echo $car->roule().'<br>';
echo $car->arret().'<br>';
echo $car->openDoor().'<br>';
echo 'hello';

var_dump($car instanceof VehiculeInterface);
var_dump($car instanceof AbstractVehicule);