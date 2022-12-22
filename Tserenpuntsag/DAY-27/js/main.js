

let first = fetch("https://www.youtube.com/");
console.log(first);

first.then(result => {
    console.log(result.url);
})

// JSON format

const jason = fetch("http://127.0.0.1:5504/Tserenpuntsag/DAY-27/data/employees.json");

jason
    .then((result) => result.json())
    .then((json) => {
        const employees = document.getElementById("emps");
        console.log(employees);
        console.log(json);

        let liOne = document.getElementById("firstName");
        let liTwo = document.getElementById("lastName");
        let liThree = document.getElementById("position");

        firstFunc(json.employees[0].firstName, liOne)
        firstFunc(json.employees[0].lastName, liTwo)
        firstFunc(json.employees[0].position, liThree)
        console.log(json.employees[0].firstName)

        json.employees.map((element, index) => {
            console.log(index)
            const row = document.createElement("tr");
            const num = document.createElement("td")
            const firstName = document.createElement("td")
            const lastName = document.createElement("td")
            const position = document.createElement("td")

            num.innerHTML = index + 1;
            firstName.innerHTML = element.firstName
            lastName.innerHTML = element.lastName
            position.innerHTML = element.position

            tBody.appendChild(row);
            row.appendChild(num)
            row.appendChild(firstName)
            row.appendChild(lastName)
            row.appendChild(position)
        })

        // for (let i = 0; i < json.employees.length; i++) {
        //     const row = document.createElement("tr");
        //     const num = document.createElement("td")
        //     const firstName = document.createElement("td")
        //     const lastName = document.createElement("td")
        //     const position = document.createElement("td")

        //     num.innerHTML = i+1;
        //     firstName.innerHTML = json.employees[i].firstName
        //     lastName.innerHTML = json.employees[i].lastName
        //     position.innerHTML = json.employees[i].position

        //     tBody.appendChild(row);
        //     row.appendChild(num)
        //     row.appendChild(firstName)
        //     row.appendChild(lastName)
        //     row.appendChild(position)
        // }


    })

function firstFunc(str, element) {
    element.innerHTML = str;
}



