

// SEARCH VALUE DEER BICIGDSEN NERSIIG SONGOJ UGNU
async function search(event) { 
    const searchField = document.getElementById('search-field').value;
    const animes = await fetch('https://api.jikan.moe/v4/top/anime');
    const animesJSON = await animes.json();
    const animesData = animesJSON.data;
    console.log(searchField)
    console.log('anime data', animesData)
    const searchResult = animesData.filter(anime => {
     return anime.title.toLowerCase().includes(searchField.toLowerCase())
    })
    console.log(searchResult);

// ENE HESEG TUHAIN NERNII DAGUU ANIME -g GARGAJ UGDUG
    const animesContainer = document.getElementById('animes-container')
    let result = '';
    searchResult.map((element, index) => {
        result += getAnimes(element, index);
        return result
    })
    animesContainer.innerHTML = result;
}
  callData ()

// YMAR TURUL SONGOGDOH HESEG

 

// TOP 25 ANIME ORUULJ IRJ BGA DATAG AVCHIRSAN HESEG
function getAnimes (p1, p2 ) {
    console.log(p1);

    const genres = p1.genres.map(genre => {
        const result = `<p>${genre.name}</p>`;
        return result;
     })
     console.log(genres)

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
                <i class="fa-solid fa-eye"style="color: gray;"></i>
                <span id="members">3.0M</span>
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


