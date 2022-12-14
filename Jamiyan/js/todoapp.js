let varDate = new Date();
document.getElementById("date").innerHTML = `Он сар өдөр: ${varDate.getFullYear()}-${varDate.getMonth() + 1}-${varDate.getDate()}`

let todoCreate = document.getElementById("todo-create");
let button = document.getElementById("button");
button.addEventListener("click", () => {

    let input = document.createElement("p");
    input.innerHTML = ` <input value=${todoCreate.value}> `;
    input.classList.add('inputStyle');
    document.getElementById("todoList").appendChild(input);
     
    let button1 = document.createElement("button");
    button1.textContent = ` test`;
    button1.classList.add('button1Style');
    input.appendChild(button1);

    
})




