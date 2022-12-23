// const animeResult = fetch('https://api.jikan.moe/v4/random/anime');
// console.log(animeResult);

// animeResult.then(result => {
//     console.log(result)
//     console.log(result.url);
// })

// JSON format

const employeesResult = fetch('http://127.0.0.1:5504/Dulguun-todo/Day-27/data/employees.json');
console.log(employeesResult);

// employeesResult.then(result => {
//     console.log(result);
//     console.log(result.url)
// })

employeesResult
    .then((result) => result.json())
    .then((json) => {
        const employees = document.getElementById('emps');

        const tomFirst = document.getElementById('first-name');
        tomFirst.textContent = json.employees[0].firstName;

        const tomLast = document.getElementById('last-name');
        tomLast.textContent = json.employees[0].lastName;

        const tomPosi = document.getElementById('position');
        tomPosi.textContent = json.employees[0].position;

        console.log(employees);
        console.log(json);
        console.log(json.employees[0].firstName);

        // emp body
        // for (let i = 0; i < json.employees.length; i++) {
        //     const tbodyDom = document.getElementById('empBody');

        //     const empRow = document.createElement('tr');

        //     const empNr = document.createElement('td');
        //     const empFirstName = document.createElement('td');
        //     const empLastName = document.createElement('td');
        //     const empPosition = document.createElement('td');

        //     empNr.textContent = i + 1;
        //     empFirstName.textContent = json.employees[i].firstName;
        //     empLastName.textContent = json.employees[i].lastName;
        //     empPosition.textContent = json.employees[i].position;

        //     empRow.appendChild(empNr)
        //     empRow.appendChild(empFirstName)
        //     empRow.appendChild(empLastName)
        //     empRow.appendChild(empPosition)

        //     tbodyDom.appendChild(empRow);
        // }

        // array map
        json.employees.map((element,index) => {
            const tbodyDom = document.getElementById('empBody');
            console.log(element);
            const empRow = document.createElement('tr');

            const empNr = document.createElement('td');
            const empFirstName = document.createElement('td');
            const empLastName = document.createElement('td');
            const empPosition = document.createElement('td');


            empNr.textContent = index + 1;
            empFirstName.textContent = element.firstName;
            empLastName.textContent = element.lastName;
            empPosition.textContent = element.position;

            empRow.appendChild(empNr)
            empRow.appendChild(empFirstName)
            empRow.appendChild(empLastName)
            empRow.appendChild(empPosition)

            tbodyDom.appendChild(empRow);
        })
    });

    // example MAP
    const num = [1,2,3];
    num.map((e,index) => {
        
    })
