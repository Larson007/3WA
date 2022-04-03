<?php
require_once 'User.php';
require_once 'Verificator.php';
require_once 'PersonalLengthException.php';


$inputName = 'mi';

$user = new User();

try {
    // utilisation de la fonction statique "lengthValid"
    if(Verificator::lengthValid($inputName, 6 , 3))
    {
        $user->setName($inputName);
    }
    

    
} catch (PersonalLengthException $e) {
    //capture de l'erreur personnalisé et traitement souhaité;
    
    echo $e->getMessage().'<br>';
    // je traite l'erreur comme je le souhaite 
    echo ' l\'erreur est capturé ! <br>';
    //si je souhaite stopper mon script en cas d'erreur critique ne pas oublier 
    //die();
    
}

echo $user->name.'<br>';

echo 'le script se poursuit si die() n\'est pas utilisé, c\'est un choix qui vous appartiens de le stopper ou non ';