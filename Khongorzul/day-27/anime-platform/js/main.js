const fullMetalAlchimistURL = "https://api.jikan.moe/v4/anime/5114";
fetch(fullMetalAlchimistURL)
    .then(result => result.json())
    .then(data => {
        document.getElementById("title").textContent = data.data.titles[0].title;

        document.querySelector("#top-bar #type").textContent = `${data.data.type}, ${data.data.year}`;

        document.getElementById("finish").textContent = data.data.status.substring(0, 8);

        document.getElementById("eps").textContent = `${data.data.episodes}, ${data.data.duration.substring(0, 6)}`

        for(let i = 0; i < data.data.genres.length; i++){
            document.querySelectorAll("#genres div")[i].textContent = data.data.genres[i].name;
        } 

        document.getElementById("studio").textContent = data.data.studios[0].name;
        document.getElementById("studio").setAttribute("href", `${data.data.studios[0].url}`);

        document.getElementById("source").textContent = data.data.source;

        document.getElementById("theme").textContent = data.data.themes[0].name;
        document.getElementById("theme").setAttribute("href", `${data.data.themes[0].url}`);

        document.getElementById("demo").textContent = data.data.demographics[0].name;
        document.getElementById("demo").setAttribute("href", `${data.data.demographics[0].url}`);

        

        document.getElementById("manga-image").src = data.data.images.jpg.image_url;

        document.getElementById("text").textContent = data.data.synopsis;
    })