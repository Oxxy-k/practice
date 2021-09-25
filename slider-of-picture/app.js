const upBtn = document.querySelector(".up-button");

const downBtn = document.querySelector(".down-button");

const sider = document.querySelector(".sidebar");

const mainSlide = document.querySelector(".main-slide");

const countSliders = mainSlide.querySelectorAll("div").length;

const clientHeight = document.querySelector(".container").clientHeight;

sider.style.top = `-${(countSliders - 1) * 100}vh`;

let IndexOfActiveSlider = 0;

upBtn.addEventListener("click", () => changeSlide("up"));

downBtn.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {
  if (direction === "up") {
    IndexOfActiveSlider++;
    if (IndexOfActiveSlider === countSliders) {
      IndexOfActiveSlider = 0;
    }
  } else if (direction === "down") {
    IndexOfActiveSlider--;
    if (IndexOfActiveSlider < 0) {
      IndexOfActiveSlider = countSliders - 1;
    }
  }
  mainSlide.style.transform = `translateY(-${
    clientHeight * IndexOfActiveSlider
  }px)`;
  sider.style.transform = `translateY(${clientHeight * IndexOfActiveSlider}px)`;
}
