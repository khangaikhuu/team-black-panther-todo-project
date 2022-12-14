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

button.addEventListener('click', ()=>{
    console.log('add clicked')
    console.log(todoCreate.value)
    let input = document.createElement('p');
    input.innerHTML = ` <input class="border border-warning border-3 p-3" style="width: 300px; height: 50px" value="${todoCreate.value}" disabled> 
    <button id="btn1" style="width: 70px; height: 50px;margin-left:-10px;"><i class="fa-solid fa-pen"></i></button> 
    <button style="width: 70px; height: 50px;margin-left:-10px;"><i class="fa-solid fa-check"></i></button> 
    <button style="width: 70px; height: 50px;margin-left:-10px;"><i class="fa-solid fa-trash"></i></button>`;

    todolist.appendChild(input);


    let editbtn = document.getElementById('btn1')
    editbtn.removeAttribute('disabled');

})












let todolist = document.getElementById('todo-list');
console.log(todolist)

