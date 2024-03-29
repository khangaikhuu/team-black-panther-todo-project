console.log("anime  ");

function getAnimes(data, index) {
  const genres = data.genres.map((parametr) => {
    const result = `<button>${parametr.name}</button>`;
    return result;
  });
  const studios = data.studios.map((parametr) => {
    const result = `<p1>${parametr.name}</p1>`;
    return result;
  });

  const sturdiosURL = data.studios.map((par) => {
    const result = par.url;
    return result;
  });
  const themes = data.themes.map((parametr) => {
    const result = `<p1>${parametr.name}</p1>`;
    return result;
  });
  const themesURL = data.themes.map((par) => {
    const result = par.url;
    return result;
  });
  const demographics = data.demographics.map((parametr) => {
    const result = `<p1>${parametr.name}</p1>`;
    return result;
  });
  const demographicsURL = data.demographics.map((par) => {
    const result = par.url;
    return result;
  });
  return `
            <div id="manga">
        <h6>${data.title}</h6>
        <p1 id="inf-p1">${data.type},${data.year} | ${data.status.substring(
    0,
    8
  )} |  ${data.episodes}eps, ${data.duration.substring(0, 7)}</p1>
        <div id="genre">
            <i class="fa-regular fa-circle-play"></i>
            ${genres.join("")}
            <i class="fa-solid fa-signal" style="font-size: 16px"></i>
        </div>
        <div id="img-div">
            <img id="manga-image" src=${data.images.jpg.image_url}>
            <div id="div-text">
                <p1 id="synopsis_${index}" >${data.synopsis.slice(0, 300)}</p1>
                <button id="${index}" class="down" onclick="showMore(this)"><i class="fa-solid fa-caret-down"></i></button>
                <p id="img-type1">Studio: <a href="${sturdiosURL}">${studios}</a></p>
                <p id="img-type2">Source: ${data.source}</p>
                <p id="img-type3">Theme: <a href="${themesURL}">${themes}</a></p>
                <p id="img-type4">Demographic:<a href="${demographicsURL}">${demographics}</a></p>
            </div>
        </div>

        <div id="rank">
            <div id="score">
                <i class="fa-regular fa-star"></i>
                <span id="score-number">${data.score} </span>
            </div>
            <div id="popularity-container">
                <i class="fa-solid fa-eye"></i>
                <strong id="popularity">${data.popularity}.0M </strong>
            </div>
            <button id="add">Add to List</button>
        </div>
    </div>

    `;
}

const container = document.getElementById("manga-container");
let animeData = [];
async function callURL() {
  const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime");
  const fetchedJson = await fetchedData.json();
  animeData = fetchedJson.data;
  animeMap(animeData);
}
callURL();
console.log(animeData);

function animeMap(par) {
  container.innerHTML = "";
  par.map((element, index) => {
    container.innerHTML += getAnimes(element, index);
  });
}

function search() {
  const searchField = document.getElementById("input");
  const searchWord = searchField.value;
  console.log(animeData);
  const searchResult = animeData.filter((anime) =>
    anime.title.toLowerCase().includes(searchWord.toLowerCase())
  );
  animeMap(searchResult);
}

let colors = true;
let color = true;
function showMore(event) {
  const elementSynop = document.getElementById(`synopsis_${event.id}`);
  console.log(elementSynop);
  const filteredData = animeData.filter((el, index) => {
    if (index == event.id) {
      return el;
    }
  });
  console.log(filteredData);

  if (color) {
    elementSynop.innerHTML = filteredData[0].synopsis;
    color = false;
  } else {
    elementSynop.innerHTML = filteredData[0].synopsis.slice(0, 300);
    color = true;
  }

  if (colors) {
    event.innerHTML = `<i class="fa-solid fa-caret-up"></i>`;
    colors = false;
  } else {
    event.innerHTML = `<i class="fa-solid fa-caret-down"></i>`;
    colors = true;
  }
}

const selectElement = document.querySelector(".ice-cream");
selectElement.addEventListener("change", (event) => {
  const option = document.getElementsByTagName("option");
  console.log(event.target.value);

  let optionResult = animeData.filter((par) => {
    for (i = 0; i < par.genres.length; i++) {
      if (event.target.value == par.genres[i].name) {
        return par;
      }
    }
  });
  console.log(optionResult);
  if (event.target.value == `All`) {
    optionResult = animeData;
  }
  animeMap(optionResult);
});

async function nextPage(event) {
  const fetchedData = await fetch(
    `https://api.jikan.moe/v4/top/anime?page=${event}`
  );
  const fetchedDataJson = await fetchedData.json();
  const pageData = fetchedDataJson.data;
  animeMap(pageData);
}
let anchor = [];
const pages = document.querySelector("#pages");
for (i = 1; i <= 10; i++) {
  const a = document.createElement("a");
  a.href = "#";
  pages.appendChild(a);
  a.textContent = i;
  anchor.push(a);
  a.addEventListener(
    "click",
    (x = (event) => {
      nextPage(event.target.text);
      nextPageNumber(event.target.text);
      prevPageNumber(event.target.text);
      console.log(event.target.text);
      for (i = 0; i < 10; i++) {
        anchor[i].style = "background-color:#d8dbe0";
      }
      anchor[a.text - 1].style = "background-color:#1c439b";
    })
  );
}
console.log(anchor);

anchor[0].style = "background-color:#1c439b";

function nextPageNumber(event) {
  page = Number(event);
}
nextPageNumber();

function nextButton(event) {
  if (!Number.isInteger(page)) {
    page = 2;
    for (i = 0; i < 10; i++) {
      anchor[i].style = "background-color:#d8dbe0";
    }
    anchor[1].style = "background-color:#1c439b";
  } else {
    page = page + 1;
    for (i = 0; i < 10; i++) {
      anchor[i].style = "background-color:#d8dbe0";
    }
    anchor[page - 1].style = "background-color:#1c439b";
  }
  console.log(page);
  nextPage(page);
  console.log(page);
}

function prevPageNumber(event) {
  page = Number(event);
}
prevPageNumber();

function prevButton(event) {
  if (!Number.isInteger(page)) {
    page = 1;
  } else if (page <= 1) {
    page = 1;
  } else {
    page = page - 1;
    for (i = 0; i < 10; i++) {
      anchor[i].style = "background-color:#d8dbe0";
    }
    anchor[page - 1].style = "background-color:#1c439b";
  }
  console.log(page);
  nextPage(page);
}
