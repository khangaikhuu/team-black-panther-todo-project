const now = new Date();
let Year = now.getFullYear()
let Month=now.getMonth()
let Day=now.getDay()

document.getElementById("myDate").innerHTML = `Он Сар Өдөр : ${Year} - ${Month} - ${Day}` ;
document.getElementById("myDate").style = "color:aqua; text-align:center; font-size:18px;"



let button = document.getElementById("button-addon2")

let search = document.getElementById("searchInput")

function editFunc(event){
    console.log("edit clicked");
    event.parentNode.childNodes[0].disabled=false;
}

let searchI = document.getElementById("searchI")
function deleteFunc(event){
    console.log("delete clicked");
    event.parentNode.remove(event)
}
function corFunc(event){
    console.log("Correct clicked");
    event.parentNode.childNodes[0].disabled=true;
}

button.addEventListener("click",() => {
    console.log("add clicked");
    console.log(search.value);
    // console.log(button)  
    let input = document.createElement('p');
    input.innerHTML = `<input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" id="searchI" disabled value=${search.value}><button class="btn btn-outline-secondary" type="button" id="edit" onclick="editFunc(this)" >Edit</button><button class="btn btn-outline-secondary" type="button" onclick="corFunc(this)">Correct</button><button class="btn btn-outline-secondary" type="button" id="dlt" onclick="deleteFunc(this)">Delete</button>`;

    list.appendChild(input);
    
    // let dlt = document.getElementById("dlt")
    // dlt.addEventListener("click", () => {
    //     input.remove();
    // })



});

console.log("test")

