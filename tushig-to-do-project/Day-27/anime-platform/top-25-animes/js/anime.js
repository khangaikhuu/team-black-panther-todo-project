// SEARCH VALUE DEER BICIGDSEN NERSIIG SONGOJ UGNU
async function search(event) { 
    const searchField = document.getElementById('search-field').value;
    const animes = await fetch('https://api.jikan.moe/v4/top/anime');
    const animesJSON = await animes.json();
    const animesData = animesJSON.data;

    const searchResult = animesData.filter(anime => {
        return anime.title.toLowerCase().includes(searchField.toLowerCase())
    })

    // ENE HESEG TUHAIN NERNII DAGUU ANIME -g GARGAJ UGDUG
    const animesContainer = document.getElementById('animes-container')
    let result = '';
    searchResult.map((element, index) => {
        result += getAnimes(element, index);
        return result
    })
    animesContainer.innerHTML = result;
}



// YMAR TURUL SONGOGDOH HESEG
let selector = []
let animesGenre = []
const select = document.getElementById('genres-selector');

async function callURL(){
    const fetchedData = await fetch('https://api.jikan.moe/v4/top/anime')
    const fetchedJSON = await fetchedData.json();
    animesGenre = fetchedJSON.data;
    const container = document.querySelector('#animes-container');
    container.innerHTML = '';
    animesGenre.map((element, index) => {
        container.innerHTML += getAnimes(element, index)
    })
}

async function callGenre (){
    const fetchedgenreData = await fetch('https://api.jikan.moe/v4/genres/anime') 
    const genrefetchedJSON = await fetchedgenreData.json();
    selector = genrefetchedJSON.data;
    selector.map((genre) =>{
        const option = document.createElement('option')
        option.value = genre.mal_id;
        option.textContent = genre.name;
        select.appendChild(option);
    })
}

callGenre()
callURL();

// TURUL SONGOGDOH HESEG
select.addEventListener('change', async function handleChange(event) {
    let searchValue = event.target.value;
    const genreFilter = animesGenre.filter(anime => {
        const genres = anime.genres;
        const result = genres.filter((genre) => {
            if(genre.mal_id == searchValue){
                return genre   
            }
        })    
        
        if(result.length > 0){
            return anime
        }         
    })

    const container = document.querySelector('#animes-container');
    container.innerHTML = '';
    genreFilter.map((element, index) => {
        container.innerHTML += getAnimes(element, index)
    })
})

// BUSAD ANIME TABLE RUU VSREH ZUIL 
console.log('Pagination')

let pageData = [];
let pagination = {};
let page = 1;
let currenPage = page;

//BUH PAGUDIN DATA
async function getPageData(event){
    if(event.id == "prev"){
        page = Number(currenPage) - 1;
    }
    else if(event.id == "next"){
        page = Number(currenPage) + 1;
    }
    else{
        page = event.text
    }
    currenPage = page;
    if(page == undefined || page < 1){
        page = 1;
        currenPage = 1;
    }
    if(page >= 10){
        page = 10;
        currenPage = 10;
    }

    const fetchedData = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`);
    const fetchedJSON = await fetchedData.json();
    pageData = fetchedJSON.data;
    pagination = fetchedJSON.pagination;

    const animes = document.getElementById("animes-list");

    createPagenation(page);
    animes.innerHTML = "";
    pageData.map((element, index) => {
        animes.innerHTML += getAnimes(element, index)
    })
}
getPageData(page);

//PAGENATION VVSGEGCH
function createPagenation(page){
    let paging = document.getElementById("pages-list");
    paging.innerHTML = "";
    let prev = `<a onclick="getPageData(this)" id="prev"></a>`;
    paging.innerHTML = prev;

    for(let i = 0; i < 10; i++){
        let nthPage = "";
        if(page == (i + 1)){
            nthPage = `<a onclick="getPageData(this)" class="active">${i + 1}</a>`
        }
        else{
            nthPage = `<a onclick="getPageData(this)">${i + 1}</a>`
        }
        paging.innerHTML += nthPage;
    }
    let next = `<a onclick="getPageData(this)" id="next"></a>`
    paging.innerHTML += next;
}

// FETCH
let genreData = [];
let animeData = [];
async function callURL(){
    const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime")
    const fetchedJSON = await fetchedData.json()
    animeData = fetchedJSON.data;
``
    const animes = document.getElementById("animes-list");
    animes.innerHTML = "";
    animeData.map((element, index) => {
        animes.innerHTML += getAnimes(element, index)
    })
}
callURL();





// TOP 25 ANIME ORUULJ IRJ BGA DATAG AVCHIRSAN HESEG
function getAnimes (p1, p2 ) {
    const genres = p1.genres.map(genre => {
        const result = `<p>${genre.name}</p>`;
        return result;
     })
    const animeContainer = `
    <div class="manga-container">
        <a href="${p1.url}"><h6>${p1.title}</h6></a>

        <div class="demographic">
            <i class="fa-solid fa-circle-play"style="color: orange;"></i>
                <p id="type">${p1.type}</p>
                <p id="year">${p1.year}</p>
                <p id="status">Finished</p>
                <p id="eps">${p1.episodes}</p>
                <p id="eps">${p1.duration}</p>
            <i class="fa-sharp fa-solid fa-tower-cell"style=" color: rgb(0, 255, 26);"></i>
        </div>

        <div class="type-list-bar">
            ${genres}
        </div>
        
        <div class="anime-content">
            <img class="manga-image" src="${p1.images.jpg.image_url}">
            <div id="anime-text">
                <p id="synopsis_${p1}">${p1.synopsis.slice(0, 300)}</p>
                <p id="second-p"></p>
                    <button id="${p1}" onclick="showMore(this);"style="border: none; width: 205px; font-size: 20px; background-color: rgba(0, 0, 0, 0);">
                        <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <div id="info">
                    <p><strong>Studio:</strong> <a href="#">Bones</a></p>
                    <p><strong>Source:</strong> Manga</p>
                    <p><strong>Theme:</strong> <a href="#">Military</a></p>
                    <p><strong>Demographic:</strong> <a href="#">Shounen</a></p>
                  </div>
            </div>
      </div>
        <footer class="ratings">
            <div class="rate">
                <i class="fa-regular fa-star"style="color: orange;"></i>
                <span id="score">${p1.score}</p>
            </div>
            <div class="viewers">
                <i class="fa-solid fa-eye"style="color: rgba(0, 0, 0, 0.3)"></i>
                <span id="members"style="color:rgba(0, 0, 0, 0.3);">3.0M</span>
            </div>
            <button id="add-list">Add To List</button>
        </footer>
    </div>`
    return animeContainer
}

async function callData () {
    const animeTop = await fetch('https://api.jikan.moe/v4/top/anime');
    const animeJSON = await animeTop.json () 
    const animeData = animeJSON.data
    const container = document.querySelector('#animes-container');
    container.innerHTML = '';
    animeData.map((p1, p2) => {
      container.innerHTML += getAnimes(p1, p2)
    })

}


