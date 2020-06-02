//select dom items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

const work = document.getElementById('workId');
const home = document.getElementById('homeId');
const about = document.getElementById('aboutId');
const contact = document.getElementById('contactId');

// Set Initial State of manu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
  if (!showMenu) {
    scrollSpy()
    menuBtn.classList.add('close');
    menuNav.classList.add('show');
    menu.classList.add('show');

    navItems.forEach(item => item.classList.add('show'));
    //set menu state
    showMenu = true;
  } else {

    menuBtn.classList.remove('close');
    menuNav.classList.remove('show');
    menu.classList.remove('show');

    navItems.forEach(item => item.classList.remove('show'));
    //set menu state
    showMenu = false;

  }
}

work.addEventListener('click', closeMenu);
home.addEventListener('click', closeMenu);
about.addEventListener('click', closeMenu);
contact.addEventListener('click', closeMenu);


function closeMenu() {

  menuBtn.classList.remove('close');
  menuNav.classList.remove('show');
  menu.classList.remove('show');

  navItems.forEach(item => item.classList.remove('show'));
  //set menu state
  showMenu = false;

}

function scrollSpy() {
  const targets = document.querySelectorAll('.itemSpy'),
    options = {
      threshold: 0.5
    };
  //check if IntersectionObserver is suported
  if ('IntersectionObserver' in window) {
    (() => {
      const inView = target => {
        const interSec = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            const el = entry.target;
            let currentNav = document.querySelector(`#${el.id}Id`);
            (entry.isIntersecting) ? currentNav.classList.add('current') : currentNav.classList.remove('current')
          });

        }, options);
        interSec.observe(target)

      }
      targets.forEach(inView)
    })();
  }
};

// pop up gmail and skype id 

const popUpButtons = document.querySelectorAll('.pop-up-btn');
const popUps = document.getElementsByClassName('pop-up');

window.onload = mainFun;
function mainFun() {
  document.getElementById('icons').onclick = btnFun
}


function btnFun(e) {
  if (e.target.tagName == 'BUTTON') {
    if (!popOne.classList.contains('pop-up-false') || !popTwo.classList.contains('pop-up-false')) {
      popOne.classList.add('pop-up-false');
      popTwo.classList.add('pop-up-false')
    }
    let pop = document.getElementById(`pop${e.target.id}`);
    //console.log(pop)
    if (pop.classList.contains('pop-up-false')) {

      pop.classList.remove('pop-up-false')

    } else {
      pop.classList.add('pop-up-false')

    }
  }
}
const popOne = document.getElementById('pop0');
const popTwo = document.getElementById('pop1');

const emailBtn = document.getElementById('email-popup-button');
const emailContactBtn = document.getElementById('email-contact-btn');

emailBtn.addEventListener('click', () => {
  window.open('mailto:jocovic099@gmail.com')
})
emailContactBtn.addEventListener('click', () => {
  window.open('mailto:jocovic099@gmail.com')
})


window.onclick = (event) => {
  //console.log(event)
  if (event.target.tagName !== 'BUTTON') {
    if (!popOne.classList.contains('pop-up-false') || !popTwo.classList.contains('pop-up-false')) {
      popOne.classList.add('pop-up-false');
      popTwo.classList.add('pop-up-false')
    }
  }
  if (event.target.tagName !== 'BUTTON'
    && event.target.id !== 'work-pop-up-layer'
    && workPop.classList.contains('active-work')) {
    workPop.classList.remove('active-work');
  }

};

const icons = document.querySelector('.icons')


// Work information popup

const data = [
  {
    title: 'Norms-App',
    img: ["./images/info-img/nor1.png", "./images/info-img/nor2.png", "./images/info-img/nor4.png"],
    tech: "HTML5&CSS3, JS, React.js(context), Bootstrap4(Bootswatch), ApexChart.js, localstorage."
  },
  {
    title: 'Project Base',
    img: ["./images/info-img/bas1.png", "./images/info-img/bas2.png", "./images/info-img/bas3.png"],
    tech: "HTML5&CSS3, Sass, JS."
  },
  {
    title: 'County Info',
    img: ["./images/info-img/cou1.png", "./images/info-img/cou2.png", "./images/info-img/cou3.png"],
    tech: "HTML5&CSS3, JS, React.js, Bootstrap4, restcountries api."
  },
  {
    title: 'Tech Shop',
    img: ["./images/info-img/tec1.png", "./images/info-img/tec2.png", "./images/info-img/tec3.png"],
    tech: "HTML5&CSS3, JS."
  },
  {
    title: 'Random Color',
    img: ["./images/info-img/col1.png", "./images/info-img/col2.png", "./images/info-img/col3.png"],
    tech: "HTML5&CSS3, JS, React.js, Redux."
  },
  {
    title: 'Continent Quiz',
    img: ["./images/info-img/qui1.png", "./images/info-img/qui2.png", "./images/info-img/qui3.png"],
    tech: "HTML5&CSS3, Sass, JS, localstorage."
  }
]

const workPopButtons = document.querySelectorAll('.project-info-button');
const workPop = document.getElementById('work-pop-up');

const displayWorkInfo = (e) => {
  const workPopTitle = document.getElementById('work-pop-up-title');
  const workPopTech = document.getElementById('work-pop-up-tech');
  const workImgOne = document.getElementById('pop-img1');
  const workImgTwo = document.getElementById('pop-img2');
  const workImgThree = document.getElementById('pop-img3');

  let index = e.target.name;

  workPop.classList.add('active-work');

  workPopTitle.innerText = data[index].title;
  workImgOne.src = data[index].img[0];
  workImgTwo.src = data[index].img[1];
  workImgThree.src = data[index].img[2];
  workPopTech.innerText = data[index].tech;

}

workPopButtons.forEach((el) => {
  el.addEventListener('click', displayWorkInfo);
})

const closeWorkPop = document.querySelector('.work-pop-up-close-button');
closeWorkPop.addEventListener('click', () => {
  workPop.classList.remove('active-work');
})

//slider
const slideButton = document.querySelector('.slide-button');
let activeImgIndex = 2;
let prevImgIndex = 1;
let prevPrev = 0;

let clicked = false;

const slide = () => {
  clicked = true;
  const activeImg = document.getElementById(`pop-img${activeImgIndex}`);
  const prevImg = document.getElementById(`pop-img${prevImgIndex}`);
  const prevPrevImg = document.getElementById(`pop-img${prevPrev}`);

  if (prevPrev > 0) {
    prevPrevImg.style.zIndex = '-2';
    prevPrevImg.style.transform = 'translateX(-100%)';

  }

  prevImg.style.transform = 'translateX(100%)';
  prevImg.style.zIndex = '-1';

  prevImg.classList.remove('active-img');
  activeImg.classList.add('active-img')

  activeImgIndex++;
  if (activeImgIndex > 3) {
    activeImgIndex = 1;
  }
  prevImgIndex++;
  if (prevImgIndex > 3) {
    prevImgIndex = 1
  }
  prevPrev++;
  if (prevPrev > 3) {
    prevPrev = 1
  }
  setTimeout(() => {
    clicked = false;
  }, 350)
}

slideButton.addEventListener('click', () => {
  if (!clicked) {
    slide()
  }
})

