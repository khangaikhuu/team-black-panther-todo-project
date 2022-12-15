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

    if(newTask.value == "") {
        alert("value is empty");
    }
    else {
        let p = document.createElement('p');
        p.id = "task-" + toDoList.length + 1;
        p.innerHTML = passValue(newTask.value, toDoList.length + 1);
        document.getElementById('list').appendChild(p);
        toDoList.push(newTask.value);
        document.getElementById('counter').innerHTML = `${toDoList.length} жагсаалт`;
        console.log(toDoList);
    }
    

})

function editFunc(event) {
    // event.parentNode.
    console.log(event.id);
    // console.log(event.parentNode.editBtn);
    event.parentNode.childNodes[1].disabled = false;
    // console.log(event.parentNode.childNodes[1].disabled);
    // document.querySelector('#event.id').disabled = false;
}

function deleteFunc(event) {
    // event.id; 
    // console.log(event.id);
    event.parentNode.remove(event);
    toDoList.splice(0,1);
    document.getElementById('counter').innerHTML = `${toDoList.length} жагсаалт`;
}



function passValue (value, count) {

    let n = `<div class="input-group mb-3">
            <input type="text" class="form-control" name="task" value=${value} id="input" disabled>
            <button class="btn btn-warning btn-outline-secondary" type="button" id="editBtn-${count}" onclick="editFunc(this)"> <i class="bi bi-pencil-fill"></i></button>
            <button class="btn btn-warning btn-outline-secondary" type="button" id="saveBtn" onclick="saveFunc(this)" disabled> <i class="bi bi-check2"></i> </button>
            <button class="btn btn-warning btn-outline-secondary" type="button" id="removeBtn" onclick="deleteFunc(this)"> <i class="bi bi-trash3-fill"></i></button>
            </div>`
    return n;
}