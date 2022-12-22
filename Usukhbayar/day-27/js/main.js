console.log("Day-27");

// const animeResult = fetch('https://api.jikan.moe/v4/random/anime');
// console.log(animeResult);
// animeResult.then(result => {
//     console.log(result)
//     console.log(result.url)
// })

//JSON format

const employeesResult = fetch(
  "http://127.0.0.1:5504/Usukhbayar/day-27/data/employees.json"
);
console.log(employeesResult);
employeesResult
  .then((result) => result.json())
  .then((json) => {
    const employees = document.getElementById("emps");
    console.log(employees);
    console.log(json);
    console.log(json.employees);
    let firstName = (document.getElementById("first-name").innerHTML =
      json.employees[0].firstName);
    let lastName = (document.getElementById("last-name").innerHTML =
      json.employees[0].lastName);
    let pos = (document.getElementById("Position").innerHTML =
      json.employees[0].position);
    const tbodyDom = document.getElementById("tbody");

    //array map function
    json.employees.map((element) => {
      console.log(element);
      const empRow = document.createElement("tr");

      const empNr = document.createElement("td");
      const empFirstName = document.createElement("td");
      const empLastName = document.createElement("td");
      const empPosition = document.createElement("td");

      empNr.textContent = 1;
      empFirstName.textContent = element.firstName;
      empLastName.textContent = element.lastName;
      empPosition.textContent = element.position;

      empRow.appendChild(empNr);
      empRow.appendChild(empFirstName);
      empRow.appendChild(empLastName);
      empRow.appendChild(empPosition);

      tbodyDom.appendChild(empRow);
    });
  });