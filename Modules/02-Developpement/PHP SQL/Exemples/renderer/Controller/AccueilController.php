<?php

require_once 'AbstractController.php';

class AccueilController extends AbstractController
{
    public function index()
    {
        //param simule l'appel d'un model qui recupere des données en BDD
        $param = ['name'=>'michel']; // simule "select name from user"
        $this->render('accueil', $param);
    }
    
}