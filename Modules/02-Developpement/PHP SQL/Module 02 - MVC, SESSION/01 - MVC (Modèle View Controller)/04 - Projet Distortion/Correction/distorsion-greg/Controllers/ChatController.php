<?php
require_once '../Models/Category.php';
require_once '../Models/Room.php';
require_once '../Models/Message.php';

$category = getAllCategories();

$rooms = getAllRooms();


$roomByCat = [];


if(isset($_GET['roomid']) && !empty($_GET['roomid'])){
    $roomID = (int) $_GET['roomid'];
    $roomName = getRoom($roomID);
    $messages = displayMessages($roomID);
    $pinned = getPinned($roomID);
}

//pour chaque category, je crée un nouvel index "$cat->id", a chaque index je crée une clef 'category' qui contiendra un tableau tableau associatif lié a la catégory
foreach($category as $cat) {
    $roomByCat[$cat->id]['category'] = [
        'cat_name' => $cat->name,
        'cat_id' => $cat->id
        ];
}


// pour chaque room je vérifie si l'id de la catégory correspond a une catégory existante, si c'est le cas, je me rend sur la catégory et j'y place une nouvelle clef "room" , cette clef sera diviser en tableau associatif selon l'id de la room
// [$room->category_id] === [$cat->id] 
foreach($rooms as $room) {
    if(array_key_exists($room->category_id, $roomByCat)) {
        $roomByCat[$room->category_id]['room'][$room->id] = [
            'room_id' => $room->id ,
            'room_name' => $room->name
            ];
    }
}



if(isset($_POST['pinned']) && !empty($_POST['pinned'])){
    $pinedId = (int) $_POST['pinned'];
    pinned($pinedId);
    $messages = displayMessages($roomID);
    $pinned = getPinned($roomID);
}

if(isset($_POST['message']) && !empty($_POST['message'])){
    $content = trim($_POST['message']);
    $msgId = insertNewMessage($content, $roomID);
    $messages = displayMessages($roomID);
    header("Location: index.php?url=chat&roomid=$roomID#message_$msgId");
}

require_once '../views/chat.phtml';