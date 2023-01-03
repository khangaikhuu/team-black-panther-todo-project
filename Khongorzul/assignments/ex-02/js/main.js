//FETCH
let countryData = [];
async function countries(){
    const fetchedData = await fetch("https://restcountries.com/v3.1/all");
    const fetchedJSON = await fetchedData.json();
    countryData = fetchedJSON;
}
countries();