let click = document.querySelector(".first");
let click1 = document.querySelector(".second");



click.addEventListener("click" , function (){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    click.style.backgroundColor = "#" + randomColor;
})

click1.addEventListener("mousemove" , function (){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    click1.style.backgroundColor = "#" + randomColor;
})