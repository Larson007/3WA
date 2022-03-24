<?php

namespace App\Controllers;

use App\Models\Model;

$categoriesModel = new Model();

$category = $categoriesModel->findAll();

var_dump($category);

require_once '../../public/index.php';