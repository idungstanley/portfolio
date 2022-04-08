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
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    image: './image/Snapshoot-Portfolio.png',
    'github source': 'dummylink.com',
    'live project': 'dummylink.com',
  },
  {
    id: '2',
    title: 'Profesional Art Printing Data and my work',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    image: './image/Snapshoot-Portfolio.png',
    'github source': 'dummylink.com',
    'live project': 'dummylink.com',
  },
  {
    id: '3',
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    image: './image/Snapshoot-Portfolio.png',
    'github source': 'dummylink.com',
    'live project': 'dummylink.com',
  },
  {
    id: '4',
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    image: './image/Snapshoot-Portfolio.png',
    'github source': 'dummylink.com',
    'live project': 'dummylink.com',
  },
  {
    id: '5',
    title: 'Profesional Art Printing Data',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    image: './image/Snapshoot-Portfolio.png',
    'github source': 'dummylink.com',
    'live project': 'dummylink.com',
  },
];

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
        liveBtn.innerText = 'See live';
        liveBtn.appendChild(liveImg);
        liveImg.src = './image/see-live.svg';
        sourceBtn.classList.add('source', 'base-btn');
        sourceBtn.innerText = 'See Source';
        sourceBtn.appendChild(sourceImg);
        sourceImg.src = './image/GitHub-source.png';
        const popDisplay = document.querySelector('.modal-container');
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
