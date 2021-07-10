import './sass/main.scss';


const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodyEl = document.querySelector('body');

let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
      startBtn.setAttribute('disabled', 'disabled');
      bodyEl.style.background = getRandomHexColor();
  }, 1000);
    console.log(`interval with id ${timerId} started`);
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled', 'disabled');
  console.log(`Interval with id ${timerId} has stopped!`);
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

