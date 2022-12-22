const animeResult = fetch("https://api.jikan.moe/v4/random/anime")
// animeResult.then(result => {
//     console.log(result)
//     console.log(result.url)
// })

//!! JSON FORMAT 

const employeesResult = fetch("http://127.0.0.1:5504/bilguun.e-to-do-app/day-27/data/employees.json")

employeesResult.then(result => result.json())
    .then((json) => {
        const employees = document.getElementById("emps")
        const firstName = document.getElementById("first-name")
        const lastName = document.getElementById("last-name")
        const position = document.getElementById("position")
        firstName.textContent = json.employees[0].firstName
        lastName.textContent = json.employees[0].lastName
        position.textContent = json.employees[0].position

        json.employees.map((element) => {
            console.log(element)
            const empRow = document.createElement("tr")

            const tableBody = document.getElementById("tableBody")
            const empNr = document.createElement("td")
            const empFirstName = document.createElement("td")
            const empLastName = document.createElement("td")
            const empPos = document.createElement("td")

            empNr.textContent = '1'
            empFirstName.textContent = element.firstName
            empLastName.textContent = element.lastName
            empPos.textContent = element.position

            empRow.appendChild(empNr)
            empRow.appendChild(empFirstName)
            empRow.appendChild(empLastName)
            empRow.appendChild(empPos)
            tableBody.appendChild(empRow)

        })
    })