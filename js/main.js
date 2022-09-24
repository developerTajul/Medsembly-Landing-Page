(function ($) {
  jQuery(document).ready(function () {


    if ( document.querySelector("#sidr") ) {
        /*** Navbar Menu */
        $('.hamburger-menu').sidr({
            name: 'sidr',
            side: 'right',
            source: '#sidr',
            displace: false,
            renaming: false,
        });

        /*** Dropdown Menu */
        $('.navbar-nav').click(function(){
            $(this).parent().parent().toggleClass('show');
        });

        $('.navbar-toggle').on('click', function(){
            $.sidr('close', 'sidr');
        });

        /** Sidr submenu */
        function medsemblyMobileMenu() {
            $('.medsembly-mobile-nav ul')[0].classList.add("spellon-navbar-mobile");

            var $nav = $(".spellon-navbar-mobile"),
                $back_btn = $nav.find(" > li.dropdown > ul.dropdown-menu").prepend("<li class='dropdown-back d-flex flex-wrap align-items-center justify-content-between'><div class='control ml-auto d-flex align-items-center' style='white-space: nowrap'>Back<span class='fa-solid fa-arrow-left'></span></div></li>");


            // For Title
            $('.spellon-navbar-mobile li.dropdown > a').each(function(){
                $(this).siblings("ul").find("li.dropdown-back").prepend("<div class='title'><a style='color: #000'>" + $(this).text() +"</a></div>");
            });

            // open sub-level
            $('.spellon-navbar-mobile li.dropdown > a').append("<span class='dropdown-toggle' data-toggle='dropdown'></span>");
            $('.spellon-navbar-mobile li.dropdown > a .dropdown-toggle').on("click", function(e) {
                e.preventDefault();
                e.stopPropagation();

                $(this).parent().parent().addClass("is-open");
                $(this).parents().find( '.spellon-navbar-mobile' ).addClass("is-parent");


                var header = $(this).parent().parent().find('ul.dropdown-menu').height(),
                    gutter = $('.medsembly-mobile-nav');

                if ( gutter ) 
                {
                    gutter.height(header+15);
                }
            });

            // go back
            $back_btn.on("click", ".dropdown-back", function(e) {
                e.stopPropagation();
                $(this)
                .parents(".is-open")
                .first()
                .removeClass("is-open");

                var header = $(this).parents(".is-parent").first().height();

                $(this)
                .parents(".is-parent")
                .first()
                .removeClass("is-parent");

                var gutter = $('.medsembly-mobile-nav');

                setTimeout(function() {
                    if (gutter) {
                        gutter.height(header);
                    } 
                }, 200);
            });
        }
        medsemblyMobileMenu();
    }
 

    if ( document.querySelector(".js-masonry") ) {
      /*** Masonry */
      function masonryGrid(){
          var $grid = $('.masonry');
          // initialize
          $grid.masonry({
              itemSelector: '.item',
              columnWidth: '.item',
              horizontalOrder: false,
              // isAnimated: true,
              // percentPosition: true,
          });

          $grid.masonry('reloadItems');
          $grid.masonry('layout');

          // layout Masonry after each image loads
          $grid.imagesLoaded().progress( function() {
              $grid.masonry('layout');
          });
      }
      masonryGrid();

    }

    if ( document.querySelector(".our-partners-slider-wrapper") ) {
      $('.our-partners-slider-wrapper').slick();
    }


    //  Swiper for Carousel:
    const swiper = new Swiper(".mentors-swiper", {
      slidesPerView: 1,
      spaceBetween: 40,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2, 
        },
        640: {
          slidesPerView: 2, 
        },
        768: {
          slidesPerView: 2, 
        },
        992: {
          slidesPerView: 3, 
        },
        // 1400: {
        //   slidesPerView: 4, 
        // },
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


    //  For Student Love Section:
    const mySwiperTwo = new Swiper(".student-testimonial", {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


  })
}(jQuery));



// //  Handle Navigation:
// let hamburger_menu = document.getElementsByClassName("hamburger-menu")[0];
// let closeBtn = document.getElementsByClassName("close-btn")[0];
// let mobile_nav_wrapper = document.getElementsByClassName("mobile-nav-wrapper")[0];
// let navItem = document.querySelectorAll(".main-menu ul li");


// hamburger_menu.addEventListener("click", () => {
//   mobile_nav_wrapper.style.right = "-1px";
// });

// closeBtn.addEventListener("click", () => {
//   mobile_nav_wrapper.style.right = "-100%"
// })

// const subItem = document.querySelectorAll(".sub-item-wrapper");
// for (let i = 0; i < subItem.length; i++){
//  subItem[0].parentNode.classList.add('has-children')
// }




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
      icon.parentElement.nextElementSibling.style.height = "auto";
      icon.parentElement.nextElementSibling.paddingTop = "25px";
      icon.children[0].innerText = "-";
    }else {
      icon.parentElement.nextElementSibling.style.height = "0";
      icon.parentElement.nextElementSibling.paddingTop = "0";
      icon.children[0].innerText = "+";
    }
  })
});





