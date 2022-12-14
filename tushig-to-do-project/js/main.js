date();

function date() {
    let now = new Date();
    let myDate = document.getElementById('date');
    myDate.innerHTML = now.getDate();
    myDate.innerHTML =`${now.getFullYear()} - ${now.getMonth() + 1} - ${now.getDate()}`;
}

let btnInput = document.getElementById("btninput");
let addInput = document.getElementById("addinput");
let todoList = document.getElementById("todo-list");

btnInput.addEventListener("click" , () => {
    let input = document.createElement("p");
    input.innerHTML = `<input style="border: 1px solid orange" value=${addInput.value} disabled> <button><i class="fa-solid fa-pen"></i></button> <button><i class="fa-solid fa-check"></i></button> <button><i class="fa-regular fa-trash-can text-danger"></i></button>`;
    todoList.appendChild(input);
})

