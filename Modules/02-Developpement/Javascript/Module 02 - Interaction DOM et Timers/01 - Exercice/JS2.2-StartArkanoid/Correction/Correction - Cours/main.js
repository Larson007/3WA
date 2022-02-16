

const ballElement = document.getElementById("ball");

const ball = {
    xPos: 0,
    yPos: 0,
    xDir: 1,  // 1, -1 or 0
    yDir: 1,  // 1, -1 or 0
    speedX: 0.8,
    speedY: 1
};

function moveBall() {
    "use strict";
    // HANDLING MOVE
    ball.xPos = ball.xPos + ball.xDir * ball.speedX;
    ball.yPos = ball.yPos + ball.yDir * ball.speedY;
    ballElement.style.left = ball.xPos + "%";
    ballElement.style.top = ball.yPos + "%";
    
    // HANDLING BOUNCE
    if (ball.xPos > 100 || ball.xPos < 0) {
        ball.xDir = -ball.xDir;
    }
    if (ball.yPos > 100 || ball.yPos < 0) {
        ball.yDir = -ball.yDir;
    }
    
    requestAnimationFrame(moveBall);
}

requestAnimationFrame(moveBall);