//  Discount Faq Section:
const ArrowIcons = document.querySelectorAll(".discount-faq-icon");
Array.from(ArrowIcons).forEach(icon => {
  icon.addEventListener("click", () => {
    if (icon.classList.contains("activeFaq") == false) {
      Array.from(ArrowIcons).forEach(icon => {
        icon.classList.remove("activeFaq");
        icon.parentElement.nextElementSibling.style.height = "0";
        icon.childNodes[1].classList.toggle("fa-chevron-down");
      })

      icon.parentElement.nextElementSibling.style.height = "auto";
      icon.classList.add("activeFaq");
      icon.childNodes[1].classList.add("fa-chevron-up")
      // console.log(icon.childNodes[1].classList);
    } else {
      icon.parentElement.nextElementSibling.style.height = "0";
      icon.classList.remove("activeFaq");
      icon.childNodes[1].classList.add("fa-chevron-down");
    }
  })
});
 
if ( document.querySelector(".event-right input") ) {

    //  Change Background Color of select Radion Button:
    const radioButton = document.querySelectorAll(".event-right input");
    Array.from(radioButton).forEach(radio => {
      radio.addEventListener("click", (e) => {
        Array.from(radioButton).forEach(radio =>  {
          radio.removeAttribute("checked");
          radio.parentNode.parentNode.style.border = "1px solid #CCCCCC";
          radio.parentNode.parentNode.style.boxShadow = "none";
        });
        e.target.setAttribute("checked", "checked");
        e.target.parentNode.parentNode.style.border = "none";
        e.target.parentNode.parentNode.style.boxShadow = "6px 12px 60px rgba(0, 0, 0, 0.08)";
      })
    });

    const checkedOrNot = document.querySelector('.event-list input[name="event"]:checked');
    if (checkedOrNot.checked === true) {
      checkedOrNot.parentNode.parentNode.style.border = "none";
      checkedOrNot.parentNode.parentNode.style.boxShadow = "6px 12px 60px rgba(0, 0, 0, 0.08)";

    }
}

