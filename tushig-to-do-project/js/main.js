// On sar udur haruulj bga heseg
date();

function date() {
    let now = new Date();
    let myDate = document.getElementById('date');
    myDate.innerHTML = now.getDate();
    myDate.innerHTML =`${now.getFullYear()} - ${now.getMonth() + 1} - ${now.getDate()}`;
}

// Nemex button der darhad door jagsaalt heseg der bicsen value utga n garch irj bga heseg
let ToDo = document.getElementById("ToDo");

let btnInput = document.getElementById("btninput");
let addInput = document.getElementById("addinput");
let todoList = document.getElementById("todo-list");

btnInput.addEventListener("click" , () => {
    let input = document.createElement("p");
    input.innerHTML = `<input id="editinput" style="width: 200px;" value="${addInput.value}" disabled>
    <div class="btnbody"> 
        <button onclick="editinput"><i class="fa-solid fa-pen" id="edit-ico" ></i></button> 
        <button><i class="fa-solid fa-check"></i></button> 
        <button><i class="fa-solid fa-trash text-danger"></i></i></button>
    </div>`;
    
    todoList.appendChild(input);
    input.style = `display: flex;
                   gap: 15px; 
                   border: 1px solid orange; 
                   border-radius: 5px; 
                   padding: 25px; 
                   background-color: rgba(0, 0, 0, 0.04);`
                   

    let editIcon = document.getElementById("edit-ico");
    let editInput = document.getElementById("editinput");
    editIcon.addEventListener("click" , () => {
       editInput.disabled = false;
       editIcon = `<i class="fa-solid fa-floppy-disk"></i>`
    })
})

