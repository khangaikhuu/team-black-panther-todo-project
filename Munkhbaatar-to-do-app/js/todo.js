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
let toDoListArray = [];
let newTask = document.getElementById('newTask');

addTaskBtn.addEventListener('click', () => {
    if(newTask.value == "") {
        alert("Task хоосон байна.");
    }
    else {
        let p = document.createElement('p');
        let randomID = Math.floor((Math.random()*1000))
        p.id = "task-" + randomID;
        p.innerHTML = passValue(newTask.value, randomID);
        document.getElementById('list').appendChild(p);
        toDoListArray.push([newTask.value, "task-"+randomID, false]);  // task + ID + done(true or false)
        document.getElementById('counter').innerHTML = `Нийт ${toDoListArray.length} task`;
        countDoneTask();
        // console.log(toDoListArray);
        let newTaskInput = document.getElementById('newTask');
        newTask.value = '';
        console.log(toDoListArray);
    }
})


function countDoneTask() {
    let counter = 0;
    for(let i = 0; i < toDoListArray.length; i++) {
        if(toDoListArray[i][2] == true ) {
            counter++;
        }
    }
    document.getElementById('doneCounter').innerHTML = `Хийсэн ${counter} task`;
}


function doneFunc(event) {
    document.getElementById(event.id).innerHTML.style = `<i class="bi bi-save"></i>`
    if(event.parentNode.childNodes[1].style.textDecoration == 'line-through') {
        event.parentNode.childNodes[1].style.textDecoration  = `none`;
        event.parentNode.childNodes[1].style.color  = `black`;
        arrDoneTask(event);
    } else {
        event.parentNode.childNodes[1].style.textDecoration  = `line-through`;
        event.parentNode.childNodes[1].style.color  = `red`;
        arrDoneTask(event);
    }
    countDoneTask()
    console.log("After done task. Array list = ");
    printTaskArrayList();
}

function editFunc(event) {
    if(event.parentNode.childNodes[1].disabled)  { // check if input field is disabled.  
        event.parentNode.childNodes[1].disabled = false;
        document.getElementById(event.id).innerHTML = `<i class="bi bi-inbox-fill"></i>`
    } else {   // input field is not disabled. 
        event.parentNode.childNodes[1].disabled = true; 
        document.getElementById(event.id).innerHTML = `<i class="bi bi-pencil-fill"></i>`
        arrEditTask(event);
    }
    console.log("After editing task. Array list = ");
    printTaskArrayList();
}

function deleteFunc(event) {
    event.parentNode.parentNode.remove(event);
    arrRemoveTask(event.parentNode.parentNode.id);
    document.getElementById('counter').innerHTML = `Нийт ${toDoListArray.length} task`;
}


// Once task is removed, remove it from array list.
function arrRemoveTask(id) {    
    console.log("removed id = " + id)
    for(let i = 0; i < toDoListArray.length; i++) {
        if(id == toDoListArray[i][1] ) {
            toDoListArray.splice(i, 1)
        }
    }
    console.log("After removing task. Array list = ");
    printTaskArrayList();
}


// Once input is edited, make change to the Array.
function arrEditTask(e) {
    console.log("Edit id = " + e.parentNode.parentNode.id)
    let id = e.parentNode.parentNode.id;
    for(let i = 0; i < toDoListArray.length; i++) {
        if(id == toDoListArray[i][1] ) {
            toDoListArray[i][0] = e.parentElement.children[0].value;
        }
    }
}

// Once task is done, make change to the Array.
function arrDoneTask(e) {
    console.log("Done id = " + e.parentNode.parentNode.id)
    let id = e.parentNode.parentNode.id;
    for(let i = 0; i < toDoListArray.length; i++) {
        if(id == toDoListArray[i][1] ) {
            if(toDoListArray[i][2] == true) {
                toDoListArray[i][2] = false;
            } else {
                toDoListArray[i][2] = true;
            }
        }
    }
}

function printTaskArrayList() {
    console.log(toDoListArray);
}

function passValue (value, count) {
    let n = `<div class="input-group mb-3">
            <input type="text" class="form-control" name="task" value=${value} id="input" disabled>
            <button class="btn btn-warning" type="button" id="editBtn-${count}" onclick="editFunc(this)"> <i class="bi bi-pencil-fill"></i></button>
            <button class="btn btn-success" type="button" id="doneBtn-${count}" onclick="doneFunc(this)"> <i class="bi bi-check2"></i> </button>
            <button class="btn btn-danger" type="button" id="removeBtn-${count}" onclick="deleteFunc(this)"> <i class="bi bi-trash3-fill"></i></button>
            </div>`
    return n;
}