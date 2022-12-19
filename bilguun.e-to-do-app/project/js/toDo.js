function startInterval() {
    let now = new Date()
    let myTimer = document.getElementById("myTimer")
    // setInterval(startInterval, 1000)
    myTimer.innerHTML = `Today's date: ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
}
startInterval()

let inputText = document.getElementById("inputText")
let submitBtn = document.getElementById("submitBtn")
let toDoInput = document.getElementById("toDoInput");
let taskL = document.getElementById('taskList');
function addFunc() {
    let todoElement = document.createElement("div")
    todoElement.innerHTML =
        `<input value="${toDoInput.value}" disabled id="inputID" class="rounded w-50 mx-3">
    <button onclick="editFunc()" id="test12" class="btn mb-2 btn-warning">EDIT</button>
    <button onclick="checkFunc()" id="test123" class="btn mb-2 btn-success">CHECK</button>
    <button onclick="deleteFunc(inputID)" class="btn mb-2 btn-danger">DELETE</button>`
    inputText.appendChild(todoElement)
}
function editFunc() {
    if (inputID.disabled) {
        inputID.disabled = false
    } else {
        inputID.disabled = true
    }
}
function checkFunc() {
    if (inputID.style.backgroundColor != "green") {
        inputID.style.backgroundColor = "green"
    } else {
        inputID.style.backgroundColor = "white"
    }
}
function deleteFunc(element) {
    element.parentNode.removeChild(element);
}
submitBtn.addEventListener("click", addFunc)