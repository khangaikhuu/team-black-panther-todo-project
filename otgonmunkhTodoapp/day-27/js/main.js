console.log("day-27");
const animalResult = fetch('https://api.jikan.moe/v4/random/anime');
console.log(animalResult);
animalResult.then(result => {
    console.log(result);
    console.log(result.url);
})

//JSON format

const empResult = fetch('http://127.0.0.1:5504/otgonmunkhTodoapp/day-27/data/employees.json');
console.log(empResult);
empResult
    .then((result) => result.json())
    .then((json) => {
        const employees = document.getElementById("emps");
        const first = document.getElementById("first-name")
        const last = document.getElementById("last-name")
        const position = document.getElementById("position")
        position.textContent = json.employees[0].position;
        last.textContent = json.employees[0].lastName;
        first.textContent = json.employees[0].firstName;
        console.log(employees);
        console.log("json data => ", json);
        console.log(json.employees[0]);

        // const employees = document.getElementById("emps");
        // const first = document.getElementById("first-name")
        // const last = document.getElementById("last-name")
        // const position = document.getElementById("position")
        // position.textContent = json.employees[0].position;
        // last.textContent = json.employees[0].lastName;
        // first.textContent = json.employees[0].firstName;
        // console.log(employees);
        // console.log(json);
        // console.log(json.employees[0]);
     

        //array map


json.employees.map((element, index) => {
   

    const tbodyDom = document.getElementById("empBody")
    const empRow = document.createElement("tr");

    const empNr = document.createElement("td");
    const empFirstName = document.createElement("td")
    const empLastName = document.createElement("td")
    const empPosition = document.createElement("td")
  
    empNr.textContent = index + 1;
    empFirstName.textContent = element.firstName
    empLastName.textContent = element.lastName
    empPosition.textContent = element.position
    

    // html location
    empRow.appendChild(empNr)
    empRow.appendChild(empFirstName)
    empRow.appendChild(empLastName)
    empRow.appendChild(empPosition)
    


    tbodyDom.appendChild(empRow);
})
   
    //    for(let i = 0; i < json.employees.length; i++){
    //     console.log('json length', json.employees[i]);
    //     const tbodyDom = document.getElementById("empBody")
    //     const empRow = document.createElement("tr");

    //     const empNr = document.createElement("td");
    //     const empFirstName = document.createElement("td")
    //     const empLastName = document.createElement("td")
    //     const empPosition = document.createElement("td")
      
    //     empNr.textContent = i + 1;
    //     empFirstName.textContent = json.employees[i].firstName
    //     empLastName.textContent = json.employees[i].lastName
    //     empPosition.textContent = json.employees[i].position
        

    //     // html location
    //     empRow.appendChild(empNr)
    //     empRow.appendChild(empFirstName)
    //     empRow.appendChild(empLastName)
    //     empRow.appendChild(empPosition)
        


    //     tbodyDom.appendChild(empRow);
          
    //    }


})


// const get = async () => {
//     const res = await fetch("http://127.0.0.1:5500/js/callback/data.html");
//     const data = await res.json();
//     console.log(data);
//     };
//     get();

//json get serverees ugugdul awah huselt
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>console.log(data));

//json post serverruu ugugdul bichih huselt
fetch('https://dummyjson.com/products/add', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
title: 'BMW Pencil',
/* other product data */
})
})
.then(res => res.json())
.then((data)=>console.log(data));


//json put ugugdul shinecleh huselt
fetch('https://dummyjson.com/products/1', {
method: 'PUT', /* or PATCH */
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
title: 'iPhone Galaxy +1'
})
})
.then(res => res.json())
.then((data)=>console.log(data));

//json delete serverees ugugdul ustgah huselt

fetch('https://dummyjson.com/products/1', {
method: 'PUT', /* or PATCH */
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
title: 'iPhone Galaxy +1'
})
})
.then(res => res.json())
.then((data)=>console.log(data));

const examply = document.replaceChild("td", "p");
console.log(examply);