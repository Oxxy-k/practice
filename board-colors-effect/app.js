const board = document.querySelector("#board");
const colors = [
  "#f09090",
  "#f0ea90",
  "#83f574",
  "#74f1f5",
  "#7476f5",
  "#e674f5",
  "#f574a5",
];

const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => addColor(square));

  square.addEventListener("mouseleave", () => addInitialStyle(square));

  board.append(square);
}

function addColor(element) {
  const randomColor = getRandomColor();
  element.style.backgroundColor = randomColor;
  element.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}

function addInitialStyle(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px black`;
}

function getRandomColor() {
  const indexRandomColor = Math.floor(Math.random() * colors.length);
  return colors[indexRandomColor];
}
