// console.log('-------------day-27 Anime ---------------');


// const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114';

// fetch(fullMetalAlchemistURL)
//     .then(result => result.json())
//     .then(data => {
//         console.log(data);
//         console.log(data.data.mal_id);
//         console.log(data.data.images.jpg.image_url);

//         const mangaDomImage = document.getElementById('manga-image');
//         mangaDomImage.src = data.data.images.jpg.image_url;
//         document.getElementById('card').getElementsByTagName('h6')[0].textContent = data.data.titles[0].title
//         const tv = document.getElementById('card').getElementsByTagName('p')[0].textContent = data.data.type + ', ' + data.data.year + ' | ' + data.data.status.substring(0, 8) + ' | ' + data.data.episodes + ' eps, ' + data.data.duration.substring(0, 6);


//         let switcherButton = document.getElementById('switcher');
//         switcherButton.addEventListener('click', switchFunc)

//         let shortText = true;
//         function switchFunc() {

//             document.getElementById('synopsis').innerHTML = data.data.synopsis.substring(0, 300)
//             console.log('--------------------test');


//             if (shortText) {
//                 document.getElementById('synopsis').innerHTML = data.data.synopsis;
//                 document.getElementById('switcher').innerHTML = '<i class="bi bi-caret-up"></i>';
//                 console.log('test');
//                 shortText = false
//             }
//             else {
//                 document.getElementById('synopsis').innerHTML = data.data.synopsis.substring(0, 300);
//                 document.getElementById('switcher').innerHTML = '<i class="bi bi-caret-down"></i>';
//                 shortText = true
//                 console.log('tes2');
//             }
//         }

//         let synopsis = document.getElementById('synopsis').innerHTML = data.data.synopsis.substring(0, 300);

//         const studio = document.getElementById('studio').innerHTML = '<b>Studio: </b>' + `<a href="${data.data.studios[0].url}"> ${data.data.studios[0].name}</a>`;
//         const source = document.getElementById('source').innerHTML = '<b>Source: </b>' + data.data.source;
//         const theme = document.getElementById('theme').innerHTML = '<b>Theme: </b>' + `<a href="${data.data.themes[0].url}"> ${data.data.themes[0].name}</a>`;
//         const demo = document.getElementById('demo').innerHTML = '<b>Demographic: </b>' + `<a href="${data.data.demographics[0].url}"> ${data.data.demographics[0].name}</a>`;



//         const score = document.getElementById('score').innerHTML = '<i class="bi bi-star"></i> ' + data.data.score;
//         const members = document.getElementById('members').innerHTML = '<i class="bi bi-person-fill"></i> ' + (data.data.members / 1.0e+6).toFixed(1) + ' M';


//         const type = document.querySelector('#card p')
//         console.log(type);
//         const genresList = document.querySelector('#card ul li');
//         // genresList.innerHTML = 'test'
//         console.log(genresList);


//         // console.log('---------- map test ---------');
//         // let genres = "";
//         // data.data.genres.map((element) => {
//         //     console.log(element.name);
//         //     genres += element.name + " ";
//         // })
//         // document.querySelector('#genres').innerHTML = genres;
//         // console.log(genres);


//         console.log('---------- genres map ---------');
//         data.data.genres.map((element) => {
//             console.log(element.name);

//             let content = document.querySelector('#genres');
//             let genre = document.createElement('a');
//             genre.href = '#'
//             genre.innerHTML = element.name;
//             content.appendChild(genre)
//         })


//         // console.log('-------------- genres for -------------');
//         // console.log(data.data.genres);
//         // console.log(document.getElementById('genres'));
//         // console.log(document.querySelectorAll('genres'));

//         // for (let i = 0; i < data.data.genres.length; i++) {
//         //     document.querySelectorAll('#genres div')[i].textContent = data.data.genres[i].name;
//         // }
//     })



//-----------------------------------------Animes--------------------------

const card = document.querySelectorAll('#card');

function getCard(data) {
    return `
    <div id="card" class="container">
            <div class="card-header">
                <h6>${data.title}</h6>
            </div>
            <div class="status-anime"
                style="display: flex; justify-content: space-between; background-color: rgb(245, 245, 245); align-items: center;">
                <i class="bi bi-play-btn-fill"></i>
                <p>${data.type}, ${data.year} | ${data.status.substring(0, 8)} | ${data.episodes}, ${data.duration.substring(0, 6)}</p>
                <i class="bi bi-broadcast-pin"></i>
            </div>
            <div class="genres" id="genres">
            </div>
            <div class="row">
                <div>
                    <img src=${data.images.jpg.image_url} alt="" id="manga-image">
                </div>
                <div class="text-con">
                    <div id="synopsis">${data.synopsis.slice(0, 250)}</div>
                    <button id="switcher"><i class="bi bi-caret-down"></i></button>
                    <div>
                        <div id="studio"><b>Studio: </b><a href="${data.studios[0].url}"> ${data.studios[0].name}</a></div>
                        <div id="source"><b>Source: </b>${data.source}</div>
                        <div id="theme"><b>Theme: </b>TEST</div>
                        <div id="demo"><b>Demographic: </b><a href="">TEST</a></div>
                    </div>
                </div>
            </div>
            <div class="row footer">
                <div id="score"><i class="bi bi-star"></i> ${data.score}</div>
                <div id="members"><i class="bi bi-person-fill"></i> ${(data.members / 1.0e+6).toFixed(1)} M</div>
                <button>Add to List</button>
            </div>
        </div>
    `
}


fetch('https://api.jikan.moe/v4/top/anime')
    .then((result) => result.json())
    .then((topAnimes) => {
        // console.log(topAnimes);
        const top25 = topAnimes.data;
        // console.log(top25);

        const conAllDom = document.getElementById('conAll');
        // console.log(conAllDom);

        conAllDom.innerHTML = '';
        top25.map((element) => {
            conAllDom.innerHTML += getCard(element)
        })
    })