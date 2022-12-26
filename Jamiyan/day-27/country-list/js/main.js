console.log("country-list")
fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data[0])
        const container = document.getElementById("container")
        // const imgCountry = document.getElementById("img-country").src = data[0].flags.png;
        // const nameCountry = document.getElementById("name-country").innerHTML = data[0].name.common
      
        data.map(element => {
            container.innerHTML += countries(element);
        })

        const input = document.getElementById("input");
        document.getElementById("input-button").addEventListener("click", () => {
        for(i = 0; i < data.length; i++){
        if(input.value == data[i].name.common){
            const inputImg = document.createElement("img")
            inputImg.src = data[i].flags.png
            document.getElementById("input-div").appendChild(inputImg);
        }else{
            console.log("Улсын нэр оруулна уу")
        }
    }
    })

    })

function countries(data){
    return`
    <div id="country-container">
        <img id="img-country" alt="" src="${data.flags.png}">
        <p id="name-country">${data.name.common}</p>
    </div>
    `
}