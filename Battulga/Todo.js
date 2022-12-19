
let now = new Date()
document.getElementById('date').innerHTML = `Он сар өдөр: ${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} `



let button = document.getElementById('plusbtn')
let todoList = document.getElementById('todo-list')
let todoCreate = document.getElementById('todoCreate')


button.addEventListener('click', () => {
    console.log('add clicked')
    console.log(todoCreate.value)
    let input = document.createElement('p')     
    input.setAttribute('id','createdTodo')
    input.innerHTML= `<div class=todos> <div class=todo-text > ${todoCreate.value} </div> <div class=btns> <button>Edit</button> <button>Done</button> <button>Delete</button> </div> </div>`
    todoList.appendChild(input);
})  










