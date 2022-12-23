console.log('Day - 27');

// const animeResult = fetch('https://api.jikan.moe/v4/random/anime')
// console.log(animeResult);

// animeResult.then(result => {
//     console.log(result);
//     console.log(result.url);
// })


// JSON format

const employeesResult = fetch('http://127.0.0.1:5504/B.Bilguun-ToDo-App/Day%20-%2027/data/employees.json')
console.log(employeesResult);

employeesResult.then(result => {
    console.log(result);
})

// employeesResult
//     .then((result) => result.json())
//     .then((json) => {
//         const employees = document.getElementById("emps");
//         console.log(employees);
//         console.log(json);
//         console.log(json.employees);

//         const c = json.employees[0]
//         console.log(c);

//         for (let i = 0; i < json.employees.length ; i++){
//             employees.children[i].innerHTML = json.employees[i].firstName
//         }
//     })


// employeesResult
//     .then((result) => result.json())
//     .then((json) => {

//     for (let i = 0 ; i < json.employees.length; i++){

//         const table = document.getElementById("emp-table");
//         const empNr = document.createElement("td");
//         const empFirstName = document.createElement("td");
//         const empLastName = document.createElement("td");
//         const empPosition = document.createElement("td");
//         const empRow = document.createElement("tr");
//         table.appendChild(empRow);
        
//         empNr.textContent = i + 1;
//         empFirstName.textContent = json.employees[i].firstName;
//         empLastName.textContent = json.employees[i].lastName;
//         empPosition.textContent = json.employees[i].position;
        

//         empRow.appendChild(empNr);
//         empRow.appendChild(empFirstName);
//         empRow.appendChild(empLastName);
//         empRow.appendChild(empPosition);
//     }

//     })

employeesResult
    .then((result) => result.json())
    .then((json) => {

        // array map function. Array өөрийгөө loop хийдэг function
        json.employees.map((element,index) => {

            const table = document.getElementById("emp-table");
            const empNr = document.createElement("td");
            const empFirstName = document.createElement("td");
            const empLastName = document.createElement("td");
            const empPosition = document.createElement("td");
            const empRow = document.createElement("tr");
            table.appendChild(empRow);
            
            empNr.textContent = index + 1;
            empFirstName.textContent = element.firstName;
            empLastName.textContent = element.lastName;
            empPosition.textContent = element.position;
            
            empRow.appendChild(empNr);
            empRow.appendChild(empFirstName);
            empRow.appendChild(empLastName);
            empRow.appendChild(empPosition);
        })
    })
