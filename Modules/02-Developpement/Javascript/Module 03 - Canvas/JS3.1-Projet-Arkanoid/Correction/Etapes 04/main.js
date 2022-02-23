'use strict';

// On défini le propriété de notre balle dans un objet
let ball = {
    color: "#FF0000",
    radius: 10,
    x: 100,
    y: 100,
    direction: {y:-1,x:0},
};

// On défini les propriété de notre jeu
let game = {
    start : false,
    pause : false,
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
    x: 0,
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

    // On initilialise les positions des élements qui doivent être initialisés 
    initPositions();

    /** On initialise les évènement du clavier */
    document.addEventListener('keydown', keyboardEvent);
    document.addEventListener('keyup', keyboardEvent);
}

/** Initialisation de la position de plateau, de la balle et des directions*/
function initPositions()
{
    // position du plateau
    paddle.x = game.width / 2 - paddle.width;
    paddle.y = game.height-100;

    // position de la balle (sur la plateau)
    ball.y = paddle.y - ball.radius;
    ball.x = paddle.x + paddle.width / 2;

    // Direction de la balle sur X et Y
    ball.direction.y = -1;
    ball.direction.x = 0;
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

    /* On modifie la position y de la balle si le jeu a commencé
    Sinon la balle reste accrochée au plateau */
    if(game.start && !game.pause)
    {
        ball.y += game.speed * ball.direction.y;
        ball.x += game.speed * ball.direction.x;
    }
    else if(!game.start)
    {
        ball.y = paddle.y - ball.radius;
        ball.x = paddle.x + paddle.width / 2;
    }

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
        ball.direction.y *= -1;

    // Si la balle arrive à droite ou à gauche du canvas elle rebondit
    if (ball.x <= 0 || ball.x + ball.radius >= game.width)
        ball.direction.x *= -1.2;

    // Si la balle touche le plateau elle rebondit
    if ((ball.y == paddle.y || ball.y+ball.speed ==paddle.y+ball.speed) && (ball.x >= paddle.x && ball.x <= paddle.x+paddle.width))
    {
        ball.direction.y *= -1;

        // Selon si la balle touche le plateau sur la partie droite ou gauche elle va prendre un angle (plateau divisé en 3)
        if (ball.x + ball.radius <= paddle.x + paddle.width / 3 || ball.x - ball.radius <= paddle.x + paddle.width / 3)
            ball.direction.x = -1;
        else if (ball.x + ball.radius >= paddle.x + paddle.width * 2 / 3 || ball.x - ball.radius >= paddle.x + paddle.width * 2 / 3 )
            ball.direction.x = 1;
        else
            ball.direction.x = 0;
    }
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

    //On mesure la largeur du texte pour le centrer sur X
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
    // on détecte la touche et la direction
    switch (e.code) {
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
        case 'Space' :
            if (e.type == 'keydown')
            {
                if(game.start==false)
                    game.start = true;
                else if(game.gameOver == true)
                {
                    game.gameOver = false;
                    game.start = false;
                    initPositions();
                }
                else 
                    game.pause = !game.pause;
            }
    }
}