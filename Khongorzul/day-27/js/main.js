// const animeResult = fetch("https://api.jikan.moe/v4/random/anime");
// console.log(animeResult);

// animeResult.then(result => {
//     console.log(result)
//     console.log(result.url)
// })



//JSON format

const employeesResult = fetch("http://127.0.0.1:5504/Khongorzul/day-27/data/employees.json") ;
console.log(employeesResult);

employeesResult.then(result => {
    console.log(result)
    console.log(result.url)
})

employeesResult
    .then((result) => result.json())
    .then((json) => {
        const employees = document.getElementById("emps");
        console.log(employees);
        console.log(json);
        console.log(json.employees);
        const firstName = document.getElementById("first-name");
        firstName.innerHTML = (json.employees[0].firstName);

        const lastName = document.getElementById("last-name");
        lastName.innerHTML = (json.employees[0].lastName);

        const position = document.getElementById("position");
        position.innerHTML = (json.employees[0].position);




        const tbody = document.getElementsByTagName("tbody")[0];

        //MAP
        json.employees.map((element, index) => {
            const tr = document.createElement("tr");
            const tdNumber = document.createElement("td");
            const tdFirstName = document.createElement("td");
            const tdLastName = document.createElement("td");
            const tdPosition = document.createElement("td");

            tdNumber.textContent = index + 1;

            tdFirstName.textContent = element.firstName;
            tdLastName.textContent = element.lastName;
            tdPosition.textContent = element.position;

            tr.appendChild(tdNumber);
            tr.appendChild(tdFirstName);
            tr.appendChild(tdLastName);
            tr.appendChild(tdPosition);
            tbody.appendChild(tr);
        })



        //FOR
    //     for(let i = 0; i < json.employees.length; i++){
    //         const tr = document.createElement("tr");
    //         const tdNumber = document.createElement("td");
    //         const tdFirstName = document.createElement("td");
    //         const tdLastName = document.createElement("td");
    //         const tdPosition = document.createElement("td");
    //         tdNumber.textContent = i + 1;
    //         tdFirstName.textContent = json.employees[i].firstName;
    //         tdLastName.textContent = json.employees[i].lastName;
    //         tdPosition.textContent = json.employees[i].position;
    //         tr.appendChild(tdNumber);
    //         tr.appendChild(tdFirstName);
    //         tr.appendChild(tdLastName);
    //         tr.appendChild(tdPosition);
    //         tbody.appendChild(tr);
    //    }
    })