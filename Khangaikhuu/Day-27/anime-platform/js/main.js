console.log('Anime Platform')


const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114';

fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {
        console.log(data.data.images.jpg.image_url)
        const mangaDomImage = document.getElementById('manga-image');
        mangaDomImage.src = data.data.images.jpg.image_url;
        //  document.getElementById('manga-container').getElementsByTagName('h6')[0].textContent = data.data.titles[0].title

         const container = document.getElementById('manga-container');
         console.log(container);
        //  container.getElementById('type').textContent = data.data.type
        //  const containerQuery = document.querySelector('#manga-container');
        //  console.log(containerQuery)
        //  containerQuery.querySelector('#type').textContent = data.data.type;

        const type = document.querySelector('#manga-container p a')
        console.log(type)


    })

