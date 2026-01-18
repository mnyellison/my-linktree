const input = document.querySelector('input')
const body = document.querySelector('body')

input.addEventListener('change', () => {
    input.classList.toggle('mode-light')
    body.classList.toggle('mode-light')
})