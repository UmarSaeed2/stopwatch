const timer = document.querySelector('#stopwatch');
let hour = 0;
let min = 0;
let sec = 0;
let stopTime = true;

function startTimer() {
    if (stopTime == true) {
        stopTime = false;
        timerCycle();
    }
}

function stopTimer() {
    if (stopTime == false) {
        stopTime = true;
    }
}

function timerCycle() {
    if (stopTime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hour = parseInt(hour);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hour = hour + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10) {
            sec = "0" + sec;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (hour < 10) {
            hour = "0" + hour;
        }

        timer.innerHTML = hour + ":" + min + ":" + sec;

        setTimeout("timerCycle()", 1000);
    }
}

function resetTimer() {
    timer.innerHTML = "00:00:00";
    stopTime = true;
    sec = 0;
    min = 0;
    hour = 0;
}