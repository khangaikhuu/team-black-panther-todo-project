const fullMetalAlchimistURL = "https://api.jikan.moe/v4/anime/5114";
fetch(fullMetalAlchimistURL)
    .then(result => result.json())
    .then(data => {
        document.getElementById("first-title").textContent = data.data.titles[0].title;

        document.querySelector("#first-top-bar #type").textContent = `${data.data.type}, ${data.data.year}`;

        document.getElementById("finish").textContent = data.data.status.substring(0, 8);

        document.getElementById("eps").textContent = `${data.data.episodes} eps, ${data.data.duration.substring(0, 6)}`

        data.data.genres.map((element, index) => {
            document.querySelectorAll("#first-genres a")[index].textContent = data.data.genres[index].name;
        })

        document.getElementById("first-manga-image").src = data.data.images.jpg.image_url;

        document.getElementById("first-text").textContent = data.data.synopsis;

        document.getElementById("text-btn").addEventListener("click", () => {
            if(document.getElementById("first-text").style = "overflow: hidden"){
                document.getElementById("first-text").style = "overflow: auto";
            }
            else{
                document.getElementById("first-text").style = "overflow: hidden"
            }
        })

        document.getElementById("first-studio").textContent = data.data.studios[0].name;
        document.getElementById("first-studio").setAttribute("href", `${data.data.studios[0].url}`);

        document.getElementById("first-source").textContent = data.data.source;

        document.getElementById("first-theme").textContent = data.data.themes[0].name;
        document.getElementById("first-theme").setAttribute("href", `${data.data.themes[0].url}`);

        document.getElementById("first-demo").textContent = data.data.demographics[0].name;
        document.getElementById("first-demo").setAttribute("href", `${data.data.demographics[0].url}`);
    })



const spiritedAwayUrl = "https://api.jikan.moe/v4/anime/199";
fetch(spiritedAwayUrl)
    .then(result => result.json())
    .then(data => {
        document.getElementById("second-title").textContent = data.data.titles[0].title;

        document.querySelector("#second-top-bar #type").textContent = `${data.data.type}, ${data.data.aired.prop.from.year}`;

        document.querySelector("#second-top-bar #finish").textContent = data.data.status.substring(0, 8);

        document.querySelector("#second-top-bar #eps").textContent =  `${data.data.episodes} eps, ${data.data.duration.substring(0, 6)}`;

        data.data.genres.map((element, index) => {
            document.querySelectorAll("#second-genres a")[index].textContent = data.data.genres[index].name;
        })

        document.getElementById("second-manga-image").src = data.data.images.jpg.image_url;

        document.getElementById("second-text").textContent = data.data.synopsis;

        document.getElementById("second-studio").textContent = data.data.studios[0].name.substring(7, 13);
        document.getElementById("second-studio").setAttribute("href", `${data.data.studios[0].url}`);

        document.getElementById("second-source").textContent = data.data.source;

        document.getElementById("second-theme").textContent = data.data.themes[0].name;
        document.getElementById("second-theme").setAttribute("href", `${data.data.themes[0].url}`);
    })



const mononokeHimeUrl = "https://api.jikan.moe/v4/anime/164";
fetch(mononokeHimeUrl)
    .then(result => result.json())
    .then(data => {
        document.getElementById("third-title").textContent = data.data.titles[0].title;

        document.querySelector("#third-top-bar #type").textContent = `${data.data.type}, ${data.data.aired.prop.from.year}`;

        document.querySelector("#third-top-bar #finish").textContent = data.data.status.substring(0, 8);

        document.querySelector("#third-top-bar #eps").textContent = `${data.data.episodes} eps, ${data.data.duration}`;

        data.data.genres.map((element, index) => {
            document.querySelectorAll("#third-genres a")[index].textContent = data.data.genres[index].name;
        })

        document.getElementById("third-manga-image").src = data.data.images.jpg.image_url;

        document.getElementById("third-text").textContent = data.data.synopsis;

        document.getElementById("third-studio").textContent = data.data.studios[0].name.substring(7, 13);
        document.getElementById("third-studio").setAttribute("href", `${data.data.studios[0].url}`);

        document.getElementById("third-source").textContent = data.data.source;
    })