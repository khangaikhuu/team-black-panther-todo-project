

// const allAnimeURL = 'https://api.jikan.moe/v4/top/anime' 



// fetch(allAnimeURL)
//     .then(result => result.json())
//     .then(data => {
//         console.log(data);
//         console.log(data.data[1].mal_id);

//         console.log(data.data[1].images.jpg.image_url);
//         const mangaImages = document.getElementById('manga-image');
//         mangaImages.src = data.data[1].images.jpg.image_url;

//     })



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
    const mangaText = document.createElement('h2');
    mangaText.innerHTML = data.synopsis.substring(0, 370);
    mangaText.className = "mangaText"
    // console.log(mangaText);
    // button, dutuu

    // studio oruulax heseg
    const studioParts = document.createElement("div")

    const mangaStudio = document.createElement("div");
    mangaStudio.innerHTML = `<strong> Studio :</strong> <a href="${data.studios[0].url}"> ${data.studios[0].name} </a>`;
    mangaStudio.className = "mangaStudioGray";

    const mangaStudio2 = document.createElement("div");
    mangaStudio2.innerHTML = ` <strong> Source :</strong> ${data.source}`
    console.log(mangaStudio2);

    const mangaStudio3 = document.createElement("div");
    // mangaStudio3.innerHTML = `<strong>Theme :</strong> <a href="${data.themes[0].url}"> ${data.themes[0].name} </a>`;
    mangaStudio3.className = "mangaStudioGray";

    const mangaStudio4 = document.createElement("div");
    // mangaStudio4.innerHTML = `<strong> Democgraphic :</strong> <a href="${data.demographics[0].url}"> ${data.demographics[0].name} </a>`;
    mangaStudio4.className = "mangaStudio";






    //erunxii tom DIV
    const myCreate = document.createElement("div")
    myCreate.className = "myMain"


    myCreate.appendChild(mytitle);
    myCreate.appendChild(myStat);
    myCreate.appendChild(mangaGenre);
    myCreate.appendChild(mangaDomImage);
    myCreate.appendChild(mangaText);
    myCreate.appendChild(mangaStudio);
    myCreate.appendChild(mangaStudio2);
    myCreate.appendChild(mangaStudio3);
    myCreate.appendChild(mangaStudio4);




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