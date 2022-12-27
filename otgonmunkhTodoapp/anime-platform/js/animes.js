console.log("hello world");

const card = document.querySelector(".card");

function getAnimes(animes) {


    const genres = animes.genres.map(genre => {
        console.log(genre);
        const result = `<p>${genre.name}</p>`;
        return result;
    })


    return `
    <div class="card">
         <a href="#" id="title" style="display:block">${animes.title}</a>
         <div class="intro">
             <i class="fa-sharp fa-solid fa-circle-play"></i>
             <span id="type">${animes.type}, ${animes.year} | ${animes.status.substring(0, 8)} | ${animes.episodes} eps, ${animes.duration.substring(0, 6)}</span>
             <i class="fa-solid fa-tower-broadcast"></i>
             

         </div>
         <div class="genres" id="genres">
           ${genres.join('')}
         </div>

         <div class="img-container">
            <img src=${animes.images.jpg.image_url}>
            <div class="p-con">
                 <p class="first-p"></p>
                 <i class="fa-sharp fa-solid fa-chevron-up"></i>
                 <p class="second"></p>
                 <i class="fa-solid fa-chevron-down"></i>

            </div>
         </div>
         
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

        const para = document.querySelector(".first-p");
        const second = document.querySelector(".second");
        const more = animes.synopsis;
        const textlength = more.length;


        para.innerHTML = `${animes.synopsis.substring(0, 369)}`
        second.innerHTML = `${para, textlength}`
        
        // const more = `${textlength}`

        

        const firstIcon = document.getElementsByTagName("i")[0];
        const lastIcon = document.getElementsByTagName("i")[1];

        lastIcon.style.display = "none"

        // firstIcon.addEventListener("click", () => {
        //     if()
        // })






    })