<?php

/**
 * Robot Factory – Bonus 2
 *
 * Cette nouvelle version amène les fonctions `generateRandomNumber` et
 * `isNumberEven`.
 *
 * Pour générer un nombre aléatoire compris entre un minimum et un maximum
 * donnés, vous aurez découvert la fonction PHP `mt_rand`.
 * Notez qu'il existe aussi une fonction `rand`. Celle-ci est plus ancienne.
 * Pour des raisons techniques que vos formateurs pourront détailler s'ils
 * l'estiment utile, nous privilégierons l'emploi de `mt_rand`.
 *
 * Pour savoir si un nombre x est pair ou impair, la solution la plus courante
 * en PHP est une simple division euclidienne. Si, si, vous connaissez :
 * 9 divisé par 2 => 4, reste 1.
 * 8 divisé par 2 => 4, reste 0.
 * L'opérateur arithmétique `%`, autrement dit le « modulo », permet
 * d'effectuer une division euclidienne et de retourner le reste. Ainsi,
 * le calcul `4 % 2` renvoie 0.
 * Pour savoir si un nombre est pair, il suffit donc de le diviser par 2. Si
 * le reste est égal à 0, alors ce nombre était un multiple de 2, et était
 * donc pair. Sinon, c'est qu'il était impair.
 * C'est exactement ce que fait notre fonction `isNumberEven` : elle renvoie
 * true si x modulo 2 est égal à 0, donc si x est pair, et renvoie false
 * dans le cas contraire.
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

/**
 * Generates a random number between given minimum and maximum.
 *
 * @param int $min
 * @param int $max
 * @return int
 */
function generateRandomNumber(int $min, int $max): int
{
    return mt_rand($min, $max);
}

/**
 * Returns true if the given number is even.
 * Returns false if the given number is odd.
 *
 * Examples:
 *
 *     isNumberEven(2)
 *     => true
 *
 *     isNumberEven(15)
 *     => false
 *
 * @param int $x
 * @return bool
 */
function isNumberEven(int $x): bool
{
    return ($x % 2) === 0;
}

$robotName = generateRandomRobotName(2, 4, '-');

$date = date('d m Y');
$hour = date('H:i:s');

$randomNumber = generateRandomNumber(1, 10);
if (isNumberEven($randomNumber)) {
    $parityMsg = 'pair';
} else {
    $parityMsg = 'impair';
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
</body>
</html>
