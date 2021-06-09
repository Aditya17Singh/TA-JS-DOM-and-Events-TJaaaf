let userNameError = "";

let form = document.querySelector("form");

// function doesContainNumber(str){
//    return str.split("").some(e => Number(e))
// }
// function doesContain(str){
//     return !str.includes("@")
// }

function handleSubmit(event){
    event.preventDefault();
    let userNameElm = event.target.elements.username;
    let name = event.target.elements.name;
    let email = event.target.elements.email;
    let phone = event.target.elements.Number;
    if(userNameElm.value === ""){
       userNameError = "Can't be empty";
       userNameElm.nextElementSibling.innerText = userNameError;
    }else if(userNameElm.value.length <= 4){
       userNameError = "username cannot be less than 4 characters"
       userNameElm.nextElementSibling.innerText = userNameError;
    }else{
       userNameElm.nextElementSibling.innerText = "";
       userNameError = "";
    }if(!isNaN(name.value)){
        userNameError = "cant be a number"
        name.nextElementSibling.innerText = userNameError;
    }else{
        name.nextElementSibling.innerText = "";
        userNameError = "";
    }if(!(email.value).includes("@")){
        userNameError = "must contain @"
        email.nextElementSibling.innerText = userNameError;
    }else if(email.length < 6){
        userNameError = "Email must be 6 characters"
        email.nextElementSibling.innerText = userNameError;
     }else{
        email.nextElementSibling.innerText = "";
        userNameError = "";
     }
}
form.addEventListener("submit",handleSubmit);
