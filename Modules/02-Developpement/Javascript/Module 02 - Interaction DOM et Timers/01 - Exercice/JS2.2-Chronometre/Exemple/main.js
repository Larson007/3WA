"use strict";

// Delai avant execution
// setTimeout(function () {
//     window.alert("coucou");
// }, 4000);


// Delai entre "chaque" execution
let i = 0;

setInterval(function () {
    console.log("coucou" + ++i);
}, 1000);
// -> 2000 =  1 secondes
