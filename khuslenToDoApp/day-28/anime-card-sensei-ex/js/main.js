const card = document.querySelector("#card");
const container = document.getElementById("anime-container")

async function showMore(element) {
    console.log(element.id);
    const elementSynop = document.getElementById(`synopsis_${element.id}`);

    const resultJSON = await fetch('https://api.jikan.moe/v4/top/anime');
    const result = await resultJSON.json();
    const animeDATA = result.data;
    console.log(animeDATA)
    const filteredData = animeDATA.filter((el, index) => {
        if (index == element.id) {
            return element;
        }
    })

    console.log(filteredData[0].synopsis);
    elementSynop.innerHTML = filteredData[0].synopsis;
}
function getAnimes(data, index) {
    const genres = data.genres.map(genre => {
        const result = `<p>${genre.name}</p>`;
        return result;
    })
    return `

    <div class="anime-card" id="card">
    <a href="#" id="title"> ${data.title}</a>
    <div class="anime-status">
        <i class=" fa-solid fa-circle-play" style="font-size: 16px"></i>
        <div>
            <span id="type">${data.type}</span>
            <span id="year">${data.year}</span>
            <span id="status">${data.status}</span>
            <span id="eps">${data.episodes}</span>
        </div>
        <i class="fa-solid fa-signal" style="font-size:16px"></i>
    </div>
    <div class="anime-genre">
        <p>Action</p>
        <p>Adventure</p>
        <p>Drama</p>
        <p>Fantasy</p>
    </div>
    <div class="anime-body">
        <img src=${data.images.jpg.image_url} alt="full-alchemist" />
        <div class="anime-content">
            <div id="text">
                <p id= "synopsis_${index}">${data.synopsis.slice(0, 300)}</p>
                <p id="second-p"></p>
                <button id="${index}" onclick="showMore(this)" style="display: block; margin:auto; border:none; background-color: transparent; cursor: pointer; padding:10px 0;">
                <i class="fa-solid fa-angle-down">
                    <i class="fa-solid fa-angle-down"></i>
                </button>
            </div>
            <div id="info">
                <p><strong>Studio</strong> <a href="#">Bones</a></p>
                <p><strong>Source</strong> Manga</p>
                <p><strong>Theme</strong> <a href="#">Military</a></p>
                <p><strong>Demographic</strong> <a href="#">Shounen</a></p>
            </div>
        </div>
    </div>
    <div class="Anime-footer">
        <div id="review">
            <i class="fa-regular fa-star"></i>
            <span id="number">9.11</span>
        </div>
        <div id="views">
            <i class="fa-solid fa-eye"></i>
            <span id="view-number">3.0m</span>
        </div>
        <button id="add-list">Add to list</button>
    </div>
</div>`
}
fetch('https://api.jikan.moe/v4/top/anime')
    .then((res) => res.json())
    .then((topAnime) => {
        console.log('topAnim', topAnime);
        const anime = topAnime.data;
        console.log('anime', anime);
        const container = document.querySelector('#anime-container');

        container.innerHTML = '';
        anime.map((element, index) => {
            container.innerHTML += getAnimes(element, index)
        })
    })
async function search(event) {
    const searchField = document.getElementById("search-field");
    const searchWord = searchField.value.toLowerCase();
    const animes = await fetch('https://api.jikan.moe/v4/top/anime');
    const animesJson = await animes.json();
    const animesData = animesJson.data;

    const searchResult = animesData.filter(anime => anime.title.toLowerCase().includes(searchWord)
    );
    console.log(searchResult)

    const container = document.querySelector('#anime-container');

    container.innerHTML = "";
    searchResult.map((element) => {
        container.innerHTML += getAnimes(element);
    })
}