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

    
    const genres = `<p>${element.genres.names}</p>`

    

    cardOpen= cardOpen + h6 + genres + img + cardClose;
    
    return cardOpen;
 }