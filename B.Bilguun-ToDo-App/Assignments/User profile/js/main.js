let userData = [];

async function getData() {
    const fetchedData = await fetch("https://randomuser.me/api");
    const fetchedJSON = await fetchedData.json();
    userData = fetchedJSON.results[0];
    console.log(userData);



    const user = document.getElementById("user_profile");
    user.className = "text-center mx-auto";
    const topSec = document.createElement("div");
    topSec.className = "card-body"
    const image = document.createElement("img");
    image.src = userData.picture.large;
    image.className = "card-img-top rounded"

    const h2 = document.createElement("h2");
    h2.innerText = `${userData.name.first} ${userData.name.last}`;
    h2.className = "bg-info p-2 m-0"
    const h4 = document.createElement("h5");
    h4.innerHTML = `${userData.email} <br> ${userData.cell}`;
    h4.className = "bg-primary m-0"


    const userDetials = document.createElement("div");
    userDetials.innerHTML = `Gender : ${userData.gender.toUpperCase()} <br>Birth Date : ${userData.dob.date.slice(0,10)} `;
    // userDetials.className = "bg-success"

    const cardText = document.createElement("div");
    cardText.className = "card-text bg-success";
    const address = document.createElement("div");
    address.innerHTML = `Location : ${userData.location.street.number}, ${userData.location.street.name},${userData.location.city} , ${userData.location.state} , ${userData.location.country} , `;


    user.appendChild(image)
    user.appendChild(topSec)
    topSec.appendChild(h2)
    topSec.appendChild(h4)
    cardText.appendChild(userDetials)
    cardText.appendChild(address)
    user.appendChild(cardText)
}

getData();