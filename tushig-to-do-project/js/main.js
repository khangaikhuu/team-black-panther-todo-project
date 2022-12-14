// On sar udur haruulj bga heseg
date();

function date() {
    let now = new Date();
    let myDate = document.getElementById('date');
    myDate.innerHTML = now.getDate();
    myDate.innerHTML =`${now.getFullYear()} - ${now.getMonth() + 1} - ${now.getDate()}`;
}

// Nemex button der darhad door jagsaalt heseg der bicsen value utga n garch irj bga heseg

let btnInput = document.getElementById("btninput");
let addInput = document.getElementById("addinput");
let todoList = document.getElementById("todo-list");

btnInput.addEventListener("click" , () => {
    let input = document.createElement("p");
    input.innerHTML = `<input value=${addInput.value} disabled> 
    <button><i class="fa-solid fa-pen"></i></button> 
    <button><i class="fa-solid fa-check"></i></button> 
    <button><i class="fa-solid fa-trash text-danger"></i></i></button>`;
    todoList.appendChild(input);
})

