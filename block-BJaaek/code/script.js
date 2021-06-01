let click = document.querySelector(".first");
let click1 = document.querySelector(".second");


function generateRandomColor(){
    let random = [
        "0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f",
     ];
     
     let color = "#";
     
     for(let i = 0; i< 6; i++){
         let randomNumber = Math.floor(Math.random() * 16);
         color = color + random[randomNumber];
     
     }
     return color;

}
function handel(){
    let randomColor = generateRandomColor();
    click.style.backgroundColor = randomColor;
    
}
function handelmousemov(){
    let randomColor1 = generateRandomColor();
    click1.style.backgroundColor = randomColor1;
}
click.addEventListener("click" , handel);
click1.addEventListener("mousemove" , handelmousemov);


// click.addEventListener("click" , function (){
//     var randomColor = Math.floor(Math.random()*16777215).toString(16);
//     click.style.backgroundColor = "#" + randomColor;
// })

// click1.addEventListener("mousemove" , function (){
//     var randomColor = Math.floor(Math.random()*16777215).toString(16);
//     click1.style.backgroundColor = "#" + randomColor;
// })