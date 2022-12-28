

const Naruto = "https://api.jikan.moe/v4/anime/20";

let studio1 = document.getElementById

fetch(Naruto) 
.then(result => result.json()) 
.then(data => {
    console.log(data.data.titles[0].title)
    console.log('data', data)
    document.getElementsByTagName("h2")[0].textContent = data.data.titles[0].title;
    document.getElementsByTagName("p")[0].textContent = `${data.data.type},`;
    document.getElementsByTagName("p")[1].textContent = `${data.data.aired.prop.from.year} `;
    document.getElementsByTagName("p")[2].textContent = `|   ${data.data.status} |`;
    document.getElementsByTagName("p")[3].textContent = `  ${data.data.episodes} eps, 23 min `;
    document.getElementsByTagName("a")[0].textContent = `${data.data.genres[0].name}`;
    document.getElementsByTagName("a")[1].textContent = `${data.data.genres[1].name}`;
    document.getElementsByTagName("a")[2].textContent = `${data.data.genres[2].name}`;
    document.getElementsByTagName("img")[0].src = data.data.images.jpg.image_url;
    document.getElementsByClassName("text")[0].textContent = `  ${data.data.synopsis} `;
    document.getElementsByClassName("studio")[0].textContent=  data.data.studios[0].name
    document.getElementsByClassName("source")[0].textContent=  data.data.source
    document.getElementsByClassName("Theme")[0].textContent=  data.data.themes[0].name
    document.getElementsByClassName("Demographic")[0].textContent=  data.data.demographics[0].name
    document.getElementsByClassName("score")[0].textContent=  data.data.score
    document.getElementsByClassName("scored_by")[0].textContent=  data.data.scored_by
    // console.log('studio', document.getElementById("studio"))
    // console.log(`${data.data.studios[0].name}`)
})

const btn = document.getElementsByClassName("btn")[0]
btn.addEventListener("click",()=>{
    // console.log(document.getElementsByClassName("text")[0])
    document.getElementsByClassName("text")[0].style = "height : 500px"
})



