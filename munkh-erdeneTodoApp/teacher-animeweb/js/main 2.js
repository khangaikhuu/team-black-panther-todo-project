fetch('https://api.jikan.moe/v4/anime/5114')
  .then((res) => res.json())
  .then((anime) => {
    const randomAnime = anime.data;
    console.log('anime data', randomAnime);
    // anime title
    const title = document.querySelector('#title');
    title.textContent = randomAnime.title;

    // anime status
    const statusList = document.querySelectorAll('.anime-status');
    // const type = document.querySelector('#type');
    // type.textContent = randomAnime.type;

    // const year = document.querySelector('#year');
    // year.textContent = randomAnime.year;

    // const status = document.querySelector('#status');
    // status.textContent = randomAnime.status.slice(0, 8);

    statusList[0].innerHTML = `
    <i class="fa-solid fa-circle-play" style="font-size: 16px"></i>
      <div>
        <span id="type">${randomAnime.type}</span>
        <span id="year">${randomAnime.year}</span>
        <span id="status">${randomAnime.status.slice(0, 8)}</span>
        <span id="eps">${randomAnime.episodes} eps, ${randomAnime.duration.slice(0, 7)} </span>
      </div>
    <i class="fa-solid fa-signal" style="font-size: 16px"></i>`

    const text = document.querySelector('#text p');
    const secondText = document.querySelector('#second-p');
    text.textContent = randomAnime.synopsis.slice(0, 375);
    const more = randomAnime.synopsis;
    console.log('more', more);
    const textLength = more.length;
    console.log('lenght', textLength)
    const parts = more.slice(375, textLength);
    secondText.textContent = parts;
    secondText.style.display = 'none';

    const moreButton = document.querySelector('#moreBtn');

    console.log(moreButton);

    moreButton.addEventListener('click', () => {
      if (secondText.style.display == 'none') {
        secondText.style.display = 'block';
        
      } else {
        secondText.style.display = 'none';
      }
    })

  })
