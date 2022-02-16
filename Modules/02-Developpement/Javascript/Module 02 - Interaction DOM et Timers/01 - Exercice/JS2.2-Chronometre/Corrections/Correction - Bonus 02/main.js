'use strict'

// L'objet du DOM ou sera écrit la valeur du chronomètre
let chronoDom;

// On lance la mise à jour toutes les 10 millièmes de secondes soit toutes les centièmes de secondes
let updateSpeed = 10;

// Initialisation du chronomètre à 0
const chrono = {
    minutes : 0,
    secondes : 0,
    centiemes : 0
};

// Timer ID
let timerId = null;

document.addEventListener('DOMContentLoaded',function(){

    // Récupération de la zone HTML
    chronoDom = document.querySelector('#chrono');

    // Récupération du bouton start/stop
    let domStartButton = document.querySelector('#start');

    // Récupération du bouton reset
    let domResetButton = document.querySelector('#reset');
    
    // On initialise l'affichage à 0
    updateDisplay();

    // Evenement de clique sur le bouton. On démarre ou arrête le chrono et on change le texte
    domStartButton.addEventListener('click', function(){
        if (timerId === null) {
            timerId = window.setTimeout(updateChrono, updateSpeed);
            domStartButton.innerText = 'Stop';
        }
        else
        {
            window.clearTimeout(timerId);
            timerId = null;
            domStartButton.innerText = 'Start';
        }
    });

    // Evenement de clique sur le bouton reset. On initialise les valeurs
    domResetButton.addEventListener('click', function () {
        chrono.minutes = 0;
        chrono.secondes = 0;
        chrono.centiemes = 0;

        domStartButton.innerText = 'Start';
        window.clearTimeout(timerId);
        timerId = null;
        updateDisplay();
    });


});

/** Met à jour l'affichage du chrono dans la page HTML
 * 
 */
function updateChrono()
{
    // On arrête si on est à 60 minutes
    if (chrono.minutes == 60 && chrono.secondes == 59) 
        return;

    // Mofication des valeurs à afficher
    if (chrono.centiemes < 99) {
        chrono.centiemes++;
    } 
    else if (chrono.secondes < 59) {
        chrono.centiemes = 0;
        chrono.secondes++;
    } 
    else {
        chrono.centiemes = 0;
        chrono.secondes = 0;
        chrono.minutes++;
    }

    updateDisplay();

    //on relance la mise à jour du chrono
    timerId = window.setTimeout(updateChrono, updateSpeed);
}

/** Affiche les valeurs dans le HTML */
function updateDisplay()
{
    // on met à jour l'affichage
    chronoDom.innerText = `${(chrono.minutes < 10) ? '0' + chrono.minutes : chrono.minutes} : ${(chrono.secondes < 10) ? '0' + chrono.secondes : chrono.secondes
        } : ${(chrono.centiemes < 10) ? '0' + chrono.centiemes : chrono.centiemes}`;
}

