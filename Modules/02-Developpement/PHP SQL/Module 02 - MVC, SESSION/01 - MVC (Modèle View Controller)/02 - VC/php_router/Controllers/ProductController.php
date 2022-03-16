<?php

// Equivalent du use strict en Js
declare(strict_types=1);

class ProductController
{
    // construct inutile ici 
    public function __construct()
    {
    }

    public function index()
    {
        echo "Je suis la méthode index de ProductController";
    }
}
