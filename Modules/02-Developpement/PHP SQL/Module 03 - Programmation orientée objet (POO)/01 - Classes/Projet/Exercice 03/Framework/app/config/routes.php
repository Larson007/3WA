<?php

declare(strict_types=1);


// constante de nos routes disponibles dans un tableau dont la clé correspondra a la route et la value aux Controllers
const ALLOWED_ROUTES = [
    'homepage' => 'HomePageController',
];

// La route par défault
const DEFAULT_ROUTE = 'homepage';

// Le dossier controller stocker dans une constante
const BASE_CONTROLLER = "controllers/";