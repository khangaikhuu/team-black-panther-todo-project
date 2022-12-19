function monthDate(){
    let now = new Date();
    let yy = now.getFullYear();
    let mm = now.getMonth() + 1;
    let day = now.getDate();
    let date1 = document.getElementById('date');
    date1.innerHTML = `Он сар өдөр: ${yy}-${mm}-${day}`;
}

monthDate()

let todoCreate = document.getElementById('todo-create')

let button = document.getElementById('btn');

let todolist = document.getElementById('todo-list');
button.addEventListener('click', ()=>{
    console.log('add clicked')
    console.log(todoCreate.value)
    let input = document.createElement('p');
    input.innerHTML = `<input id="inputid"  class="border border-warning border-3 p-3" style="width: 300px; height: 50px; background-color: #f9f9f9;" value="${todoCreate.value}" disabled> 

    <button onclick="edit(this)" style="width: 50px; height: 50px;margin-left:-6px; background-color: #f9f9f9;" class="border border-warning"><i class="fa-solid fa-pen"></i></button> 

    <button onclick="save(this)" style="width: 50px; height: 50px;margin-left:-6px;  background-color: #f9f9f9;" class="border border-warning"><i class="fa-solid fa-check"></i></button> 

    <button onclick="ustgah(this)" style="width: 50px; height: 50px;margin-left:-6px; background-color: #f9f9f9;" class="border border-warning"><i class="fa-solid fa-trash"></i></button>`;

    todolist.appendChild(input);

})



const edit = (e) =>{
    console.log("edit", )
    let child = e.parentNode.firstElementChild;
    child.removeAttribute("disabled")
    e.classList.toggle()
}



const save = (e) => {
    let p = e.parentNode.firstElementChild;
    p.disabled = true;
    console.log('save button', p)
}

const ustgah = (e) => {
    console.log("target", e.parentNode.parentNode);
    const parent = e.parentNode.parentNode;   //div
    const child = e.parentNode;               //p
    parent.removeChild(child);
    console.log('parent', parent);
}






// function taskCount(e){
//     let count1 = document.getElementById('count')
//     // count1.innerHTML = `${todo} task үлдлээ`
// }

// taskCount();










