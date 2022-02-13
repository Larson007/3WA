// Voici un tableau contenant des nombres aléatoires.

let numbers = [18,
    8, 13, 4, 25, 17, 29, 46, 9, 94, 90,
    12, 73, 27, 38, 36, 11, 7, 85, 83, 34,
    76, 80, 25, 60, 78, 17, 89, 85, 7, 93,
    26, 70, 10, 41, 1, 94, 18, 24, 42, 100
];


// Dans la console ou dans le HTML ( au choix ):

// *** EXEMPLE - Afficher le tableau.
//console.log(numbers);           // Array(41) [ 18, 8, 13, 4, 25, 17, 29, 46, 9, 94, … ]
//document.write(numbers);        // 18, 8, 13, 4, 25, 17, 29, 46, 9, 94, …



// ********************************************
// *** QUESTION 1 - Affichez le type du tableau en affichant la phrase : "La variable 'numbers' est de type : ...".
// ********************************************

console.log(`01 - La variable numbers est de type : ${typeof (numbers)}`);

// ********************************************
// *** QUESTION 2 - Affichez le nombre total de valeurs contenues dans le tableau en affichant "Nombre de valeurs : ...".
// ********************************************

console.log(`02 - Nombre de valeurs : ${numbers.length}`);


// ********************************************
// *** QUESTION 3 - Affichez la 1ère valeur du tableau en affichant "La 1ère valeur du tableau est : ...".
// ********************************************

console.log(`03 - La 1ère valeur du tableau est : ${numbers[0]}`);

// ********************************************
// *** QUESTION 4 - Affichez la dernière valeur du tableau en affichant "La dernière valeur du tableau est : ...".
// ********************************************

console.log(`04 - La dernière valeur du tableau est : ${numbers.slice(-1)}`);

// ********************************************
// *** QUESTION 5 - Affichez la valeur à l'index 27 en affichant "La valeur à l'index 27 est : ...".
// ********************************************

console.log(`05 - La valeur à l'index 27 est : ${numbers[27]}`);

// ********************************************
// *** QUESTION 6 - Affichez la valeur à l'index 41 en affichant "La valeur à l'index 41 est : ...".
// ********************************************

console.log(`06 - La valeur à l'index 41 est : ${numbers[41]}`);

// ********************************************
// *** QUESTION 7 - Modifiez une valeur du tableau à l'index 3 ( qui actuellement vaut 4 ) et la remplacer par 2
// ********************************************

numbers[3] = 2;
console.log(`07 - La valeur à l'index 3 vaut maintenant : ${numbers[3]}`);

// ********************************************
// *** QUESTION 8 - Afficher les valeurs du tableau en utilisant une boucle while.
// ********************************************
// La valeur : `18` est à l'index n°0
// La valeur : `8` est à l'index n°1
// La valeur : `13` est à l'index n°2
// La ...

let i = 0;
while (i < numbers.length) {
    console.log(`08 (while) - La valeur ${numbers[i]} est a l'index ${i}`);
    i++;
}

// AVEC FOR
for (let j = 0; j < numbers.length; j++) {
    console.log(`08 (for) - La valeur ${numbers[j]} est a l'index ${j}`);
}

// AVEC FOREACH
numbers.forEach(function (elem, index) {
    console.log(`08 (forEach) - La valeur ${elem} est a l'index ${index}`);
});



// ********************************************
// *** QUESTION 9 - Afficher l'index de la valeur 93 en affichant "L'index de la valeur 93 est : ...".
// ********************************************

console.log(`09 - La valeur 93 a pour index ${numbers.indexOf(93)}`);

// ********************************************
// *** QUESTION 10 - Remplacer la valeur 12 par la valeur 0. ( Vous ignorez l'index ! )
// ********************************************

let x = numbers.indexOf(12);
numbers[x] = 0;
console.log(`10 - La valeur 12 (définit en index 11) vaut maintenant : ${numbers[11]}`);

// ********************************************
// *** QUESTION 11 - Ajouter à la fin du tableau la valeur 107.
// ********************************************