//  Calender Section:
function CalendarControl() {
  const calendar = new Date();
  const calendarControl = {
    localDate: new Date(),
    prevMonthLastDate: null,
    calWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    calMonthName: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    daysInMonth: function (month, year) {
      return new Date(year, month, 0).getDate();
    },
    firstDay: function () {
      return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
    },
    lastDay: function () {
      return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
    },
    firstDayNumber: function () {
      return calendarControl.firstDay().getDay() + 1;
    },
    lastDayNumber: function () {
      return calendarControl.lastDay().getDay() + 1;
    },
    getPreviousMonthLastDate: function () {
      let lastDate = new Date(
        calendar.getFullYear(),
        calendar.getMonth(),
        0
      ).getDate();
      return lastDate;
    },
    navigateToPreviousMonth: function () {
      calendar.setMonth(calendar.getMonth() - 1);
      calendarControl.attachEventsOnNextPrev();
    },
    navigateToNextMonth: function () {
      calendar.setMonth(calendar.getMonth() + 1);
      calendarControl.attachEventsOnNextPrev();
    },
    navigateToCurrentMonth: function () {
      let currentMonth = calendarControl.localDate.getMonth();
      let currentYear = calendarControl.localDate.getFullYear();
      calendar.setMonth(currentMonth);
      calendar.setYear(currentYear);
      calendarControl.attachEventsOnNextPrev();
    },
    displayYear: function () {
      let yearLabel = document.querySelector(".calendar .calendar-year-label");
      yearLabel.innerHTML = calendar.getFullYear();
    },
    displayMonth: function () {
      let monthLabel = document.querySelector(
        ".calendar .calendar-month-label"
      );
      monthLabel.innerHTML = calendarControl.calMonthName[calendar.getMonth()];
    },
    plotSelectors: function () {
      document.querySelector(
        ".calendar"
      ).innerHTML += `<div class="calendar-inner"><div class="calendar-controls">
        <div class="calendar-year-month">
          <div class="calendar-month-label"></div>
          <div>-</div>
          <div class="calendar-year-label"></div>
        </div>
        <div class="calendar-control-buttons">
            <div class="calendar-prev">
            <span><i class="fa-solid fa-chevron-left"></i></span>
          </div>
          <div class="calendar-next">
            <span><i class="fa-solid fa-chevron-right"></i></span>
          </div>
        </div>
        </div>
        <div class="calendar-today-date">Today: 
          ${calendarControl.calWeekDays[calendarControl.localDate.getDay()]}, 
          ${calendarControl.localDate.getDate()}, 
          ${calendarControl.calMonthName[calendarControl.localDate.getMonth()]} 
          ${calendarControl.localDate.getFullYear()}
        </div>
        <div class="calendar-body"></div></div>`;
    },
    plotDayNames: function () {
      for (let i = 0; i < calendarControl.calWeekDays.length; i++) {
        document.querySelector(
          ".calendar .calendar-body"
        ).innerHTML += `<div>${calendarControl.calWeekDays[i]}</div>`;
      }
    },
    plotDates: function () {
      document.querySelector(".calendar .calendar-body").innerHTML = "";
      calendarControl.plotDayNames();
      calendarControl.displayMonth();
      calendarControl.displayYear();
      let count = 1;
      let prevDateCount = 0;

      calendarControl.prevMonthLastDate = calendarControl.getPreviousMonthLastDate();
      let prevMonthDatesArray = [];
      let calendarDays = calendarControl.daysInMonth(
        calendar.getMonth() + 1,
        calendar.getFullYear()
      );
      // dates of current month
      for (let i = 1; i < calendarDays; i++) {
        if (i < calendarControl.firstDayNumber()) {
          prevDateCount += 1;
          document.querySelector(
            ".calendar .calendar-body"
          ).innerHTML += `<div class="prev-dates"></div>`;
          prevMonthDatesArray.push(calendarControl.prevMonthLastDate--);
        } else {
          document.querySelector(
            ".calendar .calendar-body"
          ).innerHTML += `<div class="number-item" data-num=${count}><span class="dateNumber">${count++}</span></div>`;
        }
      }
      //remaining dates after month dates
      for (let j = 0; j < prevDateCount + 1; j++) {
        document.querySelector(
          ".calendar .calendar-body"
        ).innerHTML += `<div class="number-item" data-num=${count}><span class="dateNumber">${count++}</span></div>`;
      }
      calendarControl.highlightToday();
      calendarControl.plotPrevMonthDates(prevMonthDatesArray);
      calendarControl.plotNextMonthDates();
    },
    attachEvents: function () {
      let prevBtn = document.querySelector(".calendar .calendar-prev span");
      let nextBtn = document.querySelector(".calendar .calendar-next span");
      let todayDate = document.querySelector(".calendar .calendar-today-date");
      let dateNumber = document.querySelectorAll(".calendar .dateNumber");
      prevBtn.addEventListener(
        "click",
        calendarControl.navigateToPreviousMonth
      );
      nextBtn.addEventListener("click", calendarControl.navigateToNextMonth);
      todayDate.addEventListener(
        "click",
        calendarControl.navigateToCurrentMonth
      );
      for (var i = 0; i < dateNumber.length; i++) {
          dateNumber[i].addEventListener(
            "click",
            calendarControl.selectDate,
            false
          );
      }
    },
    highlightToday: function () {
      let currentMonth = calendarControl.localDate.getMonth() + 1;
      let changedMonth = calendar.getMonth() + 1;
      let currentYear = calendarControl.localDate.getFullYear();
      let changedYear = calendar.getFullYear();
      if (
        currentYear === changedYear &&
        currentMonth === changedMonth &&
        document.querySelectorAll(".number-item")
      ) {
        document
          .querySelectorAll(".number-item")
          [calendar.getDate() - 1].classList.add("calendar-today");
      }
    },
    plotPrevMonthDates: function(dates){
      dates.reverse();
      for(let i=0;i<dates.length;i++) {
        //  To Show Previous Dates:
          // if(document.querySelectorAll(".prev-dates")) {
          //     document.querySelectorAll(".prev-dates")[i].textContent = dates[i];
          // }
      }
    },
    plotNextMonthDates: function(){
     let childElemCount = document.querySelector('.calendar-body').childElementCount;
     //7 lines
     if(childElemCount > 42 ) {
         let diff = 49 - childElemCount;
         calendarControl.loopThroughNextDays(diff);
     }

     //6 lines
     if(childElemCount > 35 && childElemCount <= 42 ) {
      let diff = 42 - childElemCount;
      calendarControl.loopThroughNextDays(42 - childElemCount);
     }

    },
    loopThroughNextDays: function(count) {
      if(count > 0) {
          for(let i=1;i<=count;i++) {
            //  To Show Next Dates:
            // document.querySelector('.calendar-body').innerHTML += `<div class="next-dates">${i}</div>`;
          }
      }
    },
    attachEventsOnNextPrev: function () {
      calendarControl.plotDates();
      calendarControl.attachEvents();
    },
    init: function () {
      calendarControl.plotSelectors();
      calendarControl.plotDates();
      calendarControl.attachEvents();
    }
  };
  calendarControl.init();
}

if ( document.querySelector(".calendar") ) {
    const calendarControl = new CalendarControl();
}




//  Select A Date
const Selectdates = document.querySelectorAll(".number-item span");
Array.from(Selectdates).forEach(date => {
  date.addEventListener("click", () => {
    date.classList.toggle("active");
    // console.log(date.classList);
  })


})