import User from "./class/User.js";
// import Validator from "./class/Validator.js";

const form = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");



form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(`Name: ${nameInput.value}, Email: ${emailInput.value}, Age: ${ageInput.value}`);

    const user = new User(nameInput.value, emailInput.value, ageInput.value);
    
    // Permet de compter le nombre de propriété dans un objet (Ici le nombre d'erreur)
    

const errors = user.validate();
console.log(Object.keys(errors).length);

    if (Object.keys(errors).length === 0) {
        //form.submit();
    }
    else {
        if (errors.name !== undefined) {
            const nameError = document.createElement("span");
            nameError.classList.add("form-error");
            nameError.innerText = errors.name;
            nameInput.after(nameError);
        }
        if (errors.email !== undefined) {
            const emailError = document.createElement("span");
            emailError.classList.add("form-error");
            emailError.innerText = errors.email;
            nameInput.after(emailError);
        }
        if (errors.age !== undefined) {
            const ageError = document.createElement("span");
            ageError.classList.add("form-error");
            ageError.innerText = errors.age;
            nameInput.after(ageError);
        }
        
    }
});
