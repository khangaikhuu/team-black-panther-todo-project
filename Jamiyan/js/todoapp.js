let varDate = new Date();
document.getElementById("date").innerHTML = `Он сар өдөр: ${varDate.getFullYear()}-${varDate.getMonth() + 1}-${varDate.getDate()}`

let todoList = document.getElementById("todoList");
let todoCreate = document.getElementById("todo-create");
let add = document.getElementById("add");
add.addEventListener("click", () => {

    let div = document.createElement("div");
    div.classList.add('divStyle');
    todoList.appendChild(div);

    let input = document.createElement("input");
    input.value = todoCreate.value;
    input.disabled = true;
    input.classList.add('inputStyle')
    div.appendChild(input);

    let button1 = document.createElement("button");
 
    button1.classList.add('buttonStyle1');
    div.appendChild(button1);
    button1.addEventListener("click", () => {
        input.disabled = false;
        button1.style = "background-image:url('./img/save.svg');"
        button1.addEventListener("click", () => {
            input.disabled = true;
        })
    })

    let button2 = document.createElement("button");

    button2.classList.add('buttonStyle2');
    div.appendChild(button2);
    button2.addEventListener("click", () => {
        input.disabled = true;
        input.style = "text-decoration: line-through;";
    })

    let button3 = document.createElement("button");
    button3.classList.add('buttonStyle3');
    div.appendChild(button3);

    button3.addEventListener("click", () => {
        div.remove();
    })

})
//     let todoElement = document.createElement('div');
//     todoElement.id = 'test'
//     todoElement.innerHTML = `TODO <input> <button  onclick="editFunc()">EDIT</button> <button onclick="saveFunc()">SAVE</button> <button  onclick="deleteFunc(this)">DELETE</button>` // this gedeeg n ooriigoo ogj baigaa gesen ug
//     todoList.appendChild(todoElement);

// })

// function editFunc() {
//     console.log('edit button clicked');
// }

// function saveFunc() {
//     console.log('save button clicked');
// }
// function deleteFunc(even) {
//     console.log(even)
//     console.log(even.parentNode)
//     even.parentNode.remove(even);
//     console.log('delete button clicked');
// }


