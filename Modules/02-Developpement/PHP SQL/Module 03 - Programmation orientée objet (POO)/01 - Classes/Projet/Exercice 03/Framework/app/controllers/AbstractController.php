<?php
namespace Controllers;

namespace App\Controllers;

use App\Models\Model;

abstract class AbstractController {

    private $manager;

    public function __construct(){
        $this->manager = new Model;
        $this->manager->findAll();
    }

}