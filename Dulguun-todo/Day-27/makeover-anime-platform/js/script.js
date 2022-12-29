// Anime platform
const card = document.querySelector('#card');

let animeData = [];
let pagination = {};

let page = 1;
let currentPage = page;

async function callData(event) {
  if (event.id == 'next-page') {
    page = Number(currentPage) + 1;
  } else if (event.id == 'previous-page') {
    page = Number(currentPage) - 1;
  } else {
    page = event.text;
  }
  currentPage = page;

  if (page == undefined || page < 1) {
    page = 1;
    currentPage = 1;
  }

  if (page >= 9) {
    page = 9;
    currentPage = 9;
  }

  console.log('Current page >', page);

  const fetchedData = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`)
  const fetchedJSON = await fetchedData.json();
  animeData = fetchedJSON.data;
  // console.log(animeData);
  pagination = fetchedJSON.pagination;
  // console.log(pagination);

  const container = document.querySelector('#anime-container');
  pageSelector(page);
  container.innerHTML = '';
  animeData.map((element, index) => {
    container.innerHTML += getAnimes(element, index)
  })
}
callData(page);
// Pagination
function pageSelector(page) {
  let pageSelector = document.querySelector('#pagination-anime');
  pageSelector.innerHTML = '';

  let leftArrow = `<a id="previous-page" href="#" onclick="callData(this)"><i class="fa-solid fa-angles-left"></i></a>`;
  pageSelector.innerHTML = leftArrow;

  for (let i = 0; i < 9; i++) {
    let pageNum = '';
    if (page == (i + 1)) {
      pageNum = `<a href="#" class="active" onclick='callData(this)'>${i + 1}</a>`
    } else {
      pageNum = `<a href="#" onclick='callData(this)'>${i + 1}</a>`
    }
    pageSelector.innerHTML += pageNum;
  }

  let rightArrow = `<a id="next-page" href="#" onclick="callData(this)"><i class="fa-solid fa-angles-right"></i></a>`;
  pageSelector.innerHTML += rightArrow;
}

// Reload page button
function resetGenre() {
  location.reload();
}

// Search section
async function search() {
  let searchWord = document.getElementById('search-input').value;

  let searchResult = animeData.filter(anime =>
    anime.title.toLowerCase().includes(searchWord.toLowerCase()));

  const container = document.querySelector('#anime-container');
  container.innerHTML = '';
  searchResult.map((element) => {
    container.innerHTML += getAnimes(element);
  });
}

// Genre data call
let animesGenreData = []
async function callGenre() {
  const animesGenre = await fetch('https://api.jikan.moe/v4/genres/anime');
  const animesGenreJSON = await animesGenre.json()
  animesGenreData = animesGenreJSON.data

  const selectGenre = document.getElementById('select-genre');

  animesGenreData.map((genre) => {
    const option = document.createElement('option');
    option.value = genre.name;
    option.textContent = genre.name;
    selectGenre.appendChild(option);
  })
}
callGenre();

// Select section
async function select() {

  const selectGenre = document.getElementById('select-genre');
  let selectValue = selectGenre.value;

  const selectResult = animeData.filter(anime => {
    let filteredSelect = anime.genres.filter(genre => {
      if (genre.name == selectValue) {
        return genre;
      }
    })
    if (filteredSelect.length > 0) {
      return filteredSelect;
    }
  })
  const container = document.querySelector(`#anime-container`);
  container.innerHTML = '';
  selectResult.map((element) => {
    container.innerHTML += getAnimes((element));
  })
}

// Design section
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
        <p id ='text-sliced_${index}'>${data.synopsis.slice(0, 250)}</p>
        <p id ='text-whole_${index}' style='display:none'>${data.synopsis}</p>
        <a href="#" class="showMoreBtn_${index} arrow" id="${index}" onclick="showMore(this)" stlye="text-decoration: none;"><i class="fa-solid fa-angle-down"></i></a>
        <a href="#" class="collapseBtn_${index} arrow" id="${index}" onclick="collapseBtn(this)" style="display:none; text-decoration: none;"><i class="fa-solid fa-angle-up"></i></a>
      </div>
      <div id="info">
        <p><strong>Studio:</strong> <a href="#">${studio}</a></p>
        <p><strong>Source:</strong> ${data.source}</p>
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

