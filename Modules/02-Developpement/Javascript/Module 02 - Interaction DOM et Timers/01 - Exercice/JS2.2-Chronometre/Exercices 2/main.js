
let chrono = document.getElementById("chrono");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnReset = document.getElementById("reset");


// on défini les valeurs initials des secondes/minutes/heures/total
let second = 0;
let minute = 0;
let hour = 0;
let totalSeconds;

chrono.innerHTML = "00:00:00";


// On defini l'incrémentation des s/m/h
function clock() {
    second++;
    if (second >= 60) {
        second = 0;
        minute++;
        if (minute >= 60) {
            minute = 0;
            hour++;
        }
    }
}


// On ajout au DOM la fonction clock
function addTimer() {
    clock();
    chrono.innerHTML = (hour > 9 ? hour : "0" + hour) + ":" + (minute > 9 ? minute : "0" + minute) + ":" + (second > 9 ? second : "0" + second);
    timer();
}



// Definition du setTimout pour que le chrono s'enclanche chaques secondes
function timer() {
    totalSeconds = setTimeout(addTimer, 1000);
}


// Avec addEventListener

btnStart.addEventListener("click", function () {
    addTimer();
});

// Aussi ecrit :
// btnStart.addEventListener("click", addTimer);

btnStop.addEventListener("click", function () {
    clearTimeout(totalSeconds);
});

btnReset.addEventListener("click", function () {
    second = 0;
    minute = 0;
    hour = 0;
    chrono.innerHTML = "00:00:00";
});

// Avec onClick
/******************************

btnStart.onclick = addTimer;

btnStop.onclick = function () {
    clearTimeout(totalSeconds);
};

btnReset.onclick = function () {
    second = 0;
    minute = 0;
    hour = 0;
};

*******************************/

