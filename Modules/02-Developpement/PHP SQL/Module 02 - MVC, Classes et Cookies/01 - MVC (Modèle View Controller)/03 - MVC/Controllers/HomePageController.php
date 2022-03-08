<?php
require_once dirname(__DIR__) . '/models/Users.php';


$allUsers = getAllusers();
//var_dump($allUsers);

require_once dirname(__DIR__) . '/views/homepage.phtml';

