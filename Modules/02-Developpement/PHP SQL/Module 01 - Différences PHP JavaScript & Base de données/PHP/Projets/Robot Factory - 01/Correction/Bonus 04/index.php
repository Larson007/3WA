<?php

/**
 * Robot Factory – Bonus 4
 *
 * Bonus normalement très simple si vous avez trouvé la fonction PHP `strrev`.
 * Parfois, c'est tout bête. Héhé !
 */

function generateRandomRobotName(int $nbOfLetters, int $nbOfNumbers, ?string $separator): string
{
    if ($nbOfLetters < 1) {
        $nbOfLetters = 1;
    }
    if ($nbOfNumbers < 1) {
        $nbOfNumbers = 1;
    }

    $letters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    $numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    $robotName = '';

    for ($i = 0; $i < $nbOfLetters; ++$i) {
        $randomKey = array_rand($letters);
        $robotName .= $letters[$randomKey];
    }

    if ($separator !== null) {
        $robotName .= $separator;
    }

    for ($i = 0; $i < $nbOfNumbers; ++$i) {
        $randomKey = array_rand($numbers);
        $robotName .= $numbers[$randomKey];
    }

    return $robotName;
}

function generateRandomNumber(int $min, int $max): int
{
    return mt_rand($min, $max);
}

function isNumberEven(int $x): bool
{
    return ($x % 2) === 0;
}

function reverseString(string $str): string
{
    return strrev($str);
}

/**
 * This function returns true if the robot is evil, or false if it's good.
 *
 * The argument `$evilRate` is given as a float between 0 and 1. It represents
 * the chances for the robot to be evil.
 *
 * With an evil rate of 0, the robot will never be evil.
 * With an evil rate of 1, the robot will always be evil.
 * With an evil rate of 0.25, the robot will be evil one out of every four
 * times.
 *
 * @param float $evilRate
 * @return bool
 */
function isRobotEvil(float $evilRate): bool
{
    $randomNumber = mt_rand(0, 100);

    return $randomNumber < (100 * $evilRate);
}

$robotName = generateRandomRobotName(2, 4, '-');
$reversedName = reverseString($robotName);

$date = date('d m Y');
$hour = date('H:i:s');

$randomNumber = generateRandomNumber(1, 10);
if (isNumberEven($randomNumber)) {
    $parityMsg = 'pair';
} else {
    $parityMsg = 'impair';
}

if (isRobotEvil(0.33334)) {
    $robotMoralDecision = 'Extermination ! Extermination !';
} else {
    $robotMoralDecision = 'Vous voulez un café ?';
}

?>

<!doctype html>
<html lang="fr-FR">
<head>
    <meta charset="UTF-8">
    <title>Robot Factory</title>
</head>
<body>
<h1>Robot Factory</h1>

<p>Salut, humain. Je suis <?= $robotName ?>.</p>

<p>Nous sommes le <?= $date ?>, il est <?= $hour ?>.</p>

<p>J'ai choisi le nombre <?= $randomNumber ?>. C'est un nombre <?= $parityMsg ?>.</p>

<p>Mon nom à l'envers s'écrit <?= $reversedName ?>. Ah. Ah. Ah.</p>

<p><?= $robotMoralDecision ?></p>
</body>
</html>
