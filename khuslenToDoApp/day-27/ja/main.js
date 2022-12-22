// data-g duudahad ashigladag 

// const animeResult = fetch("https://api.jikan.moe/v4/random/anime");
// console.log(animeResult);
// animeResult.then(result => {
//     console.log(result)
//     console.log(result.url)
// })

// Data uusgeh JSON format

const employees = fetch("http://127.0.0.1:5504/khuslenToDoApp/day-27/data/employees.json");
console.log(employees);
employees.then(result => {
    console.log(result)
    console.log(result.url)
})

employees
    .then((result) => result.json())
    .then((json) => {
        console.log(json)
        const emplo = document.getElementById("emps");
        console.log(json.employees[0])


        // for (let i = 0; i < json.employees.length; i++) {
        //     let table = document.getElementById("tblHead");
        //     let tblRow = document.createElement("tr");
        //     let tblD = document.createElement("td");
        //     let tblFirstname = document.createElement("td");
        //     let tblLastname = document.createElement("td");
        //     let tblPosition = document.createElement("td");

        //     tblD.textContent = [i + 1];
        //     tblFirstname.textContent = json.employees[i].firstName;
        //     tblLastname.textContent = json.employees[i].lastName;
        //     tblPosition.textContent = json.employees[i].position

        //     table.appendChild(tblRow);
        //     tblRow.appendChild(tblD);
        //     tblRow.appendChild(tblFirstname);
        //     tblRow.appendChild(tblLastname);
        //     tblRow.appendChild(tblPosition);

        //     // table.innerHTML[i] = json.employees[i];

        //     console.log(table)
        // }
        json.employees.map((element, index) => {
            console.log(element)
            let table = document.getElementById("tblHead");
            let tblRow = document.createElement("tr");
            let tblD = document.createElement("td");
            let tblFirstname = document.createElement("td");
            let tblLastname = document.createElement("td");
            let tblPosition = document.createElement("td");

            tblD.textContent = index + 1;
            tblFirstname.textContent = element.firstName;
            tblLastname.textContent = element.lastName;
            tblPosition.textContent = element.position

            table.appendChild(tblRow);
            tblRow.appendChild(tblD);
            tblRow.appendChild(tblFirstname);
            tblRow.appendChild(tblLastname);
            tblRow.appendChild(tblPosition);
        })
    })
//  array dotroo uuriiguu loop hiideg map function baidag, uuniig ashiglaval for loop ashiglah shaardlaga garahgue