let inputText = document.querySelector("#text");
let rootElm = document.querySelector("ul");
let active =document.getElementById("Active");

let allTodos = JSON.parse(localStorage.getItem("todos")) || [];

function handleInput(event){
   if(event.keyCode === 13 && event.target.value !== ""){
    let todo = {
        name: event.target.value,
        isDone: false,
    }
    allTodos.push(todo)
    event.target.value = "";
    createUI(allTodos);
   }
   localStorage.setItem(
       "todos",
       JSON.stringify(allTodos)
   )
}
function handleDelete(event){
    let id = event.target.dataset.id;
    allTodos.splice(id , 1);
    localStorage.setItem(
        "todos",
        JSON.stringify(allTodos)
    )
    createUI(allTodos);
}
function handleToggle(event){
    let id = event.target.dataset.id
    allTodos[id].isDone = !allTodos[id].isDone;
    localStorage.setItem(
        "todos",
        JSON.stringify(allTodos)
    )
    createUI(allTodos);
}

function handleActive(event){
    allTodos.filter( elm => {
        if(elm.isDone === true){
           createUI();
        }
    })
}

active.addEventListener("click" , handleActive);


function createUI(data){
    rootElm.innerHTML = "";
    data.forEach((todo , index) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("input", handleToggle);
    input.setAttribute("data-id" , index);
    input.checked = todo.isDone;
    let p = document.createElement("p");
    p.innerText = todo.name;
    let span = document.createElement("span");
    span.addEventListener("click" , handleDelete);
    span.setAttribute("data-id" , index);
    span.innerText = "❌";
    li.append(input , p ,span);
    rootElm.append(li)
    })
}

inputText.addEventListener("keydown", handleInput);