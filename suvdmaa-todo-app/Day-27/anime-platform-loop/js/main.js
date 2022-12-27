const container = document.querySelector('#card')

const select = document.getElementById('genre-selector');

select.addEventListener('change', async function handleChange(event) {
    let genre = event.target.value;
    const animes = await fetch('https://api.jikan.moe/v4/top/anime')
    const animesJSON = await animes.json();
    const animesData = animesJSON.data;

    const searchResult = animesData.filter(anime => {
        return anime.genres.toLowerCase().includes(genre.value.toLowerCase())
    }

})


async function showMore(event) {
    // console.log(event.id);
    const elementSynop = document.getElementById(`firstp_${event.id}`);
    const element = document.getElementById(`secondp_${event.id}`)

    if (event.innerHTML == `<i class="fa-solid fa-angle-down"></i>`) {
        event.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
        elementSynop.style.display = "none"
        element.style.display = "block";
    } else if (event.innerHTML = `<i class="fa-solid fa-angle-up"></i>`) {
        event.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
        elementSynop.style.display = "block"
        element.style.display = "none";
    }
}//////

async function search() {
    const searchField = document.getElementById('search-field');

    const animes = await fetch('https://api.jikan.moe/v4/top/anime')
    const animesJSON = await animes.json();
    const animesData = animesJSON.data;
    console.log(typeof searchField.value)

    const searchResult = animesData.filter(anime => {
        return anime.title.toLowerCase().includes(searchField.value.toLowerCase())
    }

    )
    console.log(searchResult);


    const container = document.querySelector('#anime-container');

    container.innerHTML = '';
    let result = "";
    searchResult.map((element, index) => {
        result += getAnimes(element, index)
    })
    container.innerHTML = result;

}


function getAnimes(data, index) {
    const genres = data.genres.map(genre => {
        const result = `<p>${genre.name}</p>`;
        return result
    })

    const studio = data.studios.map(e => {
        const result = `<a href="#">${e.name}</a>`
        return result
    })

    const theme = data.themes.map(e => {
        const result = `<a href="#">${e.name}</a>`
        return result
    })

    const demo = data.demographics.map(e => {
        const result = `<a href="#">${e.name}</a>`
        return result
    })


    return ` 
    <div class="anime-card" id="card">
      <a href="#" id="second-title" class="title-Text">${data.title}</a>
      <div class="anime-status">
         <p><i class="fa-solid fa-circle-play" style="font-size: 16px"></i></p>
         <p id="text1" class="text1">${data.type}, ${data.year}</p>
         <p id="text2" class="text2">${data.status}</p>
         <p id="text3" class="text3">${data.episodes} eps  ${data.duration.slice(0, 6)}</p>
         <p> <i class="fa-solid fa-signal" style="font-size: 16px"></i></p></div>
    <div class="anime-genre">
        ${genres}
    </div>
    <div class="anime-body">
        <img id="image-id" src=${data.images.jpg.image_url} 
            alt="full-metal">
        <div class="anime-content">
            <div id="text">
                <p id="firstp_${index}">${data.synopsis.slice(0, 375)}</p>
                <p id="secondp_${index}" style="display: none;">${data.synopsis}</p>
                <button id="${index}" onclick="showMore(this);">
                <i class="fa-solid fa-angle-down"></i></button>
            </div>
            <div id="info">
                <p><strong>Studio:</strong> ${studio}</p>
                <p><strong>Source:</strong> ${data.source}</p>
                <p><strong>Theme: </strong> ${theme}</p>
                <p><strong>Demographic:</strong> ${demo}</p>
            </div>
        </div>
    </div>
    <div class="anime-footer">
        <div id="review">
            <i class="fa-regular fa-star"></i>
            <span id="number">${data.score}</span>
        </div>
        <div id="views">
            <i class="fa-solid fa-user"></i>
            <span id="view-number">${(data.members / 1.0e+6).toFixed(1)} M</span>
        </div>
        <button id="add-list">Add To List</button>
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