const daysa = document.getElementById("days");
const hoursa = document.getElementById("hours");
const minsa = document.getElementById("mins");
const secondsa = document.getElementById("seconds");

const newYears = "1 Jan 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysa.innerHTML = days;
    hoursa.innerHTML = formatTime(hours);
    minsa.innerHTML = formatTime(mins);
    secondsa.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


countdown();

setInterval(countdown, 1000);
