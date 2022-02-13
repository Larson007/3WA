'use strict';

window.console.clear();

// Voici un tableau contenant des nombres aléatoires.

let numbers = [   18,
                  8, 13,  4, 25, 17, 29, 46,  9, 94, 90,
                  12, 73, 27, 38, 36, 11,  7, 85, 83, 34,
                  76, 80, 25, 60, 78, 17, 89, 85,  7, 93,
                  26, 70, 10, 41,  1, 94, 18, 24, 42, 100
              ];


// Dans la console ou dans le HTML ( au choix ):

  // *** EXEMPLE - Afficher le tableau.
    console.log(numbers);           // Array(41) [ 18, 8, 13, 4, 25, 17, 29, 46, 9, 94, … ]
    document.write(numbers);        // 18, 8, 13, 4, 25, 17, 29, 46, 9, 94, …

    document.write("<br><br>");

  // *****************************************************************************************************************************************
  // *** QUESTION 1 - Affichez le type du tableau en affichant la phrase : "La variable 'numbers' est de type : ...".
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
    document.write("La variable 'numbers' est de type : " + typeof numbers + "<br>");



  // *****************************************************************************************************************************************
  // *** QUESTION 2 - Affichez le nombre total de valeurs contenues dans le tableau en affichant "Nombre de valeurs : ...".
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
    document.write("Nombre de valeurs : " + numbers.length + "<br>");


  // *****************************************************************************************************************************************
  // *** QUESTION 3 - Affichez la 1ère valeur du tableau en affichant "La 1ère valeur du tableau est : ...".
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
    document.write("La 1ère valeur du tableau est : " + numbers[0] + "<br>")


  // *****************************************************************************************************************************************
  // *** QUESTION 4 - Affichez la dernière valeur du tableau en affichant "La dernière valeur du tableau est : ...".
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
    document.write("La dernière valeur du tableau est : " + numbers[numbers.length-1] + "<br>")


  // *****************************************************************************************************************************************
  // *** QUESTION 5 - Affichez la valeur à l'index 27 en affichant "La valeur à l'index 27 est : ...".
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
    document.write("La valeur à l'index 27 est : " + numbers[27] + "<br>");


  // *****************************************************************************************************************************************
  // *** QUESTION 6 - Affichez la valeur à l'index 41 en affichant "La valeur à l'index 41 est : ...".
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
    document.write("La valeur à l'index 41 est : " + numbers[41] + "<br>");


  // *****************************************************************************************************************************************
  // *** QUESTION 7 - Modifiez une valeur du tableau à l'index 3 ( qui actuellement vaut 4 ) et la remplacer par 2
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
    document.write("La valeur à l'index 3 est : " + numbers[3] + "<br>");
    numbers[3] = 2
    document.write("La valeur à l'index 3 est maintenant : " + numbers[3] + "<br>");


  // *****************************************************************************************************************************************
  // *** QUESTION 8 - Afficher les valeurs du tableau en utilisant une boucle while.
  // *****************************************************************************************************************************************
      // La valeur : `18` est à l'index n°0
      // La valeur : `8` est à l'index n°1
      // La valeur : `13` est à l'index n°2
      // La ...

    // Votre réponse ici ...
    document.write(numbers.length + "<br>");
    let i=0;
    while (i<numbers.length){
      document.write("La valeur: " + numbers[i] + " est à l'index n°" + i + "<br>");
      i++;
    }

    document.write("<br><br>");

    document.write(numbers.length + "<br>");
    // Bonus

    // BONUS : Et si jamais l'idée vous avait traverser l'esprit, essayez avec for() et forEach() !

      // AVEC FOR

      // Votre réponse ici ...
      for(let p=0; p<numbers.length; p++){
        document.write("La valeur: " + numbers[p] + " est à l'index n°" + p + "<br>");
      }



      // AVEC FOREACH

      // Votre réponse ici ...

	  //FOREACH AVEC FONCTION SIMPLE
      // numbers.forEach(function(item, index) {
      //   document.write("La valeur: " + item + " est à l'index n°" + index + "<br>");
      // });

	  //FOREACH AVEC FONCTION FLECHEE
      numbers.forEach((item, index) => {
        document.write("La valeur: " + item + " est à l'index n°" + index + "<br>");
      });

	  document.write("<br><br>");


  // *****************************************************************************************************************************************
  // *** QUESTION 9 - Afficher l'index de la valeur 93 en affichant "L'index de la valeur 93 est : ...".
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
    let index1 = numbers.indexOf(93)
    document.write(`L'index de la valeur 93 est : ${index1} <br>`)
    document.write(`L'index ${index1} est : ${numbers[index1]} <br>`)


  // *****************************************************************************************************************************************
  // *** QUESTION 10 - Remplacer la valeur 12 par la valeur 0. ( Vous ignorez l'index ! )
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
    let index2 = numbers.indexOf(12);
    document.write(`Vérification de l'index de la valeur 12 : ${index2} <br>`);
    numbers[index2] = 0;
    document.write(`Modification de la valeur 12. Maintenant la valeur 12 est à ${numbers[index2]} <br>`);
    console.log(index2)


  // *****************************************************************************************************************************************
  // *** QUESTION 11 - Ajouter à la fin du tableau la valeur 107.
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
	console.log(numbers.length);
	let ajout107 = numbers.push(107);
	console.log(numbers.length);


  // *****************************************************************************************************************************************
  // *** QUESTION 12 - Supprimer la valeur à l'index 8.
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
	console.log(numbers[8])
	delete numbers[8];
	console.log(numbers[8])
	console.log(numbers.length);



  // *****************************************************************************************************************************************
  // *** QUESTION 13 - Suppression de la dernière valeur du tableau.
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
	console.log("Exo 13");
	console.log(numbers[numbers.length-1])
	numbers.pop();
	console.log(numbers[numbers.length-1])



  // *****************************************************************************************************************************************
  // *** QUESTION 14 - Suppression de la première valeur du tableau.
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
	console.log("Exo 14");
	console.log(numbers[0])
	numbers.shift();
	console.log(numbers[0])


  // *****************************************************************************************************************************************
  // *** QUESTION 15 - Ajouter la valeur 109 au début du tableau.
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
    console.log("Exo 15");
	console.log(numbers[0])
	numbers.unshift(109);
	console.log(numbers[0])


  // *****************************************************************************************************************************************
  // *** QUESTION 16 - Le tableau contient-il la valeur 2 ? true ou false
  // *****************************************************************************************************************************************
      // Et afficher avec if : "Le tableau ne contient pas cette valeur ou le tableau contient bien cette valeur"

    // Votre réponse ici ...
	console.log("Exo 16");
	console.log(numbers)

	let num = 2;
	console.log(numbers.includes(num))

	if( numbers.includes(num) )
	{
		console.log(`Le tableau contient cette valeur à l'index ${numbers.indexOf(num)}`);
	}
	else {
		console.log('Le tableau ne contient pas cette valeur');
	}
	


  // *****************************************************************************************************************************************
  // *** QUESTION 17 - Le tableau contient-il la valeur 13 : true/false.
  // *****************************************************************************************************************************************
      // Et afficher avec switch : "Le tableau ne contient pas cette valeur ou le tableau contient bien cette valeur"

    // Votre réponse ici ...
    console.log("Exo 17");
	let val13 = 13
	
	let test = numbers.includes(val13);

	switch (test) {
		case true: 
			console.log(`Le tableau contient bien la valeur`)
			break;
		default:
			console.log(`Le tableau ne contient pas la valeur`)
	}


  // *****************************************************************************************************************************************
  // *** QUESTION 18 - Divisez le tableau en deux tableaux ( paires d'un coté et impaires de l'autre ).
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
	console.log("Exo 18");
    let pair = [];
	let impair = [];

	numbers.forEach(value => {
		if(value % 2 == 0) 
		{
			pair.push(value);
		}
		else 
		{
			impair.push(value);
		}
	})

	console.log(`Valeur pair : ${pair}`)
	console.log(`Valeur impair : ${impair}`)


  // *****************************************************************************************************************************************
  // *** QUESTION 19 - Boucler sur le tableau avec un forEach
  // *****************************************************************************************************************************************
      // Afficher pour chaque donnée la phrase : "La valeur : ... est à l'index n°..."
      // La valeur : `xxx` est à l'index n°0
      // La valeur : `xxx` est à l'index n°1
      // La ...

    // Votre réponse ici ..
	document.write(`<h2>Exo 19</h2>`)
	numbers.forEach( (value, index) => {
		document.write(`La valeur : ${value} est à l'index n°${index} <br>`);
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


    // Votre réponse ici ...
	console.log("Exo 20");
    let employees = {};
		employees.name = "DUPOND";
		employees.firstName = "Marc";
		employees.birthday = '14/04/1976'
		employees.child = 2
		employees.pay = 1840
		employees.function = "Chef d'équipe"

		console.log(`Nom :  ${employees.name}`);
		console.log(`Prénom : ${employees.firstName}`);
		console.log(`Date de naissance : ${employees.birthday}`);
		console.log(`Enfants : ${employees.child}`);
		console.log(`Salaire : ${employees.pay} €/mois`);
		console.log(`Fonctions : ${employees.function}`);   








// ***********************************************
// BONUS : repartons sur le tableau numbers
// ***********************************************

  // *****************************************************************************************************************************************
  // *** QUESTION 21 - Supprimer les 2 valeurs qui suivent, à partir de l'index 4 par rapport au tableau : numbers
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
	console.log("Exo 21");
	numbers.splice(3, 2);
    console.log(numbers);



  // *****************************************************************************************************************************************
  // *** QUESTION 22 - Réaliser une copie totale un tableau ( C'est-à-dire obtenez un double du tableau que l'on peut modifier indépendamment d'original )
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
	console.log("Exo 22");
    let numbersCopy = numbers.slice();

    console.log(numbers);
    console.log(numbersCopy);


  // *****************************************************************************************************************************************
  // *** QUESTION 23 - Réaliser une copie partielle d'un tableau en partant de l'index dont la valeur est 83 ( Vous ignorez l'index ! )
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
	console.log("Exo 23");
	let numbersCopy2 = numbers.slice(numbers.indexOf(83));

    console.log(numbers);
    console.log(numbersCopy2);


  // *****************************************************************************************************************************************
  // *** QUESTION 24 - Classez le tableau avec sort()
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
	console.log("Exo 24");
	console.log(numbers.sort());



  // *****************************************************************************************************************************************
  // *** QUESTION 25 - Trier le tableau dans l'ordre croissant des valeurs.
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
	console.log("Exo 25");
	console.log(numbers.sort((nb1, nb2) => { 
			return nb1 - nb2; 
	}));


  // *****************************************************************************************************************************************
  // *** QUESTION 26 - Trier le tableau dans l'ordre décroissant des valeurs.
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
	console.log("Exo 26");
	console.log(numbers.sort((nb1, nb2) => { 
			return nb2 - nb1; 
	}));





// VOICI DE NOUVEAUX TABLEAUX :

    let numbers_1 = [ 18, 8, 13, 4, 11, 7, 85, 83, 34, 76, 80, 25, 89, 85, 7, 93, 26, 70, 10, 41, 1, 94, 18, 24, 42, 100 ]; // Array(26)
    let numbers_2 = [ 89, 85, 7, 93, 94, 18, 24, 42, 26, 70, 10, 41 ]; // Array(12)
    let numbers_3 = [ 24, 9, 31, 25 ]; // Array(4)


  // *****************************************************************************************************************************************
  // *** QUESTION 27 - Concatener le tableau "numbers_1" avec le tableau "numbers_2" :
  // *****************************************************************************************************************************************
    // Attention, on ne concatene pas avec la méthode push, ça ne fonctionnera pas.

    // Votre réponse ici ...
	console.log("Exo 27");
	console.log(numbers_1);
	console.log(numbers_2);
	let finalNumber = numbers_1.concat(numbers_2);
    console.log(finalNumber);  



  // *****************************************************************************************************************************************
  // *** QUESTION 28 - Concatener les trois tableaux "numbers_1", "numbers_2" et "numbers_3" :
  // *****************************************************************************************************************************************

    // Votre réponse ici ...
	console.log("Exo 28");
	console.log(numbers_1);
	console.log(numbers_2);
	console.log(numbers_3);
	let finalNumber2 = numbers_1.concat(numbers_2, numbers_3);
    console.log(finalNumber2); 



  // *****************************************************************************************************************************************
  // *** QUESTION 29 - Retirer les doublons du tableau obtenu : ( Les 3 tableaux concatenés ).
  // *****************************************************************************************************************************************

    console.log("Exo 29");
    // Votre réponse ici ...
	let numbers_doublons = Array.from(new Set(finalNumber2)); 
    console.log(numbers_doublons)

	//OU VERSION RACCOURCIS : 
	let numbers_doublons2 = [...new Set(finalNumber2)];
	console.log(numbers_doublons2)



  // *****************************************************************************************************************************************
  // *** QUESTION 30 - Affichez les doublons du tableau obtenu : ( Les 3 tableaux concatenés ).
  // *****************************************************************************************************************************************

    console.log("Exo 30");
    // Votre réponse ici ...
	let count = nb => finalNumber2.reduce((a, b) => ({ ...a, [b]: (a[b] || 0) + 1 }), {});
    let duplicates = dict => Object.keys(dict).filter((a) => dict[a] > 1);

    console.log(count(finalNumber2));    
    console.log(duplicates(count(finalNumber2)));



  // *****************************************************************************************************************************************
  // *** QUESTION 31 - Effacez l'intégralité du tableau suivant :
  // *****************************************************************************************************************************************
    let theCars = [`Lamborghini`, `Bugatti`, `Ferrari`, `Maserati`, `Porsche`];

	console.log("Exo 31")
    // Votre réponse ici ...
    theCars = [];
    console.log(theCars); 



  // *****************************************************************************************************************************************
  // *** QUESTION 32 - Effacez l'intégralité du tableau suivant :
  // *****************************************************************************************************************************************
    const myCars = [`Renault`, `Citroen`, `Peugeot`, `Fiat`, `Ford`, `Audi`,  `Mercedes`, `DS3`];

	console.log("Exo 32")
    // Votre réponse ici ...
	myCars.length = [];
    console.log(myCars);


  // *****************************************************************************************************************************************
  // *** QUESTION 33 - Traitez chaque valeur du tableau (de la gauche vers la droite) afin de le réduire à une seule valeur.
  // *****************************************************************************************************************************************
    // C'est-à-dire, additionnez toutes les valeurs du tableau :
    // On doit obtenir un number qui est la somme de toutes les valeurs du tableau !
    let myNumbers = [4, 5, 10, 1, 2];

	console.log("Exo 33")
    // Votre réponse ici ...
	console.log(myNumbers.reduce((x, y) => x + y));
    console.log(typeof(myNumbers.reduce((x, y) => x + y))); 



  // *****************************************************************************************************************************************
  // *** QUESTION 34 - Transposez les éléments du tableau suivant :
  // *****************************************************************************************************************************************
    // * Le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.

    let otherCars = [`HONGQI`, `LEOPAARD`, `HAWTAI`, `EVERUS`, `HAIMA`, `LUXGEN`,  `LIFAN`, `VENUCIA`];

	console.log("Exo 33")
    // Votre réponse ici ...
	console.log(otherCars.reverse());



  // *****************************************************************************************************************************************
  // *** QUESTION 35 - Bouclez sur le tableau et si la valeur est comprise :
  // *****************************************************************************************************************************************

    let firstArray = [  18,
                        8, 13,  4, 25, 17, 29, 46,  9, 94, 90,
                        12, 73, 27, 38, 36, 11,  7, 85, 83, 34,
                        76, 80, 25, 60, 78, 17, 89, 85,  7, 93,
                        26, 70, 10, 41,  1, 94, 18, 24, 42, 100
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


	console.log("Exo 34")
    // Votre réponse ici ...
	let lastArray = [];
	let result

    firstArray.forEach(item => {
		switch (item)
		{
			case item < 41 : 
				result = item + item;
				if(result < 0)
				{
					result -= result*2;
					lastArray.push(Math.round(result));
				} 
				else
				{
					lastArray.push(Math.round(result));
				}
				break;
			case item >= 41 && item < 61: 
				result = item + item*2;
				if(result < 0)
				{
				  result -= result*2;
				  lastArray.push(Math.round(result));
				}
				else
				{
				  lastArray.push(Math.round(result));
				}
				break;
			case item >= 61 && item < 81 :
				result = item - item*2;
				if(result < 0)
				{
					result -= result*2;
					lastArray.push(Math.round(result));
				}
				else
				{
					lastArray.push(Math.round(result));
				}
				break;
			default: 
				result = item * item/2;
				if(result < 0)
				{
					result -= result*2;
					lastArray.push(Math.round(result));
				}
				else
				{
					lastArray.push(Math.round(result));
				}
		}

        console.log(lastArray);
    });



  // *****************************************************************************************************************************************
  // *** QUESTION 36 - Calculer les moyennes de l'élève
  // *****************************************************************************************************************************************

    let studentNotes = [
                          [182,'DUPOND', 'Jean', '01/07/1998', "2019-2020"],  // Index 0

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

	  console.log("Exo 36")
    // Votre réponse ici ...
	let listeMatter = '';
	let y = 1;
	for (y; y < studentNotes.length; y++) {
		listeMatter += "\n"  + y + " - " + studentNotes[y][0];
	}

	// Demandons à l'utilisateur de nous donner la matière dont il souhaite la moyenne et lui affichons la liste
	let matterChoice = window.prompt("Pour quelle matière voulez-vous calculer la moyenne ? \n" + listeMatter);

	// Vérifions ce que l'utilisateur nous a donné
	while (isNaN(matterChoice) || matterChoice < 1 || matterChoice > studentNotes.length-1 || Number.isInteger(matterChoice)) {
		matterChoice = window.prompt("Erreur. Pour quelle matière voulez-vous calculer la moyenne ? \n" + listeMatter);
	}

	let matter = studentNotes[matterChoice];  // Récupération des notes selon la matière demandée
	let notesNumber = matter.length;          // On compte le nombre de note dans cette matière
	let points = 0;                           // On créé une variable pour le cumul des points
	let listeNotes = '';                      // On créé une variable pour la liste des notes

	// On boucle sur le tableau des notes de la matière choisie
	let w = 1;
	for (w; w < notesNumber; w++) {
		points += matter[w];                    // Calcul des points
		listeNotes += " " + matter[w]+ '/20 ';  // Récupération de la liste des notes
	}

	// Affichage des données dans la console
	console.log("Notes obtenues par l'élève " + studentNotes[0][1] + " " + studentNotes[0][2] + " en " + studentNotes[matterChoice][0] + listeNotes);
	console.log("Moyenne obtenue pour cette matière : " + (points/(notesNumber-1)).toFixed(2) + "/20");

	// Affichage des données dans un alert
	alert("Notes obtenues par l'élève " + studentNotes[0][1] + " " + studentNotes[0][2]
					+ "\n\nAnnée scolaire : " + studentNotes[0][4]
					+ "\nMatière : " + studentNotes[matterChoice][0]
					+ "\nNombre de notes : " + (notesNumber-1)
					+ "\n\n" + listeNotes.substring(1, listeNotes.length)
					+ "\n\nMoyenne obtenue pour cette matière : " + (points/(notesNumber-1)).toFixed(2) + "/20");


