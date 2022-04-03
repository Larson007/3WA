<?php
// require_once '../vendor/autoload.php';
use App\Models\Users;
$title = 'page de connexion';


$param = (new Users())->findUser();

var_dump($param);

require_once '../views/login.phtml';