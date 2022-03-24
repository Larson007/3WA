<?php

namespace App;

$categoriesModel = new Models\CategoriesModel();

$category = $categoriesModel->findAll();

var_dump($category);

require_once '../../public/index.php';