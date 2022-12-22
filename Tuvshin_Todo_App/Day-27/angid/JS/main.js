// const animeResult = fetch('https://api.jikan.moe/v4/random/anime');
// console.log(animeResult);
// animeResult.then(result => {
//     console.log(result);
//     console.log(result.url);
// })

//JSON Format


const employees = fetch('http://127.0.0.1:5502/Tuvshin_Todo_App/Day-27/angid/data/employees.json');
console.log(employees);
employees
    .then((result) => result.json())
    .then((json) => {
        const empDom = document.getElementById('emps');
        console.log(empDom);
        console.log(json);
        console.log(json.employees);
        let fName = document.getElementById('first-name');
        fName.innerHTML = json.employees[0].firstName;

        let lName = document.getElementById('last-name');
        lName.innerText = json.employees[0].lastName;

        let positionName = document.getElementById('position');
        positionName.innerText = json.employees[0].position;

        const tbodyDom = document.getElementById('empbody');

        json.employees.map((element, index) => {
            console.log(element);

            const empRow = document.createElement('tr');

            const empNr = document.createElement('td');
            const empFirstName = document.createElement('td');
            const empLastName = document.createElement('td');
            const empPosition = document.createElement('td');
    
            empNr.textContent = ;
            empFirstName.textContent = element.firstName;
            empLastName.textContent = element.lastName;
            empPosition.textContent = element.position;
    
            empRow.appendChild(empNr);
            empRow.appendChild(empFirstName);
            empRow.appendChild(empLastName);
            empRow.appendChild(empPosition);
    
            tbodyDom.appendChild(empRow);           
}) });

const arr = [5,6,7,8]
arr.map((e,index) => {
    console.log(index, '-' , e);
})





// const employees = fetch('http://127.0.0.1:5502/Tuvshin_Todo_App/Day-27/angid/data/employees.json');
// console.log(employees);
// employees
//     .then((result) => result.json())
//     .then((json) => {
//         const empDom = document.getElementById('emps');
//         console.log(empDom);
//         console.log(json);
//         console.log(json.employees);
//         let fName = document.getElementById('first-name');
//         fName.innerHTML = json.employees[0].firstName;

//         let lName = document.getElementById('last-name');
//         lName.innerText = json.employees[0].lastName;

//         let positionName = document.getElementById('position');
//         positionName.innerText = json.employees[0].position;

//         const tbodyDom = document.getElementById('empbody');
//             const empRow = document.createElement('tr');

//             const empNr = document.createElement('td');
//             const empFirstName = document.createElement('td');
//             const empLastName = document.createElement('td');
//             const empPosition = document.createElement('td');
    
//             empNr.textContent = 1;
//             empFirstName.textContent = json.employees[0].firstName
//             empLastName.textContent = json.employees[0].lastName
//             empPosition.textContent = json.employees[0].position
           
//             empRow.appendChild(empNr);
//             empRow.appendChild(empFirstName);
//             empRow.appendChild(empLastName);
//             empRow.appendChild(empPosition);
    
//             tbodyDom.appendChild(empRow);        
          
           

            // empNr.textContent = 2;
            // empFirstName.textContent = json.employees[1].firstName
            // empLastName.textContent = json.employees[1].lastName
            // empPosition.textContent = json.employees[1].position
    // })