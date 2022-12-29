console.log("hello world");

let animeData = []
let genreData = []

const genreCon = document.querySelector("#genre-selector");
async function callURL() {
    const fetchedData = await fetch('https://api.jikan.moe/v4/top/anime'); //data awahiin tuld await use
    const fetchedJSON = await fetchedData.json();
    animeData = fetchedJSON.data;
    const container = document.querySelector("#manga-container");

    container.innerHTML = "";
    animeData.map((element, index) => {
        // console.log(element);
        container.innerHTML += getAnimes(element, index)
    })

}
async function callGenre() {
    const fetchData = await fetch('https://api.jikan.moe/v4/genres/anime');
    const fetchJSON = await fetchData.json();
    genreData = fetchJSON.data;
    console.log(genreData);
   
    genreCon.innerHTML = "";

    genreData.map((element, index) => {
        const option = document.createElement("option");
        option.value = element.mal_id;
        option.textContent = element.name;
        genreCon.appendChild(option)
    })
}
callGenre()
callURL()


async function callPages() {
    const fetchedData = await fetch('https://api.jikan.moe/v4/top/anime?page=10');
    const fetchedJSON = await fetchedData.json();
    pageData = fetchedJSON.data;
    const pageCon = document.querySelector("#jump");

    pageCon.innerHTML = "";

    pageData.map((element, index) => {
        
    })



    
}

// filter and map example
// const array = [1, 2, 3, 4, 5, 7, 8, 9]
// const mapResult = array.map((e)=>{
//     if(e < 5){
//         return e
//     } 

// })
// console.log(mapResult)


// const filterResult = array.filter((e)=>{
//     if(e < 5){
//         return e
//     } 

// })
// console.log(filterResult)


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
async function showMore(event) {
    console.log('event', event);
    const synop = document.getElementById(`synopsis_${event.id}`);

    console.log(animeData);
    const filteredData = animeData.filter((el, index) => {
        if (index == event.id) {

            return el;
        }
    })

    filteredData.map(element => {
        console.log(element);
        const detail = element.synopsis;
        console.log(detail);
        synop.innerHTML = detail;
        
    })




}

async function search(event) {
    const searchField = document.getElementById("search-field");
    const searchWord = searchField.value;

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

genreCon.addEventListener("change", function handleChange(event) {
    // console.log(event.target.value);
    let searchValue = event.target.value;
    // console.log(searchValue);
    const genreFilter = animeData.filter(anime => {

        const genres = anime.genres;
        const result = genres.filter((genre) => {
            if(genre.mal_id == searchValue){
                return genre;
            }
        })
        if(result.length > 0){
            return anime;
        }
    })

    const container = document.querySelector("#anime-container");
    container.innerHTML = "";
    genreFilter.map((element, index) => {
        container.innerHTML += getAnimes(element, index)  
        console.log(container);
    })

})


function getAnimes(animes, index) {


    const genres = animes.genres.map(genre => {
        // console.log(genre);
        const result = `<p>${genre.name}</p>`;
        return result;
    })

    // const year = animes.year.map(element => {
    //     const result = element.year;
    //     return result;console.log(year);

    // })

    const score = animes.score;
    const members = animes.members;
    const studio = animes.studios.map(elem => {
        const res = ` <p class="studio"><strong>Studio:</strong><a href="#"> ${elem.name}</a></p> `
        return res;
    })
    const themes = animes.themes.map(i => {
        const r = `<a href="#"> ${i.name}</a> `
        return r;
    })

    const dem = animes.demographics.map(e => {
        const res = ` <p class="dem"><strong>Demographic:</strong><a href="#"> ${e.name}</a></p> `
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
         <div class="p-con">
            <div id="detail">
                <p id="synopsis_${index}">${animes.synopsis.slice(0, 369)}<p/>
                <p id="second-p"></p>
                <button id="${index}"style="border:none; background-color: white;" onclick="showMore(this);">
                    <i class="fa-solid fa-angles-down"></i>
                </button>
                <button id="${index}" style="border:none; background-color: white; display: none;" onclick="showMore(this);">
                    <i class="fa-solid fa-angles-up"></i>
                </button>
            </div>
            <div class="info">
                ${studio}
                <p class="source"><strong>Source:</strong> ${animes.source}</p> 
                <p class="theme"><strong>Theme:</strong>${themes.join(' ')}</p>
                ${dem}
            </div>
         </div>
         </div>
         <div class="card-footer">
            <div class="score">
                <i class="fa-regular fa-star"></i>
                ${score}</div>
            <div class="members">
            <i class="fa-solid fa-person"></i>
                ${(members / 1.0e+6).toFixed(1)} M</div>
            <div class="button">
                <button>Add to List</button>
            </div>

         </div>
         
    </div>
    `
}
