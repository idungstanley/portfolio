const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.menu-toggle');
const close = document.querySelector('.close');
const open = document.querySelector('.open');
const items = document.querySelectorAll('.menu-item');
const logo = document.querySelector('.name-info');
const { body } = document;
const cardContainer = document.querySelector('.card-container');
const projectSection = document.querySelector('.work');

const project = [
  {
    id: '0',
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    image: './image/Snapshoot-Portfolio.png',
    'github source': 'dummylink.com',
    'live project': 'dummylink.com',
  },
  {
    id: '1',
    title: 'Music Player Application',
    description:
      'A music player with simple minimalistic and elegant interface. The player consist of 1 screens:3 tracks',
    technologies: ['Html', 'CSS', 'JavaScript'],
    image: './image/music_player.png',
    'github source': 'https://github.com/idungstanley/music_player',
    'live project': ' https://idungstanley.github.io/music_player/',
  },
  {
    id: '2',
    title: 'Awesome Book Library',
    description:
      'I build an awesome book library using HTML, CSS(flexbox), Javascript, keep good practice with thee Linters correction. I add the headline to the project which stands as the book title.',
    technologies: ['Html', 'Bootstrap', 'Javascript'],
    image: './image/awesome.png',
    'github source': 'https://github.com/idungstanley/awesomebooks_es6',
    'live project': 'https://idungstanley.github.io/awesomebooks_es6/',
  },
  {
    id: '3',
    title: 'Advance Todo List',
    description:
      "This is a todo app where you can add a todo, select and filter all the completed todo's, you add edit the todo and it updates automatically and saved in the local storage",
    technologies: ['Html', 'Bootstrap', 'Javascript', 'Webpack'],
    image: './image/todo.png',
    'github source': 'https://github.com/idungstanley/Advance_todo',
    'live project': 'https://idungstanley.github.io/Advance_todo/dist/',
  },
  {
    id: '4',
    title: 'Leaderboard Game',
    description:
      'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    technologies: ['Html', 'CSS', 'Javascript', 'Webpack', 'API'],
    image: './image/leader-image.jpeg',
    'github source': 'https://github.com/idungstanley/LeaderBoard',
    'live project': 'https://idungstanley.github.io/LeaderBoard/dist/',
  },
  {
    id: '5',
    title: 'Service Camp',
    description:
      'Future project, this app will in time reduce the cost of purchase a product, user can connect with producers directly. User can order, user can update and interact with producer.',
    technologies: ['Html', 'javascript', 'Sass'],
    image: './image/s-camp.png',
    'github source': 'https://github.com/idungstanley/service_camp_capstone',
    'live project': 'https://idungstanley.github.io/service_camp_capstone/',
  },
]

for (let i = 0; i < project.length; i += 1) {
  const article = document.createElement('article');
  const heading3 = document.createElement('h3');
  const paragraph = document.createElement('p');
  const listContainer = document.createElement('ul');
  const btn = document.createElement('button');
  const { description } = project[i];
  const { technologies } = project[i];
  cardContainer.appendChild(article);
  article.classList.add('bcg-container', 'project-card');
  if (i > 0) {
    article.classList.add('cd');
  }

  article.append(heading3, paragraph, listContainer, btn);
  for (let j = 0; j < technologies.length; j += 1) {
    const link = document.createElement('a');
    const listItem = document.createElement('li');
    listContainer.appendChild(listItem);
    listContainer.classList.add('list-container');
    listItem.appendChild(link);
    listItem.classList.add('list-2');
    link.innerText = technologies[j];
  }

  heading3.innerText = project[i].title;
  paragraph.innerText = description;
  btn.innerText = 'See Project';
  btn.classList.add('base-btn', 'pop');
  btn.setAttribute('id', i);

  const cards = document.querySelectorAll('.project-card');
  Array.from(cards).forEach((card) => {
    card.addEventListener('mouseover', () => {
      if (project[i].id > 0) {
        article.classList.remove('cd');
      }
    });
    card.addEventListener('mouseout', () => {
      if (project[i].id > 0) {
        article.classList.add('cd');
      }
    });
  });
}