// Text show button section
async function showMore(event) {
  let textWhole = document.querySelector(`#text-whole_${event.id}`);
  let textSliced = document.querySelector(`#text-sliced_${event.id}`);
  let collapseBtn = document.querySelector(`.collapseBtn_${event.id}`);
  let showMoreBtn = document.querySelector(`.showMoreBtn_${event.id}`);

  textWhole.style.display = 'block';
  textSliced.style.display = 'none'

  collapseBtn.style.display = 'block'
  collapseBtn.style.display = 'flex'
  showMoreBtn.style.display = 'none'
  showMoreBtn.style.textDecoration = 'none'
}

// Text collapse button section
function collapseBtn(event) {
  let textWhole = document.querySelector(`#text-whole_${event.id}`);
  let textSliced = document.querySelector(`#text-sliced_${event.id}`);
  let collapseBtn = document.querySelector(`.collapseBtn_${event.id}`);
  let showMoreBtn = document.querySelector(`.showMoreBtn_${event.id}`);

  textWhole.style.display = 'none';
  textSliced.style.display = 'block'

  collapseBtn.style.display = 'none'
  showMoreBtn.style.display = 'flex'
}

// let animeData = []
// async function callURL() {
//   const fetchedData = await fetch('https://api.jikan.moe/v4/top/anime')
//   const fetchedJSON = await fetchedData.json();
//   animeData = fetchedJSON.data;
//   const container = document.querySelector('#anime-container');

//   container.innerHTML = '';
//   animeData.map((element, index) => {
//     container.innerHTML += getAnimes(element, index)
//   })
// }
// callURL();

// // Mapping section
// fetch('https://api.jikan.moe/v4/top/anime')
//   .then((res) => res.json())
//   .then((topAnime) => {
//     const anime = topAnime.data;
//     const container = document.querySelector('#anime-container');

//     container.innerHTML = '';
//     anime.map((element, index) => {
//       container.innerHTML += getAnimes(element, index)
//     })
//   })

// // Text more button (Teacher's suggestion)
// async function showMore(event) {
//   const elementSynop = document.getElementById(`text_${event.id}`);
//   const resultJSON = await fetch('https://api.jikan.moe/v4/top/anime');
//   const result = await resultJSON.json();
//   const animeData = result.data;

//   const filteredData = animeData.filter((el, index) => {
//     if (index == event.id) {
//       return el;
//     }
//   })
//   elementSynop.innerHTML = filteredData[0].text;
// }


// // Select mapping section ATTEMPT
// fetch('https://api.jikan.moe/v4/genres/anime')
//   .then((res) => res.json())
//   .then((animeGenre) => {
//     const animeGenres = animeGenre.data;
//     const genreContainer = document.querySelector('#select-genre');

//     genreContainer.innerHTML = '';
//     animeGenres.map((element) => {
//       genreContainer.innerHTML += genre(element)
//     })
//   })

// // Pagination
// const pagination = document.querySelector('#pagination');
// const leftArrow = document.createElement('a')
// leftArrow.href = '#';
// leftArrow.innerText = "<";
// // leftArrow.onclick = previousPage();
// pagination.appendChild(leftArrow);

// for (let i = 0; i < 10; i++) {
//   let anchorTag = document.createElement('a');
//   anchorTag.href = '#';
//   anchorTag.innerText = i + 1;
//   pagination.appendChild(anchorTag);
// }
// const rightArrow = document.createElement('a')
// rightArrow.href = '#';
// rightArrow.innerText = ">";
// rightArrow.addEventListener ('click',() => {
//   nextPage();
// })
// pagination.appendChild(rightArrow);

// async function nextPage() {
//   const page2 = await fetch(`https://api.jikan.moe/v4/top/anime?page=2`)
//   const page2JSON = await page2.json();
//   page2Data = page2JSON.data;

//   const container = document.querySelector('#anime-container');

//   container.innerHTML = '';
//   page2Data.map((element) => {
//     container.innerHTML += getAnimes(element)
//   })
// }
// nextPage();