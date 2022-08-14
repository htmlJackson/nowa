


const swiper = new Swiper('.friends__slider.swiper', {
  slidesPerView: 1,
  pagination: {
    el: ".friends__slider .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 4
    },
  }
});

const swiper2 = new Swiper('.cards-list.swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.cards-list .swiper-button-next',
    prevEl: '.cards-list .swiper-button-prev',
  },
  breakpoints: {
    767: {
      slidesPerView: 4
    },
  }
});

const swiper3 = new Swiper('.rails__slider.swiper', {
  slidesPerView: 5,
  navigation: {
    nextEl: '.rails__slider .swiper-button-next',
    prevEl: '.rails__slider .swiper-button-prev',
  },
});

const thumbsSwiper4 = new Swiper(".product__thumbs.swiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper4 = new Swiper('.product__slider.swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.product__slider .swiper-button-next',
    prevEl: '.product__slider .swiper-button-prev',
  },
  thumbs: {
    swiper: thumbsSwiper4
  }

});



const drops = document.querySelectorAll('.drop__btn');

drops.forEach(drop => drop.addEventListener('click', () => {
  drop.classList.toggle('opened');
  const content = drop.nextSibling;
  content.classList.toggle('opened');
}));

const accordeonToggle = document.querySelectorAll('.accordeon__title');

accordeonToggle.forEach(acc => acc.addEventListener('click', () => {
  acc.parentElement.classList.toggle('opened');
}));


// Открыть - закрыть меню в шапке //
var pageHeader = document.querySelector('.header');
var navToggle = document.querySelector('.header__toggle');

pageHeader.classList.remove('header--nojs');

navToggle.addEventListener('click', function() {
    pageHeader.classList.toggle('header--opened');
});
