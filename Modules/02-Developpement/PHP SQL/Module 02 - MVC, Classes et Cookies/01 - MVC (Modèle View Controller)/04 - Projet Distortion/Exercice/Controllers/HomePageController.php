<?php

require_once dirname(__DIR__) . '/models/Categories.php';

$allCategories = getAllCategories();

$showCategories = showPageCategories();


require_once dirname(__DIR__) . '/views/homepage.phtml';

