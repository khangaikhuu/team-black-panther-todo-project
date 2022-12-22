const fullMetalAlchemistURL = "https://api.jikan.moe/v4/anime/5114";

fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {

        console.log(data.data.images.jpg.image_url)
        const mangaDomImg = document.getElementById("manga-img");
        mangaDomImg.src = data.data.images.jpg.image_url;

        document.getElementById("mangaContainer").getElementsByTagName("h6")[0].textContent = data.data.titles[0].title

        const mRowP1 = document.getElementById("mangaRowP1");
        mRowP1.textContent = data.data.type

        const mRowP2 = document.getElementById("mangaRowP2");
        mRowP2.textContent = data.data.year

        const mRowP3 = document.getElementById("mangaRowP3");
        mRowP3.textContent = data.data.status.slice(0, 8)

        const mRowP4 = document.getElementById("mangaRowP4");
        mRowP4.textContent = data.data.episodes

        const mRowP5 = document.getElementById("mangaRowP5");
        mRowP5.textContent = data.data.duration.slice(0, 6)
    })