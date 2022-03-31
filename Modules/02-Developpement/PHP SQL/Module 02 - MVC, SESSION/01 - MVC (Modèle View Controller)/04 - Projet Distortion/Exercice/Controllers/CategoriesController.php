<?php

require_once dirname(__DIR__) . '/models/Categories.php';
dump(dirname(__DIR__) . '/models/Categories.php');

$showCategories = showPageCategories();


require_once dirname(__DIR__) . '/views/categories.phtml';