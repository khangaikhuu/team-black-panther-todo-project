
const animesURL = "https://api.jikan.moe/v4/top/anime";
let animeData = [];
async function fetchData() {
  const fetchData = await fetch(animesURL)
  const fetchJSON = await fetchData.json()
  animeData = fetchJSON.data

  // console.log(animeData)
  animeData.map((anime) => {
    createCard(anime);
  });


}

fetchData()



function createCard(data) {
  // console.log(data)
  const animeContainer = document.querySelector("#anime-container");
  const animeCard = document.createElement("div");
  animeCard.className = "anime-card";

  animeCard.className = "anime-card";
  const title = document.createElement("a");
  animeCard.appendChild(title);
  title.textContent = data.title;
  title.href = "#";
  const animeStatus = document.createElement("div");
  const animeStatusApendchild = document.createElement("div");
  animeCard.appendChild(animeStatus);
  animeStatus.appendChild(animeStatusApendchild);
  animeStatus.className = "anime-status";
  const type = document.createElement("span");
  const year = document.createElement("span");
  const status = document.createElement("span");
  const eps = document.createElement("span");
  animeStatusApendchild.appendChild(type);
  animeStatusApendchild.appendChild(year);
  animeStatusApendchild.appendChild(status);
  animeStatusApendchild.appendChild(eps);
  animeStatusApendchild.className = "animes-front"
  type.textContent = `${data.type} `;
  year.textContent = ` ${data.year} ` + `|`;
  status.textContent = `| ${data.status} | `;
  eps.textContent = `| ${data.episodes}`;
  const animeGenre = document.createElement("div");
  animeCard.appendChild(animeGenre);
  animeGenre.className = "anime-genre";

  const genreContainer = document.createElement("div")
  animeGenre.appendChild(genreContainer)
  data.genres.map(genre => {
    const genreElement = document.createElement("p")
    genreElement.textContent = genre.name
    animeGenre.appendChild(genreElement)
  })

  const animeBody = document.createElement("div");
  animeCard.appendChild(animeBody);
  animeBody.className = "anime-body";
  const animeImage = document.createElement("img");
  animeImage.src = data.images.jpg.image_url;
  animeBody.appendChild(animeImage);
  const animeContent = document.createElement("div");
  animeBody.appendChild(animeContent);
  animeContent.className = "anime-content";
  const text = document.createElement("div");
  const info = document.createElement("div");
  animeContent.appendChild(text);
  animeContent.appendChild(info);
  const bodyText = document.createElement("p");
  text.appendChild(bodyText);
  text.className = "info-text";
  bodyText.textContent = data.synopsis.slice(0, 300);
  const infoText = document.createElement("p");
  info.appendChild(infoText);
  infoText.textContent = `Studio: Pierrot`;
  const source = document.createElement("p");
  info.appendChild(source);
  source.textContent = `Source: ${data.source}`;
  const theme = document.createElement("p");
  info.appendChild(theme);
  theme.textContent = `Theme: `
  //   theme.innerHTML = `${data.themes[1].name}`
  const demographic = document.createElement("p");
  info.appendChild(demographic);
  demographic.textContent = `Demographic: `

  // text 
  const showText = document.createElement("p")
  text.appendChild(showText)
  showText.className = "second-p"
  //   showText.textContent = `and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.

  //   The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing "automail," a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.

  //   As Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.

  //   [Written by MAL Rewrite]`

  const button = document.createElement("button");
  text.appendChild(button)
  button.className = "moreBtn fa-angle-down"


  //   bodyText.textContent = data.synopsis.slice(0, 300);
  //   const infoText = document.createElement("p");
  //   info.appendChild(infoText);

  const more = data.synopsis;
  const textLength = more.length;
  const parts = more.slice(300, textLength);
  showText.textContent = parts;



  button.addEventListener("click", () => {
    if (showText.style.display == "none") {
      showText.style.display = "block"
      showText.style.width = "200px"
      showText.style.height = "100px"

    } else {
      showText.style.display = "none";
    }
  })

  // {/* <i class="fas fa-star"></i> */}

  const animeFooter = document.createElement("div");
  animeFooter.className = "anime-footer"
  const views = document.createElement("div")
  const faStar = document.createElement("i");
  animeCard.appendChild(animeFooter);
  animeFooter.appendChild(faStar);
  faStar.className = "fa fa-star"
  const number = document.createElement("span");
  animeFooter.appendChild(views)
  views.appendChild(faStar)
  animeFooter.appendChild(number);
  views.appendChild(number)
  views.className = "review"
  number.textContent = data.score

  const review = document.createElement("div")
  const faSolid = document.createElement("i")
  animeFooter.appendChild(review)
  review.appendChild(faSolid)
  faSolid.className = "fa fa-eye"
  const addList = document.createElement("span")
  review.appendChild(addList)
  addList.textContent = `${data.mal_id}`
  review.className = "views-anime"
  const addToList = document.createElement("button");
  animeFooter.appendChild(addToList)
  addToList.textContent = `Add to list`



  animeContainer.appendChild(animeCard);






  //   demographic.innerHTML = `demo: ${data.demographic[0].name}`

  //   const theme = document.createElement("p")
  //   info.appendChild(theme);
  //   theme.textContent = `Theme: ${data.themes[0].name}`

  //   const demographic = document.createElement("p")
  //   info.appendChild(demographic);
  //   demographic.textContent = `Demographic: ${data.demographic[0].name}`

  // const cardHeader = document.createElement("h2");
  // animeCard.appendChild(cardHeader);
  // cardHeader.textContent = data.title
  // animeContainer.appendChild(animeCard);
  // const animeTitle = document.createElement("div");
  // animeTitle.className = "animeTitle"
  // const animeIamge = document.createElement("img");
  // animeIamge.src = data.images.jpg.image_url;
  // animeCard.appendChild(animeIamge)
  return animeContainer;
}




