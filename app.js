const menu = document.querySelector('.navbar__toggle');
const menuLinks = document.querySelector('.navbar__menu');
const navbar = document.querySelector('.navbar');

// animates navbar toggle and displays links for mobile
const openMobileMenu = () => {
  menu.classList.toggle('navbar__toggle--is-active');

  // display the mobile nav
  // toggling closed class will remove the stuttering issue when switching to mobile
  if (menuLinks.classList.contains('active')) {
    menuLinks.classList.toggle('closed');
  } else {
    menuLinks.classList.toggle('active');
  }
};

// adds navbar__menu as child of header node for animation effects
const repositionMenuLinks = () => {
  if (window.outerWidth >= 960) {
    // disable toggle when user widens screen
    if (menu.classList.contains('navbar__toggle--is-active'))
      menu.classList.toggle('navbar__toggle--is-active');
    // disable mobile menu when user widens screen
    if (menuLinks.classList.contains('active'))
      menuLinks.classList.toggle('active');
    if (menuLinks.classList.contains('closed'))
      menuLinks.classList.toggle('closed');
  }
};

window.addEventListener('resize', repositionMenuLinks);
menu.addEventListener('click', openMobileMenu);
