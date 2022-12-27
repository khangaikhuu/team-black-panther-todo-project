console.log("top 25");
const card = document.querySelector(".card");
async function showLess(event) {
  console.log(event);
}
async function showMore(event) {
  console.log(event);
  const elementSynop = document.getElementById(`synopsis_${event.id}`);
  console.log(elementSynop);

  const resultJSON = await fetch("https://api.jikan.moe/v4/top/anime");
  const result = await resultJSON.json();
  const animeData = result.data;
  console.log(animeData);

  const filteredData = animeData.filter((element, index) => {
    if (index == event.id) {
      return element;
    }
  });

  elementSynop.innerHTML = filteredData[0].synopsis;
  event.style = "display: none;";

  const showLess = document.getElementsByClassName("showLess");
  showLess[0].style = "display: block";
}

async function search(event) {
  const searchField = document.getElementById("search-field");
  const searchWord = searchField.value;
  const animes = await fetch("https://api.jikan.moe/v4/top/anime");
  const animesJSON = await animes.json();
  const animesData = animesJSON.data;
  const searchResult = animesData.filter((anime) =>
    anime.title.includes(searchWord)
  );
  console.log(searchResult);
  fetch('https://api.jikan.moe/v4/top/anime')
  .then((result) => result.json())
  .then((data) => {
    const anime = data.data;
    const container = document.querySelector("#overall");

    container.innerHTML = "";
    searchResult.map((element, index) => {
      container.innerHTML += getAnimes(element, index);
    });
  });
}




function getAnimes(data, index) {
  const genres = data.genres.map((genre) => {
    const result = `<a>${genre.name}</a>`;
    return result;
  });
  return `<div id="manga-container">
  <h4>${data.title}</h4>
  <div class= "type-cont">
  <i class="fa-brands fa-youtube" style="font-size: 16px"></i>
  <div id="info">     
  <span id="type">${data.type},</span>
  <span id="year">${data.year}, </span>
  <span id="status">${data.status.slice(0, 8)},</span>
  <span id="eps">${data.episodes} eps,</span> 
  <span id="eps">${data.duration.slice(0, 6)}</span> 
  
  </div>
  <i class="fa-sharp fa-solid fa-podcast"></i>
  </div>
  <div id="btns">
  ${genres}
  </div>
  <div class="container">
    <div id="img-container">
      <img id="m-image" src="${data.images.jpg.image_url}" alt="" />
      <div id="txt-container">
        <span id="synopsis_${index}">
        ${data.synopsis.slice(0, 300)}
        </span>
        <span id="second-txt"></span>
        <button id="${index}" onclick="showMore(this);">
       
        <i class="fa-sharp fa-solid fa-angle-down"></i>
        </button>
        <button class="showLess" onclick="showLess(this);" style='display:none'>
        <i class="fa-sharp fa-solid fa-angle-up"></i>
        </button>
        <div id="infos">
          <span id="studio"><strong>Studio: </strong>${
            data.studios[0].name
          } </span>
          <br />
          <span id="source"><strong>Source: </strong>${data.source} </span>
          <br />
          <span id="theme"><strong>Theme:</strong></span>
          <br />
          <span id="demo"><strong>Demographic:</strong> </span>
        </div>
      </div>
    </div>
  </div>
  <div id="footer">
    <div id="review">
      <i class="fa-regular fa-star"></i>
      <span id="score">${data.score}</span>
    </div>
    <div id="views">  
      <i class="fa-solid fa-eye"></i>
      <span class="view-count">${data.members}</span>
    </div>
    <div class="addtolistbtn">
      <button class="btn">Add to List</button>
    </div>
  </div>
</div>`;
}
const topAnime = "https://api.jikan.moe/v4/top/anime";

fetch(topAnime)
  .then((result) => result.json())
  .then((data) => {
    const anime = data.data;
    const container = document.querySelector(".cont");

    container.innerHTML = "";
    anime.map((element, index) => {
      container.innerHTML += getAnimes(element, index);
    });
  });
