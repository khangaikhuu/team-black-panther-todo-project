
function createCard(data){
    // console.log(data)
    const animeContainer = document.getElementById("anime-container");
    const animeCard = document.createElement("div");
    animeCard.className = "cardContainer"
    const cardHeader = document.createElement("h2");
    animeCard.appendChild(cardHeader);
    cardHeader.textContent = data.title
    animeContainer.appendChild(animeCard);
    const animeTitle = document.createElement("div");
    animeTitle.className = "animeTitle"
    const animeIamge = document.createElement("img");
    animeIamge.src = data.images.jpg.image_url;
    animeCard.appendChild(animeIamge)
}


const animes = "https://api.jikan.moe/v4/top/anime";
fetch(animes)
.then(result => result.json())
.then(data =>{

    const animeData = data.data;

    animeData.map(anime => {
        createCard(anime)
    })






})