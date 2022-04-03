<?php 

use Services\Session;
use Services\{LogError, FilesManager, InputFormManager};
/* use Services\MyException\{FileSizeException, AllowedFileException, FileUploadException, InputException}; */

require_once '../Services/FilesManager.php';

Session::init();


############## configuration ###############
//les formats d'image acceptées
$allowedImage = ['jpg','png','jpeg', 'webp'];
//repertoir de sauvegarde des fichier valides
$repository = '../userpict';
//initialisation de la clef titre dans la session
Session::add('titre', ' ');
############################################


// si la variable $_FILES['image'] existe, c'est que le formulaire est soumis je peux donc effectuer mes controles
if(isset($_FILES['image'])){

    //enregistrement de la valeur tapé
    Session::add('titre', $_POST['title']);
    //controller fichier
    $file = new FilesManager($_FILES['image'], $allowedImage);
    //controlleur input
    $input = new InputFormManager();


    //la moindre erreur stoppera l'execution du block try et renvoi au catch 
    try{
        echo 'début <br>';
        //vérification fichier
        $file->isValid();
        $file->isValidSize(20000);
        $file->isAllowed();

        //vérification Titre
        $input->validLength($_POST['title'],'Titre', 255, 10);

        //si on arrive la c'est qu'aucune erreur n'a été rencontré on peut sauvegarder le fichier et l'envoyer en BDD
        $imgPath = $file->saveFile($repository); // cette fonction enregistre le fichier et retourne le chemin
        $success = 'fichier correctement chargé';
        // si tout est validé on vide la clef titre
        Session::add('titre', ' ');

        ############Enregistrement en BDD################
        // on sauvegarde dans une colone le chemin vers le fichier 
        // on enregistre le titre qui nous servira à contruire le texte alternatif (on aurait pue avoir un autre champs dédié dans notre formulaire)

        ########### Supression ########################
        // au moment de la supression en BDD, pensez à utiliser la fonction unlik('monfichier') qui permet de suprimer un fichier sur le serveur
    } catch ( Exception $e) {
        $error = $e->getMessage();
        LogError::write('fileError.txt', '[ '."\r\n"."\t".'DATE => le '.date("d:m:Y"). ' à :'.date("H:i:s")."\r\n"."\t".'FICHIER => '.$e->getFile()."\r\n"."\t".'LIGNE => '.$e->getLine()."\r\n"."\t".'MESSAGE => '.$e->getMessage()."\r\n".']');
    }
}

require_once '../views/formulaire.phtml';