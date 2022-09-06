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





// //   Control Dropdown:
// let dropdown = document.getElementsByClassName("dropdown")[0];
// let dropdownItems = document.getElementsByClassName("dropdown-menu")[0];
// dropdown.addEventListener('mouseenter', () => {
//     dropdownItems.style.opacity = "1";
//     dropdownItems.style.visivility = "visible";
//     dropdownItems.style.height = "auto";
// });
// dropdown.addEventListener('mouseout', () => {
//     dropdownItems.style.opacity = "0";
//     dropdownItems.style.visivility = "hidden";
//     dropdownItems.style.height = "0";
// })





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



//  Faq Section
const icons = document.getElementsByClassName("faq-icon");
const faqBody = document.getElementsByClassName("faq-body");
const PlusOrMinus    = document.getElementsByClassName("FaqIcon");
Array.from(icons).forEach(icon => {
  icon.addEventListener("click", () => {
    if (icon.children[0].innerText === "+") {
      Array.from(faqBody).forEach(faq => {
        faq.style.height = "0";
        Array.from(PlusOrMinus).forEach(e => {
          e.innerText = "+";
        })
      })
      icon.parentElement.nextElementSibling.style.height = "auto";
      icon.children[0].innerText = "-";
    }else {
      icon.parentElement.nextElementSibling.style.height = "0";
      icon.children[0].innerText = "+";
    }
  })
})
