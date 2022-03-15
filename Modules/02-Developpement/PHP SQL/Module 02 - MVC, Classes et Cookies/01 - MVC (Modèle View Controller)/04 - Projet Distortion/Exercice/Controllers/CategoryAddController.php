<?php

/* This is a function call. The function is defined in the `models/Categories.php` file. */
require_once dirname(__DIR__) . '/models/Categories.php';


/* This is a simple if statement that checks if the user has submitted a form and if the form is not
empty. If the user has submitted a form and the form is not empty, then the addCategory function is
called. */
if (isset($_POST['addCategory']) && !empty($_POST['addCategory'])) {
    $addCategory = addCategory($_POST['addCategory']);
}


/* This is a function call. The function is defined in the `models/Categories.php` file. */
$showLastAddcatgory = showLastAddcatgory();


/* This is a function call. The function is defined in the `views/categoryAdd.phtml` file. */
require_once dirname(__DIR__) . '/views/categoryAdd.phtml';