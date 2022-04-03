<?php 

use Services\Session;
use Services\{LogError, FilesManager, InputFormManager};

require_once '../Services/FilesManager.php';

Session::init();
$allowedImage = ['jpg','png','jpeg', 'webp'];
$repository = '../userpict';
Session::add('titre', ' ');



if(isset($_FILES['image'])){

    Session::add('titre', $_POST['title']);
    $file = new FilesManager($_FILES['image'], $allowedImage);
    $input = new InputFormManager();

    try{

        $file->isValid();
        $file->isValidSize();
        $file->isAllowed();

        $input->validLength($_POST['title'],'Titre', 255, 10);

        $imgPath = $file->saveFile($repository); 
        
        Session::add('titre', ' ');

    } catch ( Exception $e) {
        $error = $e->getMessage();
        LogError::write('fileError.txt', '[ '."\r\n"."\t".'DATE => le '.date("d:m:Y"). ' à :'.date("H:i:s")."\r\n"."\t".'FICHIER => '.$e->getFile()."\r\n"."\t".'LIGNE => '.$e->getLine()."\r\n"."\t".'MESSAGE => '.$e->getMessage()."\r\n".']');
    } 
}

require_once '../views/formulaire.phtml';