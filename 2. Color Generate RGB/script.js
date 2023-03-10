const btnEl = document.getElementById("btn");
const bodyEl = document.querySelector(".container");


function RGBAcolorGenarator(){
    const red = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    return `rgba(${red},${green},${blue})`;    
}


btnEl.addEventListener("click", function(){
    const bgColor = RGBAcolorGenarator();
    bodyEl.style.backgroundColor = bgColor;
})