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
    // Le tps total ecouler depuis la derniere animation
    let elapsedTimeSinceLastAnimation = timestamp - lastAnimationTime;
    // Si le compteur de frame atteint la limite de x seconde, alors on execute l'animation 
    if (elapsedTimeSinceLastAnimation >= (1000 / zombie.fps)) {
        // On met a jour l'emplacement de la frame
        zombie.htmlElement.style.background = `url(${zombie.spriteFile}) ${-zombie.frameSize * (zombie.currentFrame - 1)}px 0px`;
        // on remet a 0 le compteur d'animation 
        lastAnimationTime = timestamp;
        // on recommence a incrémenté le chrono
        ++zombie.currentFrame;
    } 
    
    // Si la frame actuel = au nombres de frame maximume et si on lui demande de ne pas ce repeter
    if (zombie.currentFrame === zombie.numberOfFrames && zombie.repeatRise === false) {
        // Alors arrête l'execution du code
        return;
    }
    
    // Si la frame actuek = a la frame max
    if (zombie.currentFrame === zombie.numberOfFrames) {
        // alors retoune a la frame 1 donc repete toi
        zombie.currentFrame = 1;
    }

    // a chaque rafraissiement ecran execute : (En fonction de la condition if, execute l'animation tt les x ms)
    requestAnimationFrame(animate);
}


/* ---- RUNTIME
***************************************/

// Au prochain rafraichissment tu fait : (Permet d'appeler la fonction tt les 16ms)
requestAnimationFrame(animate);
