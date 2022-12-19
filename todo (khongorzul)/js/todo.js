let date = document.getElementById("date");
let now = new Date();
date.innerHTML = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`

let addButton = document.getElementById("addButton");
let addInput = document.getElementById("addInput");
let toDo = document.getElementById("toDo");




function deleteFunc(event){
    event.parentNode.remove(event);
};

addButton.addEventListener("click", () => {
    let input = document.createElement("p");
    console.log(addInput.value);
    let randomIndex = Math.floor(Math.random()*100);
    input.innerHTML = `<input id="listInput_${randomIndex}" style="border: none; background-color: white" value="${addInput.value}" disabled>
     <button id="editButton" style="border-radius: 10px; border-color: yellow; background-color: white"><i class="fa-solid fa-pen-to-square"></i></button>
     <button id="checkButton_${randomIndex}" style="border-radius: 10px; border-color: yellow;  background-color: white" onclick="checkFunc()"><i style="color: green" class="fa-solid fa-check"></i></button> 
     <button id="${randomIndex}" style="border-radius: 10px; border-color: yellow;  background-color: white" onclick="deleteFunc(this)"><i style="color: red" class="fa-regular fa-trash-can"></i></button>`;
    toDo.appendChild(input);
    input.style = "border: 1px solid orange; border-radius: 20px; padding: 15px";

    let listInput = document.getElementById("listInput");
    let editButton = document.getElementById("editButton");
    editButton.addEventListener("click", () => {
        listInput.disabled = false;
    })
});
