const menuToggle = document.querySelector('.navbar__toggle');
const mobileMenu = document.querySelector('.navbar__menu');
const menuLinks = document.querySelectorAll('.navbar__link');
const navbar = document.querySelector('.navbar');

let wasScrolled = false;

// animates navbar toggle and displays links for mobile
const openMobileMenu = () => {
  menuToggle.classList.toggle('navbar__toggle--is-active');
  // display the mobile nav
  // toggling closed class will remove the stuttering issue when switching to mobile
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.toggle('closed');
  } else {
    mobileMenu.classList.toggle('active');
  }
};

// adds navbar__menu as child of header node for animation effects
const repositionMobileMenu = () => {
  if (window.outerWidth >= 960) {
    // disable toggle when user widens screen
    if (menuToggle.classList.contains('navbar__toggle--is-active'))
      menuToggle.classList.toggle('navbar__toggle--is-active');
    // disable mobile menu when user widens screen
    if (mobileMenu.classList.contains('active'))
      mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('closed'))
      mobileMenu.classList.toggle('closed');
    
    if(wasScrolled) {
      navbar.classList.add('navbar--scrolled');
      for(link of menuLinks) {
        link.classList.add('navbar__link--scrolled-text')
      }
    }
  } else {
    if(navbar.classList.contains('navbar--scrolled')) {
      wasScrolled = true;
      navbar.classList.remove('navbar--scrolled');
      for(link of menuLinks) {
        link.classList.remove('navbar__link--scrolled-text')
      }
    }
  }
};

window.addEventListener('resize', repositionMobileMenu);
menuToggle.addEventListener('click', openMobileMenu);

// intersection observer
const header = document.querySelector('header');

const callback = (entries, observer) => {
    // header section
    const entry = entries[0];
    if(entry.isIntersecting) {
      wasScrolled = false;
      navbar.classList.remove('navbar--scrolled');
      for(link of menuLinks) {
        link.classList.remove('navbar__link--scrolled-text')
      }
    } else {
      navbar.classList.add('navbar--scrolled');
      for(link of menuLinks) {
        link.classList.add('navbar__link--scrolled-text')
      }
    }
}

const options = {
  root: null,
  rootMargin: '0px 0px -90% 0px',
  threshold: 0.1,
}

// fires the callback once the home section hits the navbar position
const observer = new IntersectionObserver(callback, options);
observer.observe(header);

for(link of menuLinks) {
  link.addEventListener('click', scrollHandler);
}

function scrollHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');

  document.querySelector(href).scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}