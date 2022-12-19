// Date ------------------------------------------------------------

let now = new Date;
document.getElementById(myTimer.innerHTML = 'Он сар өдөр' + ' ' + now.getFullYear() + '-' + now.getMonth() + '-' + now.getDay())

let task = document.getElementById('list');
console.log(task.value)



// add function ------------------------------------------------------------

let toDoArr = [];

function addTask() {
    // document.getElementById('taskList').innerHTML = task.value + 'delete';
    let p = document.createElement('div')
    p.id = toDoArr.length + 1
    p.style = ""
    p.className = "input-group my-2"

    // p.innerHTML = task.value + ' <button>edit</button>' + ' <button>done</button>' + ' <button id="del-btn">del</button>';
    p.innerHTML = `
    <input value=${task.value} class="form-control" disabled> 
    <button id="edit-btn" onclick="editFunc(this)"  class="btn btn-warning"><i class="bi bi-pencil"></i></button> 
    <button onclick="doneFunc(this)" class="btn btn-success"><i class="bi bi-check-circle"></i></button>  
    <button id="del-btn-${toDoArr.length + 1} " onclick="delP(this)" class="btn btn-danger"><i class="bi bi-trash"></i></button>
    `;
    toDoArr.push(task.value)
    console.log(toDoArr);

    document.getElementById('listCon').appendChild(p);


    document.getElementById('taskNum').innerHTML = `${toDoArr.length} task uldlee` //  ----- task number ---------

    // const element = document.getElementById("container");
    // element.appendChild(listAdded);
}

let button = document.getElementById('add');

button.addEventListener('click', addTask);



// delete function ------------------------------------------------------------

// let delButton = document.getElementById('del-btn-1');

// delButton.addEventListener('click', delP);


function delP(event) {
    console.log('deleted', event);
    // const element = document.getElementById('1');
    console.log(toDoArr.length);
    event.parentNode.remove(event)
    // document.getElementById('listCon').removeChild(event);
    // document.getElementById(`${toDoArr.length}`).remove();
    // element.removeChild(list.firstElementChild);

    toDoArr.splice(0, 1);
    document.getElementById('taskNum').innerHTML = `${toDoArr.length} task uldlee`
}




// edit function ------------------------------------------------------------


function editFunc(event) {
    // document.getElementById('1').disabled = false;
    // console.log('clicked');
    // event.parentNode.getElementByTagName(input).disabled = false;
    // document.getElementsByTagName(input).disabled = false;
    // console.log(document.getElementsByTagName(input));
    console.log(event.parentNode.childNodes);
    event.parentNode.childNodes[1].disabled = false;
}

// let editButton = document.getElementById('edit-btn')
// editButton.addEventListener('click', editFunc);





// done function ------------------------------------------------------------


function doneFunc(event) {
    // document.getElementById('1').disabled = false;
    // console.log('clicked');
    // event.parentNode.getElementByTagName(input).disabled = false;
    // document.getElementsByTagName(input).disabled = false;
    // console.log(document.getElementsByTagName(input));
    console.log(event.parentNode.childNodes);
    event.parentNode.childNodes[1].disabled = true;
}