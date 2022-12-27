console.log("anime  ");

// const fullMetalAlchemistURL = "https://api.jikan.moe/v4/anime/5114";

// fetch(fullMetalAlchemistURL)
//         .then(result => result.json())
//         .then(data => {
//             console.log(data);
//             const mangaDomImage = document.getElementById("manga-image");

//             mangaDomImage.src = data.data.images.jpg.image_url;

//             document.getElementById("manga-container").getElementsByTagName("h6")[0].textContent = data.data.titles[0].title

//             document.getElementById("inf-p1").textContent = `${data.data.type},${data.data.year} | ${data.data.status.substring(0, 8)} |  ${data.data.episodes}eps, ${data.data.duration.substring(0, 7)}`

//             document.getElementById("action").textContent = data.data.genres[0].name
//             document.getElementById("adventure").textContent = data.data.genres[1].name
//             document.getElementById("drama").textContent = data.data.genres[2].name
//             document.getElementById("fantasy").textContent = data.data.genres[3].name


//             document.getElementById("img-text").textContent = data.data.synopsis.slice(0, 200)
//             let color = 1;
//             document.getElementById("down").addEventListener("click", () => {
//                 if(color == 1){
//                 document.getElementById("img-text").textContent = data.data.synopsis;
//                 color = 2;
//                 } else {
//                     document.getElementById("img-text").textContent = data.data.synopsis.slice(0, 200);
//                     color = 1;
//                 }
//             })


//             document.getElementById("img-type1").textContent = `Studio: `
//             document.getElementById("img-type2").textContent = `Source: ${data.data.source}`
//             document.getElementById("img-type3").textContent = `Theme: `
//             document.getElementById("img-type4").textContent = `Demographic: `

//             const a1 = document.createElement("a");
//             a1.innerHTML = data.data.studios[0].name
//             a1.href = data.data.studios[0].url
//             document.getElementById("img-type1").appendChild(a1);

//             const a2 = document.createElement("a");
//             a2.innerHTML = data.data.themes[0].name
//             a2.href = data.data.themes[0].url
//             document.getElementById("img-type3").appendChild(a2);

//             const a3 = document.createElement("a");
//             a3.innerHTML = data.data.demographics[0].name
//             a3.href = data.data.demographics[0].url
//             document.getElementById("img-type4").appendChild(a3);

//             document.getElementById("score-number").textContent = data.data.score
//             document.getElementById("popularity").textContent = `${data.data.popularity}.0M `;
//             document.getElementById("add").textContent = `Add to List`

//             const iconStar = document.createElement("p1");
//             iconStar.innerHTML = ' <i class="fa-regular fa-star" style= "font-size: 16px"></i> '
//             document.getElementById("score").appendChild(iconStar)
//         })

const animeFetchfetch = fetch("https://api.jikan.moe/v4/top/anime")
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        const container = document.getElementById("manga-container");

        data.data.map((element, index) => {
            container.innerHTML += getAnimes(element, index)

        })
    })

async function search(event) {
    const searchField = document.getElementById("input");
    const searchWord = searchField.value;
    const animes = await fetch('https://api.jikan.moe/v4/top/anime');
    const animesJSON = await animes.json();
    const animesData = animesJSON.data;


    const searchResult = animesData.filter(anime =>
        anime.title.includes(searchWord)
    )

    const div = document.getElementById("input-div")
    div.innerHTML = getSearch(searchResult)
}



