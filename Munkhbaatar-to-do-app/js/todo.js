date();

function date() {
    let date = new Date();

    const [month, day, year] = [
        date.getMonth() + 1,
        date.getDate(),
        date.getFullYear(),
    ];

    let myDate = (`Он сар өдөр: ${year}-${month}-${day} `);
    document.getElementById('date').innerHTML = myDate;
}


let addTaskBtn = document.getElementById('addBtn');
// let editTaskBtn = document.getElementById('editBtn');

let toDoList = [];
let newTask = document.getElementById('newTask');

addTaskBtn.addEventListener('click', () => {
    // console.log('new task = ' + newTask.value);
    let p = document.createElement('p');
    p.id = "task-" + toDoList.length + 1;
    p.innerHTML = passValue(newTask.value);
    document.getElementById('list').appendChild(p);
    
    toDoList.push(newTask.value);
    document.getElementById('counter').innerHTML = `${toDoList.length} жагсаалт`;
    console.log(toDoList);

})

// editTaskBtn.addEventListener('click', () => {
//     // console.log('edit button clicked');
// })


let deleteTaskBtn = document.getElementById('removeBtn');
console.log(deleteTaskBtn);

deleteTaskBtn.addEventListener('click', deleteTask)

function deleteTask() {
    let id = deleteTaskBtn.id;
    console.log('id = ' + id);
    console.log('delete button clicked');
    const element = document.getElementById(`task-${id}`);
}



function passValue (value, count) {

    let n = `<div class="input-group mb-3">
            <input type="text" class="form-control" name="task" value=${value} id="input" disabled>
            <button class="btn btn-warning btn-outline-secondary" type="button" id="editBtn">+ Засах</button>
            <button class="btn btn-warning btn-outline-secondary" type="button" id="saveBtn" disabled> Хадгалах</button>
            <button class="btn btn-warning btn-outline-secondary" type="button" id="removeBtn-${count}" onclick=deleteTask()> Устгах</button>
            </div>`
    return n;
}