<?php
require '../vendor/autoload.php';


use App\Models\Images;
use App\Services\FormValidator;


$imagesModel = new Images();
$images = $imagesModel->findAll();
// var_dump($images);


if (isset($_FILES['fichier']) && !empty($_FILES['fichier'])) {
    $file = ($_FILES['fichier']);
    $fileText = $_POST['name'];
    $validator = new FormValidator;
    $validator->imageValidation($file, $fileText);
    // var_dump($yolo);
    // var_dump($file);
    
    // var_dump($fileText);

    $imagesModel = new Images();
    $imagesModel->setName('test');
    // $imagesModel->setName($file['name']);
    // $imagesModel->setAltText($fileText);

    var_dump($imagesModel);

    
}



?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form upload POO</title>
</head>
<body>
<h1>Formulaire avec fichier POO</h1>
    <form action="index.php" method="post" enctype="multipart/form-data">
        <label for="fichier">Envoyer une image</label>
        <input type="file" name="fichier"><br><br>
        <label for="name">Inserer le descriptif de l'image</label>
        <input type="text" name="name"><br><br>
        <input type="submit" value="envoyer">
    </form>

    <div>
        <?php foreach ($images as $image) : ?>
        <img src="uploads/<?= $image->name?>" alt="<?= $image->alt_text ?>" style="width:150px">
        <p><?= $image->alt_text ?></p>
        <?php endforeach ?>
    </div>
</body>
</html>