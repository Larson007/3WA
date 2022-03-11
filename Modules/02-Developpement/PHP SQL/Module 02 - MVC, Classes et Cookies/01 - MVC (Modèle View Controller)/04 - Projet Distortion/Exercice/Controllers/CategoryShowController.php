<?php

require_once dirname(__DIR__) . '/models/Categories.php';
require_once dirname(__DIR__) . '/models/Rooms.php';


$category = findCategoryById($_GET['id']);

if(isset($_POST['addRoom']) && !empty($_POST['addRoom'])) {
    $addRoom = addRoom(intval($_GET['id']),$_POST['addRoom']);
}

$rooms = getCategoryRooms($_GET['id']);


require_once dirname(__DIR__) . '/views/categoryShow.phtml';