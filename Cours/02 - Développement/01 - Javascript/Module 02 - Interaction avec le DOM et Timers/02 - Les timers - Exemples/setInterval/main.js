'use strict'

// Initialisation du compteur
let timer = 0;

// Evènement qui détecte quand la page est intégralement chargée (ajout d'un gestionnaire d'évènement "load" sur la fenêtre "window")
window.addEventListener('load', function () {

    // Zone du DOM qui contient le compteur
    let timerDom = document.querySelector('#timer');

    // Execution d'une fonction de mise à jour du compteur toutes les secondes. Cette fonction reçoit en paramètre la zone du DOM à mettre à jour
    let intervalID = window.setInterval(updateTimer, 1000, timerDom);
});

/** Fonction qui met à jour le timer en ajoutant 1
* @param {HTMLElement} objet du DOM où est contenu le texte du Timer
*/
function updateTimer(timerDom) {
    // on met à jour la zone HTML
    timerDom.innerText = ++timer;
}