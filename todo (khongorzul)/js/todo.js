let date = document.getElementById("date");
let now = new Date();
date.innerHTML = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`

let addButton = document.getElementById("addButton");
let addInput = document.getElementById("addInput");
let toDo = document.getElementById("toDo");


addButton.addEventListener("click", () => {
    let input = document.createElement("p");
    console.log(addInput.value)
    input.innerHTML = `<input id="listInput" style="border: none; background-color: white" value="${addInput.value}" disabled>
     <button id="editButton" style="border-radius: 10px; border-color: yellow; background-color: white"><i class="fa-solid fa-pen-to-square"></i></button>
     <button id="checkButton" style="border-radius: 10px; border-color: yellow;  background-color: white"><i style="color: green" class="fa-solid fa-check"></i></button> 
     <button id="trashButton" style="border-radius: 10px; border-color: yellow;  background-color: white"><i style="color: red" class="fa-regular fa-trash-can"></i></button>`;
    toDo.appendChild(input);
    input.style = "border: 1px solid orange; border-radius: 20px; padding: 15px";

    let editButton = document.getElementById("editButton");
    let listInput = document.getElementById("listInput");
    editButton.addEventListener("click", () => {
        listInput.disabled = false;
        editButton.innerHTML = `<i class="fa-solid fa-file-contract"></i>`
    });

    let checkButton = document.getElementById("checkButton");
    checkButton.addEventListener("click", () => {
        
    })
});
