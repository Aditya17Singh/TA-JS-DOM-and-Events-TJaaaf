let ul = document.querySelector("ul");
let input = document.querySelector("input");

function handleInput(e){
    if(e.keyCode === 13){
       let li = document.createElement("li");
       li.innerText = input.value;
       ul.append(li);
       let x = document.createElement("input")
       x.setAttribute("type" , "checkbox")
       x.classList.add("checkbox");
       li.prepend(x);
       let button = document.createElement("button");
       button.classList.add("btn");
       button.innerText = "cancel"
       li.append(button);
       button.addEventListener("click" , () => {
           li.remove();
       })
    }
}

input.addEventListener("keydown" , handleInput)
