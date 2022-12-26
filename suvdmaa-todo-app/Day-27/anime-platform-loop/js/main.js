const container = document.querySelector('#card')

function showMore(event) {
    console.log(event.id)
    const elementSynop = document.getElementById('synopsis_S{event.id}')
    console.log(elementSynop)
}

function getAnimes(data, index) {
    const genres = data.genres.map(genre => {
        const result = `<p>${genre.name}</p>`;
        return result
    })

    const studio = data.studios.map(e =>{
        const result = `<a href="#">${e.name}</a>`
        return result
    })

    const theme = data.themes.map(e =>{
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
                <p id="first-p">${data.synopsis.slice(0, 375)}</p>
                <p id="second-p">${data.synopsis.slice(375, data.synopsis.length)}</p>
                <button id="moreBtn_${index}">
                    <i class="fa-solid fa-angle-down"></i>
                </button>
            </div>
            <div id="info">
                <p><strong>Studio:</strong> ${studio}</p>
                <p><strong>Source:</strong> ${data.source}</p>
                <p><strong>Theme: </strong> ${theme} </p>
                <p><strong>Demographic:</strong> <a href="#">Shounen</a></p>
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
        console.log("topAnime", topAnime);
        const anime = topAnime.data;
        console.log('anime', anime);
        const container = document.querySelector('#anime-container')

        container.innerHTML = '';
        anime.map((element, index) => {
            container.innerHTML += getAnimes(element, index)
        })
    })