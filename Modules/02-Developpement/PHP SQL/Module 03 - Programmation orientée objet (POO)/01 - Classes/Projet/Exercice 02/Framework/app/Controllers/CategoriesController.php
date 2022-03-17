<?php

require_once '../Models/Categories.php';

$categoriesModel = new CategoriesModel();

$category = $categoriesModel->findAll();

var_dump($category);

require_once '../../public/index.php';