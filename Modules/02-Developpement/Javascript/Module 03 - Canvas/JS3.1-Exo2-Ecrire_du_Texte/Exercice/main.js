'use strict';


// Nous allons écrire "HELLO WORLD !" avec 3 couleurs différentes
document.addEventListener('DOMContentLoaded', function () {
    // L'objet du DOM Canvas
    let canvasDom = document.querySelector('#canvas');

    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
    let ctx = canvasDom.getContext('2d');

    // On définie la police de caractère pour tous les textes
    ctx.font = 'bold 22px Fira code';

    // Couleur pour écrire Hello
    ctx.fillStyle = '#1266F1';

    // On ecrit Hello
    ctx.fillText('Hello', 10, 50);

    // Couleur pour écrire World
    ctx.strokeStyle = '#B23CFD';

    // On ecrit World et on se sert de la méthode `measureTexte` pour le place après Hello !
    ctx.strokeText('world', 10 + ctx.measureText('Hello').width + 10, 50);

    // Couleur pour écrire !
    ctx.fillStyle = '#00B74A';

    // On ecrit !
    ctx.fillText('!', 10 + ctx.measureText('Hello').width + ctx.measureText('world').width + 15, 50);
});