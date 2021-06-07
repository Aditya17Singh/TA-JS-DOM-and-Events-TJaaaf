let padding = document.querySelectorAll(".padding");
let comp = document.querySelectorAll(".comp");
let you = document.querySelector(".you");
let rock = document.getElementById("Rock");
let paper = document.getElementById("Paper");
let scissor = document.getElementById("scissor");
let result = document.querySelector(".result");
padding.forEach((elm) => {
    elm.addEventListener("click" , (event) => {
      you.innerText = event.target.id;

    })
})
function computer(){
  let arr = ["Rock","Paper","Scissor"];
  let randomNumber = Math.floor(Math.random() * 3);
  random =  arr[randomNumber];
  return random;
}

function game(){
   let computerChoice = computer();
   if(computerChoice === "Rock"){
      alert ("tie");
  }else if(computerChoice === "Paper"){
    alert ("lost");
  }else{
    alert("won")
  }
}
rock.addEventListener("click" , () => {
  game();
})

function game1(){
  let computerChoice = computer();
  if(computerChoice === "Rock"){
     alert ("won");
 }else if(computerChoice === "Paper"){
   alert ("tie");
 }else{
   alert("lost")
 }
}
paper.addEventListener("click" , () => {
  game1()
})

function game2(){
  let computerChoice = computer();
  if(computerChoice === "Rock"){
     alert ("tie");
 }else if(computerChoice === "Paper"){
   alert ("won");
 }else{
   alert("lost")
 }
}
scissor.addEventListener("click" , () => {
  game2();
})
