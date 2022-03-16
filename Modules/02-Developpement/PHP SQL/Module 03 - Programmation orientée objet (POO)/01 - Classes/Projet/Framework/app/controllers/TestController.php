<?php

/* Loading the model and view files. */
require_once dirname(__DIR__) . '/models/TestModel.php';

var_dump($test);

/* This is a way to load a file from a different directory. */
require_once dirname(__DIR__) . '/views/pages/exemple.phtml';