console.log('-------------day-27 Fetch / JSON ---------------');

// const animeResult = fetch('https://api.jikan.moe/v4/random/anime');
// console.log(animeResult);

// animeResult.then(result => {
//     console.log(result);
//     console.log(result.url);
//     console.log(result.headers);


// })




// JSON format

const empResult = fetch('http://127.0.0.1:5504/sodoo-to-do-app/day27/data/employees.json');
// console.log(empResult);

empResult
    .then((result) => result.json())
    .then((json) => {
        // const employees = document.getElementById = ('emps');
        // console.log(employees);
        // console.log(json);
        // console.log(json.employees[0].firstName);


        document.getElementById('first-name').innerHTML = json.employees[0].firstName;
        document.getElementById('last-name').innerHTML = json.employees[0].lastName;
        document.getElementById('position').innerHTML = json.employees[0].position;



        // for (let i = 0; i < json.employees.length; i++) {
        //     // const element = json.employees[i];
        //     // console.log(element);


        //     const tbodyDom = document.getElementById('empBody'); // get empBody of table

        //     const empRow = document.createElement('tr');

        //     const empNr = document.createElement('td');
        //     const empFistName = document.createElement('td');
        //     const empLastName = document.createElement('td');
        //     const empPosition = document.createElement('td');

        //     empNr.textContent = i + 1;
        //     empFistName.textContent = json.employees[i].firstName;
        //     empLastName.textContent = json.employees[i].lastName;
        //     empPosition.textContent = json.employees[i].position;


        //     empRow.appendChild(empNr);
        //     empRow.appendChild(empFistName);
        //     empRow.appendChild(empLastName);
        //     empRow.appendChild(empPosition);

        //     tbodyDom.appendChild(empRow);

        // }

        // array map
        json.employees.map((element, index) => {
            console.log(element);
            const tbodyDom = document.getElementById('empBody'); // get empBody of table
            const empRow = document.createElement('tr');

            const empNr = document.createElement('td');
            const empFistName = document.createElement('td');
            const empLastName = document.createElement('td');
            const empPosition = document.createElement('td');

            empNr.textContent = index + 1;
            empFistName.textContent = element.firstName;
            empLastName.textContent = element.lastName;
            empPosition.textContent = element.position;


            empRow.appendChild(empNr);
            empRow.appendChild(empFistName);
            empRow.appendChild(empLastName);
            empRow.appendChild(empPosition);

            tbodyDom.appendChild(empRow);
        })
    })

const arr = [5, 6, 7, 8];
arr.map((e, index) => {
    console.log(index, ' ', e);
})


