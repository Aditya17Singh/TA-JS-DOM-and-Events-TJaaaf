
let ul = document.querySelector("ul");

for(let i =0; i <= 500 ; i++){
    let li = document.createElement("li");
    li.classList.add("box");
    let randomNumbers = Math.floor(Math.random() * 500);
    li.innerText = randomNumbers; 
    ul.append(li);   
}

let box = document.querySelectorAll(".box")

function generateRandomColor(){
    let random = [
               "0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f",
            ];
            let color = "#";

            for(let i = 0 ; i < 6; i++){
                let randomNumber = Math.floor(Math.random() * 16);
                color = color + random[randomNumber];
            }
            return color;
            
}

function mouseHandle(){
    box.forEach(e => {
    let randomColor = generateRandomColor();
    e.style.backgroundColor = randomColor;
    e.innerText = Math.floor(Math.random() * 500);
    })
}

box.forEach(elm => {
    elm.addEventListener("mousemove" , mouseHandle)
})






