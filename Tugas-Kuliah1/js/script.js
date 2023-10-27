// toggle  kelas aktif

const navbar = document.querySelector('.nav');


// ketika #menu  di klik
document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
};

// klik diluar sidebar untuk menghilangkan navbar
const menu  = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});