function getSearch(searchResult) {


    console.log(searchResult)

    return `
    
    <div id="manga">
<h6>${searchResult[0].title}</h6>
<p1 id="inf-p1">${searchResult[0].type},${searchResult[0].year} | ${searchResult[0].status.substring(0, 8)} |  ${searchResult[0].episodes}eps, ${searchResult[0].duration.substring(0, 7)}</p1>
<div id="genre">
    <i class="fa-regular fa-circle-play"></i>
    
    <i class="fa-solid fa-signal" style="font-size: 16px"></i>
</div>
<div id="img-div">
    <img id="manga-image" src=${searchResult[0].images.jpg.image_url}>
    <div id="div-text">
        <p1 id="synopsis_" >${searchResult[0].synopsis.slice(0, 300)}</p1>
        <button id="" class="down" onclick="showMore(this)"><i class="fa-solid fa-caret-down"></i></button>
        <p id="img-type1">Studio: <a href="${searchResult[0].studios[0].url}"></a></p>
        <p id="img-type2">Source: ${searchResult[0].source}</p>
        <p id="img-type3">Theme: <a href="${searchResult[0].studios[0].url}"></a></p>
        <p id="img-type4">Demographic:<a href="${searchResult[0].studios[0].url}"></a></p>
    </div>
</div>

<div id="rank">
    <div id="score">
        <i class="fa-regular fa-star"></i>
        <span id="score-number">${searchResult[0].score} </span>
    </div>
    <div id="popularity-container">
        <i class="fa-solid fa-eye"></i>
        <strong id="popularity">${searchResult[0].popularity}.0M </strong>
    </div>
    <button id="add">Add to List</button>
</div>
</div>

`
}



function getAnimes(data, index) {

    const genres = data.genres.map(parametr => {
        const result = `<button>${parametr.name}</button>`
        return result;
    })
    const studios = data.studios.map(parametr => {

        const result = `<p1>${parametr.name}</p1>`
        return result
    })
    const themes = data.themes.map(parametr => {

        const result = `<p1>${parametr.name}</p1>`
        return result
    })
    const demographics = data.demographics.map(parametr => {

        const result = `<p1>${parametr.name}</p1>`
        return result
    })



    return `
    
            <div id="manga">
        <h6>${data.title}</h6>
        <p1 id="inf-p1">${data.type},${data.year} | ${data.status.substring(0, 8)} |  ${data.episodes}eps, ${data.duration.substring(0, 7)}</p1>
        <div id="genre">
            <i class="fa-regular fa-circle-play"></i>
            ${genres.join("")}
            <i class="fa-solid fa-signal" style="font-size: 16px"></i>
        </div>
        <div id="img-div">
            <img id="manga-image" src=${data.images.jpg.image_url}>
            <div id="div-text">
                <p1 id="synopsis_${index}" >${data.synopsis.slice(0, 300)}</p1>
                <button id="${index}" class="down" onclick="showMore(this)"><i class="fa-solid fa-caret-down"></i></button>
                <p id="img-type1">Studio: <a href="${data.studios[0].url}">${studios}</a></p>
                <p id="img-type2">Source: ${data.source}</p>
                <p id="img-type3">Theme: <a href="${data.studios[0].url}">${themes}</a></p>
                <p id="img-type4">Demographic:<a href="${data.studios[0].url}">${demographics}</a></p>
            </div>
        </div>

        <div id="rank">
            <div id="score">
                <i class="fa-regular fa-star"></i>
                <span id="score-number">${data.score} </span>
            </div>
            <div id="popularity-container">
                <i class="fa-solid fa-eye"></i>
                <strong id="popularity">${data.popularity}.0M </strong>
            </div>
            <button id="add">Add to List</button>
        </div>
    </div>

    `
}


// let color = true
// function showMore(data) {
//     console.log(data);
//     if (color) {
//         data.innerHTML = `<i class="fa-solid fa-caret-up"></i>`
//         color = false

//     } else {
//         data.innerHTML = `<i class="fa-solid fa-caret-down"></i>`
//         color = true;
//     }
// }
let color = true
async function showMore(event) {
    console.log(event.id)
    const elementSynop = document.getElementById(`synopsis_${event.id}`);
    console.log(elementSynop);

    const resultJSON = await fetch('https://api.jikan.moe/v4/top/anime');
    const result = await resultJSON.json();

    console.log(result);

    const filteredData = result.data.filter((el, index) => {
        if (index == event.id) {
            return el;
        }

    })
    console.log(filteredData)

    if (color) {
        elementSynop.innerHTML = filteredData[0].synopsis
        color = false


    } else {
        elementSynop.innerHTML = filteredData[0].synopsis.slice(0, 300)
        color = true;
    }

}

