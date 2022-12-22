console.log(`DAT - 27`)
// FETCH 

// const animeResult = fetch(`https://myanimelist.net/anime/genre/2/Adventure`);
// console.log(animeResult);

// animeResult.then(result => {
//     console.log(result)
//     console.log(result.url)

// })


// JSON FORMAT

const empResult= fetch(`http://127.0.0.1:5504/tushig-to-do-project/Day-27/data/employees.json`)
console.log(empResult);


console.log(`-----------> Ner owog position --------------------->`)


empResult
.then((result) => result.json())
.then((json) => {
    const employees = document.getElementById('emps')
    const tomFirst = document.getElementById(`first-name`)
    tomFirst.textContent = json.employees[0].firstName;

    const tomlast = document.getElementById(`last-name`)
    tomlast.textContent = json.employees[0].lastName;

    const tompos = document.getElementById(`position`)
    tompos.textContent = json.employees[0].lastName;
    // Tom gedeg hunii ner owog position haruulah
    console.log(employees)
    console.log(json)


    // PLEASE ALWAYS DO HERE
    console.log(`-------------->PLEASE ALWAYS DO HERE------------------------>`)

    const tbodyDom = document.getElementById(`emp-body`);

    // array map
    json.employees.map((element) => {
        console.log(element)
        
            const empRow = document.createElement(`tr`);
            
            const empNr = document.createElement(`td`); // nr
            const empFirstName = document.createElement(`td`); // First name
            const empLastName = document.createElement(`td`);  // last name
            const empPosition = document.createElement(`td`);  // Position 
            
            empNr.textContent = 1;
            empFirstName.textContent = element.firstName;
            empLastName.textContent = element.lastName;
            empPosition.textContent = element.position
            
            empRow.appendChild(empNr);
            empRow.appendChild(empFirstName);
            empRow.appendChild(empLastName);
            empRow.appendChild(empPosition);
            
            tbodyDom.appendChild(empRow);
    })


})    


