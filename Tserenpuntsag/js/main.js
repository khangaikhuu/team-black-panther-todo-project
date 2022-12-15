let now = new Date();
document.getElementById("date").innerHTML = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;

let todoCreate = document.getElementById("todoCreate")

let button = document.getElementById("button");

button.addEventListener("click", () => {
    console.log(todoCreate.value)

    let input = document.createElement("p");

    let edit = document.createElement("img")

    input.innerHTML = `<input value=${todoCreate.value} disabled> <button> <img src="./img/edit.svg" alt="edit" style="width: 10px; heigth: 10px"></button> <button> <img src="./img/correct.svg" alt="correct" style="width: 10px; heigth: 10px"> </button> <button> <img src="./img/delete.svg" alt="delete" style="width: 10px; heigth: 10px"> </button>`;

    todoList.appendChild(input);
    img.appendChild(edit);
})

let todoList = document.getElementById("todoList");
console.log(todoList)

