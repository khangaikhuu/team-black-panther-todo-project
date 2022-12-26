const card = document.querySelector('#card');

// function showMore(event) {
//   const text = document.querySelector('#text p');
//   const secondText = document.querySelector('#second-p');
//   const more = animeData.synopsis;
//   const textLength = more.length;
//   const parts = more.slice(375, textLength);
//   text.textContent = animeData.synopsis.slice(0, 375);
//   secondText.textContent = parts;
//   secondText.style.display = 'none';

//   const moreButton = document.querySelector('#moreBtn');

//   moreButton.addEventListener('click', () => {
//     if (secondText.style.display == 'none') {
//       secondText.style.display = 'block';

//     } else {
//       secondText.style.display = 'none';
//     }
//   })
// }
function getAnimes(data, index) {

  const genres = data.genres.map((genre) => {
    const result = `<p>${genre.name}</p>`
    return result;
  })
  const studio = data.studios.map((studio) => {
    const result = `${studio.name}`
    return result;
  })

  // const source = data.source.map((source) => {
  //   const result = `${source}`
  //   return result;
  // })

  const theme = data.themes.map((theme) => {
    const result = `${theme.name}`
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
        <p>${data.synopsis.slice(0, 350)}</p>
        <p id="second-p"></p>
        <button id="moreBtn_${index}" onclick="showMore(this);">
          <i class="fa-solid fa-angle-down"></i>
        </button>
      </div>
      <div id="info">
        <p><strong>Studio:</strong> <a href="#">${studio}</a></p>
        <p><strong>Source:</strong>${studio}</p>
        <p><strong>Theme:</strong> <a href="#">${theme}</a></p>
        <p><strong>Demographic:</strong> <a href="#">${demographics}</a></p>
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
    const anime = topAnime.data;
    const container = document.querySelector('#anime-container');

    container.innerHTML = '';
    anime.map((element, index) => {
      container.innerHTML += getAnimes(element, index)
    })
  })