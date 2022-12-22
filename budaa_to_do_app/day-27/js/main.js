console.log("day-27")

const animeResult = fetch("https://api.jikan.moe/v4/random/anime")
console.log(animeResult);

animeResult.then(result => {
    console.log(result)
    console.log(result.url)
})



// JSON format   JavaScript Object Notation

const employeesResults = fetch("http://127.0.0.1:5504/budaa_to_do_app/day-27/data/employees.json")
console.log(employeesResults);


employeesResults
    .then((results) => results.json())
    .then((json) => {
        const employees = document.getElementById("emps");
        const lastName = document.getElementById("last-name");
        const Position = document.getElementById("position");
        const tomFirst = document.getElementById("first-name");
        tomFirst.textContent = json.employees[0].firstName;
        lastName.innerHTML = json.employees[0].lastName;
        Position.innerHTML = json.employees[0].position;

        console.log(employees)
        console.log(json);
        // TOM gedeg hunii ner ovog position-iig haruulah
        console.log(json.employees[0])
        console.log()


        // array map 

        json.employees.map((element, index) => {
            console.log(index)
            const empRow = document.createElement("tr");
            const tbodyDom = document.getElementById("empBody");

            const empNr = document.createElement("td");
            const empFirstName = document.createElement("td");
            const empLastName = document.createElement("td");
            const empPosition = document.createElement("td");

            empNr.textContent = index;
            empFirstName.textContent = element.firstName;
            empLastName.textContent = element.lastName;
            empPosition.textContent = element.position;
            empRow.appendChild(empNr);
            empRow.appendChild(empFirstName);
            empRow.appendChild(empLastName);
            empRow.appendChild(empPosition);


            tbodyDom.appendChild(empRow);
        })



        // for(let i = 0; i < json.employees.length ;i++) {

        //     empNr.textContent = i;

        //     empFirstName.textContent = json.employees[i].firstName;
        //     empLastName.textContent = json.employees[i].lastName;
        //     empPosition.textContent = json.employees[i].position;
        //     console.log(json.employees[i].firstName)
        // }











    })



// for (let i = 0; 0 < 1; i++){

// }




