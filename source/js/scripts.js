


const swiper = new Swiper('.friends__slider.swiper', {
  slidesPerView: 4,
  pagination: {
    el: ".friends__slider .swiper-pagination",
    clickable: true,
  }
});

const swiper2 = new Swiper('.cards-list.swiper', {
  slidesPerView: 4,
  navigation: {
    nextEl: '.cards-list .swiper-button-next',
    prevEl: '.cards-list .swiper-button-prev',
  },
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