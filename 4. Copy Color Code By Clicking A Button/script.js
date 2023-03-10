const btnEl = document.getElementById("btn");
const bodyEl = document.querySelector(".container");
const inputEl = document.getElementById("input");
const copyEl = document.getElementById("copy-btn");
const copiedEl = document.getElementById("copied");
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
  
});

copyEl.addEventListener("click", function () {
  navigator.clipboard.writeText(inputEl.value);
  copiedEl.innerText = "Copied to clipboard";
  setTimeout(() => {
    copiedEl.innerText = "";
  }, 2000);
});
