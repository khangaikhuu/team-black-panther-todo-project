const now = new Date();
let Year = now.getFullYear()
let Month=now.getMonth()
let Day=now.getDay()

document.getElementById("myDate").innerHTML = `Он Сар Өдөр : ${Year} - ${Month} - ${Day}` ;
document.getElementById("myDate").style = "color:aqua; text-align:center; font-size:18px;"



let button = document.getElementById("button-addon2")

let search = document.getElementById("searchInput")

button.addEventListener("click",() => {
    console.log("add clicked");
    console.log(search.value);
    // console.log(button)  
    let input = document.createElement('p');
    input.innerHTML = `${search.value} <input value=${search.value}><button id="edit">Edit</button><button>Correct</button><button id="dlt" >Delete</button>`;

    list.appendChild(input);
    let ed = document.getElementById("edit")
    
    console.log(ed)
    let dlt = document.getElementById("dlt")
    dlt.addEventListener("click", () => {
        const dele = document.getElementById(dlt);
        element.remove(input);
    })
});

