<?php

/* Loading the model and view files. */
require_once dirname(__DIR__) . '/models/Categories.php';


/* This is a function call. It is calling the function `getAllCategories()` and assigning the result to
the variable ``. */
$allCategories = getAllCategories();

/* Calling the function `showPageCategories()` and assigning the result to the variable
``. */
$showCategories = showPageCategories();


/* This is a way to load a file from a different directory. */
require_once dirname(__DIR__) . '/views/homepage.phtml';

