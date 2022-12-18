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
    input.innerHTML = ` <input id="inputid" class="border border-warning border-3 p-3" style="width: 300px; height: 50px; background-color: #f9f9f9;" value="${todoCreate.value}" disabled> 

    <button id="btn1" onclick="edit(this)" style="width: 50px; height: 50px;margin-left:-6px; background-color: #f9f9f9;" class="border border-warning"><i class="fa-solid fa-pen"></i></button> 

    <button id="btn2" onclick="save(this)" style="width: 50px; height: 50px;margin-left:-6px;  background-color: #f9f9f9;" class="border border-warning"><i class="fa-solid fa-check"></i></button> 

    <button id="btn3" onclick="ustgah(this)" style="width: 50px; height: 50px;margin-left:-6px; background-color: #f9f9f9;" class="border border-warning"><i class="fa-solid fa-trash"></i></button>`;

    todolist.appendChild(input);

    // let editbutton = document.getElementById('btn1');
    // editbutton.addEventListener ('click', () =>{
    //     console.log('edit clicked');
    //     input.contentEditable = true;
    // })

    // let removebtn = document.getElementById('btn3');
    // removebtn.addEventListener('click', ()=>{
    //     todolist.removeChild(input);
    // })

})

const edit = (e) =>{
    let child = document.getElementById('inputid');
    child.removeAttribute("disabled")
}
const save = (e) => {
    let p = document.getElementById('inputid');
    p.disabled = true;
}
const ustgah = (e) => {
    console.log("target", e.parentNode.parentNode);
    const parent = e.parentNode.parentNode;
    const child = e.parentNode;
    parent.removeChild(child);
    console.log('parent', parent);
}










// console.log(todolist)

