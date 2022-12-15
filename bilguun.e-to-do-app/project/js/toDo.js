
function startInterval() {
    let now = new Date()
    let myTimer = document.getElementById("myTimer")
    // setInterval(startInterval, 1000)
    myTimer.innerHTML = `Today's date: ${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
}

startInterval()
let inputText = document.getElementById("inputText")

let submitBtn = document.getElementById("submitBtn")
let toDoInput = document.getElementById("toDoInput");
let taskL = document.getElementById('taskList');
function addFunc() {
    let todoElement = document.createElement("div")
    todoElement.innerHTML = `TODO <input value="${toDoInput.value}" class=" rounded w-25" > <button onclick="editFunc()" class="btn btn-warning">EDIT</button> <button onclick="saveFunc()" class="btn btn-success">CHECK</button> <button onclick="deleteFunc(this)" class="btn btn-danger">DELETE</button>`
    inputText.appendChild(todoElement)
}


submitBtn.addEventListener("click", addFunc)