const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

let intervalID = "";
const createTimerAnimator = () => {
  return (seconds) => {
    intervalID = setInterval(() => {
      seconds = seconds - 1;

      let hours = Math.floor(seconds / 3600);
      if (hours < 10) {
        hours = `0${Math.floor(seconds / 3600)}`;
      }
      let min = Math.floor((seconds % 3600) / 60);
      if (min < 10) {
        min = `0${Math.floor((seconds % 3600) / 60)}`;
      }
      let sec = (seconds % 3600) % 60;
      if (sec < 10) {
        sec = `0${(seconds % 3600) % 60}`;
      }

      let timer = `${hours}:${min}:${sec}`;

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
