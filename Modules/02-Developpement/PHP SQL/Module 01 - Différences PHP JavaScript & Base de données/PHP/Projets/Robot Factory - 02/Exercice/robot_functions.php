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
function getCurrentDate(): string
{
    return date("d m Y");
}

function getCurrentHour(): string
{
    return date("H:i:s");
}

$date = getCurrentDate();
$hour = getCurrentHour();

//* Bonus 02 : Even/Odd
function randomEvenOdd(): string
{
    $random = rand(0, 10);
    if ($random % 2) {
        return "J'ai choisi le nombre " . $random . ". C'est un nombre impair.";
    } else
        return "J'ai choisi le nombre " . $random . ". C'est un nombre pair.";;
}

$evenOdd = randomEvenOdd();

//* Bonus 03 - Reverse Name
$reverseName = strrev($robotName);

//* Bonus 04 - Coffee or death
function isRobotEvil(float $evilRate): bool
{

    if (isset($_GET['kill'])) {
        $randomNumber = $_GET['kill'];
        //var_dump("GET: ". $randomNumber);
        return $randomNumber < (100 * $evilRate);
    } else {
        $randomNumber = mt_rand(0, 100);
        //var_dump("Random :" . $randomNumber);
        return $randomNumber < (100 * $evilRate);
    }
}

if (isRobotEvil(0.33334)) {
    //* Bonus 2
    $robotMoralDecision = '<span style="color: red;">Extermination ! Extermination !</span>';
    $robotImg = "<img src='images/robot2.png' alt=''>";
} else {
    $robotMoralDecision = 'Vous voulez un café ?';
    $robotImg = "<img src='images/robot.png' alt=''>";
}
//var_dump($robotMoralDecision);