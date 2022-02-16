'use strict'

// on lance notre demande de timer
let alertId = window.setTimeout(alertInfo, 3000);

function alertInfo() {
    // affichage d'une fenêtre alert
    window.alert('Cela fait 3 secondes que cette ligne Javascript a été lu par le navigateur !');
}