'use strict';

// On défini le propriété de notre balle dans un objet
let ball = {
    color: "#FF0000",
    radius:10,
    x:100,
    y:100
};

// On défini les propriété de notre jeu
let game = {
    background : '#DDDDDD',
    width: 800,
    height: 600,
    direction: -1,
    speed:2
}

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom;
let ctx;


// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function () {

    // L'objet du DOM Canvas
    canvasDom = document.querySelector('#canvas');

    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
    ctx = canvasDom.getContext('2d');

    // On dessine notre cercle la première fois
    displayGame();

    // On lance notre jeu
    playGame();

});

/** On lance le jeu
 */
function playGame()
{
    // Si la balle arrive en haut ou en bas on inverse la direction
    if (ball.y - ball.radius <= 0 || ball.y + ball.radius >=canvasDom.height)
        game.direction*=-1;

    // on modifie la position y du cercle
    ball.y += game.speed * game.direction;

    // On dessine notre cercle 
    displayGame();

    // On demande à JS de relancer cette fonction à chaque rafraichissement
    let animationId = requestAnimationFrame(playGame);
}


/** Fonction qui affiche le cercle avec ces coordonnées et la couleur défini dans le contexte
 * 
 */
function displayGame()
{
    // On vide le Canvas avant de redessiner
    ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);

    // On dit au contexte que la couleur de remplissage est gris
    ctx.fillStyle = '#DDDDDD';
    // On rempli le Canvas de gris en fond
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);

    // On dit au contexte que la couleur de remplissage est rouge
    ctx.fillStyle = ball.color;

    /**On trace un nouveau cercle rempli**/
    // on commence le tracé
    ctx.beginPath();
    // on trace un arc fermé (un cercle)
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    // on dessine sur le canvas en remplissant le tracé
    ctx.fill();
    // On aurait pu dessiner sur le Canvas seulement le contour !
    //ctx.stroke();
}