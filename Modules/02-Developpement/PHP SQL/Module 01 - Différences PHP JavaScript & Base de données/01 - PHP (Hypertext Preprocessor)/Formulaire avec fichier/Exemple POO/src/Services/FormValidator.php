<?php

namespace App\Services;

use SplFileInfo;
use App\Models\Images;

class FormValidator
{

    public function imageValidation($image, $fileText)
    {

        // $image = $_FILES['fichier'];
        $allowed = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        $allowedType = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
        $error = [];

        if (isset($_FILES['fichier']) && !empty($_FILES['fichier'])) {




            // Verifier si une erreur est détecté
            if ($image['error'] !== UPLOAD_ERR_OK) {
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
                move_uploaded_file($image['tmp_name'], 'uploads/' . $image['name']);
                $expire = time() + (3600 * 24) * 365;
                // pour générer un Cookie, on utilise la fonction "setcookie" qui attend 3 params minimum (nom du cookie, la valeur, la date d'expiration)
                setcookie('imageName', $image['name'], $expire);

                
            }
        }

    }
}
