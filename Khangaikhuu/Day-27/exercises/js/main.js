

const Naruto = "https://api.jikan.moe/v4/anime/20";

fetch (Naruto) 
.then(result => result.json()) 
.then(data => {
    console.log(data.data.titles[0].title)
    document.getElementsByTagName("h2")[0].textContent = data.data.titles[0].title;
    document.getElementsByTagName("p")[0].textContent = `${data.data.type},`;
    document.getElementsByTagName("p")[1].textContent = `${data.data.aired.prop.from.year} `;
    document.getElementsByTagName("p")[2].textContent = `|   ${data.data.status} |`;
    document.getElementsByTagName("p")[3].textContent = `  ${data.data.episodes} eps, 23 min `;
    document.getElementsByTagName("a")[0].textContent = `${data.data.genres[0].name}`;
    document.getElementsByTagName("a")[1].textContent = `${data.data.genres[1].name}`;
    document.getElementsByTagName("a")[2].textContent = `${data.data.genres[2].name}`;
    document.getElementsByTagName("img")[0].src = data.data.images.jpg.image_url;
    document.getElementById("text").textContent = `  ${data.data.synopsis} `;
    document.getElementsByClassName("ind")[0].textContent = `${data.data.studios[0].name}`
    // document.getElementsByTagName("p")[4].textContent = `  ${data.data.episodes} `;
    console.log(document.querySelectorAll(".in"));
})

