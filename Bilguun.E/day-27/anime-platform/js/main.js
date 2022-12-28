let animeData = []

async function callURL() {
  const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime")
  const fetchedJSON = await fetchedData.json()
  animeData = fetchedJSON.data
  console.log(animeData)
  const container = document.getElementById("mainDiv");
  container.innerHTML = '';
  animeData.map((element, index) => {
    container.innerHTML += getAnimes(element, index)
  })
}

callURL()

async function search() {
  const search = document.getElementById("searchPrompt")
  const searchWord = search.value
  // const animes = await fetch('https://api.jikan.moe/v4/top/anime')
  // const animesJSON = await animes.json()
  // const animesData = animesJSON.data
  const searchResult = animeData.filter(anime =>
    anime.title.toLowerCase().includes(searchWord.toLowerCase()))
  const container = document.getElementById("mainDiv");
  container.innerHTML = '';
  searchResult.map((element, index) => {
    container.innerHTML += getAnimes(element, index)
  }
  )
}
function goToPage1() {
  let animeData = []

  async function callURL() {
    const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime")
    const fetchedJSON = await fetchedData.json()
    animeData = fetchedJSON.data
    console.log(animeData)
    const container = document.getElementById("mainDiv");
    container.innerHTML = '';
    animeData.map((element, index) => {
      container.innerHTML += getAnimes(element, index)
    })
  }

  callURL()
}


function goToPage2() {
  let animeData2 = []

  async function callURL2() {
    const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime?page=2")
    const fetchedJSON = await fetchedData.json()
    animeData2 = fetchedJSON.data
    console.log(animeData2)
    const container = document.getElementById("mainDiv");
    container.innerHTML = '';
    animeData2.map((element, index) => {
      container.innerHTML += getAnimes(element, index)
    })
  }

  callURL2()
}

function goToPage3() {
  let animeData3 = []

  async function callURL3() {
    const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime?page=3")
    const fetchedJSON = await fetchedData.json()
    animeData3 = fetchedJSON.data
    console.log(animeData3)
    const container = document.getElementById("mainDiv");
    container.innerHTML = '';
    animeData3.map((element, index) => {
      container.innerHTML += getAnimes(element, index)
    })
  }

  callURL3()
}

function goToPage4() {
  let animeData4 = []

  async function callURL4() {
    const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime?page=4")
    const fetchedJSON = await fetchedData.json()
    animeData4 = fetchedJSON.data
    console.log(animeData4)
    const container = document.getElementById("mainDiv");
    container.innerHTML = '';
    animeData4.map((element, index) => {
      container.innerHTML += getAnimes(element, index)
    })
  }

  callURL4()
}


async function clearFunc() {
  const search = document.getElementById("searchPrompt")
  search.value = ""
  const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime")
  const fetchedJSON = await fetchedData.json()
  animeData = fetchedJSON.data
  console.log(animeData)
  const container = document.getElementById("mainDiv");
  container.innerHTML = '';
  animeData.map((element, index) => {
    container.innerHTML += getAnimes(element, index)
  })
}



async function filter() {
  const filterSelect = document.getElementById("filterSelect")
  let filterValue = filterSelect.value
  // const animes = await fetch('https://api.jikan.moe/v4/top/anime')
  // const animesJSON = await animes.json()
  // const animesData = animesJSON.data
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

async function showMore(event) {
  const elementSynop = document.getElementById(`synopsis_${event.id}`);
  // const resultJSON = await fetch('https://api.jikan.moe/v4/top/anime');
  // const result = await resultJSON.json();
  const showData = animeData;
  const filteredData = showData.filter((el, index) => {
    if (index == event.id) {
      return el;
    }
  })
  elementSynop.innerHTML = filteredData[0].synopsis;
}


// fetch("https://api.jikan.moe/v4/top/anime")
//   .then((res) => res.json())
//   .then(data => {
//     const container = document.getElementById("mainDiv");
//     container.innerHTML = '';
//     data.data.map((element, index) => {
//       container.innerHTML += getAnimes(element, index)
//     })
//   })

const card = document.querySelector('#card');
function getAnimes(data, index) {
  const genres = data.genres.map(genre => {
    const result = `<button>${genre.name}</button>`;
    return result;
  })

  let membersNum = data.members
  let members2Num = String(membersNum).substring(0, 1)
  let membersNum2nd = data.members
  let members2Num2nd = String(membersNum2nd).substring(1, 2)
  const durationStr = data.duration.substring(0, 3)

  return `
      <div class="divContainer" id="mainDiv">
      <div class="header">
      <h6><a href="#" id="title">${data.title}</a></h6>
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
      ${genres}
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
          </div>
          <div id="info" class=bodyDivProducer>
            <p><strong>Studio:</strong> <a href="#" class="studioA">${data.studios[0].name}</a></p>
            <p><strong>Source:</strong> ${data.source}</p>
          </div>
        </div>
      </div>
      <div class="footer">
        <p class="footerP score">${data.score}</p>
        <p class="footerP member">${members2Num}.${members2Num2nd}M</p>
        <button class="footerPBtn">Add To List</button>
      </div>
    </div>`
}
