const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.menu-toggle');
const close = document.querySelector('.close');
const open = document.querySelector('.open');
const items = document.querySelectorAll('.menu-item');
const logo = document.querySelector('.name-info');
const { body } = document;

function toggleMenu() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    close.style.display = 'none';
    open.style.display = 'block';
    logo.style.display = 'block';
    body.classList.remove('noScroll');
  } else {
    menu.classList.add('active');
    close.style.display = 'block';
    body.classList.add('noScroll');
    logo.style.display = 'none';
    open.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);
items.forEach((item) => item.addEventListener('click', toggleMenu));
