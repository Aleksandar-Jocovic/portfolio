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

};

const icons = document.querySelector('.icons')

/* icons.addEventListener('click', () => {
  console.log('aa')
  window.open('mailto:test@gmail.com')
}) */

