<?php

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
//var_dump($robotName);

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1><?= 'Salut, humain. Je suis ' . $robotName ?></h1>
</body>
</html>