numbers.push(107);
console.log(`11 - La dernière valeur du tableau est ${numbers.slice(-1)}`);

// ********************************************
// *** QUESTION 12 - Supprimer la valeur à l'index 8.
// ********************************************

console.log(`12 - L'index 8 vaut ${numbers[8]}`);
numbers.splice(8, 1);
console.log(`12 - L'index 8 a été supprimer et vaut maintenant ${numbers[8]}`);

// ou
// delete numbers[8]

// ********************************************
// *** QUESTION 13 - Suppression de la dernière valeur du tableau.
// ********************************************

console.log(`13 - Actuelement, la dernier valeur du tableau est : ${numbers.slice(-1)}`);
numbers.pop();
console.log(`13 - Via pop() on a supprimer la derniere valeur du tableau qui vaut maintenant : ${numbers.slice(-1)}`);

// ********************************************
// *** QUESTION 14 - Suppression de la première valeur du tableau.
// ********************************************

console.log(`14 - Actuelement, la 1er valeur du tableau est : ${numbers[0]}`);
numbers.shift();
console.log(`14 - Via shift() on a supprimer la 1er valeur du tableau qui vaut maintenant : ${numbers[0]}`);

// ********************************************
// *** QUESTION 15 - Ajouter la valeur 109 au début du tableau.
// ********************************************

console.log(`15 - Actuelement, la 1er valeur du tableau est : ${numbers[0]}`);
numbers.unshift(109);
console.log(`15 - Via unshift() on a ajout au debut du tableau une valeur qui vaut maintenant : ${numbers[0]}`);

// ********************************************
// *** QUESTION 16 - Le tableau contient-il la valeur 2 : true/false.
// Et afficher avec if : "Le tableau ne contient pas cette valeur ou le tableau contient bien cette valeur"
// ********************************************

function boolArray(boolNum) {
    for (let y = 0; y < numbers.length; y++) {

        if (y === boolNum) {
            console.log(`16 - Le ${boolNum} est présent dans notre tableau a l'index ${numbers.indexOf(boolNum)}`);
            // On break pour que l'on s'arrete lorsque la valeur est true
            break;
        }
    }
}

boolArray(2);


// Autre Solution

console.log("Exo 16");
let isValueIncluded;
let valueIncludedAtIndex;
numbers.forEach(function (valeur, index) {
    if (valeur === 2) {
        isValueIncluded = true;
        valueIncludedAtIndex = index;
    }
});

if (isValueIncluded) {
    console.log("Le tableau contient la valeur 2 à l'index " + valueIncludedAtIndex);
}
else {
    console.log("Le tableau ne contient pas la valeur 2");
}


// Version Include

console.log("Exo 16");
console.log(numbers);

let num = 2;
console.log(numbers.includes(num));

if (numbers.includes(num)) {
    console.log(`Le tableau contient cette valeur à l'index ${numbers.indexOf(num)}`);
}
else {
    console.log('Le tableau ne contient pas cette valeur');
}


// ********************************************
// *** QUESTION 17 - Le tableau contient-il la valeur 13 : true/false.
// Et afficher avec switch : "Le tableau ne contient pas cette valeur ou le tableau contient bien cette valeur"
// ********************************************

function numbersArray(num) {
    switch (numbers.includes(num)) {
        case true:
            console.log(`17 - le tableau contient bien cette valeur`);
            break;

        default:
            console.log(`17 - Le tableau ne contient pas cette valeur`);
            break;
    }
}
numbersArray(13);


// ********************************************
// *** QUESTION 18 - Divisez le tableau en deux tableaux ( paires d'un coté et impaires de l'autre ).
// ********************************************

function arrayOddandEven(numArray) {
    let odd = [];
    let even = [];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 === 0) {
            even.push(numArray[i]);
        } else {
            odd.push(numArray[i]);
        }
    }
    console.log(`18 - Tableau Pair : ${even}`);
    console.log(`18 - Tableau Impair : ${odd}`);
}

arrayOddandEven(numbers);


// ********************************************
// *** QUESTION 19 - Boucler sur le tableau avec un forEach
// Afficher pour chaque donnée la phrase : "La valeur : ... est à l'index n°..."
// La valeur : `xxx` est à l'index n°0
// La valeur : `xxx` est à l'index n°1
// La ...
// ********************************************

