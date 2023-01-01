let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click" , () => {
    let countryName = countryInp.value;
    console.log(countryName)
})

