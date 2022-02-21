"use strict";


// Sans contructeur
// class FormReader {
//     getInputs() {
//         const inputs = document.querySelectorAll("input");
//         inputs.forEach(function (input) {
//             console.log(input.value);
//         })
//     }
// }

// const formReader = new FormReader();

// setInterval(function () {
//     formReader.getInputs();
// }, 2000);


// Avec contructeur


class InputReader {
    constructor(inputs) {
        this.inputs = inputs;
    }
    
    displayInputs() {
        inputs.forEach(function (input) {
            console.log(input.value);
        })
    }
}

const inputs = document.querySelectorAll("input");
const inputReader = new InputReader(inputs);

setInterval(function () {
    inputReader.displayInputs();
}, 2000);

