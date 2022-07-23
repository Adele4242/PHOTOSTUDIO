var swiper = new Swiper(".mySwiperfirst", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


      var swiper = new Swiper(".slider", {
              effect: "coverflow",
              loop: true,
              grabCursor: true,
              centeredSlides: true,
              slidesPerView: "3",
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              },
            });


let burger = document.querySelector('.header__burger')
let headList = document.querySelector('.header__list')

burger.addEventListener('click', function() {
burger.classList.toggle('header__burger_active')headList.classList.toggle('header__list_active')
})

let overlay = document.querySelector('.overlay');
let close = document.querySelector('.popup__close');
let call = document.querySelector('.popup__call')
let gratitude = document.querySelector('.popup__gratitude')
let locations = document.querySelector('.popup__locations')
let otzyv = document.querySelector('.popup__otzyv')

let callBtn = document.querySelector('.btn_call');
let btnGratitude = document.querySelector('.btn_gratitude');
let locationBtn = document.querySelector('.btn_locs');
let otzyvBtn = document.querySelector('.btn_otzyv');

close.addEventListener('click', function(){
    overlay.style.display = 'none'
})

overlay.addEventListener('click', function(e){

    if (e.target.className.includes('overlay')){
     overlay.style.display = 'none'
    }
})

callBtn.addEventListener('click', function(){
    overlay.style.display = 'flex'
    call.style.display = 'flex'
    gratitude.style.display = 'none'
    locations.style.display = 'none'
    otzyv.style.display = 'none'
})

btnGratitude.addEventListener('click', function(){
    overlay.style.display = 'flex'
    call.style.display = 'none'
    gratitude.style.display = 'flex'
    locations.style.display = 'none'
    otzyv.style.display = 'none'
})

locationBtn.addEventListener('click', function(){
    overlay.style.display = 'flex'
    call.style.display = 'none'
    gratitude.style.display = 'none'
    locations.style.display = 'flex'
    otzyv.style.display = 'none'
})


otzyvBtn.addEventListener('click', function(){
    overlay.style.display = 'flex'
    call.style.display = 'none'
    gratitude.style.display = 'none'
    locations.style.display = 'none'
    otzyv.style.display = 'flex'
})