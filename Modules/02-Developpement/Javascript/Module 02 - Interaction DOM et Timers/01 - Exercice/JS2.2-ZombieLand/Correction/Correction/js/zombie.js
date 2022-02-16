'use strict';

// Object Zombie 
const zombie = {
    picture: 'img/zombie.png',
    domObject : null,
    spriteSize : 100,
    numberSprite : 11
};

// Object Animation avec le nombre de frame par seconde de l'animation (ici 5) 
const animation = {
    position : 0,
    fps : 5,
    id: null
};

/** Si le DOM est chargé **/
document.addEventListener('DOMContentLoaded', function(){

    // On récupère la zone du DOM
    zombie.domObject = document.querySelector('#zombietomb');
    
    // On lance l'animation
    animation.id = requestAnimationFrame(zombieAction);
    
});

/** Fonction pour gérer l'animation du Zombie **/
function zombieAction()
{
    // On relance l'animation uniquement si le temps écoulé est suffisant pour respecter les fps !
    setTimeout(function () { 
        animation.id = requestAnimationFrame(zombieAction);
    }, 1000 / animation.fps);

    // On met à jour le DOM
    zombie.domObject.style.background = `url(${zombie.picture}) ${-zombie.spriteSize * animation.position}px 0px `;

    // On modifie la position de l'animation
    animation.position++;
    
    // Si on a fini l'animation retour à 0
    if (animation.position > zombie.numberSprite)
        animation.position = 0;
}