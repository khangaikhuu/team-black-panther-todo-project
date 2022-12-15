let now = new Date();
document.getElementById("date").innerHTML = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;

let todoCreate = document.getElementById("todoCreate")

let button = document.getElementById("button");

function editFunc(){
    console.log("edit clicked")
}
function correctFunc(){
    console.log("correct clicked")
}
function deleteFunc(){
    console.log("delete clicked")
}

button.addEventListener("click", () => {
    console.log(todoCreate.value)

    let input = document.createElement("p");

    input.innerHTML = `<input value=${todoCreate.value} disabled> <button onclick="editFunc()"> <img src="./img/edit.svg" alt="edit" style="width: 10px; heigth: 10px"></button> <button onclick="correctFunc()"> <img src="./img/correct.svg" alt="correct" style="width: 10px; heigth: 10px"> </button> <button onclick="deleteFunc()"> <img src="./img/delete.svg" alt="delete" style="width: 10px; heigth: 10px"> </button>`;

    todoList.appendChild(input);
})

let todoList = document.getElementById("todoList");
console.log(todoList)

