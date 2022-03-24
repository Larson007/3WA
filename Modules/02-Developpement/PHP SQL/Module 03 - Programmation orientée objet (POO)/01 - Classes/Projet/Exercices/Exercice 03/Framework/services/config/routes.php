<?php

use Library\PathFinder;

$goodroad = PathFinder::addPath();

// le tabelau des routes disponible générer automatiquement en fonction des fichiers controllers
define('ALLOWED_ROUTES', $goodroad);


// La route par défault
const DEFAULT_ROUTE = 'homepage';

// Le dossier controller stocker dans une constante
const BASE_CONTROLLER = "controllers/";

return $goodroad;
