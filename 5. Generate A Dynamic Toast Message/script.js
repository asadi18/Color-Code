const btnEl = document.getElementById("btn");
const bodyEl = document.querySelector(".container");
const inputEl = document.getElementById("input");
const copyEl = document.getElementById("copy-btn");
const copiedEl = document.getElementById("copied");
let div = null;

function RGBAcolorGenarator() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

btnEl.addEventListener("click", function () {
  const bgColor = RGBAcolorGenarator();
  bodyEl.style.backgroundColor = bgColor;
  inputEl.value = bgColor;

  copyEl.addEventListener("click", function () {
    navigator.clipboard.writeText(inputEl.value);
    if (div !== null) {
      div.remove();
      div = null;
    }
    generateToastMassage(`${inputEl.value} copied`);
  });
});

function generateToastMassage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-slide-in";

  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    div.addEventListener('animationend', function () {
      div.remove();
      div = null;
    });
  });

  document.body.appendChild(div);
}
