<?php

// constante de nos routes disponibles dans un tableau dont la clé correspondra a la route et la value aux Controllers
const ALLOWED_ROUTES = [
    'homepage' => 'HomePageController',
    'categories' => 'CategoriesController',
    'categoryAdd' => 'CategoryAddController',
    'categoryShow' => 'CategoryShowController',
    'room' => 'RoomController',
];

// La route par défault
const DEFAULT_ROUTE = "homepage";

// Le dossier controller stocker dans une constante
const BASE_CONTROLLER = "Controllers/";