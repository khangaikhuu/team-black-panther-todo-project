console.log("anime  ");

const fullMetalAlchemistURL = "https://api.jikan.moe/v4/anime/5114";

fetch(fullMetalAlchemistURL)
        .then(result => result.json())
        .then(data => {
            console.log(data);
            const mangaDomImage = document.getElementById("manga-image");
            console.log(mangaDomImage)
            mangaDomImage.src = data.data.images.jpg.image_url;

            document.getElementById("manga-container").getElementsByTagName("h6")[0].textContent = data.data.titles[0].title

            document.getElementById("inf-p1").textContent = `${data.data.type},${data.data.year} | ${data.data.status.substring(0, 8)} |  ${data.data.episodes}eps, ${data.data.duration.substring(0, 7)}`

            document.getElementById("action").textContent = data.data.genres[0].name
            document.getElementById("adventure").textContent = data.data.genres[1].name
            document.getElementById("drama").textContent = data.data.genres[2].name
            document.getElementById("fantasy").textContent = data.data.genres[3].name

            document.getElementById("img-text").textContent = data.data.synopsis
        })