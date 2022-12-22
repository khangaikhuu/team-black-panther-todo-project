console.log("anime");
const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114';
fetch(fullMetalAlchemistURL)
.then(result => result.json())
.then(data => {
    console.log(data);
    console.log(data.data.mal_id);
    console.log(data.data.images.jpg.image_url);
    const mangaDomImage = document.getElementById("manga-image");
    mangaDomImage.src = data.data.images.jpg.image_url;
    document.getElementById("manga-container").getElementsByTagName("h6")[0].textContent = data.data.titles[0].title;
    document.getElementById("manga-container").style = "border: 1px solid black"
    const containerNav = document.querySelector("#manga-nav")

    const mangaIn = document.createElement("h1");
    containerNav.appendChild(mangaIn) 
    mangaIn.textContent = data.data.type;
    
    containerNav.textContent = data.data.status;


})