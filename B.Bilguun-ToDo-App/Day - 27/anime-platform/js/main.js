console.log("Anime Platform");

const fullMetalAlchemistUrl = "https://api.jikan.moe/v4/anime/5114";

fetch(fullMetalAlchemistUrl)
    .then(result => result.json())
    .then(data => {
        console.log(data.data.images.jpg.image_url)
        const mangaDomImage = document.getElementById('manga-image');
        mangaDomImage.src = data.data.images.jpg.image_url;
        const container = document.getElementById("manga-container");
        const cont = document.getElementById("titles");
        container.getElementsByTagName("h5")[0].textContent = data.data.titles[0].title;

        cont.getElementsByTagName("h6")[0].textContent = `${data.data.type} , ${data.data.year} | ${data.data.status.slice(0,8)} | ${data.data.episodes} eps, ${data.data.duration.slice(0,6)} `

        const actions = document.getElementById("actions");

        for(let i = 0 ; i < data.data.genres.length; i++){
            let a = document.createElement("a");
            a.innerHTML = data.data.genres[i].name;
            a.href = data.data.genres[i].url
            actions.append(a)
        }
            
    })