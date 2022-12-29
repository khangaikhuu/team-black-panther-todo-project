console.log("hello world");

let animeData = []
async function callURL() {
    const fetchedData = await fetch('https://api.jikan.moe/v4/top/anime'); //data awahiin tuld await use
    const fetchedJSON = await fetchedData.json();
    animeData = fetchedJSON.data;
    const container = document.querySelector("#manga-container");

    container.innerHTML = "";
    animeData.map((element, index) => {
        console.log(element);
        container.innerHTML += getAnimes(element, index)
    })

}
callURL()


const card = document.querySelector(".card");

function getAnimes(animes, index) {


    const genres = animes.genres.map(genre => {
        console.log(genre);
        const result = `<p>${genre.name}</p>`;
        return result;
    })


    const searchResult = animeData.filter(anime =>
        anime.title.includes(searchWord)

    )
    console.log(searchResult);
    const container = document.querySelector("#manga-container");
    container.innerHTML = "";
    searchResult.map((element, index) => {
        console.log(element);
        container.innerHTML += getAnimes(element, index)
    })
    console.log(searchResult);

}
function showMore(event) {
    console.log('event', event);
    const synop = document.getElementById(`${event.id}`);


    const filteredData = animeData.filter((el, index) => {
        if (index == event.id) {
            return el;
        }
        
       

    })

    console.log(filteredData);
    

}

async function search(event) {
    const searchField = document.getElementById("search-field");
    const searchWord = searchField.value;

    const searchResult = animeData.filter(anime =>
        anime.title.includes(searchWord)

    )
    console.log(searchResult);
    const container = document.querySelector("#manga-container");
    container.innerHTML = "" ;
    searchResult.map((element, index) => {
        console.log(element);
        container.innerHTML += getAnimes(element, index)
    })
    console.log(searchResult);

}

function getAnimes(animes, index) {


    const genres = animes.genres.map(genre => {
        console.log(genre);
        const result = `<p>${genre.name}</p>`;
        return result;
    })
    const score = animes.score;
    const members = animes.members;
    const studio = animes.studios.map(elem => {
        const res = `<a href="#"> ${elem.name}</a>`
        return res;
    })


    return `
    <div class="card">
         <a href="#" id="title" style="display:block">${animes.title}</a>
         <div class="intro">
             <i class="fa-sharp fa-solid fa-circle-play"></i>
             <span id="type">${animes.type}, ${animes.year} | ${animes.status.substring(0, 8)} | ${animes.episodes} eps, ${animes.duration.substring(0, 6)}</span>
             <i class="fa-solid fa-tower-broadcast"></i>
             

         </div>
         <div class="genres" id="genres">
           ${genres.join('')}
         </div>
         <div class="img-container">
         <img src=${animes.images.jpg.image_url}>
         <div class="anime-content">
            <div id="detail">
                <p id="synopsis_${index}">${animes.synopsis.slice(0, 369)}<p/>
                <p id="second-p"></p>
                <button id="synopsis_${index}" onclick="showMore(this);">
                    <i class="fa-solid fa-angles-down"></i>
                    <i class="fa-solid fa-angles-up"></i>
                </button>
            </div>
            <div class="info">
                <p class="studio"><strong>Studio:</strong>${studio}</p> 
                <p class="source"><strong>Source:</strong></p> 
                <p class="theme"><strong>Theme:</strong></p> 
                <p class="dem"><strong>Demographic:</strong></p> 
            </div>
         </div>
         </div>
         <div class="card-footer">
            <div class="score">
                <i class="fa-regular fa-star"></i>
                ${score}</div>
            <div class="members">
            <i class="fa-solid fa-person"></i>
                ${members}</div>
            <div class="button">
                <button>Add to List</button>
            </div>

         </div>
         
    </div>
    `
}
