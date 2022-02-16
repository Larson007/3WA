var dvAnimationArea = document.querySelector('#animationArea');

var ball = document.createElement('div');
ball.classList.add('pbox');
dvAnimationArea.appendChild(ball);

areaLength = dvAnimationArea.offsetWidth;
areaHeight = dvAnimationArea.offsetHeight;
var x = (Math.round((Math.random() * areaLength) + 1));
var y = (Math.round((Math.random() * areaHeight) + 1));
var velocityX = 7;
var velocityY = -5;

setInterval(update, 5);
function update() {
    ball.style.left = x + "px";
    ball.style.top = y + "px";

    if (y >= areaHeight || y <= 0) {
        velocityY *= -1;
    }

    if (x >= areaLength || x <= 0) {
        velocityX *= -1;
    }

    x = x + velocityX;
    y = y + velocityY;
}