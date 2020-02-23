var scroll = window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60)
  };
var elementsToShow = document.querySelectorAll('.show-on-scroll');
var imgBio = document.querySelectorAll('.imgbiojs')
var contactForm = document.querySelectorAll('.contact-info-formjs');
var cardA = document.querySelector('.cardA');
var cardB = document.querySelector('.cardB');
var cardC = document.querySelector('.cardC');


function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('kurcinaa');
    } else {
      element.classList.remove('kurcinaa');
    }
  })

  imgBio.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('img-bio-apprear');
    } else {
      element.classList.remove('img-bio-apprear');
    }

  })

  contactForm.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('contact-form-apprear');
    } else {
      element.classList.remove('contact-form-apprear');
    }

  })


  if (isElementInViewport(cardA)) {
    var cardImg = document.querySelector('.card-img');
    var cardVrap = document.querySelector('.card-img-vrap');
    var cardText = document.querySelector('.card-text');

    cardImg.classList.add('card-img2');
    cardText.classList.add('card-text2');
    cardVrap.classList.add('card-img-vrap2');

  } else {

  }




  if (isElementInViewport(cardB)) {
    var cardImgB = document.querySelector('.card-imgB');
    var cardVrapB = document.querySelector('.card-img-vrapB');
    var cardTextB = document.querySelector('.card-textB');

    cardImgB.classList.add('card-img2');
    cardTextB.classList.add('card-text2');
    cardVrapB.classList.add('card-img-vrap2');

  } else {

  }

  if (isElementInViewport(cardC)) {
    var cardImgC = document.querySelector('.card-imgC');
    var cardVrapC = document.querySelector('.card-img-vrapC');
    var cardTextC = document.querySelector('.card-textC');

    cardImgC.classList.add('card-img2');
    cardTextC.classList.add('card-text2');
    cardVrapC.classList.add('card-img-vrap2');

  }









  //img and bio

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