async function search(event) {
  const searchField = document.getElementById("search-field")
  const searchWord = searchField.value;
  console.log(searchField.value);
  const searchResult = animeData.filter(anime =>
    anime.title.toLowerCase().includes(searchWord)
  )
  console.log(searchResult)
  console.log(searchWord)


  const container = document.querySelector("#anime-container")
  removeAllChildNodes(container)
  searchResult.map((element) => {
    createCard(element)
  })

}

async function filter() {
  const selectGenre = document.getElementById("select-genre");
  let selectValue = selectGenre.value;

  const selectResult = animeData.filter(anime => {
    let filteredSelect = anime.genres.filter(genre => {
      if (genre.name == selectValue) {
        return genre;
      }
    })
    if (filteredSelect.length > 0) {
      return filteredSelect;
    } else {
      //  return document.getElementById("anime-container");
    }
  })
  console.log(selectResult);
  const container = document.querySelector("#anime-container");
  //  container.innerHTML = "";
  removeAllChildNodes(container)
  selectResult.map((element) => {
    //  container.innerHTML += createCard((element))
    createCard(element)
  })



  // const selectGenre = document.getElementById('select-genre');
  // let selectValue = selectGenre.value;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// const selectResult = animesData.filter(anime => {
//   let filteredSelect = anime.genres.filter(genre => {
//     if (genre.name == selectValue) {
//       return genre;
//     }
//   })
//   if (filteredSelect.length > 0) {
//     return filteredSelect;
//   }
// })
// console.log(selectResult);
// const container = document.querySelector(`#anime-container`);
// container.innerHTML = '';
// selectResult.map((element) => {
//   container.innerHTML += getAnimes((element));
// })
// page change 

// function pageSelector (page) {

// const animeContainer = document.getElementById("page-container")
//   animeContainer.innerHTML = "";

//   for (let i = 0; i < 9 ; i++){
//     animeContainer.appendChild(animePage)
//     let animePage = document.createElement("a")
//     animePage.textContent = 1
//   }
// }
const animeContainer = document.getElementById("page-container")

let pageNation = document.getElementById("page-container");
pageNation.innerHTML = "";

let previous = `<a href="#" onclick="getData(this)" id="previous">&laquo;</a>`;
  pageNation.innerHTML = previous;
  for (let i = 0; i < 9; i++) {
    const animePage = document.createElement("a")
    animeContainer.appendChild(animePage)
    animePage.innerHTML = i + 1
    animePage.addEventListener('click', async (event) => {
      console.log(event.target.text)
      const fetchedURL = await fetch(`https://api.jikan.moe/v4/top/anime?page=${event.target.text}`);
      const fetchJSON = await fetchedURL.json();
      const pageData = fetchJSON.data;
      console.log(pageData);
      animeData = pageData;
      console.log(fetchedURL)
      console.log(animeData);
      const container = document.querySelector("#anime-container");
      removeAllChildNodes(container)
      animeData.map((anime) => {
        createCard(anime);
      });
      // let arrow = removeAllChildNodes(container)
      // const searchRemove = 
      // removeAllChildNodes()
    })
    
  }

  
  let next = `<a href="#" onclick="getData(this)" id="previous">&raquo;</a>`;
  pageNation.innerHTML += next;
  






