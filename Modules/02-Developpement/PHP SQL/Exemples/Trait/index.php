<?php

require_once 'Voiture.php';

$car = new Voiture();

//methode fournis pas le trait
echo $car->chauffant();

//method directement disponivble dans la class Voiture
echo $car->getSiegeType();

var_dump($car instanceof TraitSiege);
