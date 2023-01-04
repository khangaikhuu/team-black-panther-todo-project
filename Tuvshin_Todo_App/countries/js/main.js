fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then((data) => {
        // console.log(data);
        const allCountries = data;
        console.log(allCountries);

        const container = document.querySelector("#main-country");
        container.innerHTML = " ";
        container.className = "mainCountry";
        
        allCountries.map(element) => {
            const countryName = document.createElement("h3");
            countryName.innerHTML = element.name;

            container.appendChild(countryName);


        }

        
        // eachProduct.appendChild(phoneTitle);

    });