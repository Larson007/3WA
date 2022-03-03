<?php

//* Nom du robot
function generateRobotName(int $nbOfLetters, int $nbOfNumbers, string $separator = '-'): string
{
    $result = '';
    
    $letters = range('a', 'z');
    $numbers = range(0, 9);
    
    for ($i = 0; $i < $nbOfLetters; ++$i) {
        $key = array_rand($letters);
        $result .= $letters[$key];
    }
    
    $result .= $separator;
    
    for ($i = 0; $i < $nbOfNumbers; ++$i) {
        $key = array_rand($numbers);
        $result .= $numbers[$key];
    }
    
    return $result;
}
$robotName = strtoupper(generateRobotName(2, 4, '-'));

//* Bonus 01 : Date
date_default_timezone_set('Europe/Paris');
function getCurrentDate(): string {
    return date("d m Y");
}

function getCurrentHour(): string {
    return date("H:i:s");
}

$date = getCurrentDate();
$hour = getCurrentHour();

//* Bonus 02 : Even/Odd
function randomEvenOdd(): string {
    $random = rand(0,10);
    if ($random % 2) {
        return "J'ai choisi le nombre " . $random. ". C'est un nombre impair.";
    } else
    return "J'ai choisi le nombre " . $random. ". C'est un nombre pair.";;
}

$evenOdd = randomEvenOdd();

//* Bonus 03 - Reverse Name
$reverseName = strrev($robotName);

//* Bonus 04 - Coffee or death
function coffeeOrDeath():string {
    $chance = rand(1,3);
    var_dump($chance);
    if ($chance === 1) {
        $death = "Extermination ! Extermination !";
        return $death;
    } else  {
        $coffee = "Vous voulez un café ?";
        return $coffee;
    }
}
$coffeeDeath = coffeeOrDeath();

//* Bonus 05/06 - Algorithme de recherche dichotomique

// $guess = rand(0,1000);

// function dichotomie() {
//     if (1000< 1) {
//         return -1;
//     }
// }


require 'homepage.phtml';