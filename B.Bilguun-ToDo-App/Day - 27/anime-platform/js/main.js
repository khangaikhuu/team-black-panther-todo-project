console.log("Anime Platform");

const fullMetalAlchemistUrl = "https://api.jikan.moe/v4/anime/5114";

fetch(fullMetalAlchemistUrl)
  .then((result) => result.json())
  .then((data) => {
    console.log(data.data.images.jpg.image_url);
    const mangaDomImage = document.getElementById("manga-image");
    mangaDomImage.src = data.data.images.webp.image_url;

    //title
    const container = document.getElementById("manga-container");
    const cont = document.getElementById("titles");
    container.getElementsByTagName(
      "h5"
    )[0].innerHTML = `<a href="${data.data.url}">${data.data.titles[0].title}</a>`;

    cont.getElementsByTagName("h6")[0].textContent = `${data.data.type} , ${
      data.data.year
    } | ${data.data.status.slice(0, 8)} | ${
      data.data.episodes
    } eps, ${data.data.duration.slice(0, 6)}`;

    const actions = document.getElementById("actions");
    data.data.genres.map((element) => {
      let a = document.createElement("a");
      a.innerHTML = element.name;
      a.href = element.url;
      actions.append(a);
    });

    const text = document.querySelector("#text p");
    const secondText = document.querySelector("#second-p");
    text.textContent = data.data.synopsis.slice(0, 375);
    const more = data.data.synopsis;
    console.log("more", more);
    const textLength = more.length;
    console.log("lenght", textLength);
    const parts = more.slice(375, textLength);
    secondText.textContent = parts;
    secondText.style.display = "none";

    const moreButton = document.querySelector("#moreBtn");

    console.log(moreButton);
    moreButton.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
    moreButton.addEventListener("click", () => {
      if (secondText.style.display == "none") {
        secondText.style = "display: block";
        moreButton.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
      } else {
        secondText.style = "display: none;";
        moreButton.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
      }
    });
    const studios = document.getElementById("studios");
    studios.innerText = data.data.studios[0].name;
    studios.href = data.data.studios[0].url;

    const source = document.getElementById("source");
    source.innerHTML = `<strong>Source :</strong> ${data.data.source}`;
    const theme = document.getElementById("theme");
    theme.innerText = data.data.themes[0].name;
    theme.href = data.data.themes[0].url;

    const demograph = document.getElementById("demograph");
    demograph.innerText = data.data.demographics[0].name;
    demograph.href = data.data.demographics[0].url;

    const score = document.getElementById("score");
    score.innerHTML = `<i class="fa-regular fa-star"></i> ${data.data.score}`;

    const view = document.getElementById("view");
    view.innerHTML = `<i class="fa-solid fa-eye"></i> ${data.data.popularity}.0 M`;
    const addToList = document.getElementById("addToList");
    addToList.innerHTML = `<a href="https://myanimelist.net/login.php?error=login_required&from=%2Fanime%2Fgenre%2F2%2FAdventure">Add to list</a>`;
    addToList.className = "btn btn-primary";
  });
