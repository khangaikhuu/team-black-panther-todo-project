//PAGES
let pageData = [];
let pagination = {};
let page = 1;
let currenPage = page;

//GET PAGE DATA
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

    const animes = document.getElementById("animes");

    createPagenation(page);
    animes.innerHTML = "";
    pageData.map((element, index) => {
        animes.innerHTML += getAnimes(element, index)
    })
}
getPageData(page);

//CREATE PAGENATION
function createPagenation(page){
    let paging = document.getElementById("pages");
    paging.innerHTML = "";

    let prev = `<a onclick="getPageData(this)" id="prev"><i class="fa-solid fa-arrow-up-1-9"></i></a>`;

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
    let next = `<a onclick="getPageData(this)" id="next"><i class="fa-solid fa-arrow-down-1-9"></i></a>`
    paging.innerHTML += next;
}



//FETCH
let genreData = [];
let animeData = [];
async function callURL(){
    const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime")
    const fetchedJSON = await fetchedData.json()
    animeData = fetchedJSON.data;

    const animes = document.getElementById("animes");
    animes.innerHTML = "";
    animeData.map((element, index) => {
        animes.innerHTML += getAnimes(element, index)
    })
}
callURL();



//SEARCH
async function search(event){
    const searchField = document.getElementById("search-input").value;
    //const searchWord = searchField;

    const animes = await fetch("https://api.jikan.moe/v4/top/anime");
    const animesJSON = await animes.json();

    const animesData = animesJSON.data;
    // console.log(searchWord);

    const searchResult = animesData.filter(anime => 
        anime.title.toLowerCase().includes(searchField.toLowerCase())
    )

    const searchedAnimes = document.getElementById("animes");
    let result = "";
    searchResult.map((element, index) => {
        result += getAnimes(element, index);
    })
    searchedAnimes.innerHTML = result;
}
//ADD KEYBOARD EVENT ON SEARCH BTN
document.addEventListener("keypress", (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;

    if(keyCode === 13){
        document.getElementById("search-btn").click();
    }
});


//SELECT GENRE
async function dropdown(){
    const fetchedGenreData = await fetch("https://api.jikan.moe/v4/genres/anime");
    const fetchedGenreJSON = await fetchedGenreData.json();
    const genreData = fetchedGenreJSON.data;

    genreData.map(element => {
        const option = document.createElement("option");
        option.value = element.mal_id;
        option.textContent = element.name;

        select.appendChild(option);
    })
}
dropdown();


const select = document.getElementById('genreSelect');

select.addEventListener('change', function handleChange(event) {
    let selectValue = event.target.value;

    const genreSelect = animeData.filter(anime => {
        const genres = anime.genres;

        const result = genres.filter((genre) => {
            if(genre.mal_id == selectValue){
                return genre
            }
        })
        if(result.length > 0){
            return anime
        }
    })

    const selectedAnimes = document.getElementById("animes");
    let result = "";
    genreSelect.map((element, index) => {
        result += getAnimes(element, index);
    })
    selectedAnimes.innerHTML = result;
});

//SHOW MORE
function showMoreFunc(event){
    const elementSynop = document.getElementById(`anime-text_${event.id}`);
    const elementSynopFull = document.getElementById(`anime-full-text_${event.id}`)

    if(event.innerHTML == `<i class="fa-solid fa-sort-down"></i>`){
        event.innerHTML = `<i class="fa-solid fa-caret-up"></i>`;
        elementSynop.style = "display: none";
        elementSynopFull.style = "display: block";
    }
    else if(event.innerHTML == `<i class="fa-solid fa-caret-up"></i>`){
        event.innerHTML = `<i class="fa-solid fa-sort-down"></i>`;
        elementSynop.style = "display: block";
        elementSynopFull.style = "display: none";
    }
}

//GET ANIMES
function getAnimes(data, index){

    const genres = data.genres.map(genre => {
        const result = `<a>${genre.name}</a>`;
        return result;
    })

    const theme = data.themes.map(el => {
        const result = `<a href="${el.url}">${el.name}</a>`;
        return result;
    })

    const demo = data.demographics.map(el => {
        const result = `<a href="${el.url}">${el.name}</a>`;
        return result;
    })

    return `
    <div class="anime" id="card">
        <h3><a id="anime-title" href="${data.url}">${data.title}</a></h3>

        <div class="anime-status">
            <i class="fa-brands fa-youtube"></i>
            <div>
                <span id="type">${data.type},</span>
                <span id="year">${data.year}</span>
                <span id="finish">${data.status}</span>
                <span id="eps">${data.episodes}, ${data.duration}</span>
            </div>
            <i class="fa-solid fa-tower-broadcast"></i>
        </div>

        <div id="genres">
            ${genres}
        </div>

        <div id="anime-body">
            <img id="anime-image" src="${data.images.jpg.image_url}"/>

            <div id="right-side">
                <div id="anime-text_${index}">
                    ${data.synopsis.slice(0, 300)}
                </div>
                <div style="display: none" id="anime-full-text_${index}">
                    ${data.synopsis}
                </div>

                <button class="more-button" id="${index}" onclick="showMoreFunc(this)"><i class="fa-solid fa-sort-down"></i></button>

                <div id="right-bottom">
                    <p>Studios: <a href="${data.studios[0].url}" id="studio">${data.studios[0].name}</a></p>
                    <p>Source: <a>${data.source}</a></p>
                    <p>Theme: <a>${theme}</a></p>
                    <p>Demographics: <a>${demo}</a></p>

                </div>
            </div>
        </div>

        <div id="bottom">
            <div><i class="fa-regular fa-star"></i> <span>${data.score}</span></div>
            <div><i class="fa-solid fa-user"></i> <span>${(data.members / 1.0e+6).toFixed(1)}M</span></div>
            <div><button id="add">Add to List</button></div>
        </div>
    </div>`
}