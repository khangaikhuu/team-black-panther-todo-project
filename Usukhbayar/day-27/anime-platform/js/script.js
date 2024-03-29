console.log("top 25");
let animeData = [];
async function callURL() {
  const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime");
  const fetchedJSON = await fetchedData.json();
  animeData = fetchedJSON.data;
  console.log(animeData);
  const container = document.querySelector(".cont");

  container.innerHTML = "";
  animeData.map((element, index) => {
    container.innerHTML += getAnimes(element, index);
  });
}
callURL();

let link = document.getElementsByClassName("link");
let currentValue = 1;
function activeLink(event) {
  for (l of link) {
    l.classList.remove("active");
  }

  console.log(event.className);

  event.className += " active";
}
async function getPage(event) {
  let anime = [];
  console.log(event.value);
  const fetched = await fetch(
    `https://api.jikan.moe/v4/top/anime?page=${event.value}`
  );
  const fetchedJSON = await fetched.json();
  paginData = fetchedJSON.data;
  console.log(paginData);
  const container = document.querySelector(".cont");
  container.innerHTML = "";
  paginData.map((element, index) => {
    container.innerHTML += getAnimes(element, index);
  });
}
function pagination(allPages, page) {
  const ul = document.querySelector("#ul");
  const list = document.createElement("li");
  list.textContent = "aaaa";
  ul.appendChild(list);
  // let prevPages = page - 1;
  // let nextPages = page + 1;
  // if (page < 1) {
  //   li += `<li class="link active" value="1" onclick="activeLink(this); page(this)">1</li>`;
  // }
}

const card = document.querySelector(".card");
async function showLess(event) {
  console.log(event);
}

async function showMore(event) {
  console.log(event);
  const elementSynop = document.getElementById(`synopsis_${event.id}`);
  console.log(elementSynop);

  const filteredData = animeData.filter((element, index) => {
    if (index == event.id) {
      return element;
    }
  });

  elementSynop.innerHTML = filteredData[0].synopsis;
  event.style = "display: none;";

  // const showLess = document.getElementsByClassName("showLess");
  // showLess[0].style = "display: block";
}

const select = document.getElementById("genre");
select.addEventListener("change", function handleChange(event) {
  console.log(event.target.value); // 👉️ get selected VALUE

  // // 👇️ get selected VALUE even outside event handler
  // console.log(select.options[select.selectedIndex].value);

  // // 👇️ get selected TEXT in or outside event handler
  // console.log(select.options[select.selectedIndex].text);
  getGenres(event);
});

async function getGenres(event) {
  console.log(event.target.value);

  let searchValue = event.target.value;
  console.log(typeof searchValue);

  const searchResult = animeData.filter((anime) => {
    const result = anime.genres.filter((genre) =>
      genre.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (result.length > 0) {
      return anime;
    }
  });

  console.log(searchResult);
  const container = document.querySelector(".cont");

  container.innerHTML = "";
  searchResult.map((element, index) => {
    container.innerHTML += getAnimes(element, index);
  });
}

async function search(event) {
  const searchField = document.getElementById("search-field");
  const searchWord = searchField.value;
  const searchResult = animeData.filter((anime) =>
    anime.title.includes(searchWord)
  );
  console.log(searchResult);
  const container = document.querySelector(".cont");
  container.innerHTML = "";
  searchResult.map((element, index) => {
    container.innerHTML += getAnimes(element, index);
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
//onchange
