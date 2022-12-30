// ** Call data **// 

let animeData = []

async function callURL() {
  const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime")
  const fetchedJSON = await fetchedData.json()
  animeData = fetchedJSON.data
  const container = document.getElementById("mainDiv");
  container.innerHTML = '';
  animeData.map((element, index) => {
    container.innerHTML += getAnimes(element, index)
  })
}

callURL()

// ** go to page 1 function **// 
const animeContainer = document.getElementById("test-container")
for (let i = 0; i < 9; i++) {
  const animePage = document.createElement("a")
  animeContainer.appendChild(animePage)
  animePage.innerHTML = i + 1
  animePage.addEventListener("click", async (event) => {
    const fetchedURL = await fetch(`https://api.jikan.moe/v4/top/anime?page=${event.target.text}`)
    const fetchedJSON = await fetchedURL.json()
    const pageData = fetchedJSON.data
    animeData = pageData
    const container = document.getElementById("mainDiv");
    container.innerHTML = '';
    animeData.map((element, index) => {
      container.innerHTML += getAnimes(element, index)
    })
  })
}


function goToPage1() {
  let animeData1 = []

  async function callURL() {
    const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime")
    const fetchedJSON = await fetchedData.json()
    animeData1 = fetchedJSON.data
    const container = document.getElementById("mainDiv");
    container.innerHTML = '';
    animeData1.map((element, index) => {
      container.innerHTML += getAnimes(element, index)
    })
    animeData = animeData1
  }

  callURL()
}

// ** go to page 2 function **// 

function goToPage2() {
  let animeData2 = []

  async function callURL2() {
    const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime?page=2")
    const fetchedJSON = await fetchedData.json()
    animeData2 = fetchedJSON.data
    const container = document.getElementById("mainDiv");
    container.innerHTML = '';
    animeData2.map((element, index) => {
      return container.innerHTML += getAnimes(element, index)
    })
    animeData = animeData2
  }

  callURL2()
}

// ** go to page 3 function **// 

function goToPage3() {
  let animeData3 = []

  async function callURL3() {
    const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime?page=3")
    const fetchedJSON = await fetchedData.json()
    animeData3 = fetchedJSON.data
    const container = document.getElementById("mainDiv");
    container.innerHTML = '';
    animeData3.map((element, index) => {
      container.innerHTML += getAnimes(element, index)
    })
    animeData = animeData3

  }

  callURL3()
}

// ** go to page 4 function **// 

function goToPage4() {
  let animeData4 = []

  async function callURL4() {
    const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime?page=4")
    const fetchedJSON = await fetchedData.json()
    animeData4 = fetchedJSON.data
    const container = document.getElementById("mainDiv");
    container.innerHTML = '';
    animeData4.map((element, index) => {
      container.innerHTML += getAnimes(element, index)
    })
    animeData = animeData4
  }

  callURL4()
}
// ** Search function ** //

async function search() {
  const search = document.getElementById("searchPrompt")
  const searchWord = search.value
  console.log(searchWord)
  const searchResult = animeData.filter(anime =>
    anime.title.toLowerCase().includes(searchWord.toLowerCase()))
  const container = document.getElementById("mainDiv");
  container.innerHTML = '';
  searchResult.map((element, index) => {
    container.innerHTML += getAnimes(element, index)
  }
  )
}

// ** Clear function **// 

async function clearFunc() {
  const search = document.getElementById("searchPrompt")
  search.value = ""
  const searchResult = animeData.filter(anime =>
    anime.title.toLowerCase().includes(search.value.toLowerCase()))
  const container = document.getElementById("mainDiv");
  container.innerHTML = '';
  searchResult.map((element, index) => {
    container.innerHTML += getAnimes(element, index)
  }
  )
}

// ** Filter function **// 

let genreAPI = []

async function getGenreAPI() {
  const filterSelect = document.getElementById("filterSelect")
  const fetchedAPI = await fetch("https://api.jikan.moe/v4/genres/anime")
  const fetchedJSON = await fetchedAPI.json()
  genreAPI = fetchedJSON.data
  genreAPI.map((genre) => {
    const option = document.createElement("option")
    option.value = genre.name
    option.textContent = genre.name
    filterSelect.appendChild(option)
  })
}

