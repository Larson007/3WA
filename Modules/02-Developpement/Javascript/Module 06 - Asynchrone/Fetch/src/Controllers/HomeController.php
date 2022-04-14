<?php
namespace App\Controllers;

use Services\{AbstractController,PartialLoader};


class HomeController extends AbstractController
{
    public function index() 
    {
        $form = PartialLoader::render('form', 'addUser');
        return $this->renderView('home_accueil', compact('form') );
    }
}