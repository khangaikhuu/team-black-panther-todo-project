const animeGrid = document.querySelector("#anime-container");
const animeSelector = document.querySelector("#anime-selector");
const topDataURL = "https://api.jikan.moe/v4/top/anime"
const genreDataURL = "https://api.jikan.moe/v4/genres/anime"
let animeData = [];
async function fetchAnimes() {
    const fetchedData = await fetch(topDataURL);
    const fetchedJSON = await fetchedData.json();
    animeData = fetchedJSON.data;


    animeData.map((anime) => {
        animeGrid.innerHTML += createAnimeCard(anime)

    })

    // animeData.genre.map(genre => {
    //     const genreElement = document.createElement("p")
    //     console.log(genreElement)
    //     genreElement.textContent = genre.name;
    //     console.log(genreElement)
    //     animeGenre.appendChild(genreElement)

    // })

    // animeGrid.appendChild(animeGenre)
    // console.log('anime grid' + animeGrid[0])
    // 

}
fetchAnimes();

//6-15 fetch genres async function
async function fetchGenres() {
    const fetchedData = await fetch(genreDataURL);
    const fetchedJSON = await fetchedData.json();
    genreData = fetchedJSON.data;

    const animeGenre = document.createElement("select")
    animeGenre.className = ("anime-genre");
    animeSelector.appendChild(animeGenre)
    genreData.map((genre) => {
        const option = document.createElement("option")
        option.textContent = genre.name
        console.log(genre)
        animeGenre.appendChild(option)

        //select hiiheer teriig n sanaj/barij/ bas hewlej bgaa
        const select = document.getElementById('anime-selector');
        select.addEventListener('change', function handleChange(event) {
            let selectValue = event.target.value;
            console.log(event.target.value);
            
            
        });
        

    })
}
fetchGenres()

//GENRES
// const genreContainer = document.createElement("div")



// fetch('https://api.jikan.moe/v4/anime/5114')
//   .then((res) => res.json())
//   .then((anime) => {
//     const randomAnime = anime.data;
//     console.log('anime data', randomAnime);
//     // anime title
//     // const title = document.querySelector('#title');
//     // title.textContent = randomAnime.title; 
//     // console.log(title)

//     //anime studio
//     const studio = document.getElementById("studio");


//     //anime container luu nemeh


//   })

function createAnimeCard(anime) {
    console.log(anime);
    const animeContainer = `
  <div class="anime-card" id="card">
          <a href="#" id="title">${anime.title}</a>
          <div class="anime-status">
              <i class="fa-solid fa-circle-play" style="font-size: 16px"></i>
              <div>
                  <span id="type">${anime.type}</span>
                  <span id="year">${anime.year}</span>
                  <span id="status">${anime.status}</span>
                  <span id="eps">${anime.episodes}</span>
              </div>
              <i class="fa-solid fa-signal" style="font-size: 16px"></i>
          </div>
          <div class="anime-body">
              <img
                  src="${anime.images.jpg.image_url}"
                  alt="full-alchemist"
              />
              <div class="anime-content">
                  <div id="text">
                      <p></p>
                      <p id="second-p style="display:none;""></p>
                      <button id="moreBtn">
                          <i class="fa-solid fa-angle-down"></i>
                      </button>
                  </div>
                  <div id="info">
                      <p id="studio"><strong>Studio:</strong> <a href="#">Bones</a></p>
                      <p><strong>Source:</strong> Manga</p>
                      <p><strong>Theme:</strong> <a href="#">Military</a></p>
                      <p><strong>Demographic:</strong> <a href="#">Shounen</a></p>
                  </div>
              </div>
          </div>
          <div class="anime-footer">
              <div id="review">
                  <i class="fa-regular fa-star"></i>
                  <span id="number">${anime.score}</span>
              </div>
              <div id="views">
                  <i class="fa-solid fa-eye"></i>
                  <span id="view-number">${anime.members}</span>
              </div>
              <button id="add-list">Add To List</button>
          </div>
      </div>`

    return animeContainer;
}
