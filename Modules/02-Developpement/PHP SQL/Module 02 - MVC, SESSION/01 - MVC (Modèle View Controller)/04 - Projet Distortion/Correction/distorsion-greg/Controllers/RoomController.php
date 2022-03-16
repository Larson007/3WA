<?php
require_once '../Models/Room.php';

if(isset($_GET['catid']) && !empty($_GET['catid'])) {
    if(isset($_POST['room']) && !empty($_POST['room'])) {
        
        $id = (int) $_GET['catid'];
        $name = ucfirst(trim($_POST['room']));
        
        $count = validate($name, $id);
        
        if($count !== 0){
            $error = 'la room '.htmlentities($name).' existe déjà !';
        } else {
            $roomId = addNewRoom($id, $name);
            header("Location: index.php?chat&roomid=$roomId");
            exit();
        }
    }
}

require_once '../views/room.phtml';