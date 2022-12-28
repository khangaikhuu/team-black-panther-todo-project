async function callURL(){
    const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime")
    const fetchedDataJSON = await fetchedData.json();
    const animeData = fetchedDataJSON.data;

    console.log(animeData);
    const container = document.querySelector("#manga_main");

}



// fetch("https://api.jikan.moe/v4/top/anime")
//     .then((res) => res.json())
//     .then((topAnime) => {
//         // console.log("topAnim", topAnime);
//         const anime = topAnime.data;
//         // console.log("anime", anime);
//         const container = document.querySelector("#manga_main");

//         container.innerHTML = "";
//         anime.map((element) => {
//             container.appendChild(getDetial(element));
//         });
//     });