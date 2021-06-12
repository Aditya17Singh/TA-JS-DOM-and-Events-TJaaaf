let canvas = document.getElementById("result");
let ctx = canvas.getContext("2d");

function loadImage(event){
    let image = document.getElementById("imgDisplayed");
    image.src = URL.createObjectURL(event.target.files[0]);
}

let preview = document.getElementById("preview");
preview.addEventListener("click" , prev)

function prev(){
    let image = document.getElementById("imgDisplayed");
    let imWidth = document.getElementById("imWidth").value
    let imHeight = document.getElementById("imHeight").value
    canvas.width = imWidth;
    canvas.height = imHeight;
    ctx.drawImage(image, 0,0, imWidth, imHeight);
}