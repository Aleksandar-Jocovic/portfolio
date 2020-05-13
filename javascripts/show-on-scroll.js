var scroll = window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 70)
  };
var elementsToShow = document.querySelectorAll('.show-on-scroll');
var imgBio = document.querySelectorAll('.imgbiojs')
var contactForm = document.querySelectorAll('.contact-info-formjs');

const tech = document.querySelector('.technologies-vrap')
const techSmall = document.querySelector('.technologies-vrap-small')


function loop() {

  imgBio.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('img-bio-apprear');
    }
  })

  contactForm.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('contact-form-apprear');
    }
  })

  if (isElementInViewport(tech)) {
    tech.classList.remove('on-appear');
  }

  if (isElementInViewport(techSmall)) {
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