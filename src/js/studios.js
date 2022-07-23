var swiper = new Swiper(".mySwiper", {
        spaceBetween: 5,
        slidesPerView: 6,
        freeMode: true,
        loop: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });


var swiper = new Swiper(".mySwiper4", {
        spaceBetween: 5,
        slidesPerView: 6,
        freeMode: true,
        loop: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });