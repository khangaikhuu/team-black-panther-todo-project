const card = document.querySelector('#card');
function getAnimes(data) {
  return `
    <i class="fa-solid fa-circle-play" style="font-size: 16px"></i>
      <div>
        <span id="type">${data.type}</span>
        <span id="year">${data.year}</span>
        <span id="status">${data.status.slice(0, 8)}</span>
        <span id="eps">${data.episodes} eps, ${data.duration.slice(0, 7)} </span>
      </div>
    <i class="fa-solid fa-signal" style="font-size: 16px"></i>`
}

fetch('https://api.jikan.moe/v4/top/anime')
  .then((res) => res.json())
  .then((topAnime) => {
    const anime = topAnime.data;
    console.log('anime', anime);
    const container = document.querySelector('#anime-container');

    container.innerHTML = '';
    anime.map((element) => {
      container.innerHTML += getAnimes(element)



    })
  })