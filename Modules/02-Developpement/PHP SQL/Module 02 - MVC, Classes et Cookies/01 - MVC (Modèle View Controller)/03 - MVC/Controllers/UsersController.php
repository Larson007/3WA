<?php

require_once dirname(__DIR__) . '/models/Users.php';


$allUsers = getAllusers();
require_once dirname(__DIR__) . '/views/users.phtml';