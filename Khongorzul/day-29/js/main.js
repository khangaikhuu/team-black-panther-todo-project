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
async function dropdown(event){
    const animes = await fetch("https://api.jikan.moe/v4/top/anime");
    const animesJSON = await animes.json();
    const animesData = animesJSON.data;

    const dropdownSearch = animesData.filter((element, index) =>
        console.log(animesData[index].genres[index].name)
        //element.genres[index].name.includes(event)
    )

    const dropdownAnimes = document.getElementById("animes");
    let result = "";
    dropdownSearch.map((element, index) => {
        result += getAnimes(element, index);
        console.log(result);
    })
    dropdownAnimes.innerHTML = result;
}


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

//FETCH
fetch("https://api.jikan.moe/v4/top/anime")
    .then((result) => result.json())
    .then((topAnime) => {
        const anime = topAnime.data;
        const animes = document.getElementById("animes");

        anime.innerHTML = "";
        anime.map((element, index) => {
            animes.innerHTML += getAnimes(element, index)
        })
    })