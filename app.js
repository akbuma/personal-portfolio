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

// intersection observer
const home = document.querySelector('.home');

const callback = (entries, observer) => {
  console.log(entries[0]);
  if(entries[0].isIntersecting) console.log('fired')
}

const options = {
  root: null,
  rootMargin: '0px 0px -90% 0px',
  threshold: 0.1,
}

// fires the callback once the home section hits the navbar position
const observer = new IntersectionObserver(callback, options);
observer.observe(home);