const sizeChangerEl = document.querySelector('#font-size-control')

const textToChangeEl = document.querySelector('#text')

sizeChangerEl.addEventListener('input', event => {
    textToChangeEl.style.fontSize = `${event.currentTarget.value}px`
})