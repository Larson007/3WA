'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
const billboard = {
    htmlElement: document.querySelector("#billboard span"),
    currentCount: null,
    maxCount: 10
};
billboard.currentCount = billboard.maxCount;

const firingButton = {
    htmlElement: document.getElementById("firing-button")
}

const rocket = {
    htmlElement: document.getElementById("rocket"),
    fileStandBy: "images/rocket1.png",
    fileLaunching: "images/rocket2.gif",
    fileTakeOff: "images/rocket3.gif"
}



/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function handleFiringButton() {
    firingButton.htmlElement.removeEventListener("click", handleFiringButton);
    rocket.htmlElement.src = rocket.fileLaunching;
    
    let intervalId = setInterval(function () {
        if (billboard.currentCount <= 0) {
            clearInterval(intervalId);
            launchRocket();
        } else {
            --billboard.currentCount;
            billboard.htmlElement.innerText = billboard.currentCount;
        }
    }, 1000);
}

function launchRocket() {
    firingButton.htmlElement.classList.add("disabled");
    rocket.htmlElement.src = rocket.fileTakeOff;
    rocket.htmlElement.classList.add("tookOff");
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
billboard.htmlElement.innerText = billboard.currentCount;
firingButton.htmlElement.addEventListener("click", handleFiringButton);

