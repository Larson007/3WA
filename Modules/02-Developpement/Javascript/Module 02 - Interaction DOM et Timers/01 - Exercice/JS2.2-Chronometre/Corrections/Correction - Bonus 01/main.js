'use strict'

// L'objet du DOM ou sera écrit la valeur du chronomètre
let chronoDom;

// Initialisation du chronomètre à 0
let minutes = 0;
let secondes = 0

document.addEventListener('DOMContentLoaded',function(){

    chronoDom = document.querySelector('#chrono');

    window.setTimeout(updateChrono,1000);

});

/** Met à jour l'affichage du chrono dans la page HTML
 * 
 */
function updateChrono()
{
     // On arrête si on est à 60 minutes
    if (minutes == 60 && seconde == 59) 
        return;

    // Mofication des valeurs à afficher
    if(secondes < 59) {
        secondes++;
    } 
    else {
        secondes = 0;
        minutes++;
    }

    // on met à jour l'affichage
    chronoDom.innerText = `${minutes} minute(s) ${secondes} seconde(s)`;

    //on relance la mise à jour dans 1 seconde 
    window.setTimeout(updateChrono, 1000);

}