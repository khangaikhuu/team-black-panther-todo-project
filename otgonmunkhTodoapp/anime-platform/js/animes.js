console.log("hello world");

// const numbers = [1, 2, 3, 4, 5];
// numbers.filter(number => number < 3)
const card = document.querySelector(".card");
async function search(event) {
    const searchField = document.getElementById("search-field");
    const searchWord = searchField.value;
    const animes = await fetch('https://api.jikan.moe/v4/top/anime')
    const animesJSON = await animes.json();
    const animesData = animesJSON.data;

    const searchResult = animesData.filter(anime =>
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
async function showMore(event) {
    const synop = document.getElementById(`synopsis${event.id}`);

    const resultJSON = await fetch('https://api.jikan.moe/v4/top/anime');
    const result = await resultJSON.json();
    const animeData = result.data;

    const filteredData = animeData.filter((el, index) => {
        if (index == event.id) {
            return el;
        }

    })

    console.log(filteredData);

}

function getAnimes(animes, index) {


    const genres = animes.genres.map(genre => {
        console.log(genre);
        const result = `<p>${genre.name}</p>`;
        return result;
    })
    const score = animes.score;
    const members = animes.members;


    return `
    <div class="card">
         <a href="#" id="title" style="display:block">${animes.title}</a>
         <div class="intro">
             <i class="fa-sharp fa-solid fa-circle-play"></i>
             <span id="type">${animes.type}, ${animes.year} | ${animes.status.substring(0, 8)} | ${animes.episodes} eps, ${animes.duration.substring(0, 6)}</span>
             <i class="fa-solid fa-tower-broadcast"></i>
             

         </div>
         <div class="genres" >
           ${genres.join('')}
         </div>

         <div class="img-container">
            <img src=${animes.images.jpg.image_url}>
            <div class="p-con">
                 <div class="first-p" id="synopsis_${index}">${animes.synopsis.slice(0, 369)}</div>
                 <div class="second" ></div>
                 <button id="${index}" onclick="showMore(this);">
                    <i class="fa-sharp fa-solid fa-chevron-up"></i>
                 </button>
                 <button id="${index}" onclick="showMore(this);">
                    <i class="fa-solid fa-chevron-down"></i>
                 </button>
                 <div class="source" >
                   
                 </div>
                 

            </div>
         </div>
        <div class="card-footer" >
             <div class="score">
             
             <i class="fa-regular fa-star"></i>
                 ${score}
            </div>
            <div class="members">
            <i class="fa-solid fa-person"></i>
                ${members}        
            </div>
            <div class="button">
                <button>Add to List</button>       
            </div>
            
        </div>
         
    </div>
    `
}
const animesURL = 'https://api.jikan.moe/v4/top/anime';
fetch(animesURL)
    .then(res => res.json())
    .then(animes => {
        console.log(animes.data);
        const container = document.querySelector("#manga-container");

        animes.data.map((element, index) => {
            console.log(element);
            container.innerHTML += getAnimes(element, index)
        })



    })