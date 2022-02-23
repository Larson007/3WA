'use strict';

// On défini le propriété de notre balle dans un objet
let ball = {
    color: "#FF0000",
    radius: 10,
    x: 100,
    y: 100,
    direction: -1
};

// On défini les propriété de notre jeu
let game = {
    background: '#DDDDDD',
    width:800,
    height:600,
    speed: 5,
    gameOver : false,
    animationId : null,
    canvasDom : null,
    ctx : null
}

// On défini le propriété de notre plateau dans un objet
let paddle = {
    color: "#000000",
    width: 100,
    height: 20,
    x: game.width / 2 - 50,
    y: 500,
    direction: 0,
    speed: 6
};

// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function () {

    // On initialise notre jeu
    initGame();
    
    // On dessine notre jeu
    displayGame();

    // On lance notre jeu
    playGame();

});

/** Initialisation du jeu 
 * 
*/
function initGame()
{
    // L'objet du DOM Canvas
    game.canvasDom = document.querySelector('#canvas');

    // On définie la largeur et hauteur de notre Canvas ici plutôt qu'en dur dans le HTML
    game.canvasDom.width = game.width;
    game.canvasDom.height = game.height;

    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
    game.ctx = game.canvasDom.getContext('2d');

    /** On initialise les évènement du clavier */
    document.addEventListener('keydown', keyboardEvent);
    document.addEventListener('keyup', keyboardEvent);
}

/** On lance le jeu 
 * 
*/
function playGame() {

    // on modifie la position du plateau en fonction de sa direction et on le repositionne si il sort de la zone
    paddle.x += paddle.speed * paddle.direction;
    if (paddle.x + paddle.width > game.canvasDom.width)
        paddle.x = game.canvasDom.width - paddle.width;
    if (paddle.x < 0)
        paddle.x = 0;

    // On détecte si la balle entre en collision avec le canvas(haut, droite, gauche) ou la plateau
    detectCollisions();

    // on modifie la position y du cercle
    ball.y += game.speed * ball.direction;

    // On redessine notre jeu
    displayGame();

    // On demande à JS de relancer cette fonction à chaque rafraichissement de l'écran
    game.animationId = requestAnimationFrame(playGame);
}

/** Cette fonction va détecter les collisions */
function detectCollisions()
{
    //Si la balle arrive en bas du canvas alors GAME OVER
    if (ball.y + ball.radius >= game.canvasDom.height)
        game.gameOver = true; 
    
    // Si la balle arrive en haut du canvas elle rebondit
    if (ball.y - ball.radius <= 0)
        ball.direction *= -1;

    // Si la balle touche le plateau elle rebondit
    if ((ball.y == paddle.y || ball.y+ball.speed ==paddle.y+ball.speed) && (ball.x >= paddle.x && ball.x <= paddle.x+paddle.width))
        ball.direction *= -1;

}

/** Fonction qui affiche le cercle avec ces coordonnées et la couleur défini dans le contexte 
 * 
*/
function displayGame() {
    // On vide le Canvas avant de redessiner
    game.ctx.clearRect(0, 0, game.canvasDom.width, game.canvasDom.height);

    /** Fond de la zone de jeu */
    game.ctx.fillStyle = game.background;
    game.ctx.fillRect(0, 0, game.canvasDom.width, game.canvasDom.height);

    /* Si game over on affiche le message et on affiche plus le reste */
    if (game.gameOver) {
        displayGameOver();
        return;
    }

    /** Dessin du plateau */
    game.ctx.fillStyle = paddle.color;
    game.ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

    /** Dessin de la balle */
    game.ctx.fillStyle = ball.color;
    game.ctx.beginPath();
    game.ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    game.ctx.fill();
}

/** Fonction qui affiche le gameOver */
function displayGameOver()
{
    game.ctx.fillStyle = 'black';
    // On définie la police de caractère
    game.ctx.font = 'bold 30px Verdana';

    //On mesure la largeur du texte
    let txtMetrics = game.ctx.measureText('Game Over');

    // On ecrit Game Over
    game.ctx.fillText('Game Over', game.width / 2 - txtMetrics.width/2, game.height/2);
}


/** Gestionnaire des évènement du clavier
 * @param {event} e l'évènement keydow
 * 
 */
function keyboardEvent(e)
{
    // on détecte la touche et la direction puis on change les coordonnées du plateau
    switch (e.key) {
        case 'ArrowRight':
            if (e.type == 'keydown')
                paddle.direction = 1;
            else
                paddle.direction = 0;
            break;
        case 'ArrowLeft':
            if (e.type == 'keydown')
                paddle.direction = -1;
            else
                paddle.direction = 0;
            break;
    }
}