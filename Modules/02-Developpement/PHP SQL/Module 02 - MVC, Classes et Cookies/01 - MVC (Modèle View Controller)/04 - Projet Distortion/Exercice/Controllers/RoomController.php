<?php

require_once dirname(__DIR__) . '/models/Categories.php';
require_once dirname(__DIR__) . '/models/Rooms.php';
require_once dirname(__DIR__) . '/models/Messages.php';

$category = findCategoryById($_GET['id']);

$room = findRoomById($_GET['room']);

if(isset($_POST['addMessage']) && !empty($_POST['addMessage'])) {
    $message = addMessage($_GET['room'], $_POST['addMessage']);
}

$messages = showMessages($_GET['room']);


$url = basename($_SERVER['REQUEST_URI']);    

// Pinned
if(isset($_POST['addPin']) && !empty($_POST['addPin'])) {
    $pinned =  addPinnedMessage($_POST['addPin']);
    header('Location: '. $url);
} else if (isset($_POST['removePin']) && !empty($_POST['removePin'])) {
    $pinned = removePinnedMessage($_POST['removePin']);
    header('Location: '. $url);
}

$pinnedMessages = showPinnedMessage($_GET['room']);


//var_dump($pinnedMessages);

require_once dirname(__DIR__) . '/views/room.phtml';