const menu = document.querySelector('.navbar__toggle');
const menuLinks = document.querySelector('.navbar__menu');
const navbar = document.querySelector('.navbar');
const header = document.getElementById('header');

// animates navbar toggle and displays links for mobile
const openMobileMenu = () => {
  menu.classList.toggle('navbar__toggle--is-active');
  menuLinks.classList.toggle('active');
};

// adds navbar__menu as child of header node for animation effects
const repositionMenuLinks = () => {
  window.outerWidth <= 960
    ? header.appendChild(menuLinks)
    : navbar.appendChild(menuLinks);
};

window.addEventListener('resize', repositionMenuLinks);
menu.addEventListener('click', openMobileMenu);
