let padding = document.querySelectorAll(".padding");
let comp = document.querySelectorAll(".comp")
let you = document.querySelector(".you")
padding.forEach((elm , index) => {
    elm.addEventListener("click" , (event) => {
        console.log(event);
    })
})
// let count = 0;
comp.forEach((com , i) => {
    com.addEventListener("click" , (event) => {
        let math = Math.floor(Math.random() * 5);
    })
})

