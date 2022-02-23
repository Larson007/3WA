// 'use strict';

// TODO Angle de la balle lors du rebond en fonction de la position sur le paddle (gauche/milieu/droit)
// TODO Fonction Start et Pause via ENTER

let canvasDom = document.getElementById("canvas");
let context = canvasDom.getContext('2d');


const life = {
    lives: 3,
    color: "#F93154",
    fontSize: "2rem",
    fontFamily: "Fira Code"

};

const score = {
    points: 0,
    color: "#FFA900",
    fontSize: "2rem",
    fontFamily: "Fira Code"
};


const board = {
    color: 0,
    width: 800,
    height: 800,
    xDir: 0,
    yDir: 0
};

// ball
const ball = {
    color: "#00B74A",
    radius: 20,
    xPos: canvasDom.width / 2,
    yPos: canvasDom.height - 30,
    xDir: 5,
    yDir: -9,
    speedX: 10,
    speedY: 10
};

const paddle = {

    // width: canvasDom.width,
    // xPos: 0,

    color: "#1266F1",
    height: 30,

    width: 200,
    xPos: (canvasDom.width - 200) / 2,

    yPos: canvasDom.height - 30,
    xDir: 5,
    rightPressed: false,
    leftPressed: false,
};

const gameover = {
    font: "Fira Code",
    size: "5rem",
    color: "#F93154"
};

const bricks = {
    color: "#B23CFD",
    row: 3,
    column: 5,
    width: 130,
    height: 30,
    xPos: 0,
    yPos: 0,
    xPadding: 20,
    yPadding: 20,
    xMargin: null,
    yMargin: 60
};



/* ------Gestion des VIES
***************************************/

function livesDisplay() {
    // Affichage du nombres vie
    context.font = "2rem Fira Code";
    context.fillStyle = "#fff";
    context.fillText("Life:", canvasDom.width - 140, 30);
    context.font = `${life.fontSize} ${life.fontFamily}`;
    context.fillStyle = life.color;
    context.fillText(life.lives, (canvasDom.width - 140) + context.measureText("Life:").width + 10, 30);
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

function paddleControl() {
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
}

/*---------------------------------------
*****************************************/



/* ------Gestion de la balle
***************************************/

// Dessin de la ball
function ballDisplay() {
    context.beginPath();
    context.arc(ball.xPos, ball.yPos, ball.radius, 0, Math.PI * 2);
    context.fillStyle = ball.color;
    context.fill();
    context.closePath();
}

/*---------------------------------------
*****************************************/



/* ------Gestion du RELOAD
***************************************/

function initPositions() {
    document.addEventListener("keydown", (e) => {
        e.preventDefault();
        if (e.keyCode === 32) {
            // Rechargement de la page lors de la pression de la touche "espace"
            document.location.reload();
        }
    });
}
initPositions();
/*---------------------------------------
*****************************************/



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

    // Affichage du message presse "SpaceBar" pour recommancer
    context.beginPath();
    context.fillStyle = "white";
    context.font = `2rem ${gameover.font}`;
    context.textAlign = "center";
    context.shadowBlur = 15;
    context.shadowColor = "white";
    context.fillText("Press SpaceBar to Relaod", canvasDom.width / 2, (canvasDom.height / 2) + 100);
    context.shadowBlur = 0;
    context.closePath();
}

function detectCollisions() {
    //* Condition de rebond horizontal de la balle

    // Si la postion la balle X depasse le width du canvas ou si la balle X est plus petite que son radius
    if (ball.xPos + ball.xDir > canvasDom.width - ball.radius || ball.xPos + ball.xDir < ball.radius) {
        // Alors la balle rebondit sur le width 0 et max du canvas
        ball.xDir = -ball.xDir;
    }

    //* Condition de rebond vertical de la balle
    // si la balle Y est plus petite que son radius
    if (ball.yPos + ball.yDir < ball.radius) {
        // Alors la balle rebondit sur le height 0 et max du canvas
        ball.yDir = -ball.yDir;
    }
    // Si la postion la balle Y depasse le Height du canvas
    else if (ball.yPos + ball.yDir > canvasDom.height - ball.radius) {

        // Si la position de la balle X atteint la postion X du paddle
        if (ball.xPos > paddle.xPos && ball.xPos < paddle.xPos + paddle.width) {
            // Alors la balle rebondit
            ball.yDir = -ball.yDir;
        }
        // Si la balle tappe en bas du canvas
        else {
            // On enleve une vie
            life.lives--;
            if (life.lives < 0) {
                // GAMEOVER
                gameOverDisplay();
                // document.location.stopPropagation();
                // document.location.reload();
                window.cancelAnimationFrame(playGame);
            }
            else {
                // On replace le paddle et la balle au centre
                ball.xPos = canvasDom.width / 2;
                ball.yPos = canvasDom.height - 30;
                paddle.xPos = (canvasDom.width - 200) / 2;

            }

        }
    }
    // Deplacement de la balle
    ball.xPos += ball.xDir;
    ball.yPos += ball.yDir;

}

