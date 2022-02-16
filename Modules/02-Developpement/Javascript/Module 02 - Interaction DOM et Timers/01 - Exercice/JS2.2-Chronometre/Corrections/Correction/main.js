'use strict'

// L'objet du DOM ou sera écrit la valeur du chronomètre
let chronoDom;

// Initialisation du chronomètre à 0
let chrono = 0;

document.addEventListener('DOMContentLoaded',function(){

    chronoDom = document.querySelector('#chrono');

    window.setTimeout(updateChrono,1000);

});

/** Met à jour l'affichage du chrono dans la page HTML
 * 
 */
function updateChrono()
{
    //on relance la mise à jour dans 1 seconde 
    window.setTimeout(updateChrono, 1000);

    // on met à jour l'affichage
    chronoDom.innerText = ++chrono;
}