const menuBtn = document.querySelector('.js-menu-btn');
const menuLinks = document.querySelectorAll('.js-nav__link');

menuBtn.addEventListener('click', openMenu);
menuLinks.forEach(link => link.addEventListener('click', openMenu));

function openMenu() {
    document.body.classList.toggle('menu-opened');
}