<?php

/* This is importing the models that we created in the previous lesson. */
require_once dirname(__DIR__) . '/models/Categories.php';
require_once dirname(__DIR__) . '/models/Rooms.php';
require_once dirname(__DIR__) . '/models/Messages.php';

/* This is getting the category id from the URL and using it to find the category in the database. */
$category = findCategoryById($_GET['id']);

/* This is getting the room id from the URL and using it to find the room in the database. */
$room = findRoomById($_GET['room']);

/* This is checking if the user has submitted a message and if the message is not empty. If the user
has submitted a message and the message is not empty, then the message is added to the database. */
if(isset($_POST['addMessage']) && !empty($_POST['addMessage'])) {
    $message = addMessage($_GET['room'], $_POST['addMessage']);
}

/* This is getting all the messages from the database and putting them into an array. */
$messages = showMessages($_GET['room']);


/* This is getting the URL of the page and using it to redirect the user back to the page they were on. */
$url = basename($_SERVER['REQUEST_URI']);    


/* This is a way to add a pinned message. */
if(isset($_POST['addPin']) && !empty($_POST['addPin'])) {
    $pinned =  addPinnedMessage($_POST['addPin']);
    header('Location: '. $url);
} else if (isset($_POST['removePin']) && !empty($_POST['removePin'])) {
    $pinned = removePinnedMessage($_POST['removePin']);
    header('Location: '. $url);
}

/* This is getting all the pinned messages from the database and putting them into an array. */
$pinnedMessages = showPinnedMessage($_GET['room']);


/* This is including the view file. */
require_once dirname(__DIR__) . '/views/room.phtml';