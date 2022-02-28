# PHP

## SOMMAIRES

_(Appuyer sur l'icone **&#x21EA;** pour revenir au sommaire)_

[DOCS](##DOCS-[&#x21EA;])

[Installation](##INSTALLATION-[&#x21EA;])

[Syntaxe](#Syntaxe-[&#x21EA;])

* [Commentaires](##Commentaires)
* [Balise PHP](##Balise-PHP)

[Les Variables](#Les-Variables-[&#x21EA;])

* [Les Types de variables](##Types-de-variables)
* [Concaténation](##Concaténation)

[Les Opérateurs](#Les-opérateurs-[&#x21EA;])

* [Opérateurs  ***`+,-,*,/`***](##Opérateurs--***`+,-,*,/`***)
* [Opérateurs  ***`+=, -=, *=, /=`***](##Opérateurs--***`+=,-=,*=,/=`***)
* [Opérateurs  ***`Incrémenation/Décrémentation`***](##Opérateurs-***`Incrémenation/Décrémentation`***)
* [Opérateurs de conditionnements](##Opérateurs-de-conditionnements)

[Les Tableaux](#Les-Tableaux-[&#x21EA;])

[Les Conditions](#Les-Conditions-[&#x21EA;])

* [Conditions `IF`](##Conditions-`IF`)
* [Conditions `Multiples`](##Conditions-`Multiples`)
* [Conditions `Ternaires`](##Conditions-`Ternaires`)
* [Conditions `ELSE`](##Conditions-`ELSE`)
* [Conditions `ELSEIF`](##Conditions-`ELSEIF`)
* [Conditions `SWITCH`](##Conditions-`SWITCH`)
* [Conditions Simples](##Conditions-Simples)

[Les Boucles](#Les-Boucles-[&#x21EA;])

* [Boucles `WHILE`](##Boucles-`WHILE`)
* [Boucles `FOR`](##Boucles-`FOR`)
  * [Boucles `FOR` ET TABLEAUX](###Boucles-`FOR`-ET-TABLEAUX)
* [Boucles `FOREACH`](##Boucles-`FOREACH`)
* [Boucles `DO WHILE`](##Boucles-`DO-WHILE`)
* [Boucles Imbriquées](##Boucles-Imbriquées)

[Les Fonctions](#Les-Fonctions-[&#x21EA;])

* [Fonction : Structure](##Fonction-:-Structure)
* [Fonction : `Return`](##Fonction-:-`Return`)

[Les Formulaires](#Les-Formulaires-[&#x21EA;])

* [Envoyer et récupérer des données](##Envoyer-et-récupérer-des-données)
* [Protection des données](##Protection-des-données)
* [Envoi de fichiers](##Envoi-de-fichiers)

[MySQL](#MySQL-[&#x21EA;])

[RECEPTION DE DONNEES VIA FORMULAIRE](#RECEPTION-DE-DONNEES-VIA-FORMULAIRE)

* [LA METHODE `POST`](##LA-METHODE-`POST`)
* [LA METHODE `GET`](##LA-METHODE-`GET`)

[LES COOKIES ET SESSION](#LES-COOKIES-ET-SESSIONS-[&#x21EA;])

* [LES `COOKIES`](##LES-`COOKIES`)
* [LES `SESSIONS`](##LES-`SESSIONS`)

[NAVIGATION URL](#NAVIGATION-URL-[&#x21EA;])

[POO](#POO-[&#x21EA;])

* [CLASS ET ATTRIBUES](##CLASS-ET-ATTRIBUES)
* [METHODES](##METHODES)
* [CONSTRUCTEUR](##CONSTRUCTEUR)
* [OBJET PERSONNALISER](##OBJET-PERSONNALISER)

----
----
&nbsp;

## DOCS [&#x21EA;](#sommaires)

> https://www.php.net/manual/fr/

&nbsp;

----
----

&nbsp;

## INSTALLATION [&#x21EA;](#sommaires)

&nbsp;

### INSTALLATION SERVEUR LOCAL

POUR WINDOWS : Télécharger la dernière version de WAMP

> https://sourceforge.net/projects/wampserver/

### INSTALLATION PHP

Télécharger la dernière version de PHP

> https://windows.php.net/download/

&nbsp;

Par la sute, il suffit d'utiliser un IDE adapter qui va intégrer PHP

* PHPSTORM
* VScode
* ...

&nbsp;

`Sinon`, pour faire fonctionner PHP depuis la ligne de commande peut être effectué sans aucune modification de Windows.

````bash
C:\PHP5\php.exe -f "C:\PHP Scripts\script.php" -- -arg1 -arg2 -arg3
````

Associer l'extension .PHP avec un type de fichier. Ceci peut être fait en exécutant la commande suivante :

````bash
assoc .php=phpfile
````

&nbsp;

Extension fichier :

````bash
.php
````

&nbsp;

----
----

&nbsp;

# Syntaxe [&#x21EA;](#sommaires)

&nbsp;

## Commentaires

SingleLine

````php
//
````

MultiLine

````php
/**/
````

&nbsp;

## Balise PHP

````php
<?php // OUVERTURE DU PHP

echo "Hello World" // echo POUR AFFICHER LE CONTENU DANS LE NAVIGATEUR

?> //FERMETURE DU PHP
````

&nbsp;

----
----
&nbsp;

# Les Variables [&#x21EA;](#sommaires)

&nbsp;

## Types de variables

````php
<?php
    // VARIABLES

    $nom = "Mohamed"; // STRING
    $age = 33; // INT
    $taille = 1.7; // FLOAT
    $sexeMasculin = true; // BOOLEAN

    echo $age;
?>
````

&nbsp;

## Concaténation

````php
<?php
    // CONCATENATION

    $direBonjour ="Hello";
    $destination = "World";

    // ON METS UN . ENTRE 2 VARIABLES POUR LES ASSOCIERS
    echo $direBonjour .' '. $destination . '! Comment allez vous ?';
?>
````

&nbsp;

----
----
&nbsp;

# Les opérateurs [&#x21EA;](#sommaires)

## Opérateurs  ***`+,-,*,/`***

````php
<?php
    /* OPERATEURS
        MULTIPLIER => *
        ADDITIONER => +
        SOUSTRAIRE => -
        DIVISER => /
    */

    //VARIABLES
    $permierNombre = 5;
    $deuxiemeNombre = 25;

    // ON ADDITIONNE LES 2 VARIABLES DIRECTEMENT DANS LE echo
    echo $permierNombre + $deuxiemeNombre;

    echo "<br/>"; // Saut à la ligne pour lecture navigateur

    //VARIABLE
    $operationCalcul = ((5*5)/5)+200;

    // ON AFFICHE DIRECTEMENT LE RESULTAT
    echo $operationCalcul;
?>
````

## Opérateurs  ***`+=,-=,*=,/=`***

````php
<?php
    /* OPERTATEURS =
        MULTIPLIER => *=
        ADDITIONER => +=
        SOUSTRAIRE => -=
        DIVISER => /=
    */

    //VARIABLES
    $troisiemeNombre = 10;
    $troisiemeNombre /=2;

    // ICI ON DIVISE DIRECTEMENT LA VALEUR DE 10 PAR 2 SOIT 5
    echo $troisiemeNombre;
?>
````

## Opérateurs ***`Incrémenation/Décrémentation`***

````php
<?php
    /* OPERTATEURS ++ --
        INCREMENTATION => ++
        DECREMENTATION => --
    */

    //VARIABLES
    $quatriemeNombre = 10;
    $quatriemeNombre++;

    // ICI ON INCREMENTE DE +1 LA VALEUR INITIAL DE 10
    echo $quatriemeNombre;
?>
````

## Opérateurs de conditionnements

 Voire leurs usages en pratique :
 > lien : [Conditions `if`](##Conditions-`if`)

````php
<?php
    /* OPERATEUR DE CONDITIONNEMENT

        ==  EST EGAL
        >   EST SUPERIEUR
        <   EST INFERIEUR
        >=  EST SUPERIEUR ET EGAL
        <=  EST INFERIEUR ET EGAL
        !=  EST DIFFERENT

    */
?>
````

&nbsp;

----
----
&nbsp;

# Les Tableaux [&#x21EA;](#sommaires)

````php
<?php
    // TABLEAUX

    // VARIABLE TABLEAU
    $identitePersonneA = array(
        'id'        =>  01,
        'prenom'    =>  'Mohamed',
        'nom'       =>  'Ben Allal',
        'age'       =>  33
    );

    echo "Bonjour, je m'appel " . $identitePersonneA['prenom'] . ' ' . $identitePersonneA['nom'] .' !';

/*----------------------------------------------------------------------------------------------------*/

    // VARIABLE TABLEAU AVEC INDEX
    $identitePersonneB = array(01, 'Mohamed', 'Ben Allal', 20);

    // LES INDEX DES TABLEAUX COMMENCE PAR 0
    echo "Bonjour, je m'appel " . $identitePersonneB[1] . ' ' . $identitePersonneB[2] .' !';

?>
````

----
----
&nbsp;

# Les Conditions [&#x21EA;](#sommaires)

## Conditions `IF`

 Voire les différents opérateurs de conditionnements :
 > lien : [Opérateurs de conditionnements](##Opérateurs-de-conditionnements)

````php
<?php
    // CONDITION if

    // VARIABLES
    $age = 18;

    // CONDITION
    if ($age > 18) {

        // RESULTAT AFFICHER SI $age EST > OU = à 18 ans
        echo "Vous êtes majeur !";
    }

    if ($age < 18){

        // Resultat afficher si $age est < à 18 ans
        echo "Vous êtes mineur !";
    }

    // OPERATEUR DE CONDITIONNEMENT ==
    if($age == 18){
        echo "Vous êtes maintenant majeur !";
    }
?>
````

&nbsp;

## Conditions `Multiples`

AND et OR

````php
<?php
    /* CONDITIONS MULTIPLES
        ET = AND ou &&
        OU = || ou OR
    */

    // VARIABLES
    $pseudo = 'Tintin';
    $mdp = 'Lune';


    // CONDITION

    // 'AND' PEUT AUSSI ETRE ECRIT '&&'
    if($pseudo == "Tintin" AND $mdp == "Lune"){

        // RESULTAT AFFICHER SI $pseudo == 'Tintin' ET $mdp == 'Lune'
        echo "Mot de passe valide.";
    }
?>
````

&nbsp;

## Conditions `Ternaires`

`()` -> `?` -> `:`

````php
<?php
    /* CONDITIONS TERNAIRES

    SYNTAXE

        APRES AVOIR DEFINIT UNE CONDITION :

        '?' CE TRADUIT PAR 'ALORS'
        ':' CE TRADUIT PAR 'SINON'

        DONC SI LA CONDITION EST 'true' on affiche 'Vrai' SINON ON AFFICHE 'Faux'
    */

    // VARIABLE
    $number = 10;


    // CONDITION

    // CE TRADUIT : SI ($number MODULO 10 == 0), '?=ALORS', 'echo=AFFICHE', Vrai ':=SINON', AFFICHE Faux
    echo ($number % 10 == 0) ? 'Vrai' : 'Faux';
?>
````

&nbsp;

## Conditions `ELSE`

````php
<?php
    /* CONDITION ELSE

        ON METTRE UNE CONDITION 'ELSE' POUR AFFICHER UN RESULTAT
        SI LA CONDITION DEFINIT DANS LE 'IF' EST FAUSSE

    */

    // VARIABLES
    $pseudo = 'Tintin';
    $mdp = 'Lune';

    // CONDITION


    if($pseudo == "Tintin" AND $mdp == "Lune"){

        // RESULTAT AFFICHER SI $pseudo == 'Tintin' ET $mdp == 'Lune'
        echo "Mot de passe valide.";
    }

    else {
        echo "Mot de passe invalide.";
    }
?>
````

&nbsp;

## Conditions `ELSEIF`

````php
<?php
    /* CONDITION elseif

    LA CODE CONTINURA A S EXECUTER TANT QUE LES CONDITIONS SONT FAUSSES

    */


    // VARIABLES
    $age = 18;


    // CONDITION
    if ($age > 18) {

        // SI LA CONDITION ($age > 18) EST VRAI ALORS J AFFICHE LE RESULTAT SUIVANT SINON JE PASSE AUX AUTRES CONDITIONS
        echo "Vous êtes majeur !";
    }

    elseif ($age == 18) {

        // SI LA CONDITION PRECEDENT ($age > 18) EST FAUSSE ET QUE LA CONDITION ($age == 18) ALORS J AFFICHE LE RESULTAT SUIVANT
        echo "Vous êtes enfin devenu majeur !";
    }

    else {
        // SI AUCUNE DES CONDITIONS PRECEDENTES SONT TOUTS FAUSSE ALORS J AFFICHE LE RESULTAT SUIVANT
        echo "Vous êtes mineur !";
    }
?>
````

&nbsp;

## Conditions `SWITCH`

Idéal de tester des égalitées

````php
<?php
    // CONDITION switch


    //VARIABLE
    $note = 9;


    // CONDITION
    switch ($note)
    {
        // DANS LE CAS OU LA NOTE EST DE 0 OU INFERIEUR A 9 :
        case 0<=9:

            // ALORS AFFICHE LE MESSAGE DU ECHO SUIVANT
            echo "Vous n'avez pas la moyenne";

        // ET SI LA CONDITION A ETE REMPLIE ALORS SORT DU SWITCH SINON PASSE AUX AUTRES CASE
        break;

        case 10:
            echo "Vous avez la moyenne";
        break;

        case 11<=20:
            echo "Vous avez au dessus de la moyennes";
        break;

        // SI AUCUN DES CASES PRECEDENTS NE REMPLIE LA CONDITION ALORS EXECUTE LE CODE 'DEFAULT'
        default:
            echo "Vous n'avez pas de note";
    }
?>
````

&nbsp;

## Conditions Simples

Il s'agit d'allèger le code en ce passant des accolades { } non essentiels

````php
<?php
// CONDITIONS SIMPLES

    //VARIABLE
    $number = 10;


    // CONDITION DE BASE
    if ($number == 10) {
        echo 'true';
    }
    else {
        echo 'false';
    }


    // EN SYNTAXE SIMPLIFIEE, ON PEUT CE PASSE DES { } APRES AVOIR DEFINIT NOTRE ( )
    if ($number == 10)
        echo 'true';

    else
        echo 'false';
?>
````

&nbsp;

----
----
&nbsp;

# Les Boucles [&#x21EA;](#sommaires)

## Boucles `WHILE`

````php
<?php
// BOUCLES WHILE

    //VARIABLE
    $ligne = 0;


    // BOUCLE ET CONDITION
    while($ligne < 10) {
        echo "Le numéro de la ligne est : " . ($ligne+1) . "<br/>";
        $ligne++;
    }


    /* TRADUCTION
    while ($ligne < 10) {                       =>  TANT QUE LIGNE EST < 10
        echo "Voici le numéro de la ligne : "   =>  AFFICHE LE MESSAGE SUIVANT
        . ($ligne+1) .                          =>  QUI COMMENCE NON PLUS A 0 MAIS A 1  ->   NE PAS OUBLIE LES () CAR ON MODIFIE LA VARIABLE $ligne
        "<br/>";
        $ligne++;                               =>  A CHAQUE FOIS QUE TU AFFICHERA LE MESSAGE,
                                                    INCREMENTE DE +1 LA VARIABLE $ligne JUSQU A 10
                                                    COMME INDIQUE DANS LA CONDITION ($ligne < 10)
    }
    */
?>
````

&nbsp;

## Boucles `FOR`

````php
<?php
// BOUCLES FOR

    /* CONSCTRUCTION DU FOR EN 3 ETAPES DANS LA CONDITION

        for ( INITIALISATION DE $i ; LIMITE DE $i ; MODIFICATION DU $i ) {
            // LE TRAITEMENT DU FOR
        }

    */

    // BOUCLE ET CONDITION

    for ($ligne = 0; $ligne < 10; $ligne++ ) {
        echo "Le numéro de la ligne est : " . $ligne . "<br/>";
    }
?>
````

&nbsp;

### Boucles `FOR` et tableaux

On peut utiliser la boucle `FOR` pour afficher le contenu d'un tableau.
Cependant on va prioriser [la boucle `FOREACH`](##Boucles-`FOREACH`)

````php
<?php
    // TABLEAUX : BOUCLES FOR

    // TABLEAU

        $users = array('Mohamed', 'Abda', 'Yannis', 'Antoine', 'Thomas');


    // AFFICHAGE DU CONTENU DU TABLEAU $users AVE LA BOUCLE FOR :

        for  ($i=0; $i <5; $i++){
            echo $users[$i]."<br/>";
        }
?>

````

&nbsp;

## Boucles `FOREACH`

Idéal pour boucler dans des tableaux

````php
<?php
    // TABLEAUX : BOUCLES FOREACH
        /*
            Notre tableau $users contient des 5 éléments, via le foreach on va placer
            chaqun des ces éléments dans une autre variable $user
        */


    // TABLEAU
        $users = array('Mohamed', 'Abda', 'Yannis', 'Antoine', 'Thomas');


    // AFFICHAGE DU CONTENU DU TABLEAU $users AVE LA BOUCLE FOREACH :
        foreach ($users as $user) {
            echo $user ."<br/>";
    }
?>
````

&nbsp;

## Boucles `DO WHILE`

Permet de continuer à boucler même en cas d'erreur

````php
<?php
    // BOUCLES DO WHILE
        /*
            VIA LE 'DO', ON DEMANDE AU CODE DE CONTINUER DE S EXECUTER
            TANT QUE LA CONDITION DO 'WHILE' N A PAS ETE RESPECTER.
            LE CAS ECHANEANT ON SORT DE LA BOUCLE
        */

    //VARIABLE
    $x = 15;


    // BOUCLE
        do {
            echo "Le nombre est égal : " . $x . "<br/>";
            $x++;
        } while ($x < 10);

        echo "Le nombre est égal : " . $x . "<br/>";
?>
````

&nbsp;

## Boucles Imbriquées

````php
<?php
    // BOUCLES IMBRIQUEES
        /*
            ON PEUT BOUCLER DANS UNE BOUCLE!
            DANS L EXEMPLE SUIVANT, LA VARIABLE $i BOUCLE DE 0 A 5 IDEM POUR $j
            MAIS $i BOUCLE AVANT $j DONC SI ON LES MULTIPLIES $j VA CE MULTIPLIER 5 FOIS AVEC 
            CHAQUE VALEUR DE $i SOIT DE 0 A 5
        */


    // BOUCLES
    for ($i = 0; $i <= 5; $i++)
    {
        for ($j = 0; $j <= 5; $j++){
            echo $i * $j . ", " ;
        }
        echo "<br/>";
    }
?>
````

EXEMPLE TABLEAUX DE MULTIPLICITE :

````php
<?php
// TABLEAUX DE MULTIPLICITE

// STRCTURE DU TABLEAU TOP
    echo '<table border style="border-collapse: collapse;">
            <tr>
                <th></th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
            </tr>';

// CONTENU DU TABLEAU
    for($i = 1; $i <= 10; $i++)
    {
        echo '<tr><th>'.$i.'</th>';	// STRCTURE DU TABLEAU LEFT

            for($j = 1; $j <= 10; $j++)
            {
                echo '<td>'.$i*$j.'</td>';
            }

        echo '</tr>';
    }
?>
````

&nbsp;

----
----
&nbsp;

# Les Fonctions [&#x21EA;](#sommaires)

## Fonction : Structure

````php
<?php
    // LES FONCTIONS

    // STRUCTURE
        /*
            function    :   ON INDIQUE QUE CE QUI SUIT SERA UNE FONCTION
            Hello       :   LE NOM DE LA FONCTION
            ()          :   PARAMETTRE DE LA FONCTION, CELLE CI PEUT RESTER VIDE
                            MAIS SI UN OU PLUISEUR PARAMETTRE SONT INDIQUER,
                            ON CE DOIT ALORS DE LES INDIQUER LORS DE L APPEL DE LA FONCTION
            {}          :   CE QUE LA FONCTION DOIT EXECUTER
        */


    // FONCTION

        function Hello ($prenom, $nom) {
            echo 'Hey ' . $prenom . ' ' . $nom;
        }


    // APPEL DE LA FONCTION
        Hello("Mohamed", "Ben Allal");
?>
````

&nbsp;

## Fonction : `RETURN`

````php
<?php
    // FONCTION :  RETURN

        // ON 'RETRUN' LE RESULTAT DE LA FONCTION DANS UNE VARIABLE

    // FONCTION

        function Formule ($x,$y) {
            $temp = $x * $y;
            $temp /= 5;
            $temp = $x + $temp - ($x + $y);

            return $temp;
        }

    // APPEL DE LA FONCTION
        $resultat = Formule(52, 74);

    // AFFICHAGE DU RESULAT DE LA FONCTION
        echo $resultat;
?>
````

&nbsp;

----
----
&nbsp;

# Les Formulaires [&#x21EA;](#sommaires)

## Envoyer et récupérer des données

````php
<?php
// FORMULAIRE
    /*
        DANS L EXEMPLE SUIVANT NOUS VERIFIONS VIA LA CONDITION 'IF' SI LE TABLEAU 'POST' DU FORMULAIRE
        POSSEDE BIEN UNE DONNER 'prenom' AINSI QUE 'nom' ET DE LA AFFICHER LE CAS ECHEANT
    */

// LA REQUETE PHP
    if(isset($_POST['prenom']) AND isset($_POST['nom'])) {

        echo 'Bonjour ' . $_POST['prenom'] . ' ' . $_POST['nom'] .' !';
    }
?>

<!--LE FORMULAIRE EN HTML-->
    <form action="index.php" method="post">
        <p>
            <table>
                <tr>
                    <td>Prénom</td>
                    <td><input type="text" name="prenom"></td>
                </tr>
                <tr>
                    <td>Nom</td>
                    <td><input type="text" name="nom"></td>
                </tr>
            </table>
            <button type="submit">Envoyer</button>
        </p>
    </form>
````

&nbsp;

## Protection des données

Un formulaire éxécuter tout ce qui est envoyer dans celui-ci, il s'agit de faille XSS

````php
<?php
// FORMULAIRE
    /*
        POUR CE PROTEGER DES INJECTION XSS, ON PEUT UTILISER EN PHP LE 'htmlspecialchars'
        ET PLACER LE RESULTAT DE NOS REQUETTES DANS DES VARIABLES
    */

// LA REQUETE PHP
    if(isset($_POST['prenom']) AND isset($_POST['nom'])) {


        $prenom = htmlspecialchars($_POST['prenom']) ;
        $nom = htmlspecialchars($_POST['nom']);

        echo 'Bonjour ' . $prenom . ' ' . $nom .' !';
    }
?>

<!--LE FORMULAIRE EN HTML-->
    <form action="index.php" method="post">
        <p>
            <table>
                <tr>
                    <td>Prénom</td>
                    <td><input type="text" name="prenom"></td>
                </tr>
                <tr>
                    <td>Nom</td>
                    <td><input type="text" name="nom"></td>
                </tr>
            </table>
            <button type="submit">Envoyer</button>
        </p>
    </form>
````

&nbsp;

## Envoi de fichiers

PHP ne permet pas l'envoi de fichier > 8Mo

````php
<?php
// FORMULAIRE :  ENVOI DE FICHIER
    /*
        $_FILES['image']['name']; // NOM
        $_FILES['image']['type']; // TYPE
        $_FILES['image']['size']; // TAILLE
        $_FILES['image']['tmp_name']; // EMPLACEMENT TEMPORAIRE DU FICHIER
        $_FILES['image']['error']; // MSG EN CAS D ERREUR

        1 Mo = 1 000 000 Octet

        pathinfo() => GENERE UN TABLEAU AVEC TOUTE LES DONNER DU FICHIER

    */

// LA REQUETE PHP DE RECEPTION DE FICHIER

if ( isset ( $_FILES ['image'] ) AND $_FILES ['image'] ['error'] == 0 ){        // ON VERIFIE SI L IMAGE EXISTE ET A BIEN ETE ENVOYE TEMPORAIREMENT SUR LE SERVEUR

    if($_FILES ['image'] ['size'] <= 3000000){                                  // ON VERIFIE QUE LA TAILLE DE L IMAGE NE DEPASSE PAS LES 3Mo

        $informationsImage = pathinfo ( $_FILES ['image'] ['name'] );

        $extensionImage = $informationsImage ['extension'];

        $extensionArray = array('png', 'gif', 'jpg', 'jpeg');                   // ON DEFINIT LES EXTENTIONS DE FICHIERS ACCEPTER

        if(in_array($extensionImage, $extensionArray)) {                        // LE TYPE DE L IMGA CORRESPOND A CE QUE L ON ATTEND

            move_uploaded_file ( $_FILES ['image'] ['tmp_name'], 'uploads/'     // DEPLACE LE FICHIER VERS LE DOSSIER DE DESTINATION
            . time() . basename ( $_FILES ['image'] ['name']));                 // MODIFIE SON NOM AVEC L HEURE 'time( )' ET ON GARDE SON NOM D ORIGINE 'basename( )'
            // . time() . rand ().'.'. $extensionImage );                           QUE L ON PEUT REMPLACER PAR 'rand ( )' SANBS OUBLIER L EXTENTION DU FICHIER
            echo 'Envoi bien effectuer !';

        }
    }
}


// STRUCTURE DU FORMULAIRE

    echo    '<form method="post" action="index.php" enctype="multipart/form-data">
                <div>
                    <h1>FORMULAIRE</h1>
                    <input type="file" name="image">
                    <br>
                    <button type="submit">ENVOYER</button>
                </div>
            </form>';
?>
````

&nbsp;

----
----

&nbsp;

# MySQL [&#x21EA;](#sommaires)

Voir le cour en suivant le lien suivant :

> &#x21E8; [MySQL.md](../MySQL/MySQL.md)

Ou dans le dossier :

> MySQL/MySQL.md

&nbsp;

----
----

&nbsp;

# RECEPTION DE DONNEES VIA FORMULAIRE  [&#x21EA;](#sommaires)

Template du formulaire HTML, connection BDD et requete affichage table users (A copier dans un fichier index.php dans localhost) :

````php
<?php
//  CONNEXION PDO

try {
    $bdd = new PDO('mysql:host=localhost;dbname=formation_users;port=3308;charset=utf8;', 'root', '');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}
//-------------------------------------------------------------------------------------------------//


// AJOUT D UN NOUVELLE UTILISATEUR

// COLLER LE CODE ICI !

};
//-------------------------------------------------------------------------------------------------//


// REQUETE SQL AFFICHAGE TABLE USERS

$requete = $bdd->prepare('SELECT  prenom, nom, serie_preferee FROM users');
$requete->execute();

echo '<table border>
            <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Série préférée</th>';
while ($data = $requete->fetch()) {
    echo '<tr>
        <td>' . $data['prenom'] . '</td>
        <td>' . $data['nom'] . '</td>
        <td>' . $data['serie_preferee'] . '</td>
        </tr>';
}
echo '</table>';
$requete->closeCursor();
?>

<!-------------------------------------------------------------------------------------------------->

<!--Template HTML formuaire-->

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    <h1>Ajouter un utilisateur</h1>
    <form action="index.php" method="get"> <!--Penser a modifier la method pour le GET-->
        <table>
            <tr>
                <td>Prénom</td>
                <td><input type="text" name="prenom"></td>
            </tr>
            <tr>
                <td>Nom</td>
                <td><input type="text" name="nom"></td>
            </tr>
            <tr>
                <td>Série Préférée</td>
                <td><input type="text" name="serie"></td>
            </tr>
        </table>
        <button type="submit">Ajouter</button>
    </form>
</body>
</html>

````

&nbsp;

## LA METHODE `POST`

````php
<?php
// AJOUT D UN NOUVELLE UTILISATEUR VIA METHODE 'POST'
<?php
    if (isset($_POST['prenom']) and isset($_POST['nom']) and isset($_POST['serie'])) {

        $prenom = $_POST['prenom'];
        $nom    = $_POST['nom'];
        $serie  = $_POST['serie'];

        $requete = $bdd->prepare('INSERT INTO users (prenom, nom, serie_preferee) VALUES (?, ?, ?)') or die(print_r($bdd->errorInfo()));
        $requete->execute(array($prenom, $nom, $serie));
        $requete->closeCursor();

        header('location: ./'); // Permet de ce rediriger vers index.php lors du rafraichisement de la page
    };
?>
````

&nbsp;

## LA METHODE `GET`

Identique à la `method POST`, sauf que les informations indiquer dnas le formllaire apparaitrons dans la bar d'adresse.

````php
// AJOUT D UN NOUVELLE UTILISATEUR
<?php
    if (isset($_GET['prenom']) and isset($_GET['nom']) and isset($_GET['serie'])) {

        $prenom = $_GET['prenom'];
        $nom    = $_GET['nom'];
        $serie  = $_GET['serie'];

        $requete = $bdd->prepare('INSERT INTO users (prenom, nom, serie_preferee) VALUES (?, ?, ?)') or die(print_r($bdd->errorInfo()));
        $requete->execute(array($prenom, $nom, $serie));
        $requete->closeCursor();

        header('location: ./'); // Permet de ce rediriger vers index.php lors du rafraichisement de la page
    };
?>
````

&nbsp;

# LES COOKIES ET SESSIONS  [&#x21EA;](#sommaires)

Afin de voire les cookies et session utilisé par le site il faut suivre les indications suivantes dans le navigateur :

![100% center](images/cookie-php.png)

&nbsp;

## LES `COOKIES`

Les cookies expires uniquement lorsque la durée définit lors de la création de celui ci arrivera à expiration (1ans dans notre exemple) !

````php
<?php
// LES COOKIES

// ATTENTION ! LE COOKIES DOIT ETRE APPELER AVANT LE DOCTYPE

if(!empty($_POST['pseudo'])){

    $pseudo = $_POST['pseudo'];

//  setcookie(' NOM DU COOKIE', VALEUR DU COOKIE,   DATE D EXPIRATION (1ANS),      PATH,   DOMAIN, SECURE, HTTP ONLY )
    setcookie(' pseudo',        $pseudo,            time() + 365*24*3600,   null,   null,   false,  true);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Entre votre peudo</h1>
    <form action="index.php" method="post">
        <table>
            <tr>
                <td>Pseudo</td>
                <td><input type="text" name="pseudo"></td>
            </tr>
        </table>
        <button type="submit">Se connecter</button>
    </form>

<?php
// AFFICHAGE DES COOKIES

    if(!empty($_COOKIE['pseudo'])){
        echo '<h2>Bienvenue '.htmlspecialchars($_COOKIE['pseudo']).'</h2>';     // 'htmlspecialchars' POUR SECURISER NOS COOKIES
    }
?>
</body>
</html>
````

&nbsp;

## LES `SESSIONS`

Dans `cookies` du navigateur, la session apparait dans `PHPSESSID`

Contrairement aux cookies, la session sera effacer lorsque toutes les pages du navigateur seront fermées !

````php
<?php
// LES SESSIONS

// ATTENTION ! LA SESSION DOIT ETRE APPELER AVANT LE DOCTYPE

session_start();

if(!empty($_POST['pseudo'])){

    $pseudo = $_POST['pseudo'];

    $_SESSION['pseudo'] = $pseudo;  // ON CREE UN INDEX PSEUDO DANS LE TABLEAU SESSION

}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Entre votre peudo</h1>
    <form action="index.php" method="post">
        <table>
            <tr>
                <td>Pseudo</td>
                <td><input type="text" name="pseudo"></td>
            </tr>
        </table>
        <button type="submit">Se connecter</button>
    </form>

<?php
// AFFICHAGE DE LA SESSION

    if(!empty($_SESSION['pseudo'])){
        echo '<h2>Bienvenue '.htmlspecialchars($_SESSION['pseudo']).'</h2>';     // 'htmlspecialchars' POUR SECURISER NOS COOKIES
    }

?>
</body>
</html>
````

Afin de supprimer une `session` (lors d'une deconnexion par exemple) il suffit d'entrer le code suivant :

````php
<?php
    session_destroy()
?>
````
&nbsp;

----
----

&nbsp;

# NAVIGATION URL [&#x21EA;](#sommaires)

_index.php_

````php
require "parts/header.php";

if(isset($_GET["page"])) {                  //  ON VERIFIE SI UNE VALEUR EST ENTRER DANS LE TABLEAU '$_GET'? , '["page"]' ETANT INDIQUER DANS LE 'href' DE 'nav.php' 

    $page = "pages/".$_GET["page"].".php";  //  ON CONCATENE L URL AVEC LE LIEN DU 'href'

    if (file_exists($page)) {               //  SI LA PAGE EXITE
        require $page;                      //  ALORS ON L AFFICHE
    } else {                                //  SINON
        require "pages/404.php";            //  AFFICHE PAGE 404
    }

} else {                                    //  SINON
    require "pages/home.php";               //  AFFICHE LA PAGE HOME PAR DEFAULT SI ON A CLICER SUR AUCIN LIEN
}
````

&nbsp;

**La navigation bar**

_parts/header.php_

````html
<!-- Navigation -->
<nav id="mainNav">
    <div>
        <a href="#page-top">Start Bootstrap</a>
        <button type="button">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div>
            <ul>
                <li>
                    <a href="index.php?page=home">Portfolio</a>  <!--ICI LE LIEN EST 'home'-->
                    <!-- ON PEUT PASSER D AUTRE DONNER DANS LE $_GET AVEC LE SYMBOLE '&' APRES HOME -->
                </li>
                <li>
                    <a href="index.php?page=about">About</a>
                </li>
                <li>
                    <a href="index.php?page=classes">Classes</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
````

&nbsp;

----
----

&nbsp;

# POO [&#x21EA;](#sommaires)

## CLASS ET ATTRIBUES

*Code à mettre dans personnage.php*

````php
<?php
// DECLARATION D UNE CLASS

class Personnage {

    // ATTRIBUTS

            // ELLES SONT SOIENT PRIVATE ET UTILISABLE UNIQUEMENT DANS LA CLASS OU PUBLIC ET DONC UTILISABLE HORS DE LA CLASS

    private $_fore = 40;
    private $_classe = "plombier";
    private $_couleursCasquette = "rouge";
}
?>
````

&nbsp;

## METHODES

*Code à mettre dans personnage.php*

````php
<?php
// DECLARATION D UNE CLASS

class Personnage {

    // ATTRIBUTS

            // ELLES SONT SOIENT PRIVATE ET UTILISABLE UNIQUEMENT DANS LA CLASS OU PUBLIC ET DONC UTILISABLE HORS DE LA CLASS

    private $_fore = 40;
    private $_classe = "plombier";
    private $_couleursCasquette = "rouge";


    //METHODES

    public function getForce() {    //  GET POUR RECEVOIR LA DONNEE
    }

    public function setforce() {    //  SET POUR MODIFIER LA DONNEE
    }

    public function getCouleurCasquette(){
    }

    public function setCouleurCasquette(){
    }

    public function getClass(){
    }
}
?>
````

&nbsp;

## CONSTRUCTEUR

*Code à mettre dans personnage.php*

````php
<?php
// DECLARATION D UNE CLASS

class Personnage {

    // ATTRIBUTS

    private $_force = 40;
    private $_classe = "plombier";
    private $_couleursCasquette = "rouge";


    // CONSTRUCTEUR

    public function __construct($force){    // ON PEUT NE RIEN METTRE EN PARAMETTRE
        $this->setforce($force);
    }


    //METHODES

    public function getForce() {
        return $this->_force;               // RECUPERE LA FORCE DU PERSONNAGE
    }

    public function setforce($force) {
        $this->_force = $force;             // MODIFIER LA FORCE DU PERSONNAGE
    }

    public function getCouleurCasquette(){
        return $this->_couleursCasquette;
    }

    public function setCouleurCasquette($couleur){
        $this->_couleursCasquette = $couleur;
    }

    public function getClass(){
        return $this->_classe;
    }

    public function getInfo(){
        return "Ce Personnage à une force de ".$this->_force.", est de classe ".$this->_classe.", et a une casquette de couleur ".$this->_couleursCasquette." !";
    }
}

$mario = new Personnage(70);                // ON CREE UN NOUVEAU PERSONNAGE QUI S APPEL '$mario' AVEC EN PARAMETTRE LA FORCE (70) QUI PAR DEFAULT ETAIT DE 40

$mario->setforce(10);                       // ON MODIFIE LA FORCE DE '$mario'

echo $mario->getForce();                    // ON AFFICHE LA NOUVELLE FORCE DE '$mario'

echo $mario->getClass();                    // ON AFFICHE LA CLASS DE '$mario'

echo $mario->getInfo();                     // ON AFFICHE LA CONCATENATION DES DIFFERENTS ATTRIBUES
?>
````

&nbsp;

## OBJET PERSONNALISER

*Code à mettre dans personnage.php*

````php
<?php
// DECLARATION D UNE CLASS

class Personnage {

    // ATTRIBUTS

    private $_nom = "Unknow";
    private $_force = 40;
    private $_classe = "plombier";
    private $_couleursCasquette = "rouge";
    private $_vie = 100;



    // CONSTRUCTEUR

    public function __construct($nom, $force, $couleur){    // ON MET EN PARAMETTRE LES ATTRIBUTS QUE L ON SOUHAITE UTILISER
        $this->_nom = $nom;
        $this->setforce($force);
        $this->setCouleurCasquette($couleur);
    }


    //METHODES

    public function getForce() {
        return $this->_force;
    }

    public function setforce($force) {
        $this->_force = $force;
    }

    public function getCouleurCasquette(){
        return $this->_couleursCasquette;
    }

    public function setCouleurCasquette($couleur){
        $this->_couleursCasquette = $couleur;
    }

    public function getClass(){
        return $this->_classe;
    }

    public function getInfo(){
        return "<p>".$this->_nom." a une force de ".$this->_force.", est de classe ".$this->_classe.", et a une casquette de couleur ".$this->_couleursCasquette." avec ". $this->_vie." points de vie !</p>";
    }

    public function frapper(Personnage $personnage) {       // ON S ASSURE QUE LA VARIABLE '$personnage' APPARTIENT A LA CLASS 'Personnage'
        return $personnage->recevoirDegats($this->_force);
    }

    public function recevoirDegats($force){

        $this->_vie = $this->_vie - $force;                 //  ON DEDUIT DU TOTAL DE PTS DE VIE DU PERSONNAGE LA FORCE DOIT (VIE - FORCE)

        if ($this->_vie <= 0) {                             //  ON CREEE UNE CONDITION LORSQUE LA VIE ATTEINT 0 POUR MODIFIER LE MESSAGE AFFICHER

            echo "<p>".$this->_nom." a perdu ".$this->_force." points de vie. Il vient de succomber !</p>";

        } else {

            echo "<p>".$this->_nom." a perdu ".$this->_force." points de vie. Il lui reste ".$this->_vie." points !</p>";   // MESSAGE AFFICHER SI IL LUI RESTE DES PTS DE VIES
        }
    }
}

$mario = new Personnage('Mario', 45, 'rouge');      //  ON CREE UN NOUVEAU PERSONNAGE QUI S APPEL '$mario' AVEC EN PARAMETTRE LE NOM 'MARIO',
                                                    //  UNE FORCE DE (45) ET UNE CASQUETTE DE COULEUR 'ROUGE'

$luigi = new Personnage('Luigi', 40, 'vert');       //  IDEM POUR LE L OBJET DE LA CLASS PERSONNAGE 'LUIGI'


echo $mario->getInfo();     // ON AFFICHE LA CONCATENATION DES DIFFERENTS ATTRIBUES DE MARIO
echo $luigi->getInfo();     // ON AFFICHE LA CONCATENATION DES DIFFERENTS ATTRIBUES DE MARIO

$mario->frapper($luigi);    // ON EXECUTE LA METHODE 'frapper' SOIT (VIE - FORCE)
$luigi->frapper($mario);

echo $mario->getInfo();     // ON CONSTATE LORQUE L ON AFFICHE A NOUVEAU LES INFOS DU PERSONNAGE QUE LA VIE A ETE MISE A JOUR.

$mario->frapper($luigi);    // ON CONTINU DE FRAPPER POUR ATTEINDRE UN SCORE DE PTS DE VIE <= 0
$mario->frapper($luigi);    // COMME LES PTS DE VIE SONT INFERIEUR A 0, ON REMPLIE LA CONDITION 'IF'DE LA METHODE 'recevoirDegats'. LE MESSAGES AFFICHER VA DONC CHANGER
?>
````

&nbsp;

----
----
