

const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114'
fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {
        const mangaDom = document.getElementById("manga-image")
        mangaDom.src = data.data.images.jpg.image_url

        // Title
        document.getElementById("mainDiv").
            getElementsByTagName("h6")[0].textContent = data.data.titles[0].title


        // prodsrc
        const status = data.data.status.substring(0, 8)
        const min = data.data.duration.substring(0, 3)
        document.getElementById("prodsrc")
            .getElementsByTagName("p")[0].textContent = `${data.data.type}, ${data.data.year} |  ${status} |  ${data.data.episodes} eps, ${min}min `

        // genre 
        document.getElementById("genre")
            .getElementsByTagName("button")[0].textContent = ` ${data.data.genres[0].name}`
        document.getElementById("genre")
            .getElementsByTagName("button")[1].textContent = `${data.data.genres[1].name}`
        document.getElementById("genre")
            .getElementsByTagName("button")[2].textContent = `${data.data.genres[2].name}`
        document.getElementById("genre")
            .getElementsByTagName("button")[3].textContent = ` ${data.data.genres[3].name}`

        //body
        let synopsisMain = data.data.synopsis.substring(0, 290)
        document.getElementById("bodyDivP")
            .getElementsByTagName("p")[0].textContent = synopsisMain

        const firstBodyP = document.querySelector("#firstBodyP")
        const secondBodyP = document.querySelector("#secondBodyP")
        const moreIcon = document.querySelector(".moreIcon")
        const more = data.data.synopsis
        const textLength = more.length
        const parts = more.substring(290, textLength);
        const readMoreBtn = document.querySelector("#readMoreBtn")
        secondBodyP.textContent = parts
        secondBodyP.style.display = "none"

        readMoreBtn.addEventListener("click", () => {
            if (secondBodyP.style.display == "none") {
                secondBodyP.style.display = "block"
                // firstBodyP.style.display = "none"
            } else {
                secondBodyP.style.display = "none"
                // firstBodyP.style.display = "block"
            }
        })


        //body tag
        document.getElementById("bodyDivProducer")
            .getElementsByTagName("p")[0].textContent = `Studio:  ${data.data.studios[0].name}`
        document.querySelector("#bodyDivProducer").getElementsByTagName
        document.getElementById("bodyDivProducer")
            .getElementsByTagName("p")[1].textContent = `Source: ${data.data.source}`
        document.getElementById("bodyDivProducer")
            .getElementsByTagName("p")[2].textContent = `Theme: ${data.data.themes[0].name}`
        document.getElementById("bodyDivProducer")
            .getElementsByTagName("p")[3].textContent = `Demographic: ${data.data.demographics[0].name}`

        // footer
        document.getElementById("footer")
            .getElementsByTagName("p")[0].textContent = data.data.score

        let membersNum = data.data.members
        let members2Num = String(membersNum).substring(0, 1)
        let membersNum2nd = data.data.members
        let members2Num2nd = String(membersNum).substring(1, 2)

        document.getElementById("footer")
            .getElementsByTagName("p")[1].textContent = `${members2Num}.${members2Num2nd}M`


    })

const bleachThousandYearWar = "https://api.jikan.moe/v4/anime/41467"
fetch(bleachThousandYearWar)
    .then(result => result.json())
    .then(data => { })


fetch("https://api.jikan.moe/v4/top/anime")
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        const container = document.getElementById("manga-container");

        data.data.map(element => {
            container.innerHTML += getAnimes(element)

        })


    })

const card = document.querySelector('#card');
function getAnimes(data) {
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
      <div class="anime-genre">
        <p>Action</p>
        <p>Adventure</p>
        <p>Drama</p>
        <p>Fantasy</p>
      </div>
      <div class="anime-body">
        <img
          src=${data.images.jpg.image_url}
          alt="full-alchemist"
        />
        <div class="anime-content">
          <div id="text">
            <p>${data.synopsis.slice(0, 300)}</p>
            <p id="second-p"></p>
            <button id="moreBtn">
              <i class="fa-solid fa-angle-down"></i>
            </button>
          </div>
          <div id="info">
            <p><strong>Studio:</strong> <a href="#">Bones</a></p>
            <p><strong>Source:</strong> Manga</p>
            <p><strong>Theme:</strong> <a href="#">Military</a></p>
            <p><strong>Demographic:</strong> <a href="#">Shounen</a></p>
          </div>
        </div>
      </div>
      <div class="anime-footer">
        <div id="review">
          <i class="fa-regular fa-star"></i>
          <span id="number">9.11</span>
        </div>
        <div id="views">
          <i class="fa-solid fa-eye"></i>
          <span id="view-number">3.0M</span>
        </div>
        <button id="add-list">Add To List</button>
      </div>
    </div>`
}
