<?php

/**
 * Voici une correction possible pour l'exercice Robot Factory.
 *
 * Ce n'est bien sûr pas grave si votre solution ne ressemble pas à la nôtre.
 * L'essentiel est d'atteindre le résultat attendu et d'être capable de
 * générer un nom de robot, par exemple « NQ-2327 ». Les corrections vont
 * parfois un peu plus loin que les consignes à des fins pédagogiques.
 *
 * Nous proposons une solution très flexible. Notre fonction de génération
 * de nom comporte en effet quelques paramètres permettant de régler le format
 * de retour. Nos robots pourraient ici avoir des noms tels que « DJHF-9 »
 * ou encore « ZY022 ».
 */

/**
 * This function will generate a robot name as a string, based upon given
 * parameters.
 *
 * Examples:
 *
 *     generateRandomRobotName(4, 2, '_')
 *     => "ZRKL_55"
 *
 *     generateRandomRobotName(2, 2, null)
 *     => "YM70"
 *
 * @param int $nbOfLetters
 * @param int $nbOfNumbers
 * @param string|null $separator
 * @return string
 */
function generateRandomRobotName(int $nbOfLetters, int $nbOfNumbers, ?string $separator): string
{
    // Here we prevent arguments from being 0 or less. Actually we should
    // even raise an error in these cases, but since we didn't learn yet
    // how to handle errors (Exceptions) in PHP, let's stick with this
    // simple yet efficient workaround.
    if ($nbOfLetters < 1) {
        $nbOfLetters = 1;
    }
    if ($nbOfNumbers < 1) {
        $nbOfNumbers = 1;
    }

    // We declare all possible characters as arrays.
    $letters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    $numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    // We initiate the robot's name as an empty string.
    // This variable will be modified throughout the algorithm.
    $robotName = '';

    // Here we generate as many letters as specified by the `$nbOfLetters`
    // argument. Note the usage of `array_rand`, which returns a random
    // index from the given array.
    for ($i = 0; $i < $nbOfLetters; ++$i) {
        $randomKey = array_rand($letters);
        $robotName .= $letters[$randomKey];
    }

    // Here we append to the letters the given `$separator`, for example `-`
    // in the exercice instructions.
    // Just for fun... we made possible to pass `null` to this argument.
    // In this case we don't append anything and the final name would look
    // like "NC4423". Note that an empty string would lead to the same result.
    if ($separator !== null) {
        $robotName .= $separator;
    }

    // Same logic as with the letters.
    for ($i = 0; $i < $nbOfNumbers; ++$i) {
        $randomKey = array_rand($numbers);
        $robotName .= $numbers[$randomKey];
    }

    // Our robot's name string is ready. We can return it.
    return $robotName;
}

// We store a random robot name in a variable. This variable will be
// accessible later in the HTML.
$robotName = generateRandomRobotName(2, 4, '-');

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
</body>
</html>
