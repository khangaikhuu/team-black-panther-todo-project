const card = document.querySelector("#card");

const source = "https://api.jikan.moe/v4/anime/5114";

function getAnimes(data) {
  return `
  <div class="container border border-2" style="width: 460px;">
  <div id="manga-container" class="container">
      <h5 class="p-5 border text-center my-2">
          <a href="">${data.title}</a>
      </h5>
  </div>
  <div id="titles" class="container">
      <h6 class="text-center"></h6>
  </div>
  <div class="container">
      <div id="actions" class="text-center p-1"></div>
  </div>
  <div class="container d-flex justify-content-evenly gap-4 my-4">
      <img src="" alt="" id="manga-image" class="w-50">

      <div class="w-50 overflow-scroll anime-content">
          <div id="text" class="d-flex flex-column">
              <p></p>
              <p id="second-p"></p>
              <button id="moreBtn">
              </button>
          </div>
          <div>
              <div class="gray">
                  <strong>Studio :</strong>
                  <a href="" id="studios"></a>
              </div>
              <div id="source"></div>
              <div class="gray">
                  <strong>Theme :</strong>
                  <a href="" id="theme"></a>
              </div>

              <div>
                  <strong>Demographic :</strong>
                  <a href="" id="demograph"></a>
              </div>
          </div>
      </div>
  </div>
  <div class="container d-flex justify-content-evenly align-items-center mb-3">
      <div id="score"></div>
      <div id="view"></div>
      <div id="addToList"></div>
  </div>
</div>`;
}

// function getDetial(data, index) {
//     console.log(data)
//   const mangaDomImage = document.createElement('img');
//   mangaDomImage.src = data.images.jpg.image_url;

//   const animeHeader = document.createElement('h6');
//   animeHeader.innerHTML = data.title;
// //   const container = document.getElementById("manga-container");
// //   const cont = document.getElementById("titles");
// //   container.getElementsByTagName(
// //     "h5"
// //   )[0].innerHTML = `<a href="${data.url}">${data.titles[0].title}</a>`;

// //   cont.getElementsByTagName("h6")[0].textContent = `${data.type} , ${
// //     data.year
// //   } | ${data.status.slice(0, 8)} | ${
// //     data.episodes
// //   } eps, ${data.duration.slice(0, 6)}`;

// //   const actions = document.getElementById("actions");
// //   data.genres.map((element) => {
// //     let a = document.createElement("a");
// //     a.innerHTML = element.name;
// //     a.href = element.url;
// //     actions.append(a);
// //   });

// //   const text = document.querySelector("#text p");
// //   const secondText = document.querySelector("#second-p");
// //   text.textContent = data.synopsis.slice(0, 375);
// //   const more = data.synopsis;
// //   console.log("more", more);
// //   const textLength = more.length;
// //   console.log("lenght", textLength);
// //   const parts = more.slice(375, textLength);
// //   secondText.textContent = parts;
// //   secondText.style.display = "none";

// //   const moreButton = document.querySelector("#moreBtn");

// //   console.log(moreButton);
// //   moreButton.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
// //   moreButton.addEventListener("click", () => {
// //     if (secondText.style.display == "none") {
// //       secondText.style = "display: block";
// //       moreButton.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
// //     } else {
// //       secondText.style = "display: none;";
// //       moreButton.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
// //     }
// //   });
// //   const studios = document.getElementById("studios");
// //   studios.innerText = data.studios[0].name;
// //   studios.href = data.studios[0].url;

// //   const source = document.getElementById("source");
// //   source.innerHTML = `<strong>Source :</strong> ${data.source}`;
// //   const theme = document.getElementById("theme");
// //   theme.innerText = data.themes[0].name;
// //   theme.href = data.themes[0].url;

// //   const demograph = document.getElementById("demograph");
// //   demograph.innerText = data.demographics[0].name;
// //   demograph.href = data.demographics[0].url;

// //   const score = document.getElementById("score");
// //   score.innerHTML = `<i class="fa-regular fa-star"></i> ${data.score}`;

// //   const view = document.getElementById("view");
// //   view.innerHTML = `<i class="fa-solid fa-eye"></i> ${data.popularity}.0 M`;
//   const addToList = document.createElement("div");
//   addToList.id = `anime_card_${index}`

//   addToList.appendChild(animeHeader);
//   addToList.appendChild(mangaDomImage)

// //   addToList.innerHTML = `<a href="https://myanimelist.net/login.php?error=login_required&from=%2Fanime%2Fgenre%2F2%2FAdventure">Add to list</a>`;
// //   addToList.className = "btn btn-primary";
//   return addToList;
// }

