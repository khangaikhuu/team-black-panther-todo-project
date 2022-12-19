
let now = new Date()
let myTimer = document.getElementById('date');
let fullYear = now.getFullYear()
let month = now.getMonth() + 1
let day = now.getDate()


myTimer.innerHTML = `Он сар өдөр: ${fullYear}-${month}-${day}`


let todoCreate = document.getElementById('taskInput');
let clickButton = document.getElementById('addButton');
console.log(clickButton);

function deleteFunc(event){
    console.log(event);

    console.log(event.parentNode.parentNode);
    let pElement = event.parentNode;
    let todoList = pElement.parentNode;
    pElement.remove(event);
    console.log("delete button clicked");
}

clickButton.addEventListener('click', () => {
    console.log('add clicked');
    console.log(todoCreate.value);
    let randomIndex = Math.floor(Math.random()*100);
    let todoList = document.getElementById('todo-list');
    console.log(todoList);

    let input = document.createElement('p');
    input.innerHTML = `<input value = ${todoCreate.value} disabled> 
                        <button><i class="bi bi-pen-fill"></i></button> 
                        <button><i class="bi bi-check-lg"></i></button> 
                        <button id="${randomIndex}" onclick="deleteFunc(this)"><i class="bi bi-trash-fill"></i></button> `

    todoList.appendChild(input);

});






