<?php
require_once '../Models/Category.php';

if(isset($_POST['category']) && !empty($_POST['category'])) {
    $name = ucfirst(trim($_POST['category']));
    $count = validateCategory($name);
    
    if ($count !== 0) {
        $error = 'La catégorie '. htmlentities($name) .' existe déjà !';
    } else {
        addNewCategorie($name);
        header('Location: index.php?url=chat');
        exit();
    }
}

require_once '../views/category.phtml';