let menu = document.querySelector('.menu')
let hamburger = document.querySelector('.menu-toggle')
let close = document.querySelector('.close')
let open = document.querySelector('.open')
let items = document.querySelectorAll('.menu-item')
let showMenu = document.querySelector('.showMenu')
let logo = document.querySelector(".name-info")

// hamburger.addEventListener('click', () => {
//   close.classList.toggle('active')
//   menu.classList.toggle('active')
// })

function toggleMenu() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
    close.style.display = 'none'
    open.style.display = 'block'
    logo.style.display = 'block'
  } else {
    menu.classList.add('active')
    close.style.display = 'block'
    logo.style.display = "none"
    open.style.display = 'none'
  }
}

hamburger.addEventListener('click', toggleMenu)
