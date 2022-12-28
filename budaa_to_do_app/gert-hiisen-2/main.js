function createCard(data) {
    // console.log(data)
    const animeContainer = document.getElementById("anime-container");
    const animeCard = document.createElement("div");
    animeCard.className = "anime-card";
    animeContainer.appendChild(animeCard);
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
    type.textContent = data.type;
    year.textContent = data.year;
    status.textContent = data.status;
    eps.textContent = data.episodes;
    const animeGenre = document.createElement("div");
    animeCard.appendChild(animeGenre);
    animeGenre.className = "anime-genre";
    const action = document.createElement("p");
    const adventure = document.createElement("p");
    const drama = document.createElement("p");
    const fantas = document.createElement("p");
    animeGenre.appendChild(action);
    animeGenre.appendChild(adventure);
    animeGenre.appendChild(drama);
    animeGenre.appendChild(fantas);
    action.textContent = data.genres[0].name;
    adventure.textContent = data.genres[0].name;
    drama.textContent = data.genres[0].name;
    fantas.textContent = data.genres[0].name;
  
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
    infoText.textContent = `Studio: ${data.studios[0].name}`;
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
    button.className = "moreBtn"
  //   bodyText.textContent = data.synopsis.slice(0, 300);
  //   const infoText = document.createElement("p");
  //   info.appendChild(infoText);
  
  const more = data.synopsis;
  const textLength = more.length;
  const parts = more.slice(300, textLength);
  showText.textContent = parts;
  
  console.log(button);
  
  button.addEventListener("click", () => {
      if(showText.style.display == "none") {
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
  addList.textContent = data.producers[0].mal_id
  review.className = "views-anime"
  
  
  
  
  
  
  
  
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
  }
  
  const animes = "https://api.jikan.moe/v4/top/anime";
  fetch(animes)
    .then((result) => result.json())
    .then((data) => {
      const animeData = data.data;
  
      animeData.map((anime) => {
        createCard(anime);
      });
    });
  