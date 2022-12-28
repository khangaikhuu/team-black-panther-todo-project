fetch('https://api.jikan.moe/v4/anime/5114')
  .then((res) => res.json())
  .then((anime) => {
    const randomAnime = anime.data;
    console.log('anime data', randomAnime);
    // anime title
    const title = document.querySelector('#title');
    title.textContent = randomAnime.title; 

    //anime types
    // const type = document.getElementById("type");
    // type.textContent = randomAnime.producers.type;

    //anime studio
    const studio = document.getElementById("studio");
    studio.textContent = randomAnime.producers.name;
  })