numbers.forEach(function (elem, index) {
    console.log(`19 - La valeur : '${elem}' est a l'index n°${index}`);
});

// *****************************************************************************************************************************************
// *** QUESTION 20 - Tableau associatif :
// *****************************************************************************************************************************************

// Voici des informations sur un employé de la société :

// DUPOND Marc, 14/04/1976,
// Enfants : 2
// Salaire : 1840€/mois
// Chef d'équipe

// Créez un tableau associatif VIDE puis alimentez le avec les données de cet employé.
// Puis affichez les informations de l'employé dans la console ou le HTML comme ceci :
// Nom : ...
// Prénom : ...
// Date de naissance : ...
// Enfants : ...
// Salaire :  ...€/mois
// Fonctions :  ...

let arrayUser = {};
arrayUser['Nom :'] = "Doe";
arrayUser['Prénom :'] = "John";
arrayUser['Date de naissance :'] = "01/01/1987";
arrayUser['Enfants :'] = 3;
arrayUser['Salaire '] = 2000 + "€";
arrayUser['Fonctions :'] = "Ingénieur";

console.log(arrayUser);



// ********************************************
// *** QUESTION 21 - Supprimer les 2 valeurs qui suivent, à partir de l'index 4
// ********************************************

console.log(`21 - L'index 8 & 9 valent ${numbers[8]} ${numbers[9]} `);
numbers.splice(8, 2);
console.log(`21 - L'index 8 & 9 supprimer,  elles valent maintenant ${numbers[8]} et ${numbers[9]}`);


// ********************************************
// *** QUESTION 22 - Réaliser une copie totale un tableau ( C'est-à-dire obtenez un double du tableau que l'on peut modifier indépendamment d'original )
// ********************************************

let numbersCopy = Array.from(numbers);
console.log(`22 - Le tableau suivant est un copie dtu tableau numbers`);
console.log(numbersCopy);


// ********************************************
// *** QUESTION 23 - Réaliser une copie partielle d'un tableau en partant de l'index dont la valeur est 83 ( Vous ignorez l'index ! )
// ********************************************


function numbersCopySlice(x) {

    numbers.forEach((value, index) => {
        if (value === x) {
            let arraySlice = numbers.slice(index);
            console.log(`23 - La valeur ${x} définit l'index 0 du tableau suivant : ${arraySlice}`);
        }
    });
}
numbersCopySlice(83);

// ********************************************
// *** QUESTION 24 - Classez le tableau avec sort()
// ********************************************
let numberSort = numbersCopy.sort();
console.log(`24 - Utilisation de la méthode sort() ${numberSort}`);

// ********************************************
// *** QUESTION 25 - Trier le tableau dans l'ordre croissant des valeurs.
// ********************************************

function croissant(x, y) {
    return x - y;
}
let numberCroissant = numbersCopy;
numberCroissant.sort(croissant);
console.log(numberCroissant);

// console.log(`24 - Tableau numbers trier dans l'ordre croissant des valeurs ${numbers.sort()}`);

// ********************************************
// *** QUESTION 26 - Trier le tableau dans l'ordre décroissant des valeurs.
// ********************************************

function descroissant(x, y) {
    return y - x;
}

let numberDescroissant = numbersCopy;
numberDescroissant.sort(descroissant);
console.log(numberDescroissant);

// VOICI DE NOUVEAUX TABLEAUX :

let numbers_1 = [18, 8, 13, 4, 11, 7, 85, 83, 34, 76, 80, 25, 89, 85, 7, 93, 26, 70, 10, 41, 1, 94, 18, 24, 42, 100]; // Array(26)
let numbers_2 = [89, 85, 7, 93, 94, 18, 24, 42, 26, 70, 10, 41]; // Array(12)
let numbers_3 = [24, 9, 31, 25]; // Array(4)


// ********************************************
// *** QUESTION 27 - Concatener le tableau "numbers_1" avec le tableau "numbers_2" :
// ********************************************
// Attention, on ne concatene pas avec la méthode push, ça ne fonctionnera pas.

