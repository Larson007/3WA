<?php
//require le fichier autoload
require_once 'autoload.php';

//la classe User et Voiture sont dans le meme namespace, on peut donc faire : use namespace\{classA,classB, etc..}
use Controllers\{User, Voiture};

$user = new user();
$user->sayHello();

// echo '<br>';

// (new Voiture())->roule();

