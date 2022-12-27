const card = document.querySelector('#card');

// Text more button
async function showMore(event) {
  const elementSynop = document.getElementById(`synopsis_${event.id}`);
  const resultJSON = await fetch('https://api.jikan.moe/v4/top/anime');
  const result = await resultJSON.json();
  const animeData = result.data;

  const filteredData = animeData.filter((el, index) => {
    if (index == event.id) {
      return el;
    }
  })
  elementSynop.innerHTML = filteredData[0].synopsis;
  // const text = document.querySelector('#text p');
  // const secondText = document.querySelector('#second-p');
  // const textLength = elementSynop.length;
  // const parts = elementSynop.slice(300, textLength);
  // text.textContent = elementSynop.slice(0, 300);
  // secondText.textContent = parts;
  // secondText.style.display = 'none';
  // const moreButton = document.querySelector('#moreBtn');

  // moreButton.addEventListener('click', () => {
  //   if (secondText.style.display == 'none') {
  //     secondText.style.display = 'block';

  //   } else {
  //     secondText.style.display = 'none';
  //   }
  // })
}


function getAnimes(data, index) {

  const genres = data.genres.map((genre) => {
    const result = `<a>${genre.name}</a>`
    return result;
  })

  const studio = data.studios.map((studio) => {
    const result = `${studio.name}`
    return result;
  })


  const theme = data.themes.map((theme) => {
    const result = ` ${theme.name}`
    return result;
  })

  const demographics = data.demographics.map((demographics) => {
    const result = `${demographics.name}`
    return result;
  })

  return `
  <div class="anime-card" id="card">
  <a href="#" id="title">${data.title}</a>
  <div class="anime-status">
    <i class="fa-solid fa-circle-play" style="font-size: 16px"></i>
    <div>
      <span id="type">${data.type}</span>
      <span id="year">${data.year}</span>
      <span id="status">${data.status}</span>
      <span id="eps">${data.episodes}</span>
    </div>
    <i class="fa-solid fa-signal" style="font-size: 16px"></i>
  </div>
  <div id="anime-genre">
    ${genres}
  </div>
  <div class="anime-body">
    <img id="image" src=${data.images.jpg.image_url} alt="full-alchemist"/>
    <div class="anime-content">
      <div id="text">
        <p id="synopsis_${index}">${data.synopsis.slice(0, 230)}</p>
        <p id="second-p"></p>
        <button id="${index}" onclick="showMore(this);">
          <i class="fa-solid fa-angle-down"></i>
        </button>
      </div>
      <div id="info">
        <p><strong>Studio:</strong> <a href="#">${studio}</a></p>
        <p><strong>Source:</strong>${data.source}</p>
        <p><strong>Theme:</strong> <a href="#">${theme}</a></p>
        <p><strong>Demographic:</strong> <a href="#">${demographics}</a></p>
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
      <span id="view-number">${data.members}</span>
    </div>
    <button id="add-list">Add To List</button>
  </div>
</div>`
}

fetch('https://api.jikan.moe/v4/top/anime')
  .then((res) => res.json())
  .then((topAnime) => {
    const anime = topAnime.data;
    const container = document.querySelector('#anime-container');

    container.innerHTML = '';
    anime.map((element, index) => {
      container.innerHTML += getAnimes(element, index)
    })
  })