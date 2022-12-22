console.log('Day-27')

// const animeResult = fetch("https://api.jikan.moe/v4/random/anime")
// console.log(animeResult)
// animeResult.then(result => {
//     console.log(result)
//     console.log(result.url)
// })

// JSON format


const employessResult = fetch("http://127.0.0.1:5504/suvdmaa-todo-app/Day-27/data/employess.json")
console.log(employessResult)
employessResult
    .then(result => result.json())
    .then((json) => {
        const employess = document.getElementById('emps');
        console.log(employess)
        console.log(json)
        // TOM gedeg hunii ner ovog position-iig haruulah
        console.log(json.employees)

        // const tomFirst = document.getElementById('fname1')
        // tomFirst.textContent = json.employees[0].firstName;

        // const tomLast = document.getElementById('lname1')
        // tomLast.innerHTML = json.employees[0].lastName;

        // const tomP = document.getElementById('position1')
        // tomP.innerHTML = json.employees[0].position;



        // const lindaFirst = document.getElementById('fname2')
        // lindaFirst.textContent = json.employees[1].firstName;

        // const lindaLast = document.getElementById('lname2')
        // lindaLast.innerHTML = json.employees[1].lastName;

        // const lindaP = document.getElementById('position2')
        // lindaP.innerHTML = json.employees[1].position;



        // const adamFirst = document.getElementById('fname3')
        // adamFirst.textContent = json.employees[2].firstName;

        // const adamLast = document.getElementById('lname3')
        // adamLast.innerHTML = json.employees[2].lastName;

        // const adamP = document.getElementById('position3')
        // adamP.innerHTML = json.employees[2].position;

        const tbodyDom = document.getElementById('empbody')

        // const empRow = document.createElement('tr')
        // const empTd = document.createElement('td')
        // const empFirstName = document.createElement('td')
        // const empLastName = document.createElement('td')
        // const empPostion = document.createElement('td')

        // empTd.textContent = 1;
        // empFirstName.textContent = json.employees[0].firstName;
        // empLastName.textContent = json.employees[0].lastName;
        // empPostion.textContent = json.employees[0].position;


        // empRow.appendChild(empTd);
        // empRow.appendChild(empFirstName);
        // empRow.appendChild(empLastName);
        // empRow.appendChild(empPostion);

        // tbodyDom.appendChild(empRow)


        // array map function------------------------------------

        json.employees.map((element, index) => {
            console.log(index)
            console.log(element)
            const empRow = document.createElement('tr')

            const empTd = document.createElement('td')
            const empFirstName = document.createElement('td')
            const empLastName = document.createElement('td')
            const empPostion = document.createElement('td')

            empTd.textContent = index + 1;
            empFirstName.textContent = element.firstName;
            empLastName.textContent = element.lastName;
            empPostion.textContent = element.position;

            empRow.appendChild(empTd);
            empRow.appendChild(empFirstName);
            empRow.appendChild(empLastName);
            empRow.appendChild(empPostion);

            tbodyDom.appendChild(empRow)
        })




        // using for loop-------------------------------------------
        // for(let i = 0; i < json.employees.length; i++){
        //     const empRow = document.createElement('tr')

        //     const empTd = document.createElement('td')
        //     const empFirstName = document.createElement('td')
        //     const empLastName = document.createElement('td')
        //     const empPostion = document.createElement('td')

        //     empTd.textContent = i+1;
        //     empFirstName.textContent = json.employees[i].firstName;
        //     empLastName.textContent = json.employees[i].lastName;
        //     empPostion.textContent = json.employees[i].position;

        //     empRow.appendChild(empTd);
        //     empRow.appendChild(empFirstName);
        //     empRow.appendChild(empLastName);
        //     empRow.appendChild(empPostion);

        //     tbodyDom.appendChild(empRow)
        // }
    })




