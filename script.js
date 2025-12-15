function christmasCountdown () {
    const christmasDay = (new Date('December 15 2025 15:41'));
    const now = new Date();
    const diff = christmasDay - now;
    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 *1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector('.minute').textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector('.second').textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minute').textContent = 0;
        document.querySelector('.second').textContent = 0;

        clearInterval(timerId);
        merryChristmas();
        merryChristmasBlock();
        merryChristmasBlockTotal();
        christmasButton();
    }
}

let timerId = setInterval(christmasCountdown, 1000);

function merryChristmas () {

  const heading =  document.querySelector('h1');
  heading.textContent = 'MERRY CHRISTAMAS!!! XO-XO-XO';
  heading.classList.add('red');
}

function merryChristmasBlock () {
    const block = document.querySelectorAll('.block');
    block.forEach ( el => {
    el.classList.add('silver');
    })

}

function merryChristmasBlockTotal () {
    const christmass = document.querySelectorAll('.christmass');
    christmass.forEach ( el => {
        el.classList.add('silverTwo');
    })
}

function christmasButton () {
    const img = document.querySelector('img');
    img.classList.add('imgColor');
}

const button = document.querySelector('#myButton');
const audio = document.querySelector('#mySong')

button.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
})


