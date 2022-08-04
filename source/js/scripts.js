


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

const drops = document.querySelectorAll('.drop__btn');

drops.forEach(drop => drop.addEventListener('click', () => {
    drop.classList.toggle('opened');
    const content = drop.nextSibling;
    content.classList.toggle('opened');
  }));