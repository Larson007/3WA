<?php

/**
 * Robot Factory – Bonus 1
 *
 * Ce bonus ne devrait pas vous avoir donné trop de fil à retordre, nous
 * avions déjà croisé la fonction `date` dans les cours. Le format de notre
 * date s'exprime sous la forme d'une string constituée de constantes,
 * telles que « d » pour le jour du mois en deux chiffres, « s » pour les
 * secondes, etc.
 *
 * La documentation complète est ici :
 * https://www.php.net/manual/fr/datetime.format.php
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

$robotName = generateRandomRobotName(2, 4, '-');

$date = date('d m Y');
$hour = date('H:i:s');

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
</body>
</html>
