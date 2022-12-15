let varDate = new Date();
document.getElementById("date").innerHTML = `Он сар өдөр: ${varDate.getFullYear()}-${varDate.getMonth() + 1}-${varDate.getDate()}`

let todoList = document.getElementById("todoList");
let todoCreate = document.getElementById("todo-create");
let add = document.getElementById("add");
add.addEventListener("click", () => {

    //     let div = document.createElement("div");
    //     div.classList.add('inputStyle');
    //     todoList.appendChild(div);

    //     let input = document.createElement("input");
    //     input.value = todoCreate.value;
    //     input.disabled = true;
    //     input.classList.add('inputClass')
    //    div.appendChild(input);

    //     let button1 = document.createElement("img");
    //     button1.src = `./img/pen.svg`;
    //     button1.classList.add('buttonStyle');
    //    div.appendChild(button1);

    //     let button2 = document.createElement("img");
    //     button2.src = `./img/correct.svg`;
    //     button2.classList.add('buttonStyle');
    //     div.appendChild(button2);

    //     let button3 = document.createElement("img");
    //     button3.src = `./img/bin.svg`;
    //     button3.classList.add('buttonStyle');
    //      div.appendChild(button3);

    //     button1.addEventListener("click", () => {
    //         input.disabled = false;
    //         button1.src = `./img/save.svg`;
    //     })
    //     button2.addEventListener("click", () => {
    //         input.disabled = true;
    //         input.style = "text-decoration: line-through";
    //     })

    let randomIndex = Math.floor(Math.random() * 100);
    let todoElement = document.createElement('div');
    todoElement.id = 'test'
    todoElement.innerHTML = `TODO <input> <button id="edit_${randomIndex}" onclick="editFunc()">EDIT</button> <button onclick="saveFunc()">SAVE</button> <button id="${randomIndex}" onclick="deleteFunc(this)">DELETE</button>` // this gedeeg n ooriigoo ogj baigaa gesen ug
    todoList.appendChild(todoElement);

})

function editFunc(){
    console.log('edit button clicked');
}

function saveFunc(){
    console.log('save button clicked');
}
function deleteFunc(even){
    console.log(even)
    console.log(even.parentNode)
    even.parentNode.remove(even);
    console.log('delete button clicked');
}


