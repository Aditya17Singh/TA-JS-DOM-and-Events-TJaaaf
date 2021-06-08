let form = document.querySelector("form");
let div = document.querySelector(".wrapper");
div.style.display= "none";
let body = document.querySelector("body");
let userInfo = {};

function handleSubmit(event){
    userInfo.innerHTML = "";
    event.preventDefault();
    userInfo.color = form.elements.color.value;
    userInfo.email = form.elements.email.value;
    userInfo.gender = form.elements.gender.value;
    userInfo.terms = form.elements.terms.checked;
    userInfo.drone = form.elements.drone.value;
    userInfo.text = form.elements.text.value;
    userInfo.range = form.elements.range.value;
    let p3 = document.createElement("p");
    p3.innerText = userInfo.text;
    div.append(p3);
    let paragrap = document.createElement("p")
    paragrap.innerText = `Email : ${userInfo.email}`;
    div.append(paragrap);
    let p2 = document.createElement("p")
    p2.innerText = `You Love : ${userInfo.gender}`;
    div.append(p2);
    let p4 = document.createElement("p")
    p4.innerText = `Color : ${userInfo.color}`;
    div.append(p4);
    let p5 = document.createElement("p")
    p5.innerText = `Rating : ${userInfo.range}`;
    div.append(p5);
    let p6 = document.createElement("p")
    p6.innerText = `Book Genere : ${userInfo.drone} ${userInfo.color}`;
    div.append(p6);
    let p7 = document.createElement("p")
    if(userInfo.terms === true){
        p7.innerText = "Agreed"
    }else{
        p7.innerText = "Not agreed";
    }
    div.append(p7);
    document.querySelector(".container").style.display = "none";
    div.style.display = "block";
    let btn = document.createElement("span");
    btn.classList.add("btn")
    btn.innerText = "close";
    div.append(btn);
    btn.addEventListener("click" , () => {
        div.classList.remove("wrapper");
        form.style.display = "block"
    })
}

form.addEventListener("submit" , handleSubmit);

