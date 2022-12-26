function startInterval() {
    let now = new Date()
    let myTimer = document.getElementById("myTimer")
    myTimer.innerHTML = `Today's date: ${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`
}
startInterval()

let inputText = document.getElementById("inputText")
let submitBtn = document.getElementById("submitBtn")
let toDoInput = document.getElementById("toDoInput");
let taskL = document.getElementById('taskList');


function addFunc() {
    if (toDoInput.value == 0) {
        alert("Your task cannot be empty.")
    } else {
        let todoElement = document.createElement("div")
        todoElement.id = "12"
        todoElement.innerHTML =
            `<input value="${toDoInput.value}" disabled id="inputID" class="rounded w-50 mx-3">
    <button onclick="editFunc()"  class="btn mb-2 ms-3 btn-warning">EDIT</button>
    <button onclick="checkFunc()"  class="btn mb-2 ms-3 btn-success">CHECK</button>
    <button onclick="deleteFunc(inputID)" class="btn mb-2 ms-3 btn-danger">DELETE</button>`
        inputText.appendChild(todoElement)
    }
    
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
        inputID.style.textDecorationLine = "line-through"
        inputID.style.color = "rgb(0, 255, 0)"
    } else {
        inputID.style.backgroundColor = "white"
        inputID.style.textDecorationLine = "none"
        inputID.style.color = "rgb(0,0,0)"
    }
}


function deleteFunc(element) {
    element.parentNode.removeChild(element);
}
submitBtn.addEventListener("click", addFunc)