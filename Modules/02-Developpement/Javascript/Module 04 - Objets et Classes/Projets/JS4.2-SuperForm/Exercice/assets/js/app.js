const inputs = document.querySelectorAll('input');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputAge = document.getElementById('age');

const span = document.createElement('span');





inputName.addEventListener("input", (e) => {

    inputName.parentNode.insertBefore(span, inputName.nextSibling);
    span.style.marginTop = "1rem";
    span.style.textAlign = "right";

    if (e.target.value.length >= 0 && e.target.value.length <5) {
        span.classList.add("form-error");
        span.classList.remove("form-success");
        span.textContent = "5 caractères minimums";

    } else {
        span.classList.add("form-success");
        span.classList.remove("form-error");
        span.textContent = "OK";
    }
});

inputEmail.addEventListener('input', (e) => {

    inputEmail.parentNode.insertBefore(span, inputEmail.nextSibling);
    span.style.marginTop = "1rem";
    span.style.textAlign = "right";


    // le regex permet de definir un format valide pour notre champs input dans le cas présent
    // On va formater l'input pour accepter le format suivant : {string} + @ + {string} + . + {string} en s'assurant qu'il n't est pas de symbole espace
    // "\S+" veut dire tt les caractères ne peuvent être des espaces jusqu'au symbole "@" puis le symbole "."
    const regexEmail = /\S+@\S+\.\S+/;

    if (e.target.value.search(regexEmail) === 0) {
        span.classList.add("form-success");
        span.classList.remove("form-error");
        span.textContent = "OK";
    }
    else if (e.target.value.search(regexEmail) === -1) {
        span.classList.add("form-error");
        span.classList.remove("form-success");
        span.textContent = "Veuillez indiquez une adresse email valide";
    }
});

inputAge.addEventListener("input", (e) => {

    inputAge.parentNode.insertBefore(span, inputAge.nextSibling);
    span.style.marginTop = "1rem";
    span.style.textAlign = "right";
    const regexAge = /[0-9]/;


    if (e.target.value.search(regexAge) === 0) {
        span.classList.add("form-success");
        span.classList.remove("form-error");
        span.textContent = "OK";
    }  if(e.target.value.search(regexAge) === -1) {
        span.classList.add("form-error");
        span.classList.remove("form-success");
        span.textContent = "Votre age en chiffre";
    } if( e.target.value.length >= 3) {
        span.classList.add("form-error");
        span.classList.remove("form-success");
        span.textContent = "Age compris entre 0 & 99";
    }
    console.log( e.target.value.length);
});