let ul = document.querySelector("ul");
let li = document.querySelectorAll(".first li")


// function handler(c,i){
//     c.innerText = i + 1;
//     setTimeout(function(){
//         c.innerText = "";
//     }, 5000)
// }
// li.forEach((e,index) => {
//     e.addEventListener("click" , function(){
//         handler(e , index);
//     })
// })

// WITHOUT EVENT DELIGATION
li.forEach((box,index) => {
    box.addEventListener("click" , (event) =>{
        event.target.innerText = index + 1;
        setTimeout(() =>{
            event.target.innerText = "";
        },1000)
    })
})

// WITH EVENT DELIGATION
let secondBox = document.querySelector(".second");
secondBox.addEventListener("click", (event) => {
    let text = event.target.dataset.text;
    event.target.innerText = text ;
        setTimeout(() =>{
            event.target.innerText = "";
        },1000)
    console.log();
})

