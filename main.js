let menu = document.querySelector(".menu");
let hamburger = document.querySelector(".menu-toggle");
let close = document.querySelector(".close");
let open = document.querySelector(".open");
let items = document.querySelectorAll(".menu-item");


function toggleMenu(){
  if (menu.classList.contains("showMenu")){
   menu.classList.remove("showMenu")
   close.style.display = "none"
   open.style.display = "block"
  }else {
   menu.classList.add("showMenu")
   close.style.display = "block"
   open.style.display = "none"
  }
}