

function getDetial(data, index) {
    console.log(data)

  const mangaDomImage = document.createElement('img');
  mangaDomImage.src = data.images.jpg.image_url;

  const animeHeader = document.createElement('h5');
  animeHeader.innerHTML = `<a href="${data.url}">${data.titles[0].title}</a>`;
  animeHeader.className = "p-5 border text-center my-2"

  const myCreate = document.createElement("div");
  myCreate.id = `anime_card_${index}`
  myCreate.style = "width: 460px;";
  myCreate.className ="container border border-2 m-1"


  myCreate.appendChild(animeHeader);
  myCreate.appendChild(mangaDomImage)


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
    anime.map((element, index) => {
      container.appendChild(getDetial(element, index));
    });
  });
