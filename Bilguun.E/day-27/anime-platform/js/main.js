

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
        const status = data.data.status.substring(0,8)
        const min = data.data.duration.substring(0,3)
        console.log(min)
        document.getElementById("prodsrc")
            .getElementsByTagName("p")[0].textContent = `${data.data.type}, ${data.data.year} |  ${status} |  ${data.data.episodes} eps, ${min}min `
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
        let synopsisMain = data.data.synopsis.substring(0, 290)
        document.getElementById("bodyDivP")
            .getElementsByTagName("p")[0].textContent = synopsisMain

        const secondBodyP = document.querySelector("#secondBodyP")
        const more = data.data.synopsis
        console.log(more)
        const textLength = more.length
        const parts = more.substring(290, textLength);
        const readMoreBtn = document.querySelector("#readMoreBtn")
        secondBodyP.textContent = parts
        secondBodyP.style.display = "none"

        readMoreBtn.addEventListener("click", () => {
            if (secondBodyP.style.display == "none") {
                secondBodyP.style.display = "block"
            } else {
                secondBodyP.style.display = "none"
            }
        })


        //body tag
        document.getElementById("bodyDivProducer")
            .getElementsByTagName("p")[0].textContent = `Studio:  ${data.data.studios[0].name}`
        document.querySelector("#bodyDivProducer").getElementsByTagName
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

        document.getElementById("footer")
            .getElementsByTagName("p")[1].textContent = `${members2Num}.${members2Num2nd}M`


    })