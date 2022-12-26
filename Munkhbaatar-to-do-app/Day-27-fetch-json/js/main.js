console.log('Day 27');

// const animeResult = fetch('https://api.jikan.moe/v4/random/anime');
// console.log(animeResult);
// animeResult.then(result => {
//     console.log(result);
//     console.log(result.url);
    
// })

// JSON format

const employeeData = fetch('data/employees.json');

employeeData
    .then(result => result.json())
    .then((json) => {
        const employees = document.getElementById('first-name')
        console.log(employees);
        console.log(json);

        document.getElementById('first-name').innerText = json.employees[0].firstName;
        document.getElementById('last-name').innerText = json.employees[0].lastName;
        document.getElementById('position').innerText = json.employees[0].position;

 

        // for(let i = 0; i < json.employees.length; i++) {
        //     // console.log(json.employees[i].firstName)
          
        //     const tbodyDom = document.getElementById('empBody');
        //     const empRow = document.createElement('tr');
    
        //     const empNr = document.createElement('td')
        //     const empFirstName = document.createElement('td')
        //     const empLastName = document.createElement('td')
        //     const empPosition = document.createElement('td')
    
        //     empNr.textContent = i + 1;
        //     empFirstName.textContent = json.employees[i].firstName;
        //     empLastName.textContent = json.employees[i].lastName;
        //     empPosition.textContent = json.employees[i].position;
    
        //     // adding them into the row 
        //     empRow.appendChild(empNr);              
        //     empRow.appendChild(empFirstName);
        //     empRow.appendChild(empLastName);
        //     empRow.appendChild(empPosition);
    
        //     tbodyDom.appendChild(empRow) // inserting the row into the table BODY

        // }
        

        // array map
        json.employees.map((element, index) => {
            // console.log(element)
            const tbodyDom = document.getElementById('empBody');
            const empRow = document.createElement('tr');
    
            const empNr = document.createElement('td')
            const empFirstName = document.createElement('td')
            const empLastName = document.createElement('td')
            const empPosition = document.createElement('td')
    
            empNr.textContent = index + 1;
            empFirstName.textContent = element.firstName;
            empLastName.textContent = element.lastName;
            empPosition.textContent = element.position;
    
            // adding them into the row 
            empRow.appendChild(empNr);              
            empRow.appendChild(empFirstName);
            empRow.appendChild(empLastName);
            empRow.appendChild(empPosition);
    
            tbodyDom.appendChild(empRow) // inserting the row into the table BODY

        })


    })


    const arr = [1, 2, 3, 4, 5] ;

    arr.map ((e, index) => {
        console.log(index, '-', e)
        // console.log(index + '-' +  e)
    })