fetch("https://api.jikan.moe/v4/top/anime")
  .then((res) => res.json())
  .then((topAnime) => {
    console.log("topAnim", topAnime);
    const anime = topAnime.data;
    console.log("anime", anime);
    anime.map((element) => {
      console.log(element.mal_id);
      // function getAnimes() {
      //   return `
      //   <div class="container border border-2" style="width: 460px;">
      //   <div id="manga-container_${element.mal_id}" class="container">
      //       <h5 class="p-5 border text-center my-2">
      //           <a href=""></a>
      //       </h5>
      //   </div>
      //   <div id="titles_${element.mal_id}" class="container">
      //       <h6 class="text-center"></h6>
      //   </div>
      //   <div class="container">
      //       <div id="actions_${element.mal_id}" class="text-center p-1"></div>
      //   </div>
      //   <div class="container d-flex justify-content-evenly gap-4 my-4">
      //       <img src="" alt="" id="manga-image_${element.mal_id}" class="w-50">
      
      //       <div class="w-50 overflow-scroll anime-content">
      //           <div id="text_${element.mal_id}" class="d-flex flex-column">
      //               <p></p>
      //               <p id="second-p_${element.mal_id}"></p>
      //               <button id="moreBtn">
      //               </button>
      //           </div>
      //           <div>
      //               <div class="gray">
      //                   <strong>Studio :</strong>
      //                   <a href="" id="studios_${element.mal_id}"></a>
      //               </div>
      //               <div id="source_${element.mal_id}"></div>
      //               <div class="gray">
      //                   <strong>Theme :</strong>
      //                   <a href="" id="theme_${element.mal_id}"></a>
      //               </div>
      
      //               <div>
      //                   <strong>Demographic :</strong>
      //                   <a href="" id="demograph_${element.mal_id}"></a>
      //               </div>
      //           </div>
      //       </div>
      //   </div>
      //   <div class="container d-flex justify-content-evenly align-items-center mb-3">
      //       <div id="score_${element.mal_id}"></div>
      //       <div id="view_${element.mal_id}"></div>
      //       <div id="addToList_${element.mal_id}"></div>
      //   </div>
      // </div>`;
      // }

      // const container = document.querySelector("#anime-container");

      // container.innerHTML = "";
      // anime.map((element, index) => {
      //   container.innerHTML += getAnimes(element)
      // });
      container.innerHTML = "";
      anime.map((element) => {
        container.innerHTML += getAnimes(element);
      });
    });

    // fetch(`https://api.jikan.moe/v4/anime/${element.mal_id}`)
    // .then((result) => result.json())
    // .then((data) => {
    //   console.log(data.data.images.jpg.image_url);
    //   const mangaDomImage = document.getElementById("manga-image_${element.mal_id}");
    //   mangaDomImage.src = data.data.images.webp.image_url;
    //   const container = document.getElementById("manga-container_${element.mal_id}");
    //   const cont = document.getElementById("titles_${element.mal_id}");
    //   container.getElementsByTagName(
    //     "h5"
    //   )[0].innerHTML = `<a href="${data.data.url}">${data.data.titles[0].title}</a>`;

    //   cont.getElementsByTagName("h6")[0].textContent = `${data.data.type} , ${
    //     data.data.year
    //   } | ${data.data.status.slice(0, 8)} | ${
    //     data.data.episodes
    //   } eps, ${data.data.duration.slice(0, 6)}`;

    //   const actions = document.getElementById("actions_${element.mal_id}");
    //   data.data.genres.map((element) => {
    //     let a = document.createElement("a");
    //     a.innerHTML = element.name;
    //     a.href = element.url;
    //     actions.append(a);
    //   });

    //   const text = document.querySelector("#text_${element.mal_id} p");
    //   const secondText = document.querySelector("#second-p_${element.mal_id}");
    //   text.textContent = data.data.synopsis.slice(0, 375);
    //   const more = data.data.synopsis;
    //   console.log("more", more);
    //   const textLength = more.length;
    //   console.log("lenght", textLength);
    //   const parts = more.slice(375, textLength);
    //   secondText.textContent = parts;
    //   secondText.style.display = "none";

    //   const moreButton = document.querySelector("#moreBtn_${element.mal_id}");

    //   console.log(moreButton);
    //   moreButton.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
    //   moreButton.addEventListener("click", () => {
    //     if (secondText.style.display == "none") {
    //       secondText.style = "display: block";
    //       moreButton.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
    //     } else {
    //       secondText.style = "display: none;";
    //       moreButton.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
    //     }
    //   });
    //   const studios = document.getElementById("studios_${element.mal_id}");
    //   studios.innerText = data.data.studios[0].name;
    //   studios.href = data.data.studios[0].url;

    //   const source = document.getElementById("source_${element.mal_id}");
    //   source.innerHTML = `<strong>Source :</strong> ${data.data.source}`;
    //   const theme = document.getElementById("theme_${element.mal_id}");
    //   theme.innerText = data.data.themes[0].name;
    //   theme.href = data.data.themes[0].url;

    //   const demograph = document.getElementById("demograph_${element.mal_id}");
    //   demograph.innerText = data.data.demographics[0].name;
    //   demograph.href = data.data.demographics[0].url;

    //   const score = document.getElementById("score_${element.mal_id}");
    //   score.innerHTML = `<i class="fa-regular fa-star"></i> ${data.data.score}`;

    //   const view = document.getElementById("view_${element.mal_id}");
    //   view.innerHTML = `<i class="fa-solid fa-eye"></i> ${data.data.popularity}.0 M`;
    //   const addToList = document.getElementById("addToList_${element.mal_id}");
    //   addToList.innerHTML = `<a href="https://myanimelist.net/login.php?error=login_required&from=%2Fanime%2Fgenre%2F2%2FAdventure">Add to list</a>`;
    //   addToList.className = "btn btn-primary";
    // });
  });
