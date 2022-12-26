const cardURL = "https://randomuser.me/api";

fetch(cardURL)
  .then((results) => results.json())
  .then((results) => {
    const profileImg = document.getElementById("prof-image");
    profileImg.src = results.results[0].picture.large;
    console.log(results.results[0]);
    const rName = document.getElementById("p-name");
    const fullName =
      results.results[0].name.first + " " + results.results[0].name.last;
    rName.textContent = fullName;
    const email = document.querySelector("#email");
    email.textContent = results.results[0].email;
    const phone = document.querySelector("#phone");
    phone.innerHTML =  results.results[0].phone;
    
  });
