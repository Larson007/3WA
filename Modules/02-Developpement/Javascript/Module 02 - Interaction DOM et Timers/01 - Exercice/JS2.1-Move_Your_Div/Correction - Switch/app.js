/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/

const moveDivButton = document.getElementById("moveDiv");
const hideModalButton = document.getElementById("hideModal");
const movingDiv = document.querySelector(".red");
const modal = document.querySelector(".modal");

let i = 1;
moveDivButton.addEventListener("click", function () {
    switch (i) {
        case 1:
            movingDiv.style.top = 0;
            movingDiv.style.left = 0;
            break;
        case 2:
            movingDiv.style.top = 0;
            movingDiv.style.left = "80%";
            break;
        case 3:
            movingDiv.style.top = "80%";
            movingDiv.style.left = "80%";
            break;
        case 4:
            movingDiv.style.top = "80%";
            movingDiv.style.left = 0;
            modal.classList.add("active");
            modal.classList.add("modal-active");
            break;
    }
    
    i = i >= 4 ? 1 : ++i;
});

hideModalButton.addEventListener("click", function () {
    modal.classList.remove("active");
    modal.classList.remove("modal-active");
});
