<?php

require_once dirname(__DIR__) . '/models/Categories.php';
require_once dirname(__DIR__) . '/models/Rooms.php';
require_once dirname(__DIR__) . '/models/Messages.php';

$category = findCategoryById($_GET['id']);

$room = findRoomById($_GET['room']);

if(isset($_POST['addMessage']) && !empty($_POST['addMessage'])) {
    $message = addMessage($_GET['room'], $_POST['addMessage']);
}

$messages = getAllMessages();


require_once dirname(__DIR__) . '/views/room.phtml';