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
let navItem = document.querySelectorAll(".main-menu ul li");


hamburger_menu.addEventListener("click", () => {
  mobile_nav_wrapper.style.right = "-1px";
});

closeBtn.addEventListener("click", () => {
  mobile_nav_wrapper.style.right = "-100%"
})



//  Faq Section
const icons = document.getElementsByClassName("faq-icon");
const faqBody = document.getElementsByClassName("faq-body");
const PlusOrMinus    = document.getElementsByClassName("FaqIcon");
const arrowIcon = document.getElementsByClassName("arrowIcon");
Array.from(icons).forEach(icon => {
  icon.addEventListener("click", () => {
    if (icon.children[0].innerText === "+") {
      Array.from(faqBody).forEach(faq => {
        faq.style.height = "0";
        Array.from(PlusOrMinus).forEach(e => {
          e.innerText = "+";
        })
      });
      Array.from(arrowIcon).forEach(icon => icon.setAttribute("src", "./images/resources/arrow-down.svg"));
      icon.parentElement.nextElementSibling.style.height = "auto";
      icon.parentElement.nextElementSibling.paddingTop = "25px";
      icon.children[0].innerText = "-";
      icon.children[1].setAttribute("src", "./images/resources/arrow-up.svg");
    }else {
      icon.parentElement.nextElementSibling.style.height = "0";
      icon.parentElement.nextElementSibling.paddingTop = "0";
      icon.children[0].innerText = "+";
      icon.children[1].setAttribute("src", "./images/resources/arrow-down.svg");
    }
  })
});