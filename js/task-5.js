function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorOutput = document.querySelector(".color");


function changeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorOutput.textContent = color;
};

btn.addEventListener("click", changeColor);