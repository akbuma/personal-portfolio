const menu = document.querySelector('.navbar__toggle');
const menuLinks = document.querySelector('.navbar__menu');
const navigation = document.querySelector('.navbar');
const header = document.getElementById('header');

let mobileNavigationIsOn = false;

const mobileMenu = () => {
  mobileNavigationIsOn = !mobileNavigationIsOn;
  menu.classList.toggle('navbar__toggle--is-active');
  menuLinks.classList.toggle('active');
  if (mobileNavigationIsOn) {
    header.appendChild(menuLinks);
  } else {
    navigation.appendChild(menuLinks);
  }
};

menu.addEventListener('click', mobileMenu);
