let animeData = [];
let genreData = [];
let page = 1;
let currentPage = page;
const selectGenre = document.getElementById("select-genre");
const container = document.querySelector("#anime-container");

function getDetial(data) {
    // console.log(data)

    const animeHeader = document.createElement("h5");
    animeHeader.innerHTML = `<a href="${data.url}">${data.titles[0].title}</a>`;
    animeHeader.className = "p-5 border text-center my-2 animeHeader";

    const myCreate = document.createElement("div");
    // myCreate.style = "width: 460px;";
    myCreate.className = "col container border border-2";

    const animeInfo = document.createElement("h6");
    animeInfo.innerHTML = `${data.type} , ${data.year} | ${data.status.slice(
    0,
    8
  )} | ${data.episodes} eps, ${data.duration.slice(0, 6)}`;
    animeInfo.className = "text-center titles";

    //Actions
    const actions = document.createElement("div");
    actions.className = "text-center p-1 actions";

    data.genres.map((element) => {
        let a = document.createElement("a");
        a.innerHTML = element.name;
        a.href = element.url;
        actions.append(a);
    });

    const foot = document.createElement("div");
    foot.className =
        "container d-flex justify-content-evenly align-items-center foot m-1";
    const score = document.createElement("div");
    score.innerHTML = `<i class="fa-regular fa-star"></i> ${data.score}`;
    const view = document.createElement("div");
    view.innerHTML = `<i class="fa-solid fa-eye"></i> ${data.popularity}.0 M`;
    const addTolist = document.createElement("div");
    addTolist.innerHTML = `<a href="https://myanimelist.net/login.php?error=login_required&from=%2Fanime%2Fgenre%2F2%2FAdventure" style="text-decoration: none;
    color: #ffffff;">Add to list</a>`;
    addTolist.className = "addTolist btn btn-primary";
    foot.appendChild(score);
    foot.appendChild(view);
    foot.appendChild(addTolist);

    const mangaDomImage = document.createElement("img");
    mangaDomImage.src = data.images.webp.image_url;

    const anime_main = document.createElement("div");
    anime_main.className = "d-flex gap-4 my-2";
    const anime_content = document.createElement("div");
    anime_content.className = "w-50 overflow-scroll anime-content";
    const text = document.createElement("div");
    text.className = "d-flex flex-column";

    const first_p = document.createElement("p");
    first_p.textContent = data.synopsis.slice(0, 320);
    first_p.style = "margin: 0;";
    const more = data.synopsis;
    const textLength = more.length;
    const parts = more.slice(320, textLength);

    const second_p = document.createElement("p");
    second_p.textContent = parts;
    second_p.style.display = "none";

    const moreButton = document.createElement("button");
    moreButton.className = "moreBtn";

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

    data.studios.map((element) => {
        studios.innerHTML = `<strong>Studio :</strong> <a href="${element.url}">${element.name}</a>`;
    });



    const source = document.createElement("div");
    source.innerHTML = `<strong>Source :</strong> ${data.source}`;

    const theme = document.createElement("div");
    data.themes.map((t) => {
        theme.innerHTML += `<strong>Theme :</strong> <a href="${t.url}">${t.name}</a><br>`;
    });

    theme.className = "gray";
    const demograph = document.createElement("div");
    // demograph.innerHTML = `<strong>Demographic :</strong> <a href="${data.demographics[0].url}">${data.demographics[0].name}</a>`;
    data.demographics.map((d) => {
        demograph.innerHTML = `<strong>Demographic :</strong> <a href="${d.url}">${d.name}</a>`;
    });
    part2.appendChild(studios);
    part2.appendChild(source);
    part2.appendChild(theme);
    part2.appendChild(demograph);
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

function search(event) {
    const searchField = document.getElementById("search-field");
    const searchWord = searchField.value.toLowerCase();
    const searchResult = animeData.filter((anime) =>
        anime.title.toLowerCase().includes(searchWord)
    );
    container.innerHTML = "";
    searchResult.map((element) => {
        container.appendChild(getDetial(element));
    });
}
async function callURL() {
    const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime");
    const fetchedJSON = await fetchedData.json();
    animeData = fetchedJSON.data;
    // console.log(animeData);
    const container = document.querySelector("#anime-container");

    container.innerHTML = "";
    animeData.map((element) => {
        container.appendChild(getDetial(element));
    });
}
async function callGenre() {
    const fetchedData = await fetch("https://api.jikan.moe/v4/genres/anime");
    const fetchedJSON = await fetchedData.json();
    genreData = fetchedJSON.data;
    const newOption = document.createElement("option");
    genreData.map((e) => {
        newOption.innerHTML = e.name;
        newOption.value = e.name;
        const cloneSelect = selectGenre.appendChild(newOption);
        selectGenre.innerHTML += cloneSelect;

    })
}
callURL();
callGenre();

function filter() {
    let selectValue = selectGenre.value;
    const selectResult = animeData.filter((anime) => {
        let filteredSelect = anime.genres.filter((genre) => {
            if (genre.name == selectValue) {
                return genre;
            }
        });
        if (filteredSelect.length > 0) {
            return filteredSelect;
        }
    });
    container.innerHTML = "";
    selectResult.map((element) => {
        container.appendChild(getDetial(element));
    })
}

function defaul() {
    location.reload();
}

document.getElementById("reset").addEventListener("change", () => {
    location.reload()
});

// Pagination 

// Buttons
const pagination = document.getElementById("pagination")


// 1 - 10 numbers
for (let i = 0; i <= 11; i++) {
    const addA = document.createElement("a");
    pagination.appendChild(addA);
    if (i == 0) {
        addA.innerHTML = `<a href="#" id="prev" class="btn btn-primary" onclick='getPage(this)'>&lt;</a>`;
    } else if (i == 11) {
        addA.innerHTML = `<a href="#" id="next" class="btn btn-primary" onclick='getPage(this)'>&gt;</a>`;
    } else {
        addA.innerHTML = `<a href="#" class="btn btn-primary" onclick='getPage(this)'>${i}</a>`;
    }
}

async function getPage(elem) {
    if (elem.id == 'prev') {
        page = Number(currentPage) - 1;
    } else if (elem.id == 'next') {
        page = Number(currentPage) + 1;
    } else {
        page = elem.text;
    }
    currentPage = page;

    if (page < 1) {
        page = 1;
        currentPage = 1;
    }
    if (page >= 10) {
        page = 10;
        currentPage = 10;
    }
    console.log('page = ', page);


    const fetchedData = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`);
    const fetchedJSON = await fetchedData.json();
    page2Data = fetchedJSON.data;

    container.innerHTML = "";
    page2Data.map((element) => {
        container.appendChild(getDetial(element));
    });
}