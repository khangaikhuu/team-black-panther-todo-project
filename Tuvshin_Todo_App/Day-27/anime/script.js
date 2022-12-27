

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
    mangaGenre.innerHTML = `${data.genres.name}`;




    //erunxii tom DIV
    const myCreate = document.createElement("div")
    myCreate.className = "myMain"


    myCreate.appendChild(mytitle);  
    myCreate.appendChild(myStat);
    myCreate.appendChild(mangaDomImage);



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