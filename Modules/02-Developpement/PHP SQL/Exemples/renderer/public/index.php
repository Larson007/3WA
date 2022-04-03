<?php

require_once '../Controller/AccueilController.php';

//simulation d'un appel par le router 
$router = (new AccueilController())->index();