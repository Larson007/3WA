// 'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

const billboard = document.querySelector("#billboard").querySelector("span");
const firingButton = document.getElementById("firing-button");
const Ramp = document.getElementById("launching-ramp");
const moon = document.getElementById("moon");
const test = document.getElementById("test");

// Objet qui contient les données du countDown
const chrono = {
    count: 10,
    countTotal: null
};

const rocket = {
    htlmEl: document.getElementById("rocket"),
    imgStandBy: "images/rocket1.png",
    imgCharging: "images/rocket2.gif",
    imgLaunching: "images/rocket3.gif",
    xPos: 0,
    yPos: 0,
    xDir: 1,  // 1, -1 or 0
    yDir: 1,  // 1, -1 or 0
    speedX: 0.8,
    speedY: 1
};

// Valeur par défault de l'affichage
billboard.innerText = "10";


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/


/* -------- Gestion du CountDown
********************************/


// Ce qui s'exécutera lors du click sur le bouton
firingButton.addEventListener("click", () => {
    // Rocket2.gif charger lors du click sur le boutton
    rocket.htlmEl.src = rocket.imgCharging;

    // fonction affichage Countdown
    function countDown() {
        // On decremente le Countdown en commencent à 10
        chrono.count--;
        //Si le Countdown atteind 0
        if (chrono.count <= 0) {
            // On arret l'interval d'animation du Countdown
            clearInterval(chrono.countTotal);
            // Rocket3.gif charger a la fin du countDown
            rocket.htlmEl.src = rocket.imgLaunching;
            // ajout a la rocket la class .tookoff qui gère l'animation de décollage
            rocket.htlmEl.classList.add("tookOff");
            // Ajout au bouton la class .disable a la fin du countDown
            firingButton.classList.add("disabled");
            // Le bouton n'est plus clickable a la fin fu countDown
            firingButton.style.pointerEvents("none");

        }
        // affichage du Countdown dans le DOM
        billboard.innerText = (chrono.count > 9 ? chrono.count : "0" + chrono.count);
    }
    // On définit la fréquence de déclanchement de la fonction countDown
    chrono.countTotal = setInterval(countDown, 100);
});


/* -------- Gestion de la Fusée
********************************/
function launch() {
    rocket.htlmEl.classList.add("tookOff");
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
