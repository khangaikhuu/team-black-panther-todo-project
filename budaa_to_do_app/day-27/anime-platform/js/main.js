console.log("anime Platform")


const fullMetalAlchemistURL = "https://api.jikan.moe/v4/anime/5114";

fetch(fullMetalAlchemistURL)
.then(result => result.json())
.then(data => {
    console.log(data.data.duration)
    const mangaDomImage = document.getElementById("manga-image");
    mangaDomImage.src = data.data.images.jpg.image_url;
    document.getElementById("manga-container").getElementsByTagName("h2")[0].textContent = data.data.title_english;
    document.getElementById("manga-container").getElementsByTagName("p")[0].textContent = data.data.type;
    document.getElementById("manga-container").getElementsByTagName("p")[1].innerHTML = data.data.aired.prop.from.year;
    document.getElementById("manga-container").getElementsByTagName("p")[2].innerHTML = data.data.episodes;
    document.getElementById("manga-container").getElementsByTagName("p")[3].textContent = data.data.duration;
    
    document.getElementById("action").getElementsByTagName("a")[0].href = data.data.genres[0].url;
    document.getElementById("action").getElementsByTagName("a")[0].innerHTML = data.data.genres[0].name;
    document.getElementById("action").getElementsByTagName("a")[1].href = data.data.genres[1].name;
    document.getElementById("action").getElementsByTagName("a")[1].innerHTML = data.data.genres[1].name;
    document.getElementById("action").getElementsByTagName("a")[2].href = data.data.genres[2].name;
    document.getElementById("action").getElementsByTagName("a")[2].innerHTML = data.data.genres[2].name;
    document.getElementById("action").getElementsByTagName("a")[3].href = data.data.genres[3].name;
    document.getElementById("action").getElementsByTagName("a")[3].innerHTML = data.data.genres[3].name;
    const mainQuery = document.querySelector("#main");
    console.log(mainQuery)
    mainQuery.querySelector("#main p").textContent = data.data.synopsis;
    mainQuery.querySelector("#main #studio").textContent = `Studio:${data.data.studios[0].name}`;
    


})

















