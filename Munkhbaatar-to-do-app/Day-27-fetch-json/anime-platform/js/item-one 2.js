console.log('Anime');

const fullMetalAlchemistUrl = 'https://api.jikan.moe/v4/anime/5114'
fetch(fullMetalAlchemistUrl)
    .then(result => result.json())
    .then(res => {
        console.log(res)
        console.log(res.data.mal_id);

        console.log(res.data.images.jpg.image_url);
        const managaDomImage = document.getElementById('manga-image')

        managaDomImage.src = res.data.images.jpg.image_url;
        
        document.getElementById('manga-container').
        getElementsByTagName('h4')[0].textContent = res.data.titles[0].title;
        // getElementsByTagName('h4')[0].textContent = res.data.title;

        let type = res.data.type;
        let year = res.data.year;
        let status = (res.data.status).substring(0, 8);
        let episodes = res.data.episodes;
        let duration = res.data.duration.substring(0, 6);
        let genresTemp = res.data.genres;
       


        document.querySelector('#manga-container #type').innerHTML = type + ',  ' + year +  "  |  " + status + 
        "  |  " + episodes + 'eps, ' + duration;
        

        genresTemp.map((element) => {

            let content = document.querySelector('#genres');
            let genre = document.createElement('a');
            genre.href = '#'
            genre.innerHTML = element.name;
            content.appendChild(genre);

        })

        let extendBtn = document.querySelector('.extend');
        let fullTxt = document.querySelector('#synopsisFull');
        let halfTxt = document.querySelector('#synopsisHalf');

        fullTxt.style.display = 'none';
        halfTxt.style.display = 'block'

        extendBtn.addEventListener('click', () => {
            if(fullTxt.style.display == 'none' ){
                console.log('test1')
                fullTxt.style.display = 'block'
                halfTxt.style.display = 'none';
                extendBtn.innerHTML = `<i class="bi bi-caret-up-fill"></i>`

            } else {
                fullTxt.style.display = 'none';
                halfTxt.style.display = 'block';
                console.log('test2')
                extendBtn.innerHTML = `<i class="bi bi-caret-down-fill"></i>`
            }
        })

        document.querySelector('#synopsisHalf').innerHTML = (res.data.synopsis).substring(0, 398);
        document.querySelector('#synopsisFull').innerHTML = res.data.synopsis;

        document.querySelector('#studio').innerHTML = '<b>Studio: </b>' + `<a href='${res.data.studios[0].url}' > ${res.data.studios[0].name}</a>`;
        document.querySelector('#source').innerHTML = '<b>Source: </b>' + res.data.source;
        document.querySelector('#theme').innerHTML = '<b>Theme</b>: ' + `<a href='${res.data.themes[0].url}'> ${res.data.themes[0].name}</a>`;
        document.querySelector('#demographic').innerHTML = '<b>Demographic: </b>' + res.data.demographics[0].name;

        
        document.querySelector('#score').innerHTML = '<i class="bi bi-star"></i> ' + res.data.score;
        document.querySelector('#member').innerHTML = '<i class="bi bi-person-fill"></i>' + (res.data.members/1.0e+6).toFixed(1) + " M";
        

    })



    // let topAnimeURL = 'https://api.jikan.moe/v4/top/anime'
    // fetch (topAnimeURL)
    //     .then(result => result.json()) 
    //     .then(topAnime => {
    //         // console.log(res); // the list is inside 1 object.
    //         let anime = topAnime.data; // making the list as one object. 
    //         console.log(anime);

    //         let container = document.querySelector("#manga-container");
    //         container.innerHTML = '';
    //         anime.map((element) => {
    //             // console.log(element)
    //             container += printAnime(element)
    //         }) 
    //     })


// fetch('https://api.jikan.moe/v4/top/anime')
//     .then((res) => res.json())
//     .then((topAnime) => {
//         console.log('topAnim', topAnime);
//         const anime = topAnime.data;
//         console.log('anime', anime);
//         const container = document.querySelector('#all-container');
      
//         container.innerHTML = '';
//         anime.map((element, index) => {
//         container.innerHTML += getAnimes(element, index)
//     })
// })


// function showMore(event) {
//     console.log('clicked buttonID = ' + event.id);

// }


// const card = document.querySelector('#card');
// function getAnimes(data, index) {


//     const genres = data.genres.map(genre => {
//         const result = `<a>${genre.name}</a>`;
//         return result;
//     })

//     const themes = data.themes.map(themes => {
//         const result = `<a href='${themes.url}'> ${themes.name}</a>`;
//         return result;
//     })

//     const demographics = data.demographics.map(themes => {
//         const result = `${data.demographics[0].name}`;
//         return result;
//     })

    
    


//     return `
// <div id="anime-container">
//     <h4>${data.title}</h4>
//     <div class="type-container">
//         <div class="play-icon">
//             <i class="bi bi-play-btn-fill"></i>
//         </div>
        
//         <div id='type-all'>
//             <span id="type">${data.type}</span>,
//             <span id="year">${data.year}</span> | 
//             <span id="status">${data.status}</span> | 
//             <span id="eps">${data.episodes}</span> 
//         </div>
//         <div class="play-icon">
//             <i class="bi bi-broadcast fa-10x"></i>
//         </div>
//     </div>
    
//     <div id="genres">${genres.join('')}</div>
//     <div class="text-img">
//         <img  src=${data.images.jpg.image_url} alt="" id="manga-image">
        
//         <div id="studio-info">
//             <p id ='synopsisHalf'></p>
//             <p>${data.synopsis.slice(0, 300)}</p>
//             <p id ='synopsisFull'></p>
//             <a href="#" class="extend" id="${index}" onclick="showMore(this)"><i class="bi bi-caret-down-fill"></i> </a>
//             <div id="studio"><strong>Studio:</strong> <a href='${data.studios[0].url}' > ${data.studios[0].name}</a></div>
//             <div id="source"><strong>Source:</strong> ${data.source}</div>
//             <div id="theme"><strong>Theme:</strong> ${themes}</div>
//             <div id="demographic"><strong>Demographic:</strong> ${demographics}</div>
//         </div>
//     </div>
//     <div id="score-member-button"> 
//         <div id="score"><i class="bi bi-star"></i> ${data.score}</div> 
//         <div id="member"><i class="bi bi-person-fill"></i> ${(data.members/1.0e+6).toFixed(1)}M</div> 
//         <a id="add-to-list">Add to List</a>
//     </div> 
    
// </div>`


// }
