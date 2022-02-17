// 'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

const billboard = document.querySelector("#billboard").querySelector("span");
const firingButton = document.getElementById("firing-button");
const cancelButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
const Ramp = document.getElementById("launching-ramp");
const moon = document.getElementById("moon");


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

        if (chrono.count >= 9 && chrono.count > 0 ) {
            cancelButton.classList.add("enabled");
            cancelButton.addEventListener("click", () => {
                clearInterval(chrono.countTotal);
                rocket.htlmEl.src = rocket.imgStandBy;
            });
        }

        //Si le Countdown atteind 0
        else if (chrono.count <= 0) {
            // On arret l'interval d'animation du Countdown
            clearInterval(chrono.countTotal);
            cancelButton.classList.remove("enabled");
            launch();
            fireButton();
            
            
        }
        // affichage du Countdown dans le DOM
        billboard.innerText = chrono.count;
        console.log(chrono.count);
        
    }
    // On définit la fréquence de déclanchement de la fonction countDown
    chrono.countTotal = setInterval(countDown, 500);
});


/* -------- Gestion de la Fusée
********************************/
function launch() {
    // Rocket3.gif charger a la fin du countDown
    rocket.htlmEl.src = rocket.imgLaunching;
    // ajout a la rocket la class .tookoff qui gère l'animation de décollage
    rocket.htlmEl.classList.add("tookOff");
}

/* -------- Boutton Launch
********************************/
function fireButton() {
    // Ajout au bouton la class .disable a la fin du countDown
    firingButton.classList.add("disabled");
    // Le bouton n'est plus clickable a la fin fu countDown
    firingButton.style.pointerEvents("none");

}

/* -------- Boutton Reset
********************************/
// function reset() {
    
//     resetButton.classList.add("enabled");
//     resetButton.addEventListener("click", () => {
//         chrono.count = 10;
//         rocket.htlmEl.classList.remove("tookOff");
//         rocket.htlmEl.src = rocket.imgStandBy;
//     });
// }
// reset();
/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
