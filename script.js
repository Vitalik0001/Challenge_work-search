/* JSON object */

const objJson = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

/* Parts of HTML */

// Clear search bar
const clear = document.querySelector(".header__clear");

function clearSearchBar() {
  clear.addEventListener("click", (e) => {
    document.querySelector(".header__filters").innerHTML = " ";
    dataNames.length = 0;
    show(elem1);
    show(elem2);
    show(elem3);
    show(elem4);
    show(elem5);
    show(elem6);
    show(elem7);
    show(elem8);
    show(elem9);
    show(elem10);
  });
}
clearSearchBar();

// create new items in search bar
const mainFilters = document.querySelector(".main__filters");
const headerBar = document.querySelector('.header__filters');

const elem1 = document.getElementById('1'),
      elem2 = document.getElementById('2'),
      elem3 = document.getElementById('3'),
      elem4 = document.getElementById('4'),
      elem5 = document.getElementById('5'),
      elem6 = document.getElementById('6'),
      elem7 = document.getElementById('7'),
      elem8 = document.getElementById('8'),
      elem9 = document.getElementById('9'),
      elem10 = document.getElementById('10');


let dataNames = [];

function newItems() {
  document.querySelectorAll(".main__filters a").forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const text = e.target.textContent;

      if (! headerBar.innerHTML.includes(text)) {
        const div = document.createElement('div');
        div.className = 'filter__element';
        div.innerHTML = `<a class="filter__text-header" data-name="text">${text}</a><img src="./images/icon-remove.svg" alt="icon-remove">`;
  
        headerBar.appendChild(div);

        dataNames.push(text);
        console.log(dataNames);

        getElement();
      }
    });
  });
}
newItems();


function hide(elem) {
  elem.classList.remove('show');
  elem.classList.add('hidden');
}

function show(elem) {
  elem.classList.remove('hidden');
  elem.classList.add('show');
}

const DB1 = [elem1.dataset.tools, elem1.dataset.role, elem1.dataset.level, elem1.dataset.languages1, elem1.dataset.languages2, elem1.dataset.languages3];
const DB2 = [elem2.dataset.tools, elem2.dataset.role, elem2.dataset.level, elem2.dataset.languages];
const DB3 = [elem3.dataset.tools1, elem3.dataset.tools2, elem3.dataset.role, elem3.dataset.level, elem3.dataset.languages];
const DB4 = [elem4.dataset.tools, elem4.dataset.role, elem4.dataset.level, elem4.dataset.languages1, elem4.dataset.languages2];
const DB5 = [elem5.dataset.tools1, elem5.dataset.tools2, elem5.dataset.role, elem5.dataset.level, elem5.dataset.languages];
const DB6 = [elem6.dataset.tools, elem6.dataset.role, elem6.dataset.level, elem6.dataset.languages];
const DB7 = [elem7.dataset.tools, elem7.dataset.role, elem7.dataset.level, elem7.dataset.languages1, elem7.dataset.languages2];
const DB8 = [elem8.dataset.tools1, elem8.dataset.tools2, elem8.dataset.role, elem8.dataset.level, elem8.dataset.languages];
const DB9 = [elem9.dataset.tools, elem9.dataset.role, elem9.dataset.level, elem9.dataset.languages1, elem9.dataset.languages2];
const DB10 = [elem10.dataset.tools1, elem10.dataset.tools2, elem10.dataset.role, elem10.dataset.level, elem10.dataset.languages];

function getElement() {
    dataNames.forEach((elem) => {
      if (DB1.join(' ').includes(elem)) {  
        show(elem1);
      } else {
        hide(elem1);
      }

      if (DB2.join(' ').includes(elem)) {
        show(elem2);
      } else {
        hide(elem2);
      }

      if (DB3.join(' ').includes(elem)) {
        show(elem3);
      } else {
        hide(elem3);
      }

      if (DB4.join(' ').includes(elem)) {
        show(elem4);
      } else {
        hide(elem4);
      }

      if (DB5.join(' ').includes(elem)) {
        show(elem5);
      } else {
        hide(elem5);
      }

      if (DB6.join(' ').includes(elem)) {
        show(elem6);
      } else {
        hide(elem6);
      }

      if (DB7.join(' ').includes(elem)) {
        show(elem7);
      } else {
        hide(elem7);
      }

      if (DB8.join(' ').includes(elem)) {
        show(elem8);
      } else {
        hide(elem8);
      }

      if (DB9.join(' ').includes(elem)) {
        show(elem9);
      } else {
        hide(elem9);
      }

      if (DB10.join(' ').includes(elem)) {
        show(elem10);
      } else {
        hide(elem10);
      }
    });
  }

