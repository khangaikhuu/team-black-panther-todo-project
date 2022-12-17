let date = document.getElementById("date");
let now = new Date();
date.innerHTML = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`

let addButton = document.getElementById("addButton");
let addInput = document.getElementById("addInput");
let toDo = document.getElementById("toDo");
let taskCounting = document.getElementById("taskCounter");

function deleteFunc(event){
    event.parentNode.remove(event);
};

let taskAmount = [];
addButton.addEventListener("click", () => {
    let list = document.createElement("p");
    list.innerHTML = `<input id="listInput" style="border: none; background-color: white" value="${addInput.value}" disabled>

     <button id="editButton" style="border-radius: 10px; border-color: yellow; background-color: white"><i class="fa-solid fa-pen-to-square"></i></button>

     <button id="saveButton" style="border-radius: 10px; border-color: yellow;  background-color: white"><i style="color: green" class="fa-solid fa-check"></i></button> 

     <button style="border-radius: 10px; border-color: yellow;  background-color: white" onclick="deleteFunc(this)"><i style="color: red" class="fa-regular fa-trash-can"></i></button>`;
    toDo.appendChild(list);
    list.style = "border: 1px solid orange; border-radius: 20px; padding: 15px";
    
    taskAmount.push(list);
    taskCounting.innerHTML = `${taskAmount.length}-таск үлдлээ.`;

    let listInput = document.getElementById("listInput");
    let editButton = document.getElementById("editButton")
    editButton.addEventListener("click", () => {
        listInput.disabled = false;
    });

    let saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", () => {
        listInput.disabled = true;
    });
    addInput.value = "";
    console.log(taskCounting);
});