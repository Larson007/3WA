<?php

// Import du fichier contenant les constantes contenant entre autre le tableau ALLOWED_ROUTES des routes disponibles
require_once dirname(__DIR__) . '/config/routes.php';

// Fonction qui gère les routes
function router($path)
{

    // array_key_exists compare le chemin envoyer dans l'URL avec les clé du tableau ALLOWED_ROUTES et retourne un boolean
    $routeExist = array_key_exists($path, ALLOWED_ROUTES);

    // Si le boolean de $routeExist est true, alors execute la condition suivante
    if ($routeExist) {
        // ob_start() est une fonction native de PHP qui va mettre en memoire tempon la ligne suivante
        ob_start();
        // on stock le Controller si la routes "url" existe qui contient le chemin vers les Views
        require_once dirname(__DIR__) . '/' . BASE_CONTROLLER . $path . 'Controller.php';
        // ob_get_clean() permet d'executer la commande stocker dans ob_start() que l'on stock dans $content
        $content = ob_get_clean();
        
    }
    // la fonction router() retrounera la varaible $content contenant le ob_get_clean()
    return $content;
}
