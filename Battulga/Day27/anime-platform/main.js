

const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114'

fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {
        console.log(data.data.images.jpg.image_url)

        const mangaDomImage = document.getElementById('manga-image')

        mangaDomImage.src = data.data.images.jpg.image_url

        document.getElementById('manga-container').getElementsByTagName('h3')[0].textContent = data.data.titles[0].title

        document.getElementById('info').textContent = `${data.data.type}, ${data.data.year} | ${data.data.status} | ${data.data.episodes} eps, ${data.data.duration}`


        document.getElementById('action').textContent = data.data.genres[0].name
        document.getElementById('adventure').textContent = data.data.genres[1].name
        document.getElementById('drama').textContent = data.data.genres[2].name
        document.getElementById('fantasy').textContent = data.data.genres[3].name
        document.getElementById('breif').textContent = data.data.synopsis





        console.log(data.data.type)
    })