const popBtn = document.querySelectorAll('.pop');
Array.from(popBtn).forEach((btn) => {
  btn.addEventListener('click', (event) => {
    project.filter((project) => {
      if (event.target.id === project.id) {
        const modalContainer = document.createElement('div');
        const modalFex = document.createElement('div');
        const header = document.createElement('header');
        const icon = document.createElement('i');
        const modalDescription = document.createElement('div');
        const buttonContainer = document.createElement('div');
        const article = document.createElement('article');
        const heading3 = document.createElement('h3');
        const paragraph = document.createElement('p');
        const listContainer = document.createElement('ul');
        const image = document.createElement('img');
        const liveImg = document.createElement('img');
        const sourceImg = document.createElement('img');
        const liveBtn = document.createElement('button');
        const sourceBtn = document.createElement('button');
        const liveLink = document.createElement("a")
        const sourceLink = document.createElement("a")
        projectSection.appendChild(modalContainer);
        modalContainer.classList.add('modal-container');
        modalContainer.appendChild(article);
        article.classList.add('modal-content');
        article.append(header, listContainer, modalFex);
        header.classList.add('modal-header');
        header.append(heading3, icon);
        heading3.innerText = project.title;
        icon.classList.add('fas', 'fa-times');
        for (let j = 0; j < project.technologies.length; j += 1) {
          const link = document.createElement('a');
          const listItem = document.createElement('li');
          listContainer.appendChild(listItem);
          listContainer.classList.add('modal-list');
          listItem.appendChild(link);
          listItem.classList.add('modal-item');
          link.innerText = project.technologies[j];
        }
        modalFex.classList.add('modal-flex');
        modalFex.append(image, modalDescription);
        image.src = project.image;
        modalDescription.classList.add('modal-desc');
        modalDescription.append(paragraph, buttonContainer);
        paragraph.innerText = project.description;
        buttonContainer.classList.add('button-container');
        buttonContainer.append(liveBtn, sourceBtn);
        liveBtn.classList.add('live', 'base-btn');
        liveBtn.appendChild(liveLink);
        liveLink.innerText = 'See live';
        liveLink.href = project['live project']
        liveLink.target = "_blank"
        liveBtn.appendChild(liveImg);
        liveImg.src = './image/see-live.svg';
        sourceBtn.classList.add('source', 'base-btn');
        sourceBtn.appendChild(sourceLink)
        sourceLink.innerText = 'See Source';
        sourceLink.href = project['github source']
        sourceLink.target = '_blank'
        sourceBtn.appendChild(sourceImg);
        sourceImg.src = './image/GitHub-source.png';
        const popDisplay = document.querySelector('.modal-container');
        body.classList.add('noScroll')
        popDisplay.style.display = 'block';
        icon.addEventListener('click', () => {
          projectSection.removeChild(modalContainer);
        });
      }
      return project;
    });
  });
});


function toggleMenu() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    close.style.display = 'none';
    open.style.display = 'flex';
    logo.style.display = 'flex';
    body.classList.remove('noScroll');
  }else{
     menu.classList.add('active')
     close.style.display = 'block'
     body.classList.add('noScroll')
     open.style.display = 'none'
  }
}

hamburger.addEventListener('click', toggleMenu);
items.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});

const form = document.getElementsByTagName('form')[0];
const emailError = document.querySelector('.target');
const email = document.querySelector('#email');
const formName = document.querySelector('#name');
const formMessage = document.querySelector('#message');

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to fill the email input field';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered Value needs to be an email address';
  }
  emailError.className = 'error show';
}

email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.classList.remove('error');
  } else {
    showError();
  }
});

form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    event.preventDefault();
    showError();
  }
});

// Store data in local storage
const localData = {};

function store() {
  localData.email = email.value;
  localData.fullName = formName.value;
  localData.textMessage = formMessage.value;

  const storeData = JSON.stringify(localData);
  localStorage.setItem('user_data', storeData);
}

function getData() {
  if (!localStorage.getItem('user_data')) {
    store();
  }
  const getUserData = localStorage.getItem('user_data');
  const data = JSON.parse(getUserData);
  formName.setAttribute('value', data.fullName);
  email.setAttribute('value', data.email);
  formMessage.innerText = data.textMessage;
}
Array.from(form.elements).forEach((formElement) => formElement.addEventListener('input', getData));

getData();
Array.from(form.elements).forEach((e) => e.addEventListener('change', store));
