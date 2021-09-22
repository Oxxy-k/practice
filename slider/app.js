const sliders = document.querySelectorAll(".slide");

for (const slide of sliders) {
  slide.addEventListener("click", () => {
    clearInterval(timerActiveClassForSlide);
    removeActiveClass();
    slide.classList.add("active");
  });
}

const removeActiveClass = () => {
  sliders.forEach((slide) => slide.classList.remove("active"));
};

const timerActiveClassForSlide = () =>
  setInterval(() => setActiveClass(), 3000);

const setActiveClass = () => {
  const activeSlider = document.querySelector(".active");
  const indexOfActiveSliders = [...sliders].indexOf(activeSlider) || 0;
  const indexOfNextActiveSlider =
    indexOfActiveSliders === sliders.length - 1 ? 0 : indexOfActiveSliders + 1;
  removeActiveClass();
  sliders[indexOfNextActiveSlider].classList.add("active");
};

timerActiveClassForSlide();
