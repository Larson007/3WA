/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/

const box = document.querySelector(".red");
const modal = document.querySelector(".modal");
const btnHide = document.getElementById("hideModal");
const btnMove = document.getElementById("moveDiv");


let position = [
    ["0%", "0%"],
    ["50%", "0%"],
    ["100%", "50%"],
    ["50%", "100%"],
    ["0%", "50%"],
];

//console.log(position[2][0]);


// Methode Itération

btnMove.addEventListener("click", function () {
    switch (box.style.left === position[0][0] && box.style.top === position[0][1]) {
        case 1:
            box.style.left = position[1][0];
            box.style.top = position[1][1];
            console.log(box.style.left);
        break;
        case 2:
            box.style.left = position[2][0];
            box.style.top = position[2][1];
            console.log(box.style.left);
        break;

    default:
        break;
}
});




// Methode if

/************************


btnMove.addEventListener("click", function () {

    console.log("Left : " + box.style.left);
    console.log("Top : " + box.style.top);

    if (box.style.left === "0%" && box.style.top === "0%") {
        box.style.left = "50%";
        
        return;
    }
    else if (box.style.left === "50%" && box.style.top === "0%") {
        box.style.left = "100%";
        box.style.top = "50%";
        return;
    }
    else if (box.style.left === "100%" && box.style.top === "50%") {
        box.style.left = "50%";
        box.style.top = "100%";
        return;
    }
    else if (box.style.left === "50%" && box.style.top === "100%") {
        box.style.left = "0%";
        box.style.top = "50%";
        modal.classList.add("active");
        return;
    }
    else if (box.style.left === "0%" && box.style.top === "50%") {
        
        box.style.left = "50%";
        box.style.top = "0%";
        modal.classList.remove("active");

        return;
    }
    else {
        box.style.left = "0%";
        box.style.top = "0%";
        return;
    }


});



// Remove Modal
btnHide.addEventListener("click", function () {
    modal.classList.remove("active");
});

*****************************/