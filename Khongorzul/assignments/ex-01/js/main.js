//FETCH
let userData = [];
async function users(){
    const fetchedData = await fetch("https://randomuser.me/api");
    const fetchedJSON = await fetchedData.json();
    userData = fetchedJSON.results;

    const users = document.getElementById("users");
    users.innerHTML = getUsers(userData);
}
users();

//GET USER DATA
function getUsers(data, index){
    return `
    <div id="user-card">
        <img id="user-profile-pic" src="${data[0].picture.large}" alt="user-profile-pic">
        <div id="user-card-body">
            <h2 id="name">${data[0].name.title}. ${data[0].name.first} ${data[0].name.last}</h2>
            <h4 id="user-name">User Name: ${data[0].login.username}</h4>
            <div id="top">
                <div id="email">Email: ${data[0].email}</div>
                <div id="gender">Gender: ${data[0].gender}</div>
                <div id="age">Age: ${data[0].dob.age}</div>
            </div>
            <div id="bottom">
                <div id="location">Location: ${data[0].location.city}, ${data[0].location.state}, ${data[0].location.country}</div>
                <div id="address">Address: ${data[0].location.street.name}, ${data[0].location.street.number}</div>
                <div id="phone">Phone: ${data[0].phone}</div>
                <div id="cell">Cell: ${data[0].cell}</div>
            </div>
        </div>
    </div>`
}