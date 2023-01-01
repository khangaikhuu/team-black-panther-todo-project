const card = document.querySelector("#card");
const container = document.getElementById("anime-container")

let animeData = [];
let genreData = [];
let current = "";
const empty = []
const page = document.querySelector("#page")



// ----------------PREV, NEXT BUTTON-------------

    const anker1 = document.createElement("a")
    page.appendChild(anker1);
    anker1.innerHTML = `<button class= "btn btn-info"> <i class='fas fa-arrow-left bg-info'>   </i></button>`;
    anker1.className = "remove-btn"
    anker1.addEventListener("click", async (even) => {
        current = Number(current) - 1;
        console.log('current',current);
        // nee tomyo even dotorh target buyu ANKER tagiin text-iin utgiig hevlej ugj baigaa
        // console.log(current)
        // 
        const fetchUrl = await fetch(`https://api.jikan.moe/v4/top/anime?page=${current}`);
        const fetchJSON = await fetchUrl.json();
        const pageData = fetchJSON.data;
        console.log(pageData)
        animeData = pageData;
        container.innerHTML = "";
        animeData.map((anime) => {
            container.innerHTML += getAnimes(anime)
        })
    });


    const anker4 = document.createElement("a")
    page.appendChild(anker4);
    anker4.innerHTML = `<button class= "btn btn-warning"> <i class='fas fa-arrow-right bg-warning'>   </i></button>`;
    anker4.addEventListener("click", async (event) => {
        current = Number(current) + 1;
        console.log('next',current);
        const fetchUrl = await fetch(`https://api.jikan.moe/v4/top/anime?page=${current}`);
        const fetchJSON = await fetchUrl.json();
        const pageData = fetchJSON.data;
        console.log(pageData)
        animeData = pageData;

        container.innerHTML = "";
        animeData.map((anime) => {
            container.innerHTML += getAnimes(anime)
        })
    })

const selectGenre = document.querySelector("#full-genre");

async function callURL() {
    const fetchedData = await fetch('https://api.jikan.moe/v4/top/anime')
    const fetchedJSON = await fetchedData.json();
    animeData = fetchedJSON.data;
    console.log(animeData);
    const container = document.querySelector('#anime-container');

    container.innerHTML = '';
    animeData.map((element, index) => {
        container.innerHTML += getAnimes(element, index)

    })
}

// ------------------ALL 76 GENRE CALLING FUNC---------------

async function callGenreURL() {
    const url = 'https://api.jikan.moe/v4/genres/anime'
    const fetchedData = await fetch(url)
    const fetchedJSON = await fetchedData.json();
    genreData = fetchedJSON.data;
    console.log(genreData);
    genreData.map(genre => {
        const option = document.createElement("option");
        option.className = "category-child";
        option.textContent = genre.name;
        selectGenre.appendChild(option)
    })
}
callURL()
callGenreURL()


// ---------------------MAIN PART----------------------


async function showMore(element) {
    console.log(element.id);
    const elementSynop = document.getElementById(`synopsis_${element.id}`);
    console.log(animeData)
    const filteredData = animeData.filter((el, index) => {
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

// ----------------------SEARCH--------------------

async function search(event) {
    const searchField = document.getElementById("search-field");
    const searchWord = searchField.value.toLowerCase();
    // const animes = await fetch('https://api.jikan.moe/v4/top/anime');
    // const animesJson = await animeData.json();
    // console.log(animesJson)
    // const animesDat = animesJson.data;

    const searchResult = animeData.filter(anime => anime.title.toLowerCase().includes(searchWord)
    );
    console.log(searchResult)

    const container = document.querySelector('#anime-container');

    container.innerHTML = "";
    searchResult.map((element) => {
        container.innerHTML += getAnimes(element);
    })
}

// ------------------GENRE------------------

selectGenre.addEventListener("change", (event) => {
    console.log(event)
    // const option = document.getElementsByTagName("option")
    console.log(event.target.value)

    let cateResult = animeData.filter(cat => {
        for (i = 0; i < cat.genres.length; i++) {
            if (event.target.value == cat.genres[i].name) {
                return cat
            }
        }
    })
    console.log(cateResult);
    if (event.target.value == `Default`) {
        cateResult = animeData;
    }
    container.innerHTML = "";
    cateResult.map((element, index) => {
        container.innerHTML += getAnimes(element, index)
    })

});

// ------------------PAGINATION-------------


for (let i = 1; i <= 10; i++) {
    const anker1 = document.createElement("a")
    page.appendChild(anker1);
    anker1.innerHTML = i
    anker1.className = "btn btn-secondary page-btn"
    anker1.href = "#"
    empty.push(i)
    anker1.addEventListener("click", async (even) => {
        // nee tomyo even dotorh target buyu ANKER tagiin text-iin utgiig hevlej ugj baigaa
        console.log(even.target.text)
        let current_page = (even.target.text)
        current = current_page
        // 
        const fetchUrl = await fetch(`https://api.jikan.moe/v4/top/anime?page=${even.target.text}`);
        const fetchJSON = await fetchUrl.json();
        const pageData = fetchJSON.data;
        console.log(pageData)
        animeData = pageData;

        container.innerHTML = "";
        animeData.map((anime) => {
            container.innerHTML += getAnimes(anime)
        })
    })
};
