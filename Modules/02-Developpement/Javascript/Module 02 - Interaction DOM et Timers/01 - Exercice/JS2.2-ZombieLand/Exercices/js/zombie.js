
const zombie = document.getElementById("zombietomb");
const zombieImage = document.getElementById("zombie");


var stop = false;
var frameCount = 0;
const result = document.getElementById("result");
var fps, fpsInterval, startTime, now, then, elapsed;


// initialize the timer variables and start the animation

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}

// the animation loop calculates time elapsed since the last loop
// and only draws if your specified fps interval is achieved

function animate() {

    // request another frame

    requestAnimationFrame(animate);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        // Put your drawing code here

    }
}
/*------------------------------------------*/
const zombieAnimation = {
    posX : 50,
    posY : 70,
    dirX: 1,
    zombieX: 0,
    animationX: -1,
    speedX: 2
};


// Position #zombietomb
zombie.style.left = zombieAnimation.posX + "%";
zombie.style.top = zombieAnimation.posY + "%";

function zombieMove() {
    
    zombieAnimation.zombieX = zombieAnimation.zombieX + zombieAnimation.animationX * zombieAnimation.speedX;
    zombieImage.style.left = zombieAnimation.zombieX + "%";

    if (zombieAnimation.zombieX < -1050 || zombieAnimation.zombieX > 0) {
        zombieAnimation.animationX = -zombieAnimation.animationX;
    }
    
    console.log(zombieAnimation.zombieX);

    requestAnimationFrame(zombieMove);
}
requestAnimationFrame(zombieMove);