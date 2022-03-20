<?php

/* This is a way to include a file from another directory. */
require_once dirname(__DIR__) . '/models/Categories.php';
require_once dirname(__DIR__) . '/models/Rooms.php';


/* This is a way to get the category from the database. */
$category = findCategoryById($_GET['id']);

/* This is a way to check if the form has been submitted and if it has been submitted, then we will add
the room to the database. */
if(isset($_POST['addRoom']) && !empty($_POST['addRoom'])) {
    $addRoom = addRoom(intval($_GET['id']),$_POST['addRoom']);
}

/* This is a function call. It is calling the function `getCategoryRooms` and passing it the value of
`['id']`. */
$rooms = getCategoryRooms($_GET['id']);


/* This is a way to include a file from another directory. */
require_once dirname(__DIR__) . '/views/categoryShow.phtml';