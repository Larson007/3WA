
const zombieTomb = document.getElementById("zombietomb");
// const sprite = document.getElementById("sprite");


let spriteWidth = 100;
let spriteheight = 100;


const position = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const zombie = {
    img: './img/zombie.png',
    width: `${10}%`,
    posX: function (x = 0) {
        this.x = `${x}%`;

        return this.x;
    },
    start: 0,
    move: 1,
    speed: 0.5
};


zombieTomb.style.backgroundImage = `url(${zombie.img})`;
// zombieTomb.style.border = `1px solid red`;
// zombieTomb.style.backgroundPositionX = zombie.posX(0);


function animation() {
    zombie.start = zombie.start + zombie.speed * zombie.move;
    zombieTomb.style.backgroundPositionX = zombie.posX(zombie.start);
    if (zombie.start >= 100 || zombie.start <= 0) {
        zombie.move = -zombie.move;
    }
    console.log(zombie.start);
    requestAnimationFrame(animation);
}
requestAnimationFrame(animation);


const fps = 0.1;

function frame(timestamp) {
    let lastAnimationTime = 0;
    let  elaspedTimeSinceLastAnimation = timestamp - lastAnimationTime;

    if (elaspedTimeSinceLastAnimation >= (1000 / fps)) {
        console.log(fps);
        lastAnimationTime = timestamp;
        //zombie.speed = lastAnimationTime;
    }
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);


