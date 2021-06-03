let ul = document.querySelector("ul");
let li = document.querySelectorAll("li")


function handler(c,i){
    c.innerText = i + 1;
    setTimeout(function(){
        c.innerText = "";
    }, 5000)
}
li.forEach((e,index) => {
    e.addEventListener("click" , function(){
        handler(e , index);
    })
})


