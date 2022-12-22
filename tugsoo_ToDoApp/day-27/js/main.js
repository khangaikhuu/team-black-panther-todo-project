
console.log("day-27");

const animeResult = fetch("https://api.jikan.moe/v4/random/anime");
console.log(animeResult);
animeResult.then(result => {
    console.log(result);
    console.log(result.url);
})


// JSON format

const employeesResult = fetch("http://127.0.0.1:5504/tugsoo_ToDoApp/day-27/data/employees.json");
console.log(employeesResult);

employeesResult.then(result => result.json())
    .then((json) => {
        // const emp = document.getElementById('emps');
        // const first = document.getElementById("first-name")
        // const last = document.getElementById("last-name")
        // const position = document.getElementById("position")

        // console.log(emp);
        console.log(json.employees);

        const tBodyDom = document.getElementById("empBody");

        // array map

        json.employees.map((element,index) => {
            console.log(element);
            console.log(index);
            const empRow = document.createElement('tr')
            const empNr = document.createElement('td')
            const empFirst = document.createElement('td')
            const empLast = document.createElement('td')
            const empPosition = document.createElement('td')

            empRow.appendChild(empNr);
            empRow.appendChild(empFirst);
            empRow.appendChild(empLast);
            empRow.appendChild(empPosition);

            tBodyDom.appendChild(empRow)

            empFirst.textContent = element.firstName
            empLast.textContent = element.lastName
            empPosition.textContent = element.position
            empNr.textContent = index + 1;


        })

       

        // for (let i = 0; i < json.employees.length; i++) {
            
        //     const empRow = document.createElement('tr')
        //     const empNr = document.createElement('td')
        //     const empFirst = document.createElement('td')
        //     const empLast = document.createElement('td')
        //     const empPosition = document.createElement('td')
    
        //     empRow.appendChild(empNr);
        //     empRow.appendChild(empFirst);
        //     empRow.appendChild(empLast);
        //     empRow.appendChild(empPosition);
    
        //     tBodyDom.appendChild(empRow)
        //     empFirst.textContent = json.employees[i].firstName
        //     empLast.textContent = json.employees[i].lastName
        //     empPosition.textContent = json.employees[i].position
        //     empNr.textContent = [i];

        // }



    })
