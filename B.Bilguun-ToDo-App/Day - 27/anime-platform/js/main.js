console.log("Anime Platform");

const fullMetalAlchemistUrl = "https://api.jikan.moe/v4/anime/5114";

fetch(fullMetalAlchemistUrl)
    .then(result => result.json())
    .then(data => {
        console.log(data.data.images.jpg.image_url)
        const mangaDomImage = document.getElementById('manga-image');
        mangaDomImage.src = data.data.images.webp.image_url;
        const container = document.getElementById("manga-container");
        const cont = document.getElementById("titles");
        container.getElementsByTagName("h5")[0].textContent = data.data.titles[0].title;

        cont.getElementsByTagName("h6")[0].textContent = `${data.data.type} , ${data.data.year} | ${data.data.status.slice(0,8)} | ${data.data.episodes} eps, ${data.data.duration.slice(0,6)}`

        const actions = document.getElementById("actions");

        // for (let i = 0; i < data.data.genres.length; i++) {
        //     let a = document.createElement("a");
        //     a.innerHTML = data.data.genres[i].name;
        //     a.href = data.data.genres[i].url
        //     actions.append(a)
        // }

        data.data.genres.map(element => {
            let a = document.createElement("a");
            a.innerHTML = element.name;
            a.href = element.url
            actions.append(a)
        })
     
        const text = document.querySelector('#text p');
        const secondText = document.querySelector('#second-p');
        text.textContent = data.data.synopsis.slice(0, 375);
        const more = data.data.synopsis;
        console.log('more', more);
        const textLength = more.length;
        console.log('lenght', textLength)
        const parts = more.slice(375, textLength);
        secondText.textContent = parts;
        secondText.style.display = 'none';
    
        const moreButton = document.querySelector('#moreBtn');
    
        console.log(moreButton);
        moreButton.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
        moreButton.addEventListener('click', () => {
          if (secondText.style.display == 'none') {
            secondText.style.display = 'block';
            moreButton.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
          } else {
            secondText.style.display = 'none';
            moreButton.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
          }
        })

        const studios = document.getElementById("studios")
        studios.innerText = data.data.studios[0].name;
        studios.href = data.data.studios[0].url;

        const source = document.getElementById("source")
        source.innerHTML = `<strong>Source :</strong> ${data.data.source}`;
        const theme = document.getElementById("theme")
        theme.innerText = data.data.themes[0].name;
        theme.href = data.data.themes[0].url;


        const demograph = document.getElementById("demograph")
        demograph.innerText = data.data.demographics[0].name;
        demograph.href = data.data.demographics[0].url;

        const score = document.getElementById("score")
        score.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
         </svg> ${data.data.score}`;

        const view = document.getElementById("view")
        view.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
         <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg> ${data.data.popularity}.0 M`;


        const addToList = document.getElementById("addToList")
        addToList.innerHTML = `<a href="https://myanimelist.net/login.php?error=login_required&from=%2Fanime%2Fgenre%2F2%2FAdventure">Add to list</a>`;
        addToList.className = 'btn btn-primary'

    })