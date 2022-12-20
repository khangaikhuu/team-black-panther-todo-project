let date = document.getElementById("date");
let now = new Date();
date.innerHTML = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

let addButton = document.getElementById("addButton");
let addInput = document.getElementById("addInput");
let toDo = document.getElementById("toDo");
let taskCounting = document.getElementById("taskCounter");
let doneCounting = document.getElementById("doneTasks");
let completed = document.getElementById("completed");



function editFunc(event){
    let editInput = event.parentNode.firstElementChild;
    if(editInput.disabled == true){
        editInput.disabled = false;
        event.innerHTML = `<i class="fa-solid fa-inbox"></i>`;
    } else{
        editInput.disabled = true;
        event.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    }
};

function checkFunc(event){
    let done = event.parentNode;
    completed.appendChild(done);
    taskAmount.length = taskAmount.length - 1;
    if(taskAmount.length == 0){
        taskCounting.innerHTML = "";
    }
    taskCounting.innerHTML = `${taskAmount.length}-task үлдлээ.`;

    doneTasks.push(1);
    doneCounting.innerHTML = `${doneTasks.length}-task хийсэн.`;
};

function deleteFunc(event){
    event.parentNode.remove(event);
    taskAmount.length = taskAmount.length - 1;
    if(taskAmount.length == 0){
        taskCounting.innerHTML = "";
    }
    taskCounting.innerHTML = `${taskAmount.length}-task үлдлээ.`;
};

let doneTasks = [];
let taskAmount = [];
addButton.addEventListener("click", () => {
    if(addInput.value == ""){
        alert("Task хоосон байна!");
    }
    else{
    let list = document.createElement("p");
    list.innerHTML = `<input id="listInput" style="border: none; background-color: white" value="${addInput.value}" disabled>

     <button id="editButton" style="border-radius: 10px; border-color: yellow; background-color: white" onclick="editFunc(this)">
     <i class="fa-solid fa-pen-to-square"></i>
     </button>

     <button id="saveButton" style="border-radius: 10px; border-color: yellow;  background-color: white" onclick="checkFunc(this)">
     <i style="color: green" class="fa-solid fa-check"></i>
     </button> 

     <button style="border-radius: 10px; border-color: yellow;  background-color: white" onclick="deleteFunc(this)">
     <i style="color: red" class="fa-regular fa-trash-can"></i>
     </button>`;

    toDo.appendChild(list);
    
    taskAmount.push(list);
    taskCounting.innerHTML = `${taskAmount.length}-task үлдлээ.`;

    addInput.value = "";
    }
});

document.addEventListener("keypress", (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;

    if(keyCode === 13){
        addButton.click();
    }
});