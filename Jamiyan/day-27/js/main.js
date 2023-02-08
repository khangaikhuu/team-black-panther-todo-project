console.log("day-27");

// const animeResult = fetch("https://api.jikan.moe/v4/random/anime");
// console.log(animeResult);

// animeResult.then(result => {
//     console.log(result)
//     console.log(result.url)
// })

//JSON format
const employeesResult = fetch(
  "http://127.0.0.1:5504/Jamiyan/day-27/data/employees.json"
);
console.log(employeesResult);

employeesResult.then((result) => {
  console.log(result);
});

employeesResult
  .then((result) => result.json())
  .then((json) => {
    const employees = document.getElementById("emps");

    console.log(employees);
    console.log(json.employees);
    // TOM gedeg hunii ner ovog positioniig haruulah
    // employees.innerHTML = json.employees[0].firstName
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let position = document.getElementById("position");
    firstName.innerHTML = json.employees[0].firstName;
    lastName.innerHTML = json.employees[0].lastName;
    position.innerHTML = json.employees[0].position;

    let tbody = document.getElementById("empBody");

    json.employees.map((element, index) => {
      console.log(element);
      var empRow = document.createElement("tr");
      var empNr = document.createElement("td");
      var empFirstName = document.createElement("td");
      var empLastName = document.createElement("td");
      var empPosition = document.createElement("td");

      tbody.appendChild(empRow);
      empRow.appendChild(empNr);
      empRow.appendChild(empFirstName);
      empRow.appendChild(empLastName);
      empRow.appendChild(empPosition);

      empNr.innerHTML = index + 1;
      empFirstName.innerHTML = element.firstName;
      empLastName.innerHTML = element.lastName;
      empPosition.innerHTML = element.position;
    });

    // for (i = 0; i < json.employees.length; i++) {

    //     var empRow = document.createElement("tr");
    //     var empNr = document.createElement("td");
    //     var empFirstName = document.createElement("td");
    //     var empLastName = document.createElement("td");
    //     var empPosition = document.createElement("td");

    //     tbody.appendChild(empRow)
    //     empRow.appendChild(empNr);
    //     empRow.appendChild(empFirstName);
    //     empRow.appendChild(empLastName);
    //     empRow.appendChild(empPosition);

    //     empNr.innerHTML = i;
    //     empFirstName.innerHTML = json.employees[i].firstName
    //     empLastName.innerHTML = json.employees[i].lastName
    //     empPosition.innerHTML = json.employees[i].position
    // }
  });
