<?php

require_once dirname(__DIR__) . '/models/Categories.php';

$allCategories = getAllCategories();

//var_dump($allCategories);


require_once dirname(__DIR__) . '/views/homepage.phtml';

