//select dom items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrending = document.querySelector('.menu-branding');
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
    menuBtn.classList.add('close');
    menuNav.classList.add('show');
    menu.classList.add('show');
    menuBrending.classList.add('show');

    navItems.forEach(item => item.classList.add('show'));
    //set menu state
    showMenu = true;
  } else {

    menuBtn.classList.remove('close');
    menuNav.classList.remove('show');
    menu.classList.remove('show');
    menuBrending.classList.remove('show');

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
  menuBrending.classList.remove('show');

  navItems.forEach(item => item.classList.remove('show'));
  //set menu state
  showMenu = false;

}


const popUpButtons = document.querySelectorAll('.pop-up-btn');
const popUps = document.getElementsByClassName('pop-up');

window.onload = mainFun;
function mainFun() {
  document.getElementById('icons').onclick = btnFun
}

// pop up gmail and skype id 
function btnFun(e) {
  if (e.target.tagName == 'BUTTON') {
    if (!popOne.classList.contains('pop-up-false') || !popTwo.classList.contains('pop-up-false')) {
      popOne.classList.add('pop-up-false');
      popTwo.classList.add('pop-up-false')
    }
    let pop = document.getElementById(`pop${e.target.id}`);
    console.log(pop)
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
  console.log(event)
  if (event.target.tagName !== 'BUTTON') {
    if (!popOne.classList.contains('pop-up-false') || !popTwo.classList.contains('pop-up-false')) {
      popOne.classList.add('pop-up-false');
      popTwo.classList.add('pop-up-false')
    }
  }
  if (event.target.id !== 'work-pop-up' && workPop.classList.contains('active-work')
    && event.target.tagName !== 'BUTTON') {
    workPop.classList.remove('active-work');
  }

};

const icons = document.querySelector('.icons')


// Work information popup

const data = [
  {
    title: 'Norms-App',
    img: ["./images/normss.png", "./images/normss.png", "./images/normss.png"],
    tech: "React(context), Bootstrap4(Bootswatch), ApexChart.js."
  },
  {
    title: 'Porject Base',
    img: ["./images/projectbase.png", "./images/normss.png", "./images/normss.png"],
    tech: "HTML5, CSS3(Sass), JS."
  },
  {
    title: 'County Info',
    img: ["./images/country.png", "./images/normss.png", "./images/normss.png"],
    tech: "React(context), Bootstrap4, CountryApi."
  },
  {
    title: 'Tech Shop',
    img: ["./images/techshop.png", "./images/normss.png", "./images/normss.png"],
    tech: "HTML5, CSS3, JS."
  },
  {
    title: 'Random Color',
    img: ["./images/random.png", "./images/normss.png", "./images/normss.png"],
    tech: "React, Redux."
  },
  {
    title: 'Continent Quiz',
    img: ["./images/quiz.png", "./images/normss.png", "./images/normss.png"],
    tech: "HTML5, CSS3(Sass), JS."
  }
]
//const workPopBtn = document.querySelector('.project-info-button');
const workPopButtons = document.querySelectorAll('.project-info-button');
const workPopTitle = document.getElementById('work-pop-up-title');
const workPopTech = document.getElementById('work-pop-up-tech');

const workImgOne = document.getElementById('pop-img1');
const workImgTwo = document.getElementById('pop-img2');
const workImgThree = document.getElementById('pop-img3');




const workPop = document.getElementById('work-pop-up');


const displayWorkInfo = (e) => {
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





// Show on scrooll

/* var scroll = window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60)
  };

var elementsToShow = document.querySelectorAll('.show-on-scroll');
var imgBio = document.querySelectorAll('.imgbiojs')
var contactForm = document.querySelectorAll('.contact-info-formjs');

const tech = document.querySelector('.technologies-vrap')
const techSmall = document.querySelector('.technologies-vrap-small')


function loop() {

  imgBio.forEach(function (element) {
    if (isElementInViewport(element) && !element.classList.add('img-bio-apprear')) {
      element.classList.add('img-bio-apprear');
    }
  })

  contactForm.forEach(function (element) {
    if (isElementInViewport(element) && !element.classList.contains('contact-form-apprear')) {
      element.classList.add('contact-form-apprear');
    }
  })

  if (isElementInViewport(tech) && tech.classList.contains('on-appear')) {
    tech.classList.remove('on-appear');
  }

  if (isElementInViewport(techSmall) && techSmall.classList.contains('on-appear')) {
    techSmall.classList.remove('on-appear');
  }

  scroll(loop);
}

loop();


function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0 - rect.height / 2) ||
    (rect.bootom - rect.height / 2 >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 && rect.bottom - rect.height / 2 <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


document.addEventListener('DOMContentLoaded', () => {
  (function scrollSpy() {
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
  })();
});

//Back to top button
var button = document.getElementById('back-to-top-btn');
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 200) {
    if (!button.classList.contains('btnIn')) {
      button.classList.remove('btnOut');
      button.classList.add('btnIn');
      button.style.display = 'block';
    }
  } else {
    if (button.classList.contains('btnIn')) {
      button.classList.remove('btnIn');
      button.classList.add('btnOut');
      setTimeout(function () {
        button.style.display = 'none';
      }, 250);
    }
  }
}

button.addEventListener('click', smoothScroll);

function smoothScroll() {
  var targetPosition = 0;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var duration = 450;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}
 */