let numbers_1_2 = numbers_1.concat(numbers_2);
console.log(`27 - Concaténation du tableau numbers_1 & numbers_2 : ${numbers_1_2}`);

// ********************************************
// *** QUESTION 28 - Concatener les trois tableaux "numbers_1", "numbers_2" et "numbers_3" :
// ********************************************

let numbers_1_2_3 = numbers_1.concat(numbers_2, numbers_3);
console.log(`28 - Concaténation du tableau numbers_1 & numbers_2 : ${numbers_1_2_3}`);

// ********************************************
// *** QUESTION 29 - Retirer les doublons du tableau obtenu : ( Les 3 tableaux concatenés ).
// ********************************************


function deleteDuplicate(numbers_1_2_3) {
    return numbers_1_2_3.filter((item, index) => numbers_1_2_3.indexOf(item) === index);
}

console.log(`29 - Retrait des doublon ${deleteDuplicate(numbers_1_2_3)}`);


// ********************************************
// *** QUESTION 30 - Affichez les doublons du tableau obtenu : ( Les 3 tableaux concatenés ).
// ********************************************


function showDuplicate() {
    let numbersConcat = numbers_1.concat(numbers_2, numbers_3);
    for (let i = 0; i < numbersConcat.length; i++) {
        if (numbersConcat[i] === numbersConcat[i]) {
            numbersConcat.splice(numbersConcat[i]);

        }
    }
    console.log(`30 - Les nombres dupliqués sont : ${numbersConcat}`);
}

showDuplicate();

// ********************************************
// *** QUESTION 31 - Effacez l'intégralité du tableau suivant :
// ********************************************
let theCars = [`Lamborghini`, `Bugatti`, `Ferrari`, `Maserati`, `Porsche`];
theCars = [];

console.log("31 - On efface le tableau theCars en lui affectant un tableau vide");
console.log(theCars);


// ********************************************
// *** QUESTION 32 - Effacez l'intégralité du tableau suivant :
// ********************************************
const myCars = [`Renault`, `Citroen`, `Peugeot`, `Fiat`, `Ford`, `Audi`, `Mercedes`, `DS3`];
myCars.length = 0;
console.log("32 - On efface le tableau myCars en lui assigant un length de 0");
console.log(myCars);

// ********************************************
// *** QUESTION 33 - Traitez chaque valeur du tableau (de la gauche vers la droite) afin de le réduire à une seule valeur.
// ********************************************
// C'est-à-dire, additionnez toutes les valeurs du tableau :
// On doit obtenir un number qui est la somme de toutes les valeurs du tableau 
let myNumbers = [4, 5, 10, 1, 2];

function addition() {
    let numbersAddition = 0;
    for (let i = 0; i < myNumbers.length; i++) {
        numbersAddition += myNumbers[i];
    }
    console.log("33 - La somme total de myNumbers = [4, 5, 10, 1, 2] :");
    console.log(parseInt(numbersAddition));
}

addition();

// ********************************************
// *** QUESTION 34 - Transposez les éléments du tableau suivant :
// ********************************************
// * Le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.
let otherCars = [`HONGQI`, `LEOPAARD`, `HAWTAI`, `EVERUS`, `HAIMA`, `LUXGEN`, `LIFAN`, `VENUCIA`];
console.log("Exercice 34 :");
console.log(otherCars);
console.log(otherCars.reverse());

// *****************************************************************************************************************************************
// *** QUESTION 35 - Bouclez sur le tableau et si la valeur est comprise :
// *****************************************************************************************************************************************

