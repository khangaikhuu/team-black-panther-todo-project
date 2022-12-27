fetch('https://api.jikan.moe/v4/top/anime')
  .then((res) => res.json())
  .then((topAnime) => {
    console.log('topAnim', topAnime);
    const anime = topAnime.data;
    console.log('anime', anime);
    const container = document.querySelector('#manga-container');

    container.innerHTML = '';
    anime.map((element, index) => {
      container.innerHTML += getAnimes(element, index)
    })
  })

async function search(event) {
  const searchField = document.getElementById('search-field')
  const searchWord = searchField.value;
  const animes = await fetch('https://api.jikan.moe/v4/top/anime');
  const animesJSON = await animes.json();
  const animesData = animesJSON.data;

  const searchResult = animesData.filter(anime =>
    anime.title.includes(searchWord)
  )
  const container = document.querySelector('#manga-container');

  container.innerHTML = '';
  searchResult.map((element, index) => {
    container.innerHTML += getAnimes(element, index)
  })
  console.log(searchResult);
}

// more button

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

  console.log(filteredData[0].synopsis);
  elementSynop.innerHTML = filteredData[0].synopsis;

}

function getAnimes(element, index) {

  const genres = element.genres.map(genre => {
    const result = `<p>${genre.name}</p>`;
    return result
  })

  const studio = element.studios.map(e => {
    const result = `<a href="#">${e.name}</a>`
    return result
  })

  const theme = element.themes.map(e => {
    const result = `<a href="#">${e.name}</a>`
    return result
  })




  return ` 
    <div class="anime-card">
      <a href="#" id="second-title" class="title-text">${element.title}</a>
      <div class="anime-status">
         <p><i class="fa-solid fa-circle-play" style="font-size: 16px"></i></p>
         <p id="text1" class="text1">${element.type}, ${element.year}</p> |
         <p id="text2" class="text2">${element.status.slice(0, 8)}</p> |
         <p id="text3" class="text3">${element.episodes} eps  ${element.duration.slice(0, 6)}</p>
         <p> <i class="fa-solid fa-signal" style="font-size: 16px"></i></p></div>
    <div class="anime-genre">
        ${genres.join('')}
    </div>
    <div class="anime-body">
        <img id="image-id" src=${element.images.jpg.image_url} 
            alt="full-metal">
        <div class="anime-content">
          <div id="text">
            <p id="synopsis_${index}">${element.synopsis.slice(0, 300)}</p>
            <p id="second-p"></p>
            <button id="${index}" onclick="showMore(this);">
              <i class="fa-solid fa-angle-down"></i>
            </button>
          </div>
            <div id="info">
                <p><strong>Studio:</strong> ${studio}</p>
                <p><strong>Source:</strong> ${element.source}</p>
                <p><strong>Theme: </strong> ${theme} </p>
                <p><strong>Demographic:</strong> <a href="#">Shounen</a></p>
            </div>
        </div>
    </div>
    <div class="anime-footer">
        <div id="review">
            <i class="fa-regular fa-star"></i>
            <span class="score">${element.score}</span>
        </div>
        <div class="views">
            <i class="fa-solid fa-user"></i>
            <span id="view-number">${(element.members / 1.0e+6).toFixed(1)} M</span>
        </div>
        <button class="add-list">Add To List</button>
    </div>
</div>`
}