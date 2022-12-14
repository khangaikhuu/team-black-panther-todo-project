
let now = new Date()
let myTimer = document.getElementById('date');
let fullYear = now.getFullYear()
let month = now.getMonth() + 1
let day = now.getDate()


myTimer.innerHTML = `Он сар өдөр: ${fullYear}-${month}-${day}`


let todoCreate = document.getElementById('taskInput');
let clickButton = document.getElementById('addButton');
console.log(clickButton);


clickButton.addEventListener('click', () => {
    console.log('add clicked');
    console.log(todoCreate.value);

    let todoList = document.getElementById('todo-list');
    console.log(todoList);

    let input = document.createElement('p');
    input.innerHTML = `<input value = ${todoCreate.value} disabled> 
                        <button><i class="bi bi-pen-fill"></i></button> 
                        <button><i class="bi bi-check-lg"></i></button> 
                        <button id="delete"><i class="bi bi-trash-fill"></i></button> `

    todoList.appendChild(input);


    /// buund ni ustgahgui bh yum hiih heregtei
    let del = document.getElementById('delete');
    console.log(del);

    del.addEventListener('click', () => {
        todoList.removeChild(input)
    })
});






