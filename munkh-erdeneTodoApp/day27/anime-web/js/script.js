// const allanime= 'https://api.jikan.moe/v4/anime';
// fetch(allanime)
//     .then((res) => res.json())
//     .then((topAnime) => {
//         // console.log("topAnim", topAnime);
//         const anime = topAnime.data;
//         // console.log("anime", anime);
//         const container = document.querySelector("#manga-container");

//         container.innerHTML = "";
//         anime.map((element) => {
//             container.appendChild(getDetial(element));
//         });
//     });


// function getDetial(data) {
//     console.log(data.mal_id);

const card = document.querySelector('#card');

async function showMore(event) {
  // console.log(event.id);
  const elementSynop = document.getElementById(`synopsis_${event.id}`);
  console.log(elementSynop);

  const resultJSON = await fetch('https://api.jikan.moe/v4/top/anime');
  const result = await resultJSON.json();
  const animeData = result.data;
  console.log(animeData);

  const filteredData = animeData.filter((el, index) => {
    if (index == event.id) {
      return el;
    }
  })

  // const filteredData = animeData.map(el => index == event.id);

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
  <a href="#" id="title">${data.title}</a>
  <div class="anime-status">
    <i class="fa-solid fa-circle-play" style="font-size: 16px"></i>
    <div style="display: flex; justify-content: space-evenly;>


    <a href="https://myanimelist.net/anime/11757/Sword_Art_Online/video"><img class="icon"
    src="https://64.media.tumblr.com/9a0ba2579dd1a9984d7df51627ba8dd3/c9ad1288287dc47a-1d/s1280x1920/77c0e51020d47fe01cfa032e0803ac50c6607507.png"
    alt="" width="40px" height="40px"></a>
    <div style="display: flex;">
      <span id="type">${data.type}</span>
      <span id="year">${data.year}</span>
      <span id="status">${data.status}</span>
      <span id="eps">${data.episodes}</span>
    </div>

      <a href=""><img class="icon"
                src="https://64.media.tumblr.com/05fda8644cecc62bd880764ef2d40fd5/c9ad1288287dc47a-25/s1280x1920/a33fe30bf3ed216377a53dbb45b3c76840dd7053.png"
                alt="" width="40px" height="40px" ></a>
    </div>
    <i class="fa-solid fa-signal" style="font-size: 16px"></i>
  </div>
  <div class="anime-genre">
   ${genres}
  </div>
  <div class="anime-body">
    <img
      src=${data.images.jpg.image_url}
      alt="full-alchemist"
    />
    <div class="anime-content">
      <div id="text">
        <p id="synopsis_${index}">${data.synopsis.slice(0, 300)}</p>
        <p id="second-p"></p>
        <button id="${index}" onclick="showMore(this);">
          <i class="fa-solid fa-angle-down"></i>
        </button>
      </div>
      <div id="info">
        <p><strong>Studio:</strong> <a href="#">Bones</a></p>
        <p><strong>Source:</strong> Manga</p>
        <p><strong>Theme:</strong> <a href="#">Military</a></p>
        <p><strong>Demographic:</strong> <a href="#">Shounen</a></p>
      </div>
    </div>
  </div>
  <div class="anime-footer">
    <div id="review">
      <i class="fa-regular fa-star"></i>
      <span id="number">9.11</span>
    </div>
    <div id="views">
      <i class="fa-solid fa-eye"></i>
      <span id="view-number">3.0M</span>
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















//search button
async function search(event) {
  const searchField = document.getElementById('search-field');
  const searchWord = searchField.value;
  const animes = await fetch('https://api.jikan.moe/v4/top/anime');
  const animesJson = await anime.json();
  const animesData = animesJson.data;
  const searchResult = animeData.filter(anime =>
    anime.title.includes(searchWord))
  console.log(searchResult);

}
