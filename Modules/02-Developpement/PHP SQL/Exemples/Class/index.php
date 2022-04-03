<?php
declare(strict_types=1);

require_once 'User.php';

$toto = new User('dupont','fabrice');

$toto->setAge(32);

echo $toto->presentation().'<br>';

$toto->setCity('Rennes');

echo $toto->getLastName();

var_dump($toto);