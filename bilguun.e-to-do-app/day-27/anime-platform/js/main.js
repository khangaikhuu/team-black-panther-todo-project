

const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114'
fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {
        const mangaDom = document.getElementById("manga-image")
        mangaDom.src = data.data.images.jpg.image_url

        // Title
        document.getElementById("mainDiv").
            getElementsByTagName("h6")[0].textContent = data.data.titles[0].title


        // prodsrc
        document.getElementById("prodsrc")
            .getElementsByTagName("p")[0].textContent = `${data.data.type}, ${data.data.year} |  ${data.data.status} |  ${data.data.episodes} eps, ${data.data.duration} `
        // document.getElementById("prodsrc")
        // .getElementsByTagName("p")[1].textContent = `  ${data.data.status} |`
        // document.getElementById("prodsrc")
        // .getElementsByTagName("p")[2].textContent = `  ${data.data.episodes} , ${data.data.duration}`

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
        let synopsisMain = data.data.synopsis.substring(0,290)
        document.getElementById("bodyDivP")
        .getElementsByTagName("p")[0].textContent = synopsisMain
        console.log(data.data.synopsis)

        //body tag
        document.getElementById("bodyDivProducer")
            .getElementsByTagName("p")[0].textContent = `Studio:  ${data.data.studios[0].name}`
        document.getElementById("bodyDivProducer")
            .getElementsByTagName("p")[1].textContent = `Source: ${data.data.source}`
        document.getElementById("bodyDivProducer")
            .getElementsByTagName("p")[2].textContent = `Theme: ${data.data.themes[0].name}`
        document.getElementById("bodyDivProducer")
            .getElementsByTagName("p")[3].textContent = `Demographic: ${data.data.demographics[0].name}`

        // footer
        document.getElementById("footer")
            .getElementsByTagName("p")[0].textContent = data.data.score

        let membersNum = data.data.members
        let members2Num = String(membersNum).substring(0, 1)
        let membersNum2nd = data.data.members
        let members2Num2nd = String(membersNum).substring(1, 2)
        console.log(members2Num)

        document.getElementById("footer")
            .getElementsByTagName("p")[1].textContent = `${members2Num}.${members2Num2nd}M`


    })