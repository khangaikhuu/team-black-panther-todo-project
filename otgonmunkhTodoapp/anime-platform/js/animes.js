console.log("hello world");

const card = document.querySelector(".card");
function getAnimes(animes) {
    return `
    <div class="card">
         <a href="#" id="title" style="display:block">${animes.title}</a>
         <img src=${animes.images.jpg.image_url}>
    </div>
    `
}

const animesURL = 'https://api.jikan.moe/v4/top/anime';
fetch(animesURL)
    .then(res => res.json())
    .then(animes => {
        console.log(animes.data);
        const container = document.querySelector("#manga-container");
        console.log(container);
        animes.data.map(element => {
            console.log(element);
            container.innerHTML += getAnimes(element)
        })
    })