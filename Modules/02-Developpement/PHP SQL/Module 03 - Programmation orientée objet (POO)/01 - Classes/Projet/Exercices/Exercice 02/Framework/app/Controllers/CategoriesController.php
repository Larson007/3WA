<?php

namespace Controllers;

use Models\Models;

$categoriesModel = new Model();

$category = $categoriesModel->findAll();

var_dump($category);

require_once '../../public/index.php';