/*---------------------------------------
*****************************************/



/* ------Gestion des bricks
***************************************/

// On créer un tableau bricksArray qui contient les columns/rows des bricks qui elles mêmes conteindront un objet indiquant leur postion x/y du canvas
let bricksArray = [];

for (let columnArray = 0; columnArray < bricks.column; columnArray++) {
    bricksArray[columnArray] = [];
    for (let rowArray = 0; rowArray < bricks.row; rowArray++) {
        // Création de la structure des tableaux columnArray & rowArray dans lequels on place les coordonnées de nos bricks et leurs status (1 = bricks visibles)
        bricksArray[columnArray][rowArray] = { x: bricks.xPos, y: bricks.yPos, status: 1 };
    }
}

// Affichage des bricks si elles ont le status 1
function bricksDisplay() {

// Position horizontal des bricks responsive
bricks.xMargin = (canvasDom.width/2)-(((bricks.width+bricks.xPadding)*bricks.column)/2);

    for (let columnArray = 0; columnArray < bricks.column; columnArray++) {
        for (let rowArray = 0; rowArray < bricks.row; rowArray++) {
            if (bricksArray[columnArray][rowArray].status === 1) {
                bricks.xPos = (columnArray * (bricks.width + bricks.xPadding)) + bricks.xMargin;
                bricks.yPos = (rowArray * (bricks.height + bricks.yPadding)) + bricks.yMargin;
                bricksArray[columnArray][rowArray].x = bricks.xPos;
                bricksArray[columnArray][rowArray].y = bricks.yPos;
                // Dessin des bricks
                context.beginPath();
                context.rect(bricks.xPos, bricks.yPos, bricks.width, bricks.height);
                context.fillStyle = bricks.color;
                context.fill();
                context.closePath();
            }
        }
    }
}


// Gestion des collisions des bricks avec la balle
let bricksArrayCollision = [];

function bricksCollision() {
    for (let columnArray = 0; columnArray < bricks.column; columnArray++) {
        for (let rowArray = 0; rowArray < bricks.row; rowArray++) {
            bricksArrayCollision = bricksArray[columnArray][rowArray];
            // Si la brique a la status visible
            if (bricksArrayCollision.status === 1) {
                // conditions de positions de la balle VS bricks pour rebond
                if (ball.xPos > bricksArrayCollision.x && ball.xPos < bricksArrayCollision.x + bricks.width && ball.yPos > bricksArrayCollision.y && ball.yPos < bricksArrayCollision.y + bricks.height) {
                    // rebond de la balle
                    ball.yDir = -ball.yDir;
                    // On fait passer le statut de la brick toucher a 0 pour la supprimer du canvas
                    bricksArrayCollision.status = 0;
                    // on incrémente le score à chaque bricks touchés
                    score.points++;

                    //* condition de victoire
                    // Si on a autant de brique que de points alors il n'y en as plus donc Victoire
                    if (score.points == bricks.column * bricks.row) {
                        victoryDisplay();
                        // document.location.stopPropagation();
                        //alert("bravo");
                        document.location.stopPropagation();
                        document.location.reload();
                        window.cancelAnimationFrame(playGame);
                    }
                }
            }
        }
    }
}

/*---------------------------------------
*****************************************/



/* ------Gestion du SCORE & VICTOIRE
***************************************/

// Affichage du SCORE
function scoreDisplay() {
    context.font = "2rem Fira Code";
    context.fillStyle = "#fff";
    context.fillText("Score:", 8, 30);
    context.font = `${score.fontSize} ${score.fontFamily}`;
    context.fillStyle = score.color;
    context.fillText(score.points, 8 + context.measureText("Score:").width + 10, 30);
}

// Affichage du message de victoire
function victoryDisplay() {
    context.beginPath();
    context.fillStyle = "#39C0ED";
    context.font = "bold 4rem Fira Code";
    context.textAlign = "center";
    context.shadowBlur = 25;
    context.shadowColor = "#1266F1";
    context.fillText("Bravo, vous avez gagné !", canvasDom.width / 2, canvasDom.height / 2, canvasDom.height / 2);
    context.shadowBlur = 0;
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

    // Les fonctions à effectuer pour executé le jeu
    livesDisplay();
    scoreDisplay();
    ballDisplay();
    paddleDisplay();
    bricksDisplay();
    paddleControl();
    detectCollisions();
    bricksCollision();


    requestAnimationFrame(playGame);
}

requestAnimationFrame(playGame);





