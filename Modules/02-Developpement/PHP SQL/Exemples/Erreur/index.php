<?php

$num1= 10;
$num2 = 0;

// premiere option moin sexy 
// if($num2 !== 0) {
//     $result = $num1/$num2;
    
// } else {
//     echo 'calcule impossible <br>';
// }


//boss option
try{
    $result = $num1/$num2;
} catch (DivisionByZeroError $e){
  // pourquoi pas enregistrer dans un fichier de log les erreurs ou en base de données
  // echo $e->getMessage().'<br>';
  die('vous ne pouvez pas diviser par zero !'); // stop le script et affiche le message
  // on peut executer des traitement différents en fonction du type d'erreur capturé 
} catch( TypeError $e) {
  echo 'veuiller saisir un nombre !<br>';
}

echo 'michou';
