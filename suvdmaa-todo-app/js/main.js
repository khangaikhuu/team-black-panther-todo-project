function monthDate(){
    let now = new Date();
    let date1 = document.getElementById('date');
    date1.innerHTML = `Он сар өдөр: ${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}
monthDate()

let todoCreate = document.getElementById('todo-create')
let button = document.getElementById('btn');
let todolist = document.getElementById('todo-list');
let countTask = document.getElementById('count');

let task = []
button.addEventListener('click', ()=>{
    console.log('add clicked')
    console.log(todoCreate.value)
    let input = document.createElement('p');
    input.innerHTML = `<input class="border border-warning border-3 p-3" style="width: 300px; height: 50px; background-color: #f9f9f9;" value="${todoCreate.value}" disabled> 

    <button onclick="edit(this)" style="width: 50px; height: 50px;margin-left:-6px; background-color: #f9f9f9;" class="border border-3 border-warning">
    <i class="fa-solid fa-pen"></i>
    </button> 

    <button onclick="line(this)" style="width: 50px; height: 50px;margin-left:-6px;  background-color: #f9f9f9;" class="border border-3 border-warning">
    <i class="fa-solid fa-check"></i>
    </button> 

    <button onclick="deleteBtn(this)" style="width: 50px; height: 50px;margin-left:-6px; background-color: #f9f9f9;" class="border border-3  border-warning">
    <i class="fa-solid fa-trash"></i>
    </button>`;

    todolist.appendChild(input);

    // count task
    task.push(input);              //// !!!!!!!!!!
    countTask.innerHTML = `${task.length} task үлдлээ.`
    todoCreate.value = "";   // input deer bichsen ugee nemeh tovchluur darhad alga bolgood shuud placeholder bga ug ni garj irne
})

// edit button 
const edit = (e) =>{
    console.log("edit", )
    let child = e.parentNode.firstElementChild;
    if(child.disabled == true){    
        child.disabled = false;
        e.innerHTML = `<i class="fa-solid fa-lock-open"></i>`;
    } else {           
        child.disabled = true;
        e.innerHTML = `<i class="fa-solid fa-pen"></i>`;
    }
}

// edit line throught button
const line = (e) => {
    let p = e.parentNode.firstElementChild;
    p.style =  "text-decoration: line-through; width: 300px; height: 50px;"
    console.log("save button", p)
   
}

// edit delete
const deleteBtn = (e) => {
    console.log("target", e.parentNode.parentNode);
    const parent = e.parentNode.parentNode;   //div
    const child = e.parentNode;               //p
    parent.removeChild(child);
    console.log('parent', parent); 
}