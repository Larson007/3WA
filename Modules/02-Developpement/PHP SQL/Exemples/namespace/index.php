<?php
require_once 'Controllers/Vehicule.php';
require_once 'Models/Vehicule.php';

use Controllers\Vehicule as carC;
use Models\Vehicule as carM;

//Class Véhicule dans le namespace Controllers
$cVoiture = new carC();
$cVoiture->mySpace();

echo '<br>';

//Class Véhicule dans le namespace Models
$mVoiture = new carM() ;
$mVoiture->mySpace();