const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('mins');
const secondsEl = document.getElementById('secs');

const button = document.getElementById('button');
const input = document.getElementById('input');

const halloween = '31 Oct 2021';
const halloweenDate = new Date(halloween);

function countdown() {
  const currentDate = new Date();
  const totalSeconds = (halloweenDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = formatDate(Math.floor(totalSeconds / 3600) % 24);
  const minutes = formatDate(Math.floor(totalSeconds / 60) % 60);
  const seconds = formatDate(Math.floor(totalSeconds) % 60);

  daysEl.innerText = days;
  hoursEl.innerText = hours;
  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;
}

function formatDate(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
}

countdown();
setInterval(countdown, 1000);
