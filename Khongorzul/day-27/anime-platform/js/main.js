const fullMetalAlchimistURL = "https://api.jikan.moe/v4/anime/5114";
fetch(fullMetalAlchimistURL)
    .then(result => result.json())
    .then(data => {
        const title = document.getElementById("title");
        title.textContent = data.data.titles[0].title;

        document.querySelector("#top-bar #type").textContent = data.data.type;
        //document.getElementById("year").textContent = ;

        const mangaDomImage = document.getElementById("manga-image");
        mangaDomImage.src = data.data.images.jpg.image_url;

        const text = document.getElementById("text");
        text.textContent = data.data.synopsis;
    })