const div = document.querySelector('.div');

console.log(div);

const span = document.createElement('span');

span.innerText = 'Vauch'

div.appendChild(span)

console.dir(span)

const divMod = document.querySelector('.modal');
const modalImg = document.querySelector('.modalImg')
const img = document.querySelector('.imgDiv');

img.setAttribute('class', 'click-me')

img.addEventListener('click', ({ target }) => {
    console.dir(target);
    modalImg.setAttribute('src', target.currentSrc);
    divMod.style.display = 'flex';
    let spanMod = document.querySelector('.spanMod');
    const date = new Date();
    spanMod.innerText = `день:${date.getDate()} месяц:${date.getMonth()} год:${date.getUTCFullYear()}`
    spanMod.style.color = 'green'
});

const closeModal = (ev) => {
    divMod.style.display = 'none'
}
document.addEventListener('keyup', (ev) => {
    if(ev.keyCode === 27) {
        closeModal()
        console.dir(ev)
    }
})

