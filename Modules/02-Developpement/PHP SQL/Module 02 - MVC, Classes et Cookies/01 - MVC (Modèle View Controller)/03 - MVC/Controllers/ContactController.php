<?php

require_once dirname(__DIR__) . '/models/Users.php';

$user = findUserById($_GET['id']);

var_dump($user);
require_once dirname(__DIR__) . '/views/contact.phtml';