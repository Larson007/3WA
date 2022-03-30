<?php

//? phpinfo();
// Permet d'avoir des information sur la version PHP installé,
// La rurbrique "upload_max_filesize" indique la taille max des fichiers uplodable (default: 2mb) et "upload_tmp_dir" le dossier de destination (default: "wamp64/tmp")

if (isset($_FILES['fichier']) && !empty($_FILES['fichier'])) {
    //? var_dump($_FILES);
    // Le dump de la super variable $_FILES retourne la ligne 'error' dont la valeur correpond à :
    // UPLOAD_ERR_OK => 0 : Pas d'erreur
    // UPLOAD_ERR_INI_SIZE => 1 : le fichier est plus lourd
    // UPLOAD_ERR_FORM_SIZE => 2 : le fichier est plus lourd
    // UPLOAD_ERR_PARTIAL => 3 : le fichier n'a pas chargé completement
    // UPLOAD_ERR_NO_FILE => 4 : Pas de fichier chargé
    // UPLOAD_ERR_NO_TMP_DIR => 6 : Pas de répertoir TEMP
    // UPLOAD_ERR_CANT_WRITE => 7 : Problème d'ecriture
    // UPLOAD_ERR_EXTENSION => 8 : Extension bloqué

    $image = $_FILES['fichier'];
    $allowed = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    $allowedType = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    $error = [];


    // Verifier si une erreur est détecté
    if($image['error'] !== UPLOAD_ERR_OK) {
        echo 'Une erreur 01 s\'est produite';
        array_push($error, 'error');
    }

    // Vérifier si la taille du fichier n'excède pas 5000
    if ($image['size'] > 200000) {
        echo 'Une erreur 02 s\'est produite';
        array_push($error, 'error');
    }

    // Vérifie si le fichier respect les extentions acceptées via le tableau $allowed
    if (!in_array($image['type'], $allowed)) {
        echo 'Une erreur 03 s\' est produite (type invalide)';
        array_push($error, 'error');
    }
    // on peut aussi utiliser la class "SplFileInfo" avec la méthode "getExtension"
    $extension = (new SplFileInfo($image['name']))->getExtension();
    if (!in_array($extension, $allowedType)) {
        echo 'Une erreur 04 s\' est produite (type invalide)';
        array_push($error, 'error');
    }

    // On deplace l'image dans le dossier upload si le fichier ne retourne pas d'erreur
    if (count($error) === 0) {
        move_uploaded_file($image['tmp_name'], 'uploads/'.$image['name']);
        $expire = time() + (3600 * 24) * 365;
        // pour générer un Cookie, on utilise la fonction "setcookie" qui attend 3 params minimum (nom du cookie, la valeur, la date d'expiration)
        setcookie('imageName', $image['name'], $expire);
    }
}

    // Création d'un logs
    // afficher le contenu d'un autre fichier
    // On utilise fopen avec en params le fichier a lire et "r" pour lecture uniquement
    $file = fopen('test.txt', 'r+');
    
    // On doit boucluer pour afficher chaque elements
    while ($a = fgets($file)) {
        
        echo $a. '<br>';
    }
    
    // fputs pour ajouter une nouvelle valeurs a notre fichier
    fputs($file, "erreur enregistrer le ". time() ." \r\n");

    // On ferme toujours fopen 
    fclose($file);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire avec fichier</title>
</head>
<body>
    <h1>Formulaire avec fichier</h1>
    <form method="post" enctype="multipart/form-data">
        <!-- <input type="hidden" name="MAX_FILE_SIZE" value="20000"> -->
        <label for="name">Inserer votre nom</label>
        <input type="text" name="name"><br><br>
        <label for="fichier">Envoyer un fichier</label>
        <input type="file" name="fichier"><br><br>
        <input type="submit" value="envoyer">
    </form>

</body>
</html>