let firstArray = [18,
    8, 13, 4, 25, 17, 29, 46, 9, 94, 90,
    12, 73, 27, 38, 36, 11, 7, 85, 83, 34,
    76, 80, 25, 60, 78, 17, 89, 85, 7, 93,
    26, 70, 10, 41, 1, 94, 18, 24, 42, 100
];
// Entre 0 et 40 : Ajoutez à la valeur, elle-même
// Ex si la valeur est 26, la nouvelle valeur est 26 + 26 = 52 ( ou 26*2 )
// Entre 41 et 60 : Ajoutez à la valeur, 2 fois elle-même
// Ex si la valeur est 52, la nouvelle valeur est 52 + (52*2) = 156
// Entre 61 et 80 : Soustraire la moitiée de la valeur à la valeur à elle-même
// Ex si la valeur est 70, la nouvelle valeur est 70 - (70/2) = 35
// Entre 81 et 100 : Multipliez la valeur par la moitié d'elle-même
// Ex si la valeur est 86, la nouvelle valeur est 86 * (86/2) = 3698

// Enfin créez un nouveau tableau "lastArray" avec ces nouveaux nombres. ( attention, pas de string !)
// Arrondir au plus proche ( pas de décimale )
// Pas de nombre négatif, si c'est le cas, retirer le signe moins se trouvant devant.
let tabResult = [];
let result;

firstArray.forEach(e => {
    switch (e) {
        case e <= 40 && e >= 0 && e != 26:
            result = e + e;
            Math.round(result);
            tabResult.push(parseInt(result));
            break;

        // case e = 26:
        //     result = e * 2;
        //     Math.round(result);
        //     tabResult.push(result);
        //     break;

        // case e > 41 && e < 60 && e != 52:
        //     result = e * 3;
        //     Math.round(result);
        //     tabResult.push(result);
        //     break;

        // case e = 52:
        //     result = e + (e * 2);
        //     Math.round(result);
        //     tabResult.push(result);
        //     break;

        // case e > 60 && e < 80 && e != 70:
        //     result = (e + e) - (e / 2);
        //     Math.round(result);
        //     tabResult.push(result);
        //     break;

        // case e = 70:
        //     result = e + (e * 2);
        //     Math.round(result);
        //     tabResult.push(result);
        //     break;

        // case e > 81 && e < 100 && e != 86:
        //     result = (e + e) * (e / 2);
        //     Math.round(result);
        //     tabResult.push(result);
        //     break;

        // case e = 70:
        //     result = e * (e / 2);
        //     Math.round(result);
        //     tabResult.push(result);
        //     break;

        default:
            break;
    }
    console.log(result);
    // console.log(tabResult);
});

// ********************************************
// *** QUESTION 36 - Calculer les moyennes de l'élève
// ********************************************
let studentNotes = [
    [182, 'DUPOND', 'Jean', '01/07/1998', "2019-2020"],  // Index 0

    ["Français", 12, 15, 17, 14, 10],                   // Index 1
    ["Mathématique", 7, 11, 12, 13],                    // Index 2
    ["Histoire/Géographie", 14, 17, 12],                // Index 3
    ["Anglais", 18, 17, 19, 16, 17, 17]                 // Index 4

    //,["Espagnol", 18, 17, 12, 15, 7, 11, 13]
    //,["Physique/Chimie", 5, 7, 6, 3, 10, 9]
];

// Demandez à l'utilisateur ( le professeur ) de renseigner dans un prompt la matière dont il souhaite connaître la moyenne de l'élève comme ceci :

    //Pour quelle matière voulez-vous calculer la moyenne ?
    // 1 - Français
    // 2 - Mathématique
    // 3 - Histoire/Géographie
    // 4 - Anglais

    // Selon son choix : ( Chiffre de 1 à 4 ) - Affichez dans un alert :
    // Notes obtenues par l'élève DUPOND Jean
    // Année scolaire : 2019-2020
    // Matière : Français
    // 12/20  15/20  17/20  14/20  10/20
    // Moyenne obtenue pour cette matière : 13.60/20 ( ou 13.6/20 )

// NOTA :
    // - Toutes les matières n'ont pas le même nombre de notes.
    // - Tous les élèves n'ont pas les mêmes matières ( Certains ont de l'anglais, d'autre ont de l'Espagnol ).
    // - Tous les élèves n'ont pas le même nombre de matières ( Certains ont plus de matière que d'autre, DUPOND ne fait pas de Physique/Chimie ).
    // - Pour calculer une moyenne, c'est la somme de toutes les notes divisé par le nombre de note.