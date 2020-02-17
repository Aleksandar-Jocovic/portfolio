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
contact.addEventListener('click', addCurrent);

function closeMenu() {

  menuBtn.classList.remove('close');
  menuNav.classList.remove('show');
  menu.classList.remove('show');
  menuBrending.classList.remove('show');

  navItems.forEach(item => item.classList.remove('show'));
  //set menu state
  showMenu = false;

}

function addCurrent() {
  navItems.forEach(item => item.classList.remove('current'));
  contact.classList.add('current');
}

let choice;
// code to be able to call nested function
this.okkk = function (id) {
  choice = document.getElementById(id);
  navItems.forEach(item => item.classList.remove('current'));
  choice.classList.add('current');
}

// iphone 4 email overflow
// poohne footer nije na dnu malo viri 
//about me  fuckedup totaldemage
