let fetchedJSONData = [];

const fmaURL = "https://api.jikan.moe/v4/top/anime";
const genreURL = "https://api.jikan.moe/v4/genres/anime";
const cont = document.getElementById("container");
const genreSelector = document.getElementById("genre-selector");

async function callURL() {
    const fetchedData = await fetch('https://api.jikan.moe/v4/top/anime')
    const fetchedJSON = await fetchedData.json();
    fetchedJSONData = fetchedJSON.data;
    cont.innerHTML = "";
    fetchedJSONData.map((element, index) => {

        cont.innerHTML += animeData(element, index);
    })
}
callURL();

async function fetchGenres() {
    const fetchedGenre = await fetch(genreURL);
    const fetchedGenreJSON = await fetchedGenre.json();
    const genreData = fetchedGenreJSON.data;

    genreData.map((element) => {
        const option = document.createElement("option");
        option.innerHTML = element.name;
        genreSelector.appendChild(option);
    })

}
fetchGenres();

const prevBtn = document.getElementById("prevBtn");


const pageContainer = document.getElementById("pageContainer");

for(i = 0; i < 9; i++){
    const animePage = document.createElement("a");
    animePage.innerHTML = i + 1;
    pageContainer.appendChild(animePage);
    animePage.addEventListener("click", async (event) =>{
        console.log(event.target.text);
        const fetchedURL = await fetch(`https://api.jikan.moe/v4/top/anime?page=${event.target.text}`)
        const fetchJSON = await fetchedURL.json();
        const pageData = fetchJSON.data;
        fetchedJSONData = pageData;
        container.innerHTML = "";
        fetchedJSONData.map((element, index) => {
            container.innerHTML += animeData(element,index);
        })
    })

}

async function showMore(event) {

    const index = event.id;

    const elementSynop = document.getElementById(`synopsis_${index}`);

    const foundElement = fetchedJSONData.filter((e, idx) => {
        if (idx == index) {
            return e;
        }

    })
    elementSynop.innerHTML = foundElement[0].synopsis;
}

async function search(event) {
    const searchField = document.getElementById('search-field');
    const searchWord = searchField.value;

    const searchResult = fetchedJSONData.filter((anime) => {
        if (anime.title.toLowerCase().includes(searchWord.toLowerCase())) {
            return anime
        }
    })
    console.log(searchResult);
    cont.innerHTML = "";
    searchResult.map((element, index) => {
        console.log(element);
        cont.innerHTML += animeData(element, index);
    })
}

genreSelector.addEventListener('change', async (event) => {
    const option = document.getElementsByTagName("option");
    console.log(event.target.value);

    let optionResult = fetchedJSONData.filter(element => {
        for (i = 0; i < element.genres.length; i++) {
            if (event.target.value == element.genres[i].name) {
                return element;
            }
        }
    })
    console.log(optionResult);

    if (event.target.value == `All`) {
        optionResult = fetchedJSONData;
    }

    container.innerHTML = "";
    optionResult.map((element, index) => {
        container.innerHTML += animeData(element, index)
    })
})

function animeData(data, index) {

    let genres = data.genres.map(ele => {
        const result = `<button class="buttonGenre">${ele.name}</button>`
        return result
    })

    return `
    <div id="animeCard">
        <h4 id="title">${data.title}</h4>
        <div id="headerDIV">
            <div id="playIMG"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-badge-hd" viewBox="0 0 16 16">
            <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z"/>
            <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
            </svg></div>
            <div id="headerOne">${data.type}, ${data.aired.prop.from.year}  |  ${data.status.substring(0, 8)}  |  ${data.episodes} eps, ${data.duration.substring(0, 6)}</div>
            <div id="radioIMG"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-broadcast-pin" viewBox="0 0 16 16">
            <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z"/>
            </svg></div>
        </div>
        <div id="headerTwo">${genres.join("")}</div>

        <div id="bodyDIV">
            <img id="manga-image" src="${data.images.jpg.image_url}" alt="">
            <div id="text">
                <p id="synopsis_${index}">${data.synopsis.slice(0, 401)}</p>
                <p id="secondP"></p>
                <a id="${index}" onclick="showMore(this)">
                 <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                 <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/></svg></div>
                </a>
                <div id="info">
                    <p><strong>Studio:</strong> <a href="#">${data.studios[0].name}</a></p>
                    <p><strong>Source:</strong> Manga</p>
                    <p><strong>Theme:</strong> <a href="#"></a></p>
                    <p><strong>Demographic:</strong> <a href="#"></a></p>
                </div>
            </div>
        </div>
        <div id="bottomDIV">
            <p id="score">${data.score}</p>
            <p id="member">${data.members}</p>
            <a id="list" href="#">Add to List</a>
        </div>

    </div>`
}
