// console.log('Day27')

// const animeResult = fetch('https://api.jikan.moe/v4/random/anime')
// console.log(animeResult)
// animeResult.then(result => {
//     console.log(result)
//     console.log(result.url)
// })


// JSON format

const employeesResult = fetch('http://127.0.0.1:5504/Battulga/Day27/Data/employees.json')
// console.log(employeesResult)


employeesResult
    .then((result) => result.json())
    .then((json) => {
        const employees = document.getElementById('emps')
        let firstName1 = document.getElementById('first-name')
        firstName1.textContent = json.employees[0].firstName

        let lastName1 = document.getElementById('last-name')
        lastName1.textContent = json.employees[0].lastName


        let position1 = document.getElementById('position')
        position1.textContent = json.employees[0].position




        // array map

        json.employees.map((Element, index) => {
            console.log(index)
            const empRow = document.createElement('tr')

            const empNr = document.createElement('td')
            const empFirstName = document.createElement('td')
            const empLastName = document.createElement('td')
            const empPosition = document.createElement('td')

            empNr.textContent = index + 1
            empFirstName.textContent = Element.firstName
            empLastName.textContent = Element.lastName
            empPosition.textContent = Element.position

            empRow.appendChild(empNr)
            empRow.appendChild(empFirstName)
            empRow.appendChild(empLastName)
            empRow.appendChild(empPosition)

            const tbodyDom = document.getElementById('empBody')
            tbodyDom.appendChild(empRow)

        })

    })
