const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradients = [
  "linear-gradient(to right top, #ffbb00, #ff4343)",
  "linear-gradient(to right top, #005c97, #363795)",
  "linear-gradient(to right top, #e53935, #e35d5b)",
];
let options = {
  threshold: 0.7,
};
let observer = new IntersectionObserver((enteris) => {
  enteris.forEach((entery) => {
    const className = entery.target.className;
    const activeAnchore = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entery.target.getAttribute("data-index");
    const coords = activeAnchore.getBoundingClientRect();
    const direction = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entery.isIntersecting) {
      bubble.style.setProperty("left", `${direction.left}px`);
      bubble.style.setProperty("top", `${direction.top}px`);
      bubble.style.setProperty("width", `${direction.width}px`);
      bubble.style.setProperty("height", `${direction.height}px`);
      bubble.style.setProperty("background", gradients[gradientIndex]);
    }
  });
}, options);
sections.forEach((section) => {
  observer.observe(section);
});
