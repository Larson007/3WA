<?php

require_once 'Voiture.php';
require_once 'Moto.php';

$myCar = new Voiture('Mercedes', 'GLA', 'SUV');

$myCar->setCarAge(4);
$myCar->setCarColor('red keke');
echo $myCar->getBrand().'<br>';
echo $myCar->openDoor().'<br>';

$moto = new Moto('kawasaki','z');
echo $moto->wheeling();
var_dump($moto);
var_dump($myCar);

var_dump($moto instanceof Vehicule);