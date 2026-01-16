const toggle = document.querySelector('.toggle')
const body = document.querySelector('body')
const img = document.querySelector('img')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('mode-light')
    body.classList.toggle('mode-light')

    if(body.classList.contains('mode-light')) {
        img.src = './assets/profile-picture-light-mode.jpeg'
    } else {
        img.src = './assets/profile-picture.jpg'
    }
})