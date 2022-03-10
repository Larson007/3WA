<?php
//information récupéré depuis la BDD
$name = 'greg';
$pass = 'test';
$role = 0;
// ceci simule un mot de pass hashé récupéré dans la BDD
$hashpass = password_hash($pass, PASSWORD_DEFAULT);


if(isset($_POST['connect'])) {
    $goodName = $name === $_POST['name']; // enregistre une valeur booleenne
    
    // nous vérifions que le mot de passe envoyé correspond au hashage
    $goodPass = password_verify($_POST['pwd'], $hashpass); 
    
    // la clef status vaudra true si les deux variable return true, si l'une d'elle retourne false alors status vaudra false 
    $_SESSION['status'] = $goodName && $goodPass;
    
    // nous enregistrons son rôle afin de contrôler l'accès à certaines pages.
    $_SESSION['role'] = $role;
    
    //nous enregistrons les information de l'utilisateur dans la session pour les réustiliser ailleurs.
    $_SESSION['user'] = [
        'name'=> $name,
        'nameXSS'=> "<script>
            document.addEventListener('DOMContentLoaded', ()=>{
                
                window.location = 'https://zestedesavoir.com/articles/232/les-failles-xss/'
            });
        </script>"
    ];
    
     // dans le cas ou la connexion est réussi nous redirigeon vers la page d'accueil, $_SESSION['status'] vaudra true
     if($_SESSION['status']) header('Location: index.php?url=accueil');
}

require_once '../Views/login.phtml';