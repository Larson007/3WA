
let chrono = document.getElementById("chrono");
let totalSeconds = 0;
setInterval(timer, 1000);

function timer () {
    ++totalSeconds;
    chrono.innerHTML = secondPlay(totalSeconds % 60);
};

function secondPlay(s) {
    let secondString = s + "";
    if (secondString.length < 2) {
        return "0" + secondString;
    } else {
        return secondString;
    }
}
