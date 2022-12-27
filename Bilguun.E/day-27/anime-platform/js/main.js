// const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114'
// fetch(fullMetalAlchemistURL)
//     .then(result => result.json())
//     .then(data => {
//         const mangaDom = document.getElementById("manga-image")
//         mangaDom.src = data.data.images.jpg.image_url

//         // Title
//         document.getElementById("mainDiv").
//             getElementsByTagName("h6")[0].textContent = data.data.titles[0].title


//         // prodsrc
//         const status = data.data.status.substring(0, 8)
//         const min = data.data.duration.substring(0, 3)
//         document.getElementById("prodsrc")
//             .getElementsByTagName("p")[0].textContent = `${data.data.type}, ${data.data.year} |  ${status} |  ${data.data.episodes} eps, ${min}min `

//         // genre 
//         document.getElementById("genre")
//             .getElementsByTagName("button")[0].textContent = ` ${data.data.genres[0].name}`
//         document.getElementById("genre")
//             .getElementsByTagName("button")[1].textContent = `${data.data.genres[1].name}`
//         document.getElementById("genre")
//             .getElementsByTagName("button")[2].textContent = `${data.data.genres[2].name}`
//         document.getElementById("genre")
//             .getElementsByTagName("button")[3].textContent = ` ${data.data.genres[3].name}`

//         //body
//         let synopsisMain = data.data.synopsis.substring(0, 290)
//         document.getElementById("bodyDivP")
//             .getElementsByTagName("p")[0].textContent = synopsisMain

//         const firstBodyP = document.querySelector("#firstBodyP")
//         const secondBodyP = document.querySelector("#secondBodyP")
//         const moreIcon = document.querySelector(".moreIcon")
//         const more = data.data.synopsis
//         const textLength = more.length
//         const parts = more.substring(290, textLength);
//         const readMoreBtn = document.querySelector("#readMoreBtn")
//         secondBodyP.textContent = parts
//         secondBodyP.style.display = "none"

//         readMoreBtn.addEventListener("click", () => {
//             if (secondBodyP.style.display == "none") {
//                 secondBodyP.style.display = "block"
//                 // firstBodyP.style.display = "none"
//             } else {
//                 secondBodyP.style.display = "none"
//                 // firstBodyP.style.display = "block"
//             }
//         })


//         //body tag
//         document.getElementById("bodyDivProducer")
//             .getElementsByTagName("p")[0].textContent = `Studio:  ${data.data.studios[0].name}`
//         document.querySelector("#bodyDivProducer").getElementsByTagName
//         document.getElementById("bodyDivProducer")
//             .getElementsByTagName("p")[1].textContent = `Source: ${data.data.source}`
//         document.getElementById("bodyDivProducer")
//             .getElementsByTagName("p")[2].textContent = `Theme: ${data.data.themes[0].name}`
//         document.getElementById("bodyDivProducer")
//             .getElementsByTagName("p")[3].textContent = `Demographic: ${data.data.demographics[0].name}`

//         // footer
//         document.getElementById("footer")
//             .getElementsByTagName("p")[0].textContent = data.data.score

//         let membersNum = data.data.members
//         let members2Num = String(membersNum).substring(0, 1)
//         let membersNum2nd = data.data.members
//         let members2Num2nd = String(membersNum).substring(1, 2)

//         document.getElementById("footer")
//             .getElementsByTagName("p")[1].textContent = `${members2Num}.${members2Num2nd}M`


//     })

// const bleachThousandYearWar = "https://api.jikan.moe/v4/anime/41467"
// fetch(bleachThousandYearWar)
//     .then(result => result.json())
//     .then(data => { })


async function search() {
    const search = document.getElementById("searchPrompt")
    const searchWord = search.value
    const animes = await fetch('https://api.jikan.moe/v4/top/anime')
    const animesJSON = await animes.json()
    const animesData = animesJSON.data
    const searchResult = animesData.filter(anime =>
        anime.title.includes(searchWord))
    console.log(searchResult)
    
}

async function showMore(event) {
    console.log("event", event);
    const elementSynop = document.getElementById(`synopsis_${event.id}`);
    console.log(elementSynop)
    const resultJSON = await fetch('https://api.jikan.moe/v4/top/anime');
    const result = await resultJSON.json();
    const animeData = result.data;
    console.log(animeData)

    const filteredData = animeData.filter((el, index) => {
        if (index == event.id) {
            return el;
        }
    })
    console.log(filteredData)
    elementSynop.innerHTML = filteredData[0].synopsis;
}


fetch("https://api.jikan.moe/v4/top/anime")
    .then((res) => res.json())
    .then(data => {
        const container = document.getElementById("mainDiv");
        container.innerHTML = '';
        data.data.map((element, index) => {
            container.innerHTML += getAnimes(element, index)
        })
    })

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
          <span >${data.duration}</span>
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
