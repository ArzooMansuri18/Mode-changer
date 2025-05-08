let btn = document.querySelector('#toggle-btn');
let body = document.querySelector('body');
let mode = 'white';

btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
})
