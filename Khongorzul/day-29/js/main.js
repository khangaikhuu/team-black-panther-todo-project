async function showMoreFunc(event){
    const elementSynop = document.getElementById(`anime-mini-text_${event.id}`);

    const resultJSON = await fetch("https://api.jikan.moe/v4/top/anime");
    const result = await resultJSON.json();

    const animeData = result.data;

    const filteredData = animeData.filter((el, index) => {
        if(index == event.id){
            return el;
        }
    })

    elementSynop.innerHTML = filteredData[0].synopsis;
}

function getAnimes(data, index){
    const genres = data.genres.map(genre => {
        const result = `<a>${genre.name}</a>`;
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
                <div style="line-height: 25px" id="anime-mini-text_${index}">
                    ${data.synopsis.slice(0, 300)}
                </div>
                <button class="more-button" id="showMore_${index}" onclick="showMoreFunc(this)"><i class="fa-solid fa-sort-down"></i></button>
                <div id="right-bottom">
                    <p>Studios: <a href="${data.studios[0].url}" id="studio">${data.studios[0].name}</a></p>
                    <p>Source: <a>${data.source}</a></p>
                </div>
            </div>
        </div>
        <div id="bottom">
            <div><i class="fa-regular fa-star"></i> <span>${data.score}</span></div>
            <div><i class="fa-solid fa-user"></i> <span>${data.members}</span></div>
            <div><button id="add">Add to List</button></div>
        </div>
    </div>`
}

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