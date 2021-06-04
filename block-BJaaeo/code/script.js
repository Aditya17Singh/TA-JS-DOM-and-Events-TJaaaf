
let div = document.querySelector(".rect");
let keys = document.querySelectorAll(".btn");
let equal = document.querySelector(".equal");
let reset = document.querySelector(".reset");
let text = "";
keys.forEach( k => {
    k.addEventListener("click" , (event) => {
        if(text.length <= 10){
           text = text + event.target.innerText;
        }
        div.innerText = text;
    })
});
equal.addEventListener("click" , () => {
    let code = eval(div.innerText)
    div.innerText = code;
})
reset.addEventListener("click" , ()=> {
    text = "";
    div.innerText = text;
})