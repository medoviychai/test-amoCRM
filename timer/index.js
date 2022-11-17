const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let intervalID = "";
const createTimerAnimator = () => {
  return (seconds) => {
    intervalID = setInterval(() => {
      seconds = seconds - 1;
      const timer =
        Math.floor(seconds / 3600) +
        ":" +
        Math.floor((seconds % 3600) / 60) +
        ":" +
        ((seconds % 3600) % 60);
      timerEl.textContent = timer;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  clearInterval(intervalID);
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = "";
});



