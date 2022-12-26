console.log("top 25");

const card = document.querySelector(".card");
function getAnimes(data) {
  const genres = data.genres.map((genre) => {
    const result = `<a>${genre.name}</a>`;
    return result;
  });
  async function showMore(event){
    const elementSynop = document.getElementById(`synopsis_${event.id}`);
    console.log(elementSynop);
    const resultJSON = await fetch("https://api.jikan.moe/v4/top/anime");
    const result = await resultJSON.json();
    const animeData = result.data;
    console.log(animeData);

    const filteredData = data
  }
  console.log(data);
  return `<div id="manga-container">
  <h4>${data.title}</h4>
  <div class= "type-cont">
  <i class="fa-solid fa-signal" style="font-size:16px"></i>
  </div>
  <div id="btns">
  ${genres}
  </div>
  <div class="container">
    <div id="img-container">
      <img id="m-image" src="${data.images.jpg.image_url}" alt="" />
      <div id="txt-container">
        <span
          >After a horrific alchemy experiment goes wrong in the Elric
          household, brothers Edward and Alphonse are left in a
          catastrophic new reality. Ignoring the alchemical principle
          banning human transmutation, the boys attempted to bring their
          recently deceased mother
        </span>
        <span id="second-txt"></span>
        <button id="btn">
        <i class="fa-solid fa-angle-down"></i>
        </button>
        <div id="info">
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
    anime.map((element) => {
      container.innerHTML += getAnimes(element);
    });
  });
