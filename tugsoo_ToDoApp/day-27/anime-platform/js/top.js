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

function getAnimes(element, index) {
  console.log(element);
  let cardOpen = `<div class="cards">`;
  const cardClose = `</div>`;

  const h6 = `<h6>${element.title}</h6>`;
  const img = `<img src="${element.images.jpg.image_url}"></img>`;


  const genres = element.genres.map(genre => {
    const result = `<a>${genre.name}</a>`;
    return result
  })



  // cardOpen = cardOpen + h6 + genres + img + cardClose;

  // return cardOpen;


  return ` 
    <div class="anime-card" id="card">
      <a href="#" id="second-title" class="title-Text">${element.title}</a>
      <div class="anime-status">
         <p><i class="fa-solid fa-circle-play" style="font-size: 16px"></i></p>
         <p id="text1" class="text1">${element.type}, ${element.year}</p>
         <p id="text2" class="text2">${element.status}</p>
         <p id="text3" class="text3">${element.episodes} eps  ${element.duration.slice(0, 6)}</p>
         <p> <i class="fa-solid fa-signal" style="font-size: 16px"></i></p></div>
    <div class="anime-genre">
        ${genres}
    </div>
    <div class="anime-body">
        <img id="image-id" src=${element.images.jpg.image_url} 
            alt="full-metal">
        <div class="anime-content">
            <div id="text">
                <p id="first-p">${element.synopsis.slice(0, 375)}</p>
                <p id="second-p">${element.synopsis.slice(375, element.synopsis.length)}</p>
                <button id="moreBtn_${index}">
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
            <span id="number">${element.score}</span>
        </div>
        <div id="views">
            <i class="fa-solid fa-user"></i>
            <span id="view-number">${(element.members / 1.0e+6).toFixed(1)} M</span>
        </div>
        <button id="add-list">Add To List</button>
    </div>
</div>`
}