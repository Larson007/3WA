"use strict";

/* ---- STATE
***************************************/

const zombie = {
    spriteFile: "zombie.png",
    htmlElement: document.getElementById("animation-window"),
    numberOfFrames: 11,
    frameSize: 100,
    currentFrame: 1,
    fps: 4,
    repeatRise: false
};


/* ---- FUNCTIONS
***************************************/

let lastAnimationTime = 0;

function animate(timestamp) {
    let elapsedTimeSinceLastAnimation = timestamp - lastAnimationTime;
    if (elapsedTimeSinceLastAnimation >= (1000 / zombie.fps)) {
        zombie.htmlElement.style.background = `url(${zombie.spriteFile}) ${-zombie.frameSize * (zombie.currentFrame - 1)}px 0px`;
        lastAnimationTime = timestamp;
        ++zombie.currentFrame;
    } 
    
    
    if (zombie.currentFrame === zombie.numberOfFrames && zombie.repeatRise === false) {
        return;
    }
    
    if (zombie.currentFrame === zombie.numberOfFrames) {
        zombie.currentFrame = 1;
    }

    requestAnimationFrame(animate);
}


/* ---- RUNTIME
***************************************/

requestAnimationFrame(animate);
