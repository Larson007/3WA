'use strict';

// On défini le propriété de notre carré que l'on va dessiner dans un objet
let square = {
    color: "#F93154",
    width: 200,
    height: 50,
    x: 300,
    y: 700
};

let ground = {
    // htmlEl: document.getElementById("canvas"),
    color: "#00B74A",
    // width: htmlEl.width,
    // height: htmlEl.height,
    posX: 0,
    posY: 0
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom;
let context;


// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function () {

    canvasDom = document.getElementById("canvas");

    context = canvasDom.getContext("2d");

    displaySquare();

    //Maintenant on met un évent pour savoir si l'utilisateur apuie sur une flèche du clavier 
    document.addEventListener('keydown', moveSquare);

});

// Canvas du square
function displaySquare() {

    // On vide le Canvas avant de redessiner
    context.clearRect(0, 0, canvasDom.width, canvasDom.height);

    // Affichage du terrain
    context.fillStyle = ground.color;
    context.fillRect(ground.posX, ground.posY, canvasDom.width, canvasDom.height);


    // Affichage du carrée
    context.fillStyle = square.color;
    context.fillRect(square.x, square.y, square.width, square.height);
}

// Gestion du mouvement lors du keyDown
function moveSquare(e) {
        // on détecte la touche et la direction puis on change les coordonnées
        switch(e.key)
        {
            case 'ArrowRight':
                if (square.x + square.width < canvasDom.width ) square.x++;
                break;
            case 'ArrowLeft':
                if (square.x > 0) square.x--;
                break;
            case 'ArrowUp':
                if (square.y > 0) square.y--;
                break;
            case 'ArrowDown':
                if (square.y + square.height < canvasDom.height) square.y++;
                break;
        }
    
        // On dessine notre carré 
        displaySquare();
}
