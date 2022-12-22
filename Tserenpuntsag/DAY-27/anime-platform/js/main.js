const fmaURL = "https://api.jikan.moe/v4/anime/5114";

fetch(fmaURL)
    .then(result => result.json())
    .then(data => {
        console.log(data.data.images.jpg.image_url);
        const mangaDomImage = document.getElementById("manga-image");
        mangaDomImage.src = data.data.images.jpg.image_url;

        let mangaTitle = document.getElementById("title");
        mangaTitle.innerHTML = data.data.titles[0].title;

        let headerOne = document.getElementById("headerOne");

        headerOne.innerHTML = `${data.data.type}, ${data.data.aired.prop.from.year}  |  ${data.data.status.substring(0,8)}  |  ${data.data.episodes} eps, ${data.data.duration.substring(0, 6)}`

        let butOne = document.getElementById("but1");
        let butTwo = document.getElementById("but2");
        let butThree = document.getElementById("but3");
        let butFour = document.getElementById("but4");

        butOne.innerHTML = data.data.type;
    })