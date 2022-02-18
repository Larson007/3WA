// 'use strict';

let canvasDom = document.getElementById("canvas");
let context = canvasDom.getContext('2d');

// Bordure du canvas
canvasDom.style.border = "2px solid black";


let board = {
    color: 0,
    width: 800,
    height: 800,
    xDir: 0,
    yDir: 0
};
// ball
let ball = {
    color: "#00B74A",
    radius: 20,
    xPos: canvasDom.width / 2,
    yPos: canvasDom.height - 100,
    xDir: 5,
    yDir: -5,
    speedX: 10,
    speedY: 10
};

let test = 200;
// paddle
let paddle = {
    color: "#1266F1",
    width: 200,
    height: 30,
    xPos: 0,
    yPos: canvasDom.height-30,
    // yPos: canvasDom.height - 100,
    xDir: 5,
    //yDir: -5,
    rightPressed: false,
    leftPressed: false,
};

let gameover = {
    font: "Fira Code",
    size: "5rem",
    color: "#F93154"
};

/* ------Gestion du GAMEOVER
***************************************/
function gameOverDisplay() {

    // Affichage du message Game Over
    context.beginPath();
    context.fillStyle = gameover.color;
    context.font = `${gameover.size} ${gameover.font}`;
    context.textAlign = "center";
    context.shadowBlur = 15;
    context.shadowColor = "red";
    context.fillText("GAME OVER", canvasDom.width / 2, canvasDom.height / 2, canvasDom.height / 2);
    context.shadowBlur = 0;
    context.closePath();
}
/*---------------------------------------
*****************************************/

/* ------Gestion du paddle
***************************************/

// Dessin de la paddle
function paddleDisplay() {
    context.beginPath();
    context.fillStyle = paddle.color;
    context.fillRect(paddle.xPos, paddle.yPos, paddle.width, paddle.height);
    context.closePath();

}

// On execute les fonctions paddleKeyDown/paddleKeyUp lors de levement Dom keydown/keyup en lui passant par défault le paramètre "false"
document.addEventListener("keydown", paddleKeyDown, false);
document.addEventListener("keyup", paddleKeyUp, false);

// la méthode rightPressed/leftPressed passe à "true" lorsque l'on appuye dessus
function paddleKeyDown(eventKey) {
    if (eventKey.keyCode === 39) {
        paddle.rightPressed = true;
    } else if (eventKey.keyCode === 37) {
        paddle.leftPressed = true;
    }
}

// la méthode rightPressed/leftPressed passe à "false" lorsque l'on les relâches
function paddleKeyUp(eventKey) {
    if (eventKey.keyCode === 39) {
        paddle.rightPressed = false;
    } else if (eventKey.keyCode === 37) {
        paddle.leftPressed = false;
    }
}
/*---------------------------------------
*****************************************/


/* ------Gestion de la balle
***************************************/

// Dessin de la ball
function ballDisplay() {
    context.beginPath();
    context.arc(ball.xPos, ball.yPos, ball.radius, 0, Math.PI*2);
    context.fillStyle = ball.color;
    context.fill();
    context.closePath();
}
/*---------------------------------------
*****************************************/

/* ------Gestion des Animations
***************************************/

// Animation de la balle et du paddle
function playGame() {

    // On vide le Canvas avant de le redessiner à chaque rafraichissement de requestAnimationFrame()
    context.clearRect(0, 0, canvasDom.width, canvasDom.height);
    // On fait apparaitre la balle
    ballDisplay();
    // On fait apparaitre la paddle
    paddleDisplay();


    //* Condition de rebond horizontal de la balle
    // Si la positionX + la directionX de la balle sont > a la largeur du canvas - la taille de la baille 
    // OU si la positionX + la directionX de la balle sont < à la taille de la balle
    if (ball.xPos + ball.xDir > canvasDom.width - ball.radius || ball.xPos + ball.xDir < ball.radius) {
        // Alors la balle rebondit sur le width 0 et max du canvas
        ball.xDir = -ball.xDir;
    }

    //* Condition de rebond vertical de la balle
    // Si la positionY + la directionY de la balle sont < à la taille de la baille 
    if (ball.yPos + ball.yDir < ball.radius) {
        // Alors la balle rebondit dsur le height 0 et max du canvas
        ball.yDir = -ball.yDir;
    } 
    // Si la positionY + la directionY sont > à la hauteur du canvas - la taille de la baille
    else if (ball.yPos + ball.yDir > canvasDom.height - ball.radius) {

        // x > paddleX && x < paddleX + paddleWidth
        if (ball.xPos > paddle.xPos && ball.xPos < paddle.xPos + paddle.width) {
            ball.yDir = -ball.yDir;
            console.log(`${ball.yDir}`);
        }
        else {
            gameOverDisplay();
            document.location.stop();
            cancelAnimationFrame(playGame);
        }
    }
    
    //* Condtion de la pression des touches pour la paddle
    // Si la touche -> est pressé et tant que la position de la paddle ne sort par du canvas (en prenant en compte la width du paddle)
    if (paddle.rightPressed && paddle.xPos < canvasDom.width - paddle.width) {
        // On incrémente la position de la paddle de +7 à chaque requestAnimationFrame
        paddle.xPos += 7;
        // Si la touche <- est pressé et si on ne depasse pas le bord 0 du canvas
    } else if (paddle.leftPressed && paddle.xPos > 0) {
        // On décrémente la position de la paddle de -7 à chaque requestAnimationFrame
        paddle.xPos -= 7;
    }
    
    
    
        // Deplacement de la balle
        ball.xPos += ball.xDir;
        ball.yPos += ball.yDir;
    requestAnimationFrame(playGame);
}
requestAnimationFrame(playGame);

