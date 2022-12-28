function getDetial(data) {
    // console.log(data.mal_id);

    //Garchig oruulsan heseg
    const mytitle = document.createElement('h5');
    mytitle.innerHTML = data.titles[0].title;
    mytitle.className = "myTitles";

    // stat oruulsan heseg
    const myStat = document.createElement('h5')
    myStat.innerHTML = `<i class="fa-brands fa-youtube"></i> ${data.type},  ${data.year}, ${data.status.slice(0, 8)}, ${data.episodes}, eps, ${data.duration.slice(0, 6)} <i class="fa-sharp fa-solid fa-tower-broadcast"></i> `;
    myStat.className = "myStatInfo"
    // console.log(myStat);

    // zurag oruulsan heseg
    const mangaDomImage = document.createElement('img');
    mangaDomImage.src = data.images.jpg.image_url;
    mangaDomImage.className = "manga-images"

    //genre oruulax heseg
    const mangaGenre = document.createElement('h4');
    mangaGenre.className = "mangeGenre"
    data.genres.map(element => {
        const a = document.createElement('a');
        a.href = element.url;
        a.innerHTML = element.name;
        mangaGenre.appendChild(a);
    })

    // text oruulax heseg
    const mangaText = document.createElement('div');



    mangaText.innerHTML = data.synopsis.substring(0, 370);
    mangaText.className = "mangaText"
    // console.log(mangaText);
    // button, dutuu

    // studio oruulax heseg
    // const studioParts = document.createElement("p")
    // studioParts.className = "studioParts";

    const mangaStudio = document.createElement("div");
    mangaStudio.innerHTML = `<strong> Studio :</strong> <a href="${data.studios[0].url}"> ${data.studios[0].name} </a>`;
    mangaStudio.className = "mangaStudioGray";

    const mangaSource = document.createElement("div");
    mangaSource.className = "mangaStudioGray";

    mangaSource.innerHTML = ` <strong> Source :</strong> ${data.source}`;

    const mangaThemeContainer = document.createElement('div');
    mangaThemeContainer.className = "mangaStudioGray"
    const mangaThemeTitle = '<strong> Theme :</strong>'
    mangaThemeContainer.innerHTML += mangaThemeTitle
    data.themes.map(element => {
        const a = document.createElement('div');
        a.innerHTML += ` <a href="${element.url}"> ${element.name} </a>`;
        mangaThemeContainer.appendChild(a);
    })

    const mangaDemographics = document.createElement("div");
    mangaDemographics.className = "mangaStudioGray"

    data.demographics.map(element => {
        const a = document.createElement('div')
        a.innerHTML += `<strong> Democgraphic :</strong> <a href="${element.url}">${element.name}</a><br>`;
        mangaDemographics.appendChild(a);
    })

    // rating heseg 

    const ratingContainer = document.createElement('div')
    ratingContainer.className = "ratingContainer";

    const mangaSeen = document.createElement('h4');
    mangaSeen.className = "mangaSeen"
    mangaSeen.innerHTML = '<i class="fa-sharp fa-solid fa-star"></i>  ' + data.score;


    const mangaScore = document.createElement('h4');
    mangaScore.className = "mangaScore"

    mangaScore.innerHTML = '<i class="fa-solid fa-eye"></i>  ' + (((data.members) / 1_000_000).toFixed(1)) + " M";

    const addTolist = document.createElement('add-to-list')
    addTolist.classList = "addTolist";
    addTolist.innerHTML = `<a href="https://myanimelist.net/login.php?error=login_required&from=%2Fanime%2Fgenre%2F2%2FAdventure" style="text-decoration: none; color: #ffffff;">Add to list</a>`;

    //erunxii tom DIV
    const myCreate = document.createElement("div")
    myCreate.className = "myMain"

    myCreate.appendChild(mytitle);
    myCreate.appendChild(myStat);
    myCreate.appendChild(mangaGenre);
    myCreate.appendChild(mangaDomImage);
    myCreate.appendChild(mangaText);

    mangaText.appendChild(mangaStudio);
    mangaText.appendChild(mangaSource);
    mangaText.appendChild(mangaThemeContainer);
    mangaText.appendChild(mangaDemographics);

    myCreate.appendChild(ratingContainer);
        ratingContainer.appendChild(mangaSeen);
        ratingContainer.appendChild(mangaScore);
    ratingContainer.appendChild(addTolist);

    return myCreate;
}

fetch("https://api.jikan.moe/v4/top/anime")
    .then((res) => res.json())
    .then((topAnime) => {
        // console.log("topAnim", topAnime);
        const anime = topAnime.data;
        // console.log("anime", anime);
        const container = document.querySelector("#manga_main");

        container.innerHTML = "";
        anime.map((element) => {
            container.appendChild(getDetial(element));
        });
    });