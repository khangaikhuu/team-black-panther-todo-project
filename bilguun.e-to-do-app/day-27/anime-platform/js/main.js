const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114'
fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {
        console.log(data)
        console.log(data.data.mal_id)
        console.log(data.data.images.jpg.image_url)
        const mangaDom = document.getElementById("manga-image")
        mangaDom.src = data.data.images.jpg.image_url

        // Title
        document.getElementById("mainDiv").
            getElementsByTagName("h6")[0].textContent = data.data.titles[0].title


        // prodsrc
        document.getElementById("prodsrc")
            .getElementsByTagName("p")[0].textContent = `${data.data.type}, ${data.data.year} | `
        document.getElementById("prodsrc")
            .getElementsByTagName("p")[1].textContent = `  ${data.data.status} |`
        document.getElementById("prodsrc")
            .getElementsByTagName("p")[2].textContent = `  ${data.data.episodes} , ${data.data.duration}`

        // genre 
        document.getElementById("genre")
            .getElementsByTagName("button")[0].textContent = ` ${data.data.genres[0].name}`
        document.getElementById("genre")
            .getElementsByTagName("button")[1].textContent = `${data.data.genres[1].name}`
        document.getElementById("genre")
            .getElementsByTagName("button")[2].textContent = `${data.data.genres[2].name}`
        document.getElementById("genre")
            .getElementsByTagName("button")[3].textContent = ` ${data.data.genres[3].name}`

        //body
        document.getElementById("bodyDivP")
        .getElementsByTagName("p")[0].textContent = `${data.data.synopsis}`
    })