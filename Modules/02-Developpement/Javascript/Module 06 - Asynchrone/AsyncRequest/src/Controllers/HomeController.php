<?php
namespace App\Controllers;

use Services\{AbstractController,PartialLoader};


class HomeController extends AbstractController
{
    public function index() 
    {
        $addfile = PartialLoader::render('form', 'addfile');
        $form = PartialLoader::render('form', 'addUser');
        return $this->renderView('home_accueil', compact('form','addfile') );
    }
}