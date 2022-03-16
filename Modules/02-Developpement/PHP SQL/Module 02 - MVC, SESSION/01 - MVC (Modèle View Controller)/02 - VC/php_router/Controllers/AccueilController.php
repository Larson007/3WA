<?php

// Equivalent du use strict en Js
declare(strict_types=1);

class AccueilController
{
    // construct inutile ici 
    public function __construct()
    {
    }

    public function index()
    {
        echo "Je suis la méthode index de AccueilController";
    }
}
