<?php

require_once dirname(__DIR__) . '/models/Categories.php';


if (isset($_POST['addCategory']) && !empty($_POST['addCategory'])) {
    $addCategory = addCategory($_POST['addCategory']);
}


$showLastAddcatgory = showLastAddcatgory();


require_once dirname(__DIR__) . '/views/categoryAdd.phtml';