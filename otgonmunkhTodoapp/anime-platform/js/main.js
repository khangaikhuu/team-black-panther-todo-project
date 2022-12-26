console.log("anime");
const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114';
fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {
        console.log(data);
        console.log(data.data.mal_id);
        console.log(data.data.images.jpg.image_url);
        const mangaStructur = data.data;

        const mangaDomImage = document.getElementById("manga-image");
        mangaDomImage.src = mangaStructur.images.jpg.image_url;
        document.getElementById("manga-container").getElementsByTagName("a")[0].textContent = mangaStructur.titles[0].title;
        document.getElementById("manga-container").style = "border: 1px solid black"
        const containerNav = document.querySelector("#manga-nav")
        document.querySelector("#manga-nav").style = "background-color: #b6b6b6"

        const statusList = document.querySelectorAll("#manga-nav");

        statusList[0].innerHTML = `
    <i class="fa-solid fa-circle-play" style="font-size: 16px"></i>
    <div>
         <span id="type">${mangaStructur.type}</span>
         <span id="year">${mangaStructur.year}</span>
         <span id="status">${mangaStructur.status.slice(0, 8)}</span>
         <span id="eps">${mangaStructur.episodes} eps, ${mangaStructur.duration.slice(0, 7)}</span>
    </div>
    <i class="fa-solid fa-signal" id="detail" style="font-size: 16px"></i>`

        mangaStructur.genres.map((element,) => {
            console.log(element);
            const button1 = document.createElement("button");

            button1.innerHTML = element.name;

            const buttonCon = document.querySelector(".buttons");

            buttonCon.appendChild(button1)


        })
        
        const para = document.getElementsByTagName("p")[0];
        para.innerHTML = mangaStructur.synopsis.slice(0, 369);
        const more = mangaStructur.synopsis;

        const textLength = more.length;
        console.log(textLength); 
        const part = more.slice(369, textLength);

        const second = document.querySelector(".added");

        second.innerHTML = part;
        second.style.display = "none";

        const doubleClick = document.querySelector("#button");
        const btn = document.querySelector("#myBtn");
        btn.addEventListener("click", () =>{
            if(second.style.display == "none"){
                second.style.display = "block"
            }
            else if(second.style.display == "block"){
                second.style.display = "hide"
            }
            else {
                second.style.display = "none"
            }
        })

        doubleClick.addEventListener("click", () => {

        })















    })