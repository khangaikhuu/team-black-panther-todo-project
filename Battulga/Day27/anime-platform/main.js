

// const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114'
// fetch(fullMetalAlchemistURL)
//     .then(result => result.json())
//     .then(data => {
//         console.log(data.data.images.jpg.image_url)
//         const mangaDomImage = document.getElementById('manga-image')
//         mangaDomImage.src = data.data.images.jpg.image_url
//         document.getElementById('manga-container').getElementsByTagName('h3')[0].textContent = data.data.titles[0].title
//         document.getElementById('info').textContent = `${data.data.type}, ${data.data.year} | ${data.data.status} | ${data.data.episodes} eps, ${data.data.duration}`
//         document.getElementById('action').textContent = data.data.genres[0].name
//         document.getElementById('adventure').textContent = data.data.genres[1].name
//         document.getElementById('drama').textContent = data.data.genres[2].name
//         document.getElementById('fantasy').textContent = data.data.genres[3].name
//         document.getElementById('breif').textContent = data.data.synopsis.slice(0, 300)
//         console.log(data.data.type)
//     })


fetch('https://api.jikan.moe/v4/top/anime')
    .then((res) => res.json())
    .then((topAnime) => {
        console.log("topAnime", topAnime);
        const anime = topAnime.data;
        console.log(anime);
        const container = document.querySelector('#manga-container')

        container.innerHTML = '';
        anime.map((element, index) => {
            container.innerHTML += getAnimes(element, index)
        })
    })


function getAnimes(data, index) {

    return `
    <div id="manga-container">
    <div id="manga-card">
        <h3 class="title">${data.title}</h3>
        <div class="anime-status">

            <i class="fa-solid fa-circle-play" style="font-size: 16px"></i>
            <p id="info"></p>
            <div>
            <span id="type">${data.type} | </span>
            <span id="year">${data.year} | </span>
            <span id="status">${data.status} | </span>
            <span id="eps">${data.episodes}</span>
        </div>
            <i class="fa-solid fa-signal" style="font-size: 16px"></i>

        </div>

        <div class="anime-status">
            <button type="button" class="btn btn-outline-secondary btn-sm" id="action">${data.genres[0].name}</button>
            <button type="button" class="btn btn-outline-secondary btn-sm" id="adventure">${data.genres[0].name}</button>
            <button type="button" class="btn btn-outline-secondary btn-sm" id="drama">${data.genres[0].name}</button>
            <button type="button" class="btn btn-outline-secondary btn-sm" id="fantasy">${data.genres[0].name}</button>
            <br>
        </div>
        <br>

        <div class="anime-body">
            <div class="row">
                <div class="col-6 col-sm-6 col-md-6">
                    <img id='manga-image' alt="" src=${data.images.jpg.image_url}>
                </div>
                <div class="col-6">
                    <p id="breif">${data.synopsis.slice(0, 300)}</p>
                    <button id='more-btn'> <i class="fa-solid fa-angle-down"> </i> </button>
                    <div id="info">
                        <p><strong>Studio:</strong> <a href="#">${data.studios[0].name}</a></p>
                        <p><strong>Source:</strong>${data.source}</p>
                        <p><strong>Theme:</strong> <a href="#"></a>${data.themes.name}</p>
                        <p><strong>Demographic:</strong> <a href="#">${data.demographics.name}</a></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="anime-footer">
            <div id="review">
                <i class="fa-regular fa-star"></i>
                <span id="number">${data.score}</span>
            </div>
            <div id="views">
                <i class="fa-solid fa-eye"></i>
                <span id="view-number"></span>
            </div>
            <button id="add-list">Add To List</button>
        </div>
    </div>

</div>`
}



async function showMore(event) {
console,log(event.id)

}