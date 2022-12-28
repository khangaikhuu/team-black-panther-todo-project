
const NarutoShippuuden = "https://api.jikan.moe/v4/anime/1735";

fetch(NarutoShippuuden)
.then(result => result.json())
.then(data => {
    console.log(data.data.synopsis)
    const DomImage = document.getElementById("DomImage");
    DomImage.src = data.data.images.jpg.large_image_url;
    document.getElementsByTagName("h2")[0].textContent = data.data.titles[0].title;
    document.getElementsByTagName("p")[0].textContent = data.data.titles[3].title;
    document.getElementsByTagName("p")[1].textContent = `${data.data.type}, `;
    document.getElementsByTagName("p")[2].textContent = `${data.data.aired.prop.from.year} | `;
    document.getElementsByTagName("p")[4].textContent = `| ${data.data.episodes} eps,`;
    document.getElementsByTagName("p")[5].textContent = data.data.aired.prop.to.day;
    document.getElementsByTagName("p")[3].textContent = data.data.status;
    const narutoBody = document.querySelector("#naruto-body");
    narutoBody.querySelector("#naruto-body p").textContent = data.data.synopsis;
    // const action = document.querySelector("#action");
    // action.querySelector("#action a").textContent = data.data.genres[0].name
    // action.querySelector("#action a").textContent = data.data.genres[1].name
    // action.querySelector("#action a").textContent = data.data.genres[2].name
    document.getElementById("action").getElementsByTagName("a")[0].textContent = data.data.genres[0].name;
    document.getElementById("action").getElementsByTagName("a")[1].textContent = data.data.genres[1].name;
    document.getElementById("action").getElementsByTagName("a")[2].textContent = data.data.genres[2].name;
    document.getElementById("properties").getElementsByClassName("property")[0].textContent = data.data.source
    document.getElementById("properties").getElementsByClassName("property")[1].textContent = data.data.source
    document.getElementById("properties").getElementsByClassName("property")[2].textContent = `${data.data.themes[0].name}`





})
///asdasasdasdasd
//asdasdasdasd
//asdasdasdas








