// 'use strict'

const screen = document.querySelector("body");
const ball = document.getElementById("ball");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;



const ballPhysic = {
    posX: 0,
    posY: 0,
    speedX: 5,
    speedY: 5
};

function ballMove() {

    if (ballPhysic.posX >= screenWidth) {
        ballPhysic.speedX = -3;

    } else if (ballPhysic.posX < 0) {
        ballPhysic.speedX = 3;
    }

    ballPhysic.posX = ballPhysic.posX + ballPhysic.speedX;
    ball.style.left = ballPhysic.posX + "px";

    if (ballPhysic.posY >= screenHeight) {
        ballPhysic.speedY = -8;

    } else if (ballPhysic.posY < 0) {
        ballPhysic.speedY = 8;
    }

    ballPhysic.posY = ballPhysic.posY + ballPhysic.speedY;
    ball.style.top = ballPhysic.posY + "px";

    
    
    requestAnimationFrame(ballMove);

    //console.log(`x: ${ballPhysic.posX} - y: ${ballPhysic.posY}`);

}
requestAnimationFrame(ballMove);

window.addEventListener("click", function () {
    cancelAnimationFrame(ballMove);
} );