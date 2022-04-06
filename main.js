const menu = document.querySelector('.menu')
const hamburger = document.querySelector('.menu-toggle')
const close = document.querySelector('.close')
const open = document.querySelector('.open')
const items = document.querySelectorAll('.menu-item')
const logo = document.querySelector('.name-info')
const { body } = document
const cardContainer = document.querySelector('.card-container')
// const article = document.createElement('article')
// const heading3 = document.createElement('h3')
// const paragraph = document.createElement('p')
// const listContainer = document.createElement('ul')
// const listItem = document.createElement('li')
// const btn = document.createElement('button')
// const link = document.createElement('a')

let project = [
  {
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    image: './image/Snapshoot-Portfolio.png',
    'github source': 'dummylink.com',
    'live project': 'dummylink.com',
  },
  {
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    image: './image/Snapshoot-Portfolio.png',
    'github source': 'dummylink.com',
    'live project': 'dummylink.com',
  },
  {
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    image: './image/Snapshoot-Portfolio.png',
    'github source': 'dummylink.com',
    'live project': 'dummylink.com',
  },
  {
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    image: './image/Snapshoot-Portfolio.png',
    'github source': 'dummylink.com',
    'live project': 'dummylink.com',
  },
  {
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    image: './image/Snapshoot-Portfolio.png',
    'github source': 'dummylink.com',
    'live project': 'dummylink.com',
  },
  {
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    image: './image/Snapshoot-Portfolio.png',
    'github source': 'dummylink.com',
    'live project': 'dummylink.com',
  },
]

function loadCardData() {
  for (let i = 0; i < project.length; i++) {
    const article = document.createElement('article')
    const heading3 = document.createElement('h3')
    const paragraph = document.createElement('p')
    const listContainer = document.createElement('ul')
    const btn = document.createElement('button')

    let name = project[i].title
    let description = project[i].description
    let technologies = project[i].technologies
    cardContainer.appendChild(article)
    article.classList.add('bcg-container', 'project-card')
    if (i > 0) {
      article.classList.add('cd')
    }
    article.append(heading3, paragraph, listContainer, btn)
    for (let j = 0; j < technologies.length; j++) {
      const link = document.createElement('a')
      const listItem = document.createElement('li')
      listContainer.appendChild(listItem)
      listContainer.classList.add('list-container')
      listItem.appendChild(link)
      listItem.classList.add('list-2')
      link.innerText = technologies[j]
    }

    heading3.innerText = project[i].title
    paragraph.innerText = description
    btn.innerText = 'See Project'
    btn.classList.add('base-btn', "pop")
    btn.setAttribute("id", i)
}
}



const popbtn = document.querySelectorAll(".pop")
popbtn.addEventListener("click", (event)=>{
console.log(event.srcElement.id);
})



loadCardData()

function toggleMenu() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
    close.style.display = 'none'
    open.style.display = 'block'
    logo.style.display = 'block'
    body.classList.remove('noScroll')
  } else {
    menu.classList.add('active')
    close.style.display = 'block'
    body.classList.add('noScroll')
    logo.style.display = 'none'
    open.style.display = 'none'
  }
}

hamburger.addEventListener('click', toggleMenu())
items.forEach((item) => {
  item.addEventListener('click', toggleMenu)
})
