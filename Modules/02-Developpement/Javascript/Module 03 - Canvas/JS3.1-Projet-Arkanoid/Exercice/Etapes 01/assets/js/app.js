'use strict';

let canvasDom = document.getElementById("canvas");
let context = canvasDom.getContext('2d');

// Bordure du canvas
canvasDom.style.border = "2px solid black";


let game = {
    color: 0,
    width: 800,
    height: 800,
    xDir: 0,
    yDir: 0
};
// Objet ball
let ball = {
    color: "#B23CFD",
    radius: 20,
    xPos: 390,
    yPos: 700,
    xDir: 5,
    yDir: -5,
    speedX: 10,
    speedY: 10
};


// Dessin de la ball
function ballDisplay() {
    context.beginPath();
    context.arc(ball.xPos, ball.yPos, ball.radius, 0, 2 * Math.PI);
    context.fillStyle = ball.color;
    context.fill();
    context.strokeStyle = '#333';
    context.stroke();
    context.closePath();
}

// Animation de la balle
function ballAnimation() {

    // On vide le Canvas avant de redessiner a chaque interval
    context.clearRect(0, 0, canvasDom.width, canvasDom.height);

    // On fait apparaitre la balle
    ballDisplay();

    // Condition de rebomd vertical
    if (ball.yPos + ball.yDir < 0 || ball.yPos + ball.yDir >  canvasDom.height) {
        ball.yDir = -ball.yDir;
    }
    // Condition de rebomd horizontal
    // if (ball.xPos + ball.xDir < 0 || ball.xPos + ball.xDir >  canvasDom.width) {
    //     ball.xDir = -ball.xDir;
    // }
    // Deplacement de la balle
    ball.yPos += ball.yDir;
    //ball.xPos += ball.xDir;
    requestAnimationFrame(ballAnimation);
}
requestAnimationFrame(ballAnimation);

