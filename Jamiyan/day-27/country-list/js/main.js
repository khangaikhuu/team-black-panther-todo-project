console.log("country-list")
const container = document.getElementById("container")
const fetchedJson = [];
async function callURL(){
        const fetchedData = await fetch("https://restcountries.com/v3.1/all")
        const fetchedJson = await fetchedData.json();
        console.log(fetchedJson);
        fetchedJson.map(element => {
            container.innerHTML += countries(element);
        })
}
callURL()
        const input = document.getElementById("input");
        document.getElementById("input-button").addEventListener("click", () => {
            
    //     for(i = 0; i < data.length; i++){
    //     if(input.value == data[i].name.common){
    //         const inputImg = document.createElement("img")
    //         inputImg.src = data[i].flags.png
    //         document.getElementById("input-div").appendChild(inputImg);
    //     }else{
    //         console.log("Улсын нэр оруулна уу")
    //     }
    // }
        console.log(fetchedJson)

    })

   

function countries(data){
    return`
    <div id="country-container">
        <img id="img-country" alt="" src="${data.flags.png}">
        <p id="name-country">${data.name.common}</p>
    </div>
    `
}