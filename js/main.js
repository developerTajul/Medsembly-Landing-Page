(function ($) {
  jQuery(document).ready(function () {
    //  Swiper for Carousel:
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });

    //  Swiper For Subsribe and Newsletter Section
    const mySwiperOne = new Swiper(".mySwiperOne", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  })
}(jQuery));








//  Handle Navigation:
let hamburger_menu = document.getElementsByClassName("hamburger-menu")[0];
let closeBtn = document.getElementsByClassName("close-btn")[0];
let mobile_nav_wrapper = document.getElementsByClassName("mobile-nav-wrapper")[0];

hamburger_menu.addEventListener("click", () => {
  mobile_nav_wrapper.style.right = "-1px";
});

closeBtn.addEventListener("click", () => {
  mobile_nav_wrapper.style.right = "-100%"
})

