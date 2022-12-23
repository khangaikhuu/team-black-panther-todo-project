console.log("anime platform");

const fullMetalAlchemistURL = "https://api.jikan.moe/v4/anime/5114";

fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {


        const manga_container = document.querySelector("#manga-container")

        manga_container.getElementsByTagName('h6')[0].innerHTML = `<a href="https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood"> ${data.data.titles[0].title}</a>`


        const top = document.querySelector("#top")
        const top_list = document.createElement("a")

        top.appendChild(top_list)

        top.innerHTML = `${data.data.type}, ${data.data.aired.prop.from.year} | ${data.data.status} | ${data.data.episodes} eps, ${data.data.duration}  `

        

        // genre duudah 


        const genres_container = document.querySelector("#genres-container")
        const genres = data.data.genres;

        genres.map(element => {
            console.log(element);
            const a = document.createElement('a');
            a.href = element.url;
            a.textContent = element.name;
            genres_container.appendChild(a)

        })


        // zurag bolon detail

        console.log(data.data.images.jpg.image_url);
        const mangaDomImage = document.getElementById("manga-image");
        mangaDomImage.src = data.data.images.jpg.image_url;

        const details = document.querySelector("#movie-details")
        details.querySelector('#detail').textContent = data.data.synopsis

        const det = document.querySelector("#detail")
        const studio = document.createElement("p")

        details.appendChild(det);
        det.appendChild(studio)

        studio.innerHTML = `<p>Studio: <a href> ${data.data.studios[0].name} </a> </p>
                            <p>Source: ${data.data.source}<p>
                            <p>Theme: <a href> ${data.data.themes[0].name}</a></p>
                            <p>Demographic: <a href> ${data.data.demographics[0].name}</a></p>`


        // footer heseg

        const footer = document.querySelector('#footer');

        const score = document.createElement('a')
        const members = document.createElement('a')

        footer.appendChild(score);
        footer.appendChild(members);

        const mem_number = data.data.members

    

        score.innerHTML = `<i class="fa-regular fa-star"></i> ${data.data.score}`
        members.innerHTML = `<i class="fa-solid fa-user"></i> ${data.data.members}`


    })