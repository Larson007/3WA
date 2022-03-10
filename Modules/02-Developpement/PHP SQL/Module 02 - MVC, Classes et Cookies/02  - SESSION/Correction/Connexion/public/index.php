<?php
require_once '../router/router.php';



// si la session n'est pas commencée, nous la démarrons
if(session_status() === PHP_SESSION_NONE) {
    session_start();
}



// si nous cliquons sur le bouton de déconnexion, nous vidons la session en cours et la détruisons.
if(isset($_POST['deconnexion'])){
    session_unset();
    session_destroy();
}

// la condition suivante suppose que pour acceder a n'importe quel page du site nous devons être authentifié.
// si la clef status dans la session n'existe pas ou si elle est différente de true on envoi la route login à notre router
if(!isset($_SESSION['status']) || !$_SESSION['status']){
    
    $path = 'login';
    
} else {
    
// Si la clé url de la variable $_GET est vide, nous définissons un chemin par défaut qui sera la page d'accueil.
    $path = $_GET['url'] ?? DEFAULT_PAGE;
}

// var_dump($_SERVER['HTTP_REFERER']);
//cette regex verifie tout chemin commençant par admin
$admin = '/^admin(.*)$/';  // https://www.regextester.com/
// si l'url demandé commence par 'admin' alors on vérifie que l'utilisateur est bien administrateur, si ce n'est pas le cas on le redirige.
if(preg_match($admin, $path)){
    if($_SESSION['role'] !== 1) header('Location: index.php?url=accueil');
}

$content = router($path);



require '../Views/layout.phtml';