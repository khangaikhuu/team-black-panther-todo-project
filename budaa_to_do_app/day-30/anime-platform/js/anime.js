

function createCart(data) {
    console.log(data)
    const animeContainer = document.getElementById("anime-container");
    const animeCard = document.createElement("div")
    animeCard.className = "card-container"
    const cardHeader = document.createElement("a")
    cardHeader.href = "#"
    animeCard.appendChild(cardHeader)
    cardHeader.textContent = data.title
    animeContainer.appendChild(animeCard)
    const animeStatus = document.createElement("div")

    animeCard.appendChild(animeStatus)
 

    animeStatus.className = "anime-status"
    const type = document.createElement("span")
    animeStatus.appendChild(type)
    type.textContent = data.type

    const year = document.createElement("span")
    animeStatus.appendChild(year)
    year.textContent = data.year

    const status = document.createElement("span")
    animeStatus.appendChild(status)
    status.textContent = data.status 

    const eps = document.createElement("span")
    animeStatus.appendChild(eps)
    eps.textContent = data.episodes

    // animeStatus.textContent = data.title
    // const animeImage = document.createElement("img"); 
    // animeImage.src = data.images.jpg.image_url
    // animeCard.appendChild(animeImage)




    

}


const animes = "https://api.jikan.moe/v4/top/anime"

fetch(animes)
.then(result => result.json())
.then(data => {

    const animeData = data.data;

    animeData.map(anime => {
        createCart(anime)
    }) 






})
