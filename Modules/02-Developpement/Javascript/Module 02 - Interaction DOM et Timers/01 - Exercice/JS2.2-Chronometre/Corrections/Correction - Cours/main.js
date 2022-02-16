"use strict";

const stopwatchElement = document.getElementById("stopwatch");
const toggleButton = document.getElementById("toggle");
const resetButton = document.getElementById("reset");

let timerId = null;

const stopwatch = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    hundredths: 0
};

function updateStopwatch() {
    incrementStopwatch();
    displayStopwatch();

    timerId = setTimeout(updateStopwatch, 100);
}

function incrementStopwatch() {
    stopwatch.hundredths = stopwatch.hundredths + 10;
    
    if (stopwatch.hundredths > 90) {
        stopwatch.hundredths = 0;
        ++stopwatch.seconds;
    }
    
    if (stopwatch.seconds > 59) {
        stopwatch.seconds = 0;
        ++stopwatch.minutes;
    }
    
    if (stopwatch.minutes > 59) {
        stopwatch.minutes = 0;
        ++stopwatch.hours;
    }
}

function toggleStopwatch() {
    if (timerId === null) {
        updateStopwatch();
    } else {
        stopStopwatch();
    }
}

function resetStopwatch() {
    stopStopwatch();

    stopwatch.hours = 0;
    stopwatch.minutes = 0;
    stopwatch.seconds = 0;
    stopwatch.hundredths = 0;
    
    displayStopwatch();
}

function stopStopwatch() {
    if (timerId !== null) {
        clearTimeout(timerId);
        timerId = null;
    }
}

function displayStopwatch() {
    stopwatchElement.innerText =
        stopwatch.hours + "heure" + (stopwatch.hours > 1 ? "s" : "")
        + " : " +
        stopwatch.minutes + "minute" + (stopwatch.minutes > 1 ? "s" : "")
        + " : " +
        stopwatch.seconds + "seconde" + (stopwatch.seconds > 1 ? "s" : "")
        + " : " +
        stopwatch.hundredths + "miliseconde" + (stopwatch.hundredths > 1 ? "s" : "");
}

toggleButton.addEventListener("click", toggleStopwatch);
resetButton.addEventListener("click", resetStopwatch);
