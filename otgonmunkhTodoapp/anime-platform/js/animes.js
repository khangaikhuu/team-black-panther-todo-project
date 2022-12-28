console.log("hello world");

const card = document.querySelector(".card");

function getAnimes(animes) {


        const genres = animes.genres.map(genre => {
            console.log(genre);
            const result = `<p>${genre.name}</p>`;
            return result;
        })


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
             <span id="type">${animes.type}, ${animes.year} | ${animes.status.substring(0, 8)} | ${animes.episodes} eps, ${animes.duration.substring(0,6)}</span>
             <i class="fa-solid fa-tower-broadcast"></i>
             

         </div>
         <div class="genres" id="genres">
           ${genres.join('')}
         </div>
         <div id="detail">
             <p><p/>
             <p class="second"></p>
         </div>
         <img src=${animes.images.jpg.image_url}>
         
    </div>
    `
}
const animesURL = 'https://api.jikan.moe/v4/top/anime';
fetch(animesURL)
    .then(res => res.json())
    .then(animes => {
        console.log(animes.data);
        const container = document.querySelector("#manga-container");
        console.log(container);
        animes.data.map(element => {
            console.log(element);
            container.innerHTML += getAnimes(element)
        })



    })