getGenreAPI()

async function filter() {
  const filterSelect = document.getElementById("filterSelect")
  let filterValue = filterSelect.value
  const filterResult = animeData.filter(anime => {
    let arr = anime.genres.filter(genre => {
      if (genre.name == filterValue) {
        return genre
      }
    })
    if (arr.length > 0) {
      return arr
    }
  })
  console.log(filterResult)
  const container = document.getElementById("mainDiv");
  container.innerHTML = '';
  filterResult.map((element, index) => {
    container.innerHTML += getAnimes(element, index)
  })
}

// ** Show more function **// 

async function showMore(event) {
  const elementSynop = document.getElementById(`synopsis_${event.id}`);
  const showData = animeData;
  const filteredData = showData.filter((el, index) => {
    if (index == event.id) {
      return el;
    }
  })
  const readMoreBtn = document.querySelector(".readMoreBtn")
  const readLessBtn = document.querySelector(".readLessBtn")
  if (readMoreBtn.style = "display: none") {
    elementSynop.innerHTML = filteredData[0].synopsis;
  readLessBtn.style = "display: block"
  }
}

// ** Show less function **//

async function showLess(event) {
  const elementSynop = document.getElementById(`synopsis_${event.id}`);
  const showData = animeData;
  const filteredData = showData.filter((el, index) => {
    if (index == event.id) {

      return el;
    }
  })
  elementSynop.innerHTML = filteredData[0].synopsis.slice(0, 300);
  const readMoreBtn = document.querySelector(".readMoreBtn")
  readMoreBtn.style = "display: block"
  const readLessBtn = document.querySelector(".readLessBtn")
  readLessBtn.style = "display: none"
}


function getAnimes(data, index) {
  const genres = data.genres.map(genre => {
    const result = `<button>${genre.name}</button>`;
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

  const durationStr = data.duration.substring(0, 3)

  function formatMembers(int) {
    if (int >= 1000000) {
      let result = (int / 1000000).toFixed(2) + "M";
      return result;
    } else {
      let str = int.toString();
      let firstTwo = str.substring(0, 1);
      let result = 0 + "." + firstTwo + "M";
      return result;
    }
  }
  let membersResult = formatMembers(data.members)

  return `
      <div class="divContainer" id="mainDiv">
      <div class="header">
      <h6><a href="${data.url}" id="title">${data.title}</a></h6>
      </div>
      <div class="prodsrc">
      <i class="playIcon"></i>
        <div>
          <span id="type">${data.type}, </span>
          <span id="year">${data.year} |</span>
          <span id="status">${data.status} |</span>
          <span id="eps">${data.episodes} episodes,</span>
          <span >${durationStr} min</span>
        </div>
        <i class="watchIcon"></i>
      </div>
      <div class="genre">
      ${genres.join('')}
      </div>
      <div class="bodyDiv">
        <img
          src=${data.images.jpg.image_url}
          alt="full-alchemist"
          id="manga-image"
        />
        <div class="bodyDivRight">
          <div id="text" class="bodyDivP">
          <p id="synopsis_${index}">${data.synopsis.slice(0, 300)}</p>
            <p id="secondBodyP"></p>
            <button id="${index}" onclick="showMore(this)" class="readMoreBtn">
              <i class="moreIcon"></i>
            </button>
            <button id="${index}" onclick="showLess(this)" class="readLessBtn" >
              <i class="lessIcon"></i>
            </button>
          </div>
          <div id="info" class=bodyDivProducer>
            <p><strong>Studio:</strong> <a href="#" class="studioA">${studio}</a></p>
            <p><strong>Source:</strong> ${data.source}</p>
            <p><strong>Theme:</strong> ${theme}</p>
            <p><strong>Demographic:</strong> ${demographics}</p>
          </div>
        </div>
      </div>
      <div class="footer">
        <p class="footerP score">${data.score}</p>
        <p class="footerP member">${membersResult}</p>
        <button class="footerPBtn">Add To List</button>
      </div>
    </div>`
}
