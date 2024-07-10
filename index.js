const body = document.querySelector('body');
const allTime = document.querySelectorAll('span');
const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lightBtn = document.getElementById('light');

let cur = 0;
let intervalId = null;

class Time {
    constructor(h, m, s) {
        this.hour = h;
        this.minutes = m;
        this.seconds = s;
    }
}

function getTime(difr) {
    const s = difr % 60;
    difr = Math.floor(difr / 60);
    const m = difr % 60;
    difr = Math.floor(difr / 60);
    const h = difr;
    const time = new Time(h, m, s);
    return time;
}

function printTime() {
    cur++;
    let time = getTime(cur);
    hour.innerText = time.hour.toString().padStart(2, '0');
    minutes.innerText = time.minutes.toString().padStart(2, '0');
    seconds.innerText = time.seconds.toString().padStart(2, '0');
}

function start() {
    if (!intervalId)
        intervalId = setInterval(printTime, 1000);
}

function pause() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}
function reset() {
    if (intervalId)
        pause();
    cur = -1;
    printTime();
}

function light() {
    const color = '#00ff6A';
    const orig = text.style.backgroundColor;
    lightBtn.style.color = body.style.backgroundColor = 'grey';
    lightBtn.style.backgroundColor = body.style.borderColor = body.style.color = color;
    allTime.forEach((ele) => ele.style.backgroundColor = color);
    setTimeout(() => allTime.forEach((ele) => {
        ele.style.backgroundColor = orig;
        lightBtn.style.color = lightBtn.style.backgroundColor = body.style.borderColor = body.style.color = orig;
        body.style.backgroundColor = 'black';
    }), 1000);
}

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);
lightBtn.addEventListener('click', light);
