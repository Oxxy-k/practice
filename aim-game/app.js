const startBtn = document.querySelector(".start");
const screens = document.querySelectorAll(".screen");
const paramsList = document.querySelectorAll(".params-list");
const timer = document.querySelector("#time");
const board = document.querySelector(".board");

const HARD_LEVELS = [
  { max: 70, min: 20 },
  { max: 50, min: 10 },
  { max: 25, min: 5 },
];

const COLORS = [
  "#f09090",
  "#f0ea90",
  "#83f574",
  "#74f1f5",
  "#7476f5",
  "#e674f5",
  "#f574a5",
];

let time = 0;
let score = 0;
let hard;

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

paramsList[0].addEventListener("click", (event) => {
  if (event.target.classList.contains("params-btn")) {
    time = +event.target.getAttribute("data-time");
    screens[1].classList.add("up");
  }
});

paramsList[1].addEventListener("click", (event) => {
  if (event.target.classList.contains("params-btn")) {
    const indexOfHardLevel = event.target.getAttribute("data-hard");
    hard = HARD_LEVELS[indexOfHardLevel];
    screens[2].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createCircle();
  }
});

function startGame() {
  setInterval(gameTimer, 1000);
  createCircle();
  setTime(time);
}

function setTime(value) {
  if (value < 10) {
    timer.innerHTML = `00:0${value}`;
  } else {
    timer.innerHTML = `00:${value}`;
  }
}

function gameTimer() {
  if (time === 0) {
    endGame();
  } else {
    --time;
    setTime(time);
  }
}

function endGame() {
  board.innerHTML = `<h1>Счёт: <span>${score}</span></h1>`;
  timer.parentNode.classList.add("hide");
}

function createCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  const { width, height } = board.getBoundingClientRect();
  const { max, min } = hard;
  const circleSize = getRandomSize(min, max);
  const y = getRandomSize(0, height - circleSize);
  const x = getRandomSize(0, width - circleSize);
  circle.style.width = `${circleSize}px`;
  circle.style.height = `${circleSize}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.backgroundColor = getRandomColors();

  board.append(circle);
}

function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColors() {
  const indexOfRandomColor = Math.floor(Math.random() * COLORS.length);
  return COLORS[indexOfRandomColor];
}
