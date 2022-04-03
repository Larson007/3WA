<?php

$age = 32;

switch($age) {
    case ($age < 18):
        echo 'vous êtes mineur <br>';
        break;
    case ($age >= 18):
        echo 'vous êtes majeur <br>';
        break;
    default:
        echo 'votre age n\'est pas définit <br>';
        break;
}

$result =
match(true){
    ($age < 18) => 'vous êtes mineur <br>',
    ($age >= 18) => 'vous êtes majeur <br>',
    default => 'votre age n\'est pas définit <br>',
};

echo '<br>';

echo $result;

echo '<br>';

$number = 25;

switch($number) {
    case '25':
        echo 'je valide un type string <br>';
        break;
    case 25:
        echo 'je valide un nombre <br>';
        break;
    default:
        echo 'Erreur <br>';
        break;
}

$test =
match($number){
    '25' => 'je valide un type string <br>',
    25 => 'je valide un nombre <br>',
    default => 'Erreur',
};
echo '<br>';

echo $test;