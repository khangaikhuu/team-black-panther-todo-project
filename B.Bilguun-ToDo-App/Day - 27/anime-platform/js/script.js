function getDetial(data) {
    console.log(data)

    const animeHeader = document.createElement('h5');
    animeHeader.innerHTML = `<a href="${data.url}">${data.titles[0].title}</a>`;
    animeHeader.className = "p-5 border text-center my-2"

    const myCreate = document.createElement("div");
    myCreate.style = "width: 460px;";
    myCreate.className = "container border border-2 m-1"

    const animeInfo = document.createElement('h6');
    animeInfo.innerHTML = `${data.type} , ${
    data.year
  } | ${data.status.slice(0, 8)} | ${
    data.episodes
  } eps, ${data.duration.slice(0, 6)}`;
    animeInfo.className = "text-center titles"

    //Actions
    const actions = document.createElement("div");
    actions.className = "text-center p-1 actions"

    data.genres.map((element) => {
        let a = document.createElement("a");
        a.innerHTML = element.name;
        a.href = element.url;
        actions.append(a);
    });

    const foot = document.createElement("div")
    foot.className = "container d-flex justify-content-evenly align-items-center mb-3"
    const score = document.createElement("div")
    score.innerHTML = `<i class="fa-regular fa-star"></i> ${data.score}`;
    const view = document.createElement("div")
    view.innerHTML = `<i class="fa-solid fa-eye"></i> ${data.popularity}.0 M`;
    const addTolist = document.createElement("div");
    addTolist.innerHTML = `<a href="https://myanimelist.net/login.php?error=login_required&from=%2Fanime%2Fgenre%2F2%2FAdventure" style="text-decoration: none;
    color: #ffffff;">Add to list</a>`;
    addTolist.className = "addTolist btn btn-primary"
    foot.appendChild(score)
    foot.appendChild(view)
    foot.appendChild(addTolist)

    const mangaDomImage = document.createElement('img');
    mangaDomImage.src = data.images.jpg.image_url;

    const anime_main = document.createElement("div")
    anime_main.className = "container d-flex justify-content-evenly gap-4 my-4";
    const anime_content = document.createElement("div");
    anime_content.className = "w-50 overflow-scroll anime-content"
    const text = document.createElement("div");
    text.className = "d-flex flex-column"

    const first_p = document.createElement("p");
    first_p.textContent = data.synopsis.slice(0, 375);
    const more = data.synopsis;
    const textLength = more.length;
    const parts = more.slice(375, textLength);


    const second_p = document.createElement("p");
    second_p.textContent = parts;
    second_p.style.display = "none";

    const moreButton = document.createElement("button")
    moreButton.className = "moreBtn"

    moreButton.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
    moreButton.addEventListener("click", () => {
        if (second_p.style.display == "none") {
            second_p.style = "display: block";
            moreButton.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
        } else {
            second_p.style = "display: none;";
            moreButton.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
        }
    });

    const part2 = document.createElement("div");


    const studios = document.createElement("div");
    studios.className = "gray";
    studios.innerHTML = `<strong>Studio :</strong> <a href="${data.studios[0].url}">${data.studios[0].name}</a>`;

    const source = document.createElement("div");
    source.innerHTML = `<strong>Source :</strong> ${data.source}`;

    const theme = document.createElement("div");
    theme.innerHTML = `<strong>Theme :</strong> <a href="${data.themes[0].url}">${data.themes[0].name}</a>`;
    theme.className = "gray";
    
    const demograph = document.createElement("div");
    demograph.innerHTML = `<strong>Demographic :</strong> <a href="${data.demographics[0].url}">${data.demographics[0].name}</a>`;

    part2.appendChild(studios)
    part2.appendChild(source)
    part2.appendChild(theme)
    part2.appendChild(demograph)
    anime_main.appendChild(mangaDomImage);
    anime_main.appendChild(anime_content);
    anime_content.appendChild(text);
    anime_content.appendChild(part2);
    text.appendChild(first_p);
    text.appendChild(second_p);
    text.appendChild(moreButton);

    myCreate.appendChild(animeHeader);

    myCreate.appendChild(animeInfo);
    myCreate.appendChild(actions);
    myCreate.appendChild(anime_main);
    myCreate.appendChild(foot);




    return myCreate;
}

fetch("https://api.jikan.moe/v4/top/anime")
    .then((res) => res.json())
    .then((topAnime) => {
        // console.log("topAnim", topAnime);
        const anime = topAnime.data;
        // console.log("anime", anime);
        const container = document.querySelector("#anime-container");

        container.innerHTML = "";
        anime.map((element) => {
            container.appendChild(getDetial(element));
        });
    });