<?php
require 'robot_functions.php';

//* Robot Name
function formName():string {

    if (isset($_GET['name']) ) {
        $robotNameForm =  $_GET['name'];
        return $robotNameForm;
    } else {
        $robotNameAuto = strtoupper(generateRobotName(2, 4, '-'));
        return $robotNameAuto;
    }
}

// INPUT RANGE RANDOM

$range = rand(0,100);

//* Bonus 01




