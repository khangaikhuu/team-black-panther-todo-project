console.log('Day - 27')

const animeResult = fetch('https://api.jikan.moe/v4/random/anime');
// console.log(animeResult);
animeResult.then(result => {
    // console.log(result)
    // console.log(result.url)
})

// JSON format

const empResult = fetch('http://127.0.0.1:5504/Khangaikhuu/Day-27/data/employees.json')
// console.log(empResult);

empResult
    .then((result) => result.json())
    .then((json) => {
        const employees = document.getElementById('emps');
        const tomFirst = document.getElementById('first-name');
        tomFirst.textContent = json.employees[0].firstName;

        console.log(employees)
        console.log(json);
        // TOM гэдэг хүний нэр овог position-ийг харуулахы
        console.log(json.employees)
        //// PLEASE ALWAYS do here

        /// get emp body of table
        const tbodyDom = document.getElementById('empBody');


        // array map function
        json.employees.map((element, index) => {
            console.log(index)
            const empRow = document.createElement('tr');

            const empNr = document.createElement('td');
            const empFirstName = document.createElement('td');
            const empLastName = document.createElement('td');
            const empPosition = document.createElement('td');

            empNr.textContent = index + 1;
            empFirstName.textContent = element.firstName;
            empLastName.textContent = element.lastName;
            empPosition.textContent = element.position;

            empRow.appendChild(empNr);
            empRow.appendChild(empFirstName);
            empRow.appendChild(empLastName);
            empRow.appendChild(empPosition);

            tbodyDom.appendChild(empRow);
        })
    })


const arr = [5, 6, 7, 8]

arr.map((e, index) => {
    console.log(index, '-', e)
})