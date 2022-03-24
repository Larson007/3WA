<?php
use App\Models\User;
use Services\{Session, FormValidator};

$userModel = new User();
$form = new FormValidator();
Session::init();

if(isset($_POST['form']) && $_POST['form'] === 'connexion') {
    ##traitement connexion
    //utiliser le models User (verifier si l'email existe)
    $mail = $_POST['email'];
    $count = $userModel->matchMail($mail);
    
    //si l'email existe, récuperer le mdp et verifier la correspondance (https://www.php.net/manual/fr/function.password-verify.php) 
    if(!$count){
        $error = 'echec authentification';      
    } else {
        $user = $userModel->findByMail($mail);
        $isConnect = password_verify($_POST['pass'], $user->password);
    }
    
    //si le mdp est validé enregistrer les infos dans la session
    if(isset($isConnect) && $isConnect) {
        
        Session::add('lastName', $user->last_name);
        Session::add('firstName', $user->first_name);
        Session::add('email', $user->email);
        Session::add('role', $user->role);
        
        header('Location: index.php?url=accueil');
    } else {
        $error = 'echec authentification';
    }
    
} else {
    ##traitement inscription
    //vérifier l'état des champs formulaire ('valeur', 'longueur', 'caractère'...)
    if(isset($_POST['form'])) {
        $lastName = $_POST['nom']; // verifier longeur
        $firstName = $_POST['prenom']; // idem
        $mail = $_POST['email']; //verifier si c'est bien un email
        $pass = $_POST['pass'];
        $confirm = $_POST['confirm']; // verifier  confirm === pass
        $form->validlength($lastName, 64);
        $form->validlength($firstName, 64);
        $form->validMail($mail);
        $form->validlength($pass, 12, 5);
        $form->passConfirm($pass, $confirm);
        $isValid = $form->getError();
    }
    
    if(isset($isValid) && $isValid) {
        $userModel->insertUser($lastName, $firstName, $mail, $pass);
    } elseif (isset($isValid) && !$isValid) {
        
            $error = 'erreur !';
   
    }
}

$_GET['q'] = $_GET['q'] ?? 'connexion';
require_once '../views/login.phtml';