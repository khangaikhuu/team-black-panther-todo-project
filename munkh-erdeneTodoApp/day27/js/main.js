console.log("DAY27-FETCH");
// const animeResult=fetch('https://api.jikan.moe/v4/random/anime');
// console.log(animeResult);
// animeResult.then(result=>{
//     console.log(result)
//     console.log(result.url)
// })





//JSON format

const empResult = fetch('http://127.0.0.1:5504/munkh-erdeneTodoApp/day27/data/enployes.json');
console.log(empResult);
empResult
    .then((result) => result.json())
    .then((json) => {
        const enployes = document.getElementById('emps');

        //first name
        const tomFirst= document.getElementById('first-name');
        // tomFirst.textContent=json.employees[0].firstName;
        tomFirst.textContent=prompt('give us');
        // end



        //lastname
        const tomLast=document.getElementById('last-name');
        tomLast.textContent=json.employees[0].lastName;
        tomLast.textContent=prompt('give us');
        //end

        //position
        const tomPosition=document.getElementById('position');
        tomPosition.textContent=json.employees[0].position;
        tomPosition.textContent=prompt('give us');


        // console.log(enployes)
        // console.log(json)
        // // tom gdg hunii ner ovog position haruulah
        // console.log('hy',json.employees[0]);


        //this is real coding


        //get emp body of table

        const tbodyDom = document.getElementById('empBody');

        // array map function
        //map n loop hiideg 

        json.employees.map((element,index ) => {
            console.log(element)
            const empRow = document.createElement('tr');


            const empNr = document.createElement('td');
            const empFirstName = document.createElement('td');
            const empLastName = document.createElement('td');
            const empPosition = document.createElement('td');

            empNr.textContent = (index+1)+'^_^';
            empFirstName.textContent = element.firstName;
            empLastName.textContent=element.lastName;
            empPosition.textContent=element.position;

            empRow.appendChild(empNr);
            empRow.appendChild(empFirstName);
            empRow.appendChild(empLastName);
            empRow.appendChild(empPosition);


            tbodyDom.appendChild(empRow);